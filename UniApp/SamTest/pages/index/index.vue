<template>
	<view class="card-wrapper">
		<view class="card-title">九月初五 庚子年 鼠年 丙戌月 丁酉日</view>
		<view class="card-date">
			<view class="date-month">十月 OCTOBER</view>
			<view class="date-detail">21</view>
		</view>
		<view class="card-content">
			<view class="content-detail">
				我最近越来越觉得，金融市场里的成功，全都是运气和意外，做错和失败是必然，差别在乎如何止损。
			</view>
			<view class="content-intro">
				<image src="../../static/qrcode.png" mode=""></image>
				<!-- <view class="tips">明式金句</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'heihei'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.card-wrapper {
		margin: 20px;
		border: 2px solid #333333;
		border-radius: 2rpx;
		font-family: 'Times New Roman', Times, serif;
	}
	.card-title {
		line-height: 80rpx;
		height: 80rpx;
		text-align: center;
		font-weight: 600;
		border-bottom: 1px solid #333333;
	}
	.card-date {
		text-align: center;
	} 
	.card-date .date-month {
		margin: 30rpx;
		font-weight: 800;
	}
	.card-date .date-detail {
		font-size: 300rpx;
	}
	.card-content{
		border-top: 1rpx solid #333333;
		padding: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.card-content .content-intro image {
		width: 100rpx;
		height: 100rpx;
	}
	.card-content .content-intro .tips {
		font-size: 12px;
		color: #C0C0C0;
		text-align: center;
	}
	.card-content .content-detail {
		margin-right: 30rpx;
		font-size: 30rpx;
		color: #dd524d;
		font-weight: 800;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
</style>
