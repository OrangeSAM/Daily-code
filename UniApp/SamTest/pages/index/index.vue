<template>
	<view class="card-wrapper">
		<view class="card-title">
			{{lunarData.animal}}年 {{lunarData.monthCn}} {{lunarData.dayCn}}
			{{lunarData.gzYear}}年 {{lunarData.gzMonth}}月 {{lunarData.gzDay}}日
		</view>
		<view class="card-date">
			<view class="date-month" v-if="formatedDate.month">{{monthMap[formatedDate.month].cn}} {{monthMap[formatedDate.month].en}} </view>
			<view class="date-detail">{{formatedDate.day}}</view>
		</view>
		<view class="card-content">
			<view class="content-detail">
				我最近越来越觉得，金融市场里的成功，全都是运气和意外，做错和失败是必然，差别在乎如何止损。
			</view>
			<view class="content-intro">
				<image src="../../static/qrcode.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<!-- todo -->
<!--
1. 如何分享到微信朋友圈
   观察到目前已有的实现无法直接一键转发朋友圈，都是保存本地手动发布
2. 如何分享给微信好友
   应该有API，不知道要不要登录
3. 如何保存图片到本地 
   直接抄已有的解决方案
4. 字体
	done
5. 通过字数来判断字体大小
-->

<script>
	import solarLunar from 'solarlunar'
	export default {
		data() {
			return {
				formatedDate: {},
				// 转换为农历后的数据
				lunarData: {},
				monthMap: {
					1: {
						cn: '正月',
						en: 'January'
					},
					2: {
						cn: '二月',
						en: 'January'
					},
					3: {
						cn: '三月',
						en: 'January'
					},
					4: {
						cn: '四月',
						en: 'January'
					},
					5: {
						cn: '五月',
						en: 'January'
					},
					6: {
						cn: '六月',
						en: 'January'
					},
					7: {
						cn: '七月',
						en: 'January'
					},
					8: {
						cn: '八月',
						en: 'January'
					},
					9: {
						cn: '九月',
						en: 'January'
					},
					10: {
						cn: '十月',
						en: 'January'
					},
					11: {
						cn: '冬月',
						en: 'January'
					},
					12: {
						cn: '腊月',
						en: 'January'
					},
				}
			}
		},
		computed: {

		},
		methods: {
			// 今天的日期：年月日
			todayDate() {
				const date = new Date()
				this.formatedDate.year = date.getFullYear()
				this.formatedDate.month = date.getMonth() + 1
				this.formatedDate.day = date.getDate()
			},
		},
		mounted() {
			this.todayDate()
			this.lunarData = solarLunar.solar2lunar(this.formatedDate.year, this.formatedDate.month, this.formatedDate.day)
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
		line-height: 76rpx;
		height: 76rpx;
		text-align: center;
		font-weight: 600;
		font-size: 16px;
		font-family: 'fangsong';
		border-bottom: 1px solid #333333;
	}

	.card-date {
		text-align: center;
	}

	.card-date .date-month {
		margin: 30rpx;
		font-size: 20px;
		font-weight: 800;
	}

	.card-date .date-detail {
		font-size: 300rpx;
	}

	.card-content {
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
		border-right: 1px solid #f1f1f1;
		;
	}
</style>
