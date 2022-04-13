<template>
	<view class='broadcast-container' v-if='broadcastList.length'>
		<swiper class='broadcast-swiper' previous-margin='10rpx' :vertical='vertical' autoplay='true' circular='true' :duration='duration' :interval='interval' display-multiple-items='1'>
			<view class='broadcast-content'>
				<block v-for='item in broadcastList'>
					<swiper-item class='broadcast-swiperItem'>
						<view class='content-item'>
							<text class='text'>{{item.sUin}}</text>
							<text class='text'>获得</text>
							<text class='text'>{{item.sPackageName}}</text>
						</view>
					</swiper-item>
				</block>
			</view>
		</swiper>
	</view>
</template>

<script>
	import milo from '../../milo.js'
	export default {
		name:"broadcast",
		
		props:{
			activityId: {
				type: String,
				default: ''
			},
			broadFlowid: {
				type: String,
				default: ''
			},
			vertical: {
				type: Boolean,
				default: false
			},
			duration: {
				type: Number,
				default: 1000
			},
			interval: {
				type: Number,
				default: 3000
			}
		},
		
		data() {
			return {
				broadcastList: [] // 轮播数据
			};
		},
		
		mounted() {
			this.queryBroadcastList()
		},
		
		methods:{
			/**
			 * 获奖记录的轮播数据
			 */
			queryBroadcastList () {
				let amsCfg = {
					activityId: this.activityId,
					flowId: this.broadFlowid
				}
				
				milo.emit(amsCfg).then((res) => {
					this.broadcastList = res
					console.log(this.broadcastList)
				}).catch((e) => {
					console.log('查询轮播数据失败',e)
				})
			}
		}
	}
</script>

<style>
.broadcast-container{
  width: 680rpx;
  height: 300rpx;
  border: 1rpx solid #99a9bf;
  border-radius: 20rpx;
  background-color: #99a9bf;
}
.broadcast-swiper {
  width: 100%;
  margin: 20rpx auto;
  height: 245rpx;
}
.broadcast-content {
  padding: 0 20rpx;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.content-item {
  height: 40rpx;
  line-height: 40rpx;
  width: 95%;
}
.content-item .text {
  font-size: 28rpx;
  margin-left: 10rpx;
  color: #FFFFFF;
}
.broadcast-swiperItem{
  display: flex;
  align-items: center;
}
</style>
