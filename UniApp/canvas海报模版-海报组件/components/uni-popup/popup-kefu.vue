<template>
	<view class="popup-kefu">
		<view class="popup-kefu-title">
			<text class="popup-kefu-title-text font-34 color-assist-1">联系客服</text>
		</view>
		<view class="popup-kefu-content">
			<text class="popup-kefu-content-text font-28 color-assist-2">您可以随时联系我们的客服人员，为您优先解决问题。
客服微信：{{kefuWechat}}
客服电话：{{kefuPhone}}
工作时间：{{workTime}}
			</text>
		</view>
		<view class="popup-kefu-button-group">
			<view class="popup-kefu-button" @click="makePhoneCall">
				<text class="popup-kefu-button-text font-34 color-assist-2">拨打电话</text>
			</view>
			<view class="popup-kefu-button uni-border-left" @click="copyWechat">
				<text class="popup-kefu-button-text font-34 copy-wechat">复制微信号</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "popup-kefu",
		props: {
			kefuWechat: {
				type: String,
				defult: ''
			},
			kefuPhone: {
				type: Number,
				defult: ''
			},
			workTime: {
				type: String,
				defult: ''
			}
		},
		methods: {
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: this.kefuPhone,
					success: (res) => {
						console.log(res)
					},
					complete: (res) => {
						console.log(res)
					}
				})
			},
			copyWechat() {
				uni.setClipboardData({
					data: this.kefuWechat,
					success: (res) => {
						this.$emit('closePopup')
					},
					complete: (res) => {
						// console.log(res)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
@import url("/common/common.css");
.popup-kefu {
	width: 606rpx;
	border-radius: 6px;
	background-color: #fff;
	&-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding-top: 52rpx;
		padding-bottom: 24rpx;
		&-text {
			font-weight: bold;
		}
	}
	&-content {
		justify-content: flex-start;
		align-items: center;
		padding: 5px 15px 15px 15px;
		&-text {
			justify-content: flex-start;
			align-items: center;
		}
	}
	&-button-group {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		border-top-color: #f5f5f5;
		border-top-style: solid;
		border-top-width: 1px;
	}
	&-button {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 45px;
	}
}
.copy-wechat{
	color: #F8AF24;
}
.uni-border-left {
	border-left-color: #f0f0f0;
	border-left-style: solid;
	border-left-width: 1px;
}
</style>
