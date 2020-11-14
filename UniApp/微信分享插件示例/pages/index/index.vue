<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		
		 <view @click="weixinShareNative">点击调用微信分享</view>
		
	</view>
</template>

<script>
	const weixinShare = uni.requireNativePlugin('AThree-weixinShare');
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			weixinShareNative() {
			   this.shareObj = {
				appid: '',
				apppackage: '',
				url: 'http://www.baidu.com',
				title:'自定义标题',
				flag:'2',
				content:'自定义摘要',
				icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3267643733,1769010289&fm=26&gp=0.jpg',
			   };
			   let jsonShareObj = JSON.stringify(this.shareObj);
			   console.log(jsonShareObj);
			   // console.log(JSON.stringify(weixinShare))
			   weixinShare.shareAppURL(jsonShareObj,this.shareCallback);
			  },
			  shareCallback() {
			   uni.showToast({
				title: 'success'
			   });
			  },
  
  
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
