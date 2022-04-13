<template>
	<Dialog :pop='popStyle' title='获奖记录' @modalHide='_hideDialog()' :showFooterButton='false' :width='680' :height='750'>
		<view class='modal-body' slot='body'>
			<view class='record-title'>
				<text class='text'>获奖时间</text>
				<text class='text'>所获礼包</text>
				<text class='text'>获奖大区</text>
				<text class='text'>所获礼包</text>
			</view>
			<view class='gift-content'>
				<view v-if='giftListInfo.iRet != 0'>{{giftListInfo.sMsg}}</view>
				<view v-else>
					<view v-for='item in giftListInfo.myGiftList' class='gift-content-item' :key='index'>
						<view class='text'>{{item.dtGetPackageTime}}</view>
						<view class='text'>{{item.sPackageName}}</view>
						<view class='text'>{{item.sAreaName}}</view>
						<view class='text'>{{item.iPackageNum}}</view>
					</view>
					<view v-if='giftListInfo.myGiftList.length === 0' class='gift-content-tips'>亲，您还没有奖品！继续加油</view>
				</view>
			</view>
		</view>
		<view class='modal-footer' slot='footer'>
			<view class='gift-page'>
				<view class='page-nav' @tap='pageChange(-1)' hover-class='clickNav'> {{'<'}} </view>
				<view v-for='(item, index) in pageShow' :class="['page-info', {active: item == number }]" @tap='selectPage(item, index)' :key='index' >{{item}}</view>
				<view class='page-nav' @tap='pageChange(1)' hover-class='clickNav'> {{'>'}} </view>
			</view>
		</view>
	</Dialog>
</template>

<script>
	import milo from '../../milo'
	import Dialog from '../dialog/dialog.vue'
	export default {
		name:"lotteryrecord",
		
		components:{
			"Dialog": Dialog
		},
		
		props: {
			show: {
				type: Boolean,
				default: false
			},
			popStyle: {
				type: String,
				default: 'dialog'
			},
			activityId: {
				type: String,
				default: ''
			},
			lotteryFlowid: {
				type: String,
				default: ''
			},
			pageSize: {
				type: Number,
				default: 10
			}
		},
		
		data() {
			return {
				number: 1,
				giftListInfo : {},
				pageTotal: 0,
				pageShow: [],
				pageList: []
			}
		},
		
		methods: {
			/**
			 * 查询分页数据
			 * @param {Object} pagenow
			 */
			queryLotteryRecord (pagenow) {
				let amsCfg = {
					activityId: this.activityId,
					flowId: this.lotteryFlowid,
					sData: {
						iPageNow: pagenow,
						iPageSize: this.pageSize
					}
				}
				
				milo.emit(amsCfg).then((res) => {
					this.giftListInfo = res;
					this.pageTotal = res.pageTotal;
					this.pageInfo();
					this.getPageShow(parseInt(res.pageNow), this.pageList);
				}).catch((e) => {
					console.log(e);
				})
			},
			/**
			 * 左右移动分页
			 * @param {Object} num
			 */			
			pageChange (num) {
				if (this.pageShow[0] == 0) {
					return
				}
				
				if (this.number == 1 && ( num == -1 || num == -2 )) {
					return
				}
				
				if (this.number == this.pageTotal && ( num == 1 || num == 2 )) {
					return
				}
				
				this.number += num;
				this.queryLotteryRecord(this.number);
			},
			/**
			 * 处理分页数据
			 * @param {Object} item
			 * @param {Object} pageList
			 */
			getPageShow (item, pageList) {
				let self = this;
				let PageTotal = this.pageTotal;
				self.pageShow = [];
				
				if (PageTotal <= 6) {
					self.pageShow = pageList;
					
				} else if ( item >= 1 && item <= 4) {
					let page = [1 ,2, 3, 4, 5, '···', PageTotal];
					page.forEach( (item, index) => {
						self.$set(self.pageShow, index, item);
					})
					
				} else if ( item <= PageTotal && item >= PageTotal - 3 ) {
					let page = [1, '···', PageTotal-4, PageTotal-3, PageTotal-2, PageTotal-1, PageTotal]
					page.forEach( (item, index) => {
						self.$set(self.pageShow, index, item);
					})
					
				} else {
					let page = [1, '···', item-2, item-1, item, item+1, item+2, '···', PageTotal]
					page.forEach( (item, index) => {
						self.$set(self.pageShow, index, item);
					}) 
					
				}
			},
			/**
			 * 选择页面
			 * @param {Object} pagenow
			 * @param {Object} index
			 */
			selectPage (pagenow, index) {
				if ( pagenow === '···' && index > 4 && this.number > 3) {
					this.pageChange (2);
					return
					
				} else if ( pagenow === '···' && index > 4 && this.number <= 3){
					this.number = 7;
					this.queryLotteryRecord(7);
					return
					
				} else if ( pagenow === '···' && index < 4 && this.number < this.pageTotal - 2) {
					this.pageChange(-2);
					return
					
				} else if ( pagenow === '···' && index < 4 && this.number >= this.pageTotal - 2 ) {
					this.number = this.pageTotal - 6;
					this.queryLotteryRecord(this.number);
					return
					
				}
				
				this.number = parseInt(pagenow);
				this.queryLotteryRecord(pagenow);
			},
			/**
			 * 获取分页数据
			 */
			pageInfo () {
				this.pageList = [];
				if (this.pageTotal == 0) {
					this.pageList.push(0);
					return
				}
				
				for ( let i = 1; i <= this.pageTotal; i++) {
					this.pageList.push(i);
				}
			},
			
			cancelDialog () {
				this.$emit('bindClose',null);
			},
			
			_hideDialog () {
				this.$emit('bindClose',null);
			}
		},
		
		mounted () {
			this.queryLotteryRecord(1);
		}
	}
</script>

<style>
.modal-body .record-title {
  display: flex;
  justify-content: space-around;
  line-height: 25rpx;
  height: 29rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx dashed #000000;
}
.modal-body .record-title .text {
  font-weight: bold;
  line-height: 40rpx;
  font-size: 30rpx;
  margin-right: 5rpx;
  color: #000000;
}
.modal-body .gift-content {
  margin: 8rpx 0 10rpx 0;
  padding: 0;
}
.modal-body .gift-content-item {
  display: flex;
  /* justify-content: space-around; */
  line-height: 25rpx;
  margin-top: 8rpx;
  margin-left: 10rpx;
  height: 60rpx;
  /* font-weight: bold; */
  border-bottom: 1rpx dashed #000000;
}
.modal-footer{
	position: relative;
	
}
.gift-content-item .text {
  margin-right: 10rpx;
  text-align: center;
  width: 200rpx;
  word-wrap:break-word;
}
.gift-content-tips{
  text-align: center;
  color: #B22222
}
.active{
  background-color: #E9C46A;
}
.gift-page{
  display: flex;
  width: 600rpx;
  justify-content: center;
}
.gift-page .page-info {
  border:1px solid #000000;
  display: flex;
  justify-content: center;
  width: 40rpx;
  height: 40rpx;
  margin: 5rpx;
  border-radius: 10rpx;
  flex-shrink: 0;
}
.gift-page .page-nav {
  border:1px solid #000000;
  display: flex;
  justify-content: center;
  width: 40rpx;
  height: 40rpx;
  margin: 5rpx;
  border-radius: 10rpx;
  flex-shrink: 0;
}
.clickNav{
	background-color: #DCDCDC;
}
</style>
