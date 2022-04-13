<template>
	<Dialog title="个人信息登记" :pop='popStyle' @modalHide='_hideDialog()' :showFooterButton='false' :height='750'>
		<view slot='body' class='modal-body'>
			<form @submit="formSubmit" @reset="formReset">
				<view class='form-item'>
					<view class='form-item-title'>
						<text class='text'>*</text>
						姓名
					</view>
					<input class='input' name='sName' :value='personInfo.sName'  placeholder='请输入姓名' />
				</view>
				<view class='form-item'>
					<view class='form-item-title'>
						<text class='text'>*</text>
						身份证号码
					</view>
					<input class='input' type='idcard' name='sIdentity' :value='personInfo.sIdentity' placeholder='请输入身份证号码' />
				</view>
				<view class='form-item'>
					<view class='form-item-title'>
						<text class='text'>*</text>
						手机号码
					</view>
					<input class='input' type='number' name='sMobile' :value='personInfo.sMobile' placeholder='请输入手机号码' />
				</view>
				<view class='form-item'>
					<view class='form-item-title'>
						<!-- <text class='text'>*</text> -->
						邮政编码
					</view>
					<input class='input' type='number' name='sPostCode' :value='personInfo.sPostCode' placeholder='请输入邮政编码' />
				</view>
				<view class='form-item'>
					<view class='form-item-title'>
						<text class='text'>*</text>
						所在城市
					</view>
					<picker name='area' mode='multiSelector' @columnchange='bindAreaPickerColumnChange' :value='areaIndex' :range='areaArray' range-key='name'>
						<view class='picker'>
							<view class='picker-area'>
								{{areaArray[0][areaIndex[0]].name}}
							</view>
							<view class='picker-area'>
								{{areaArray[1][areaIndex[1]].name}}
							</view>
						</view>
					</picker>
				</view>
				<view class='form-item'>
					<view class='form-item-title'>
						<text class='text'>*</text>
						详细地址
					</view>
					<textarea class='input input-address' type='text' name='sAddress' :value='personInfo.sAddress' placeholder='请输入地址' style='width:320rpx; height: 100rpx;'/>
				</view>
				<view class='btn-area'>
					<button type='primary' form-type='submit' class='btn'>提 交</button>
				</view>
			</form>
		</view>
	</Dialog>
</template>

<script>
	import milo from '../../milo.js'
	import Dialog from '../dialog/dialog.vue'
	var getByteLength = require('./utils.js').getByteLength
	var _validateForm = require('./utils.js')._validateForm
	var originProvinceData = require('./provincecityselector.js').provinceData
	export default {
		name:"personinfo",
		props: {
			popStyle: {
				type: String,
				default: 'dialog'
			},
			activityId: {
				type: String,
				default: ''
			},
			personInfoFlowid: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				personInfo: {},
				areaData: [], // 格式化好的省市数据,
				areaIndexMap: null, //省市索引
				areaArray: [], //picker 当前显示的省市数据
				areaIndex: [0, 0]
			};
		},
		methods:{
			formSubmit (e) {
				let self = this
				let personInfo = e.detail.value
				personInfo.sProvince = self.areaData[0][personInfo.area[0]].code
				personInfo.sCity = self.areaData[1][personInfo.area[0]][personInfo.area[1]].code
				delete personInfo.area
				
				let valid = _validateForm(personInfo)
				if(!valid)
					return
					
				let amsCfg = {
					activityId: self.activityId,
					flowId: self.personInfoFlowid,
					sData: personInfo
				}
				
				milo.emit(amsCfg).then((res) => {
					if( res.iRet == '0' ){
						self.$emit('bindClose',null)
						uni.showToast({ title: '添加成功', icon: 'none' })
					}
					
				}).catch((e) => {
					console.log(e)
				})
			},
			bindAreaPickerColumnChange (e) {
				let { column, value} = e.detail
				
				switch(column) {
					case 0:
						this.areaArray[1] = this.areaData[1][value]
						this.areaIndex = [value, 0]
						break
						
					case 1:
						this.$set(this.areaIndex,1,value)
						break
						
				}
			},
			formatAreaData (originProvinceData) {
				let province = []
				let city = []
				let provinceIndexMap = new Map()
				let cityIndexMap = new Map()
				
				originProvinceData.forEach((item, index) => {
					province.push({ name: item.t, code: item.v })
					provinceIndexMap.set(item.v, index)
					
					let tempCity = item.opt_data_array.map((subItem, subIndex) => {
						cityIndexMap.set(subItem.v, subIndex) // subIndex是该省份下
						return { name: subItem.t, code: subItem.v }
					})
					
					city.push(tempCity)
				})
				return {
					areaData: [province, city],
					areaIndexMap: { provinceIndexMap, cityIndexMap }
				}
			},
			_hideDialog () {
				this.$emit('bindClose',null)
			},
			getLastInfo () {
				let amsCfg = {
					activityId: this.activityId,
					flowId: this.personInfoFlowid,
					sData: {
						iShow: 1
					}
				}
				
				milo.emit(amsCfg).then((res) => {
					this.personInfo = res.jData
					let provinceIndex = this.areaIndexMap.provinceIndexMap.get(this.personInfo.sProvince)
					let cityIndex = this.areaIndexMap.cityIndexMap.get(this.personInfo.sCity)
					this.areaArray[1] = this.areaData[1][provinceIndex]
					this.areaIndex = [provinceIndex, cityIndex]
				}).catch((e) => {
					console.log(e)
				})
			}
		},
		components:{
			'Dialog': Dialog
		},
		mounted () {
			if(originProvinceData){
				let { areaData, areaIndexMap } = this.formatAreaData(originProvinceData)
				this.areaData = areaData
				this.areaIndexMap = areaIndexMap
				this.areaArray = [areaData[0], areaData[1][0]]
			}
			
			this.getLastInfo()
		}
	}
</script>

<style>
.form-item{
	display: flex;
	margin-bottom: 20rpx;
	margin-left: 30rpx;
}
.form-item-title {
  width: 160rpx;
  display: flex;
  justify-content: flex-end;
  margin-right: 20rpx;
}
.form-item-title .text {
  color: red;
}
.form-item .input {
  border: 1px solid #000000;
  border-radius: 10rpx;
  padding-left: 5px;
  width: 320rpx;
  background-color: #FFFFFF;
}
.form-item .input-address{
	padding-top: 7rpx;
}
.btn-area .btn{
	background-color: #E9C46A;
	color: #000000;
	font-weight: bold;
	width: 270rpx;
	margin: 35rpx auto;
}
.picker{
	display: flex;
}
/* 右侧黄色 */
.picker-area:before{
  content: " ";
  width: 42rpx;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  background: #d5bb85;
  z-index: 0;
  border-top-right-radius:8rpx;
  border-bottom-right-radius:8rpx;	
}
/* 箭头*/
.picker-area:after{
	content: ' ';
	position: absolute;
	top: 22rpx;
	right: 12rpx;
	border: 10rpx solid transparent;
	border-top-color: #fff;
	pointer-events: none;
	z-index: 0;
}
.picker-area{
	/* flex-shrink: 0; */
	/* width: 50rpx; */
	position: relative;
	width: 150rpx;
	height: 50rpx;
	line-height: 50rpx;
	padding-left: 10rpx;
	margin-right: 10rpx;
	border: 1px solid #000000;
	border-radius: 10rpx;
}
</style>
