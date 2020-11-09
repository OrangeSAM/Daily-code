<template>
	<view class="card-wrapper">
		<view class="card-title">{{lunarData.monthCn}}{{lunarData.dayCn}} {{lunarData.gzYear}}年 {{lunarData.animal}}年 {{lunarData.gzMonth}}月 {{lunarData.gzDay}}日</view>
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
				<view class="tips">秦小明</view>
			</view>
		</view>
	</view>
</template>

<script>
	import solarLunar from 'solarlunar'
	export default {
		data() {
			return {
				formatedDate: {},
				// 转换为农历后的数据
				lunarData: {}
			}
		},
		computed: {
			
		},
		methods: {
			// 今天的日期：年月日
			todayDate () {
				const date = new Date()
				this.formatedDate.year = date.getFullYear()
				this.formatedDate.month = date.getMonth() + 1
				this.formatedDate.day = date.getDate()
			},
		},
		mounted() {
			this.todayDate()
			console.log(this.formatedDate)
			this.lunarData = solarLunar.solar2lunar(this.formatedDate.year, this.formatedDate.month, this.formatedDate.day)
			console.log(this.lunarData)
		},
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
		font-family: cursive;
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
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.card-content .content-intro {
		padding: 15px;
		position: relative;
	}
	.card-content .content-intro image {
		width: 100rpx;
		height: 100rpx;
	}
	.card-content .content-intro .tips {
		font-size: 12px;
		text-align: center;
	}
	.card-content .content-detail {
		padding: 15px;
		font-size: 36rpx;
		color: #dd524d;
		font-weight: 800;
		font-family: 'fangsong';
		border-right: 1px solid #f1f1f1;;
	}
	// 遮罩区样式, 作废
	/* .card-content .cover {
		position: absolute;
		z-index: 2;
		top: 15px;
		width: 50px;
		height: 50px;
		background-color: white;
		opacity: 0.5;
	} */
</style>
