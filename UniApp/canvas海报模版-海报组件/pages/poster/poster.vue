<template>
	<view class="content">
		<lyz-canvas 
		isRenderImage style="margin: 30rpx auto;width: 690rpx;height: 934rpx;" 
		:board="painting" 
		@success="getImg" 
		@fail="fail"></lyz-canvas>
		<button type="primary" style="margin-bottom: 20rpx;" @tap="postPainting(1)">动态修改模版数据</button>
		<button type="primary" style="margin-bottom: 20rpx;" @tap="pushPainting">通过push动态添加模版数据</button>
		<button type="primary" style="margin-bottom: 20rpx;" @tap="postPainting(0)">恢复默认数据</button>
		<button type="primary" style="margin-bottom: 20rpx;" @tap="shareNow">立即分享</button>
		<uni-popup ref="popup" type="center">
			<view class="popup-content">
				<image style="width: 552rpx;height: 747rpx;" :src="posterUrl" mode=""></image>
				<button class="popup-content-btn" size="mini" type="warn" @tap="shareWx">分享到微信</button>
				<button class="popup-content-btn" size="mini" type="warn" @tap="download">已保存到相册</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import lyzCanvas from "@/components/lyz-canvas/lyz-canvas.vue"
	import {
		LastMayday
	} from "@/components/json/palette.js"
	export default {
		data() {
			return {
				painting: null,
				posterUrl: ''
			}
		},
		components: {
			lyzCanvas,
			uniPopup
		},
		onLoad() {
			uni.showLoading()
			this.painting = new LastMayday()
			console.log(this.painting)
		},
		methods: {
			// 已保存到相册
			download() {
				let _this = this
				uni.saveImageToPhotosAlbum({
					filePath: _this.posterUrl,
					success(res) {
						_this.$refs.popup.close()
						uni.showToast({
							title: '已保存到相册',
							icon: 'success',
							duration: 2000
						});
					}
				});
			},
			// 分享到微信
			shareWx() {
				let _this = this
				uni.share({
				    provider: "weixin",
				    scene: "WXSceneSession",
				    type: 2,
					 imageUrl: _this.posterUrl,
				    success: function (res) {
						_this.$refs.popup.close()
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
			},
			// 立即分享
			shareNow() {
				this.$refs.popup.open()
			},
			getImg(e) {
				uni.hideLoading()
				console.log(e)
				this.posterUrl = e
			},
			fail(e) {
				uni.hideLoading()
				console.log('绘制失败----' + JSON.stringify(e))
			},
			postPainting(val) {
			uni.showLoading()
				if (val) {
					let obj = {
						name: '早安，打工人！',
						userImg: 'https://img.jggjmm.com/uploads/files/20200907/914a82f3-7643-4d86-9215-b98112986c6c.png',
						text: '扶我起来，我还能行！',
					}
					this.painting = new LastMayday(obj)
				} else {
					this.painting = new LastMayday()
				}
			},
			pushPainting() {
				uni.showLoading()
				let obj = new LastMayday()
				let objImg = {
					"type": "image",
					"url": "https://img.jggjmm.com/uploads/files/20200923/3aaefe24-31a7-466c-9ad0-dfd11b2463cb.png",
					"css": {
						"width": "136rpx",
						"height": "136rpx",
						"top": "30rpx",
						"left": "20rpx",
						"rotate": "0",
						"radius": "50%",
						"borderWidth": "",
						"borderColor": "#000000",
						"shadow": "",
						"mode": "scaleToFill"
					}
				}
				obj.views.push(objImg)
				this.painting = obj
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFCCFF;
	}

	.content {}
	.popup-content {
		text-align: center;
	}
	.popup-content-btn {
		margin: 0 20rpx;
	}
</style>
