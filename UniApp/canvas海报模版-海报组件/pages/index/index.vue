<template>
	<view class="content">
		<view>
			绘制图片
		</view>
		<lyz-canvas  :board="canvasPicture"></lyz-canvas>
		<view>
			绘制矩形
		</view>
		<lyz-canvas  :board="canvasRectangle"></lyz-canvas>
		<view>
			绘制文字
		</view>
		<lyz-canvas  :board="canvasText"></lyz-canvas>
		<view>
			绘制海报模版图片
		</view>
		<lyz-canvas  :board="canvasImage"></lyz-canvas>
	</view>
</template>

<script>
	import lyzCanvas from "@/components/lyz-canvas/lyz-canvas.vue"
	export default {
		data() {
			return {
				painting: null,
				pictureUrl: '',
				textUrl: '',
				rectangleUrl: '',
				canvasImage: {
					"width": "720rpx",
					"height": "1280rpx",
					"background": "#f8f8f8",
					"views": [{
							"type": "image",
							"url": "http://img1.maka.im/user/8982892/images/1c20d674cd6762877bc150a4850cc381.png",
							"css": {
								"width": "720rpx",
								"height": "1280rpx",
								"top": "0rpx",
								"left": "0rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"mode": "scaleToFill"
							}
						},
						{
							"type": "text",
							"text": "努力做一个善良的人，做一个心态阳光的人，做一个积极向上的人，用正能量激发自己",
							"css": {
								"color": "#000000",
								"background": "",
								"width": "475rpx",
								"height": "75.02rpx",
								"top": "604rpx",
								"left": "119rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "20rpx",
								"fontWeight": "normal",
								"maxLines": "2",
								"lineHeight": "37.74rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "center"
							}
						},
						{
							"type": "text",
							"text": "微笑开始新的一天",
							"css": {
								"color": "#000000",
								"background": "",
								"width": "600rpx",
								"height": "58.68rpx",
								"top": "698rpx",
								"left": "60rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "36rpx",
								"fontWeight": "normal",
								"maxLines": "2",
								"lineHeight": "59.94rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "center"
							}
						},
						{
							"type": "text",
							"text": "早安，打工人！",
							"css": {
								"color": "#000000",
								"background": "",
								"width": "720rpx",
								"height": "56.49999999999999rpx",
								"top": "344rpx",
								"left": "0rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "50rpx",
								"fontWeight": "normal",
								"maxLines": "1",
								"lineHeight": "55.50000000000001rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "center"
							}
						}
					]
				},
				canvasPicture: {
					"width": "750rpx",
					"height": "200rpx",
					"background": "#f8f8f8",
					"views": [{
							"type": "image",
							"url": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/08/ChMkJlauzXWIDrXBAAdCg2xP7oYAAH9FQOpVAIAB0Kb342.jpg",
							"css": {
								"width": "100rpx",
								"height": "100rpx",
								"top": "0rpx",
								"left": "0rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"mode": "scaleToFill"
							}
						},
						{
							"type": "image",
							"url": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/08/ChMkJlauzXWIDrXBAAdCg2xP7oYAAH9FQOpVAIAB0Kb342.jpg",
							"css": {
								"width": "100rpx",
								"height": "100rpx",
								"top": "20.710678118654755rpx",
								"left": "130rpx",
								"rotate": "45",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"mode": "scaleToFill"
							}
						},
						{
							"type": "image",
							"url": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/08/ChMkJlauzXWIDrXBAAdCg2xP7oYAAH9FQOpVAIAB0Kb342.jpg",
							"css": {
								"width": "100rpx",
								"height": "100rpx",
								"top": "0rpx",
								"left": "262rpx",
								"rotate": "0",
								"radius": "50%",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"mode": "scaleToFill"
							}
						},
						{
							"type": "image",
							"url": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/08/ChMkJlauzXWIDrXBAAdCg2xP7oYAAH9FQOpVAIAB0Kb342.jpg",
							"css": {
								"width": "100rpx",
								"height": "100rpx",
								"top": "10rpx",
								"left": "384rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "10rpx",
								"borderColor": "#FF62c5",
								"shadow": "",
								"mode": "scaleToFill"
							}
						},
						{
							"type": "image",
							"url": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/08/ChMkJlauzXWIDrXBAAdCg2xP7oYAAH9FQOpVAIAB0Kb342.jpg",
							"css": {
								"width": "157rpx",
								"height": "157rpx",
								"top": "5rpx",
								"left": "536rpx",
								"rotate": "0",
								"radius": "50%",
								"shadow": "",
								"mode": "scaleToFill"
							}
						}
					]
				},
				canvasRectangle: {
					"width": "750rpx",
					"height": "200rpx",
					"background": "#f8f8f8",
					"views": [{
							"type": "view",
							"css": {
								"background": "#f8d4d4",
								"width": "100rpx",
								"height": "100rpx",
								"top": "44rpx",
								"left": "25rpx",
								"rotate": "0",
								"radius": "",
								"shadow": "",
								"color": "#f8d4d4"
							}
						},
						{
							"type": "view",
							"css": {
								"background": "#ff62c5",
								"width": "100rpx",
								"height": "100rpx",
								"top": "46rpx",
								"left": "287rpx",
								"rotate": "0",
								"radius": "",
								"shadow": "",
								"color": "#ff62c5"
							}
						},
						{
							"type": "view",
							"css": {
								"background": "#888888",
								"width": "100rpx",
								"height": "100rpx",
								"top": "47rpx",
								"left": "419rpx",
								"rotate": "0",
								"radius": "20%",
								"shadow": "",
								"color": "#888888"
							}
						},
						{
							"type": "view",
							"css": {
								"background": "#888888",
								"width": "100rpx",
								"height": "100rpx",
								"top": "51rpx",
								"left": "582rpx",
								"rotate": "45",
								"radius": "20%",
								"shadow": "",
								"color": "#888888"
							}
						},
						{
							"type": "view",
							"css": {
								"background": "#000000",
								"width": "100rpx",
								"height": "100rpx",
								"top": "43rpx",
								"left": "158rpx",
								"rotate": "0",
								"radius": "50%",
								"shadow": "",
								"color": "#000000"
							}
						}
					]
				},
				canvasText: {
					"width": "750rpx",
					"height": "200rpx",
					"background": "#f8f8f8",
					"views": [{
							"type": "text",
							"text": "别跟我谈感情，谈感情伤钱。",
							"css": {
								"color": "#000000",
								"background": "rgba(0,0,0,0)",
								"width": "200rpx",
								"height": "25.740000000000002rpx",
								"top": "12rpx",
								"left": "0rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "18rpx",
								"fontWeight": "normal",
								"maxLines": "1",
								"lineHeight": "25.974000000000004rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "left"
							}
						},
						{
							"type": "text",
							"text": "别跟我谈感情，谈感情伤钱。",
							"css": {
								"color": "#000000",
								"background": "rgba(0,0,0,0)",
								"width": "250rpx",
								"height": "25.740000000000002rpx",
								"top": "52rpx",
								"left": "0rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "18rpx",
								"fontWeight": "normal",
								"maxLines": "2",
								"lineHeight": "25.974000000000004rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "left"
							}
						},
						{
							"type": "text",
							"text": "别跟我谈感情，谈感情伤钱。",
							"css": {
								"color": "#000000",
								"background": "rgba(0,0,0,0)",
								"width": "133.00000000000003rpx",
								"height": "72.475rpx",
								"top": "89rpx",
								"left": "0rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "25rpx",
								"fontWeight": "normal",
								"maxLines": "2",
								"lineHeight": "36.07500000000001rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "left"
							}
						},
						{
							"type": "text",
							"text": "我居中了",
							"css": {
								"color": "#000000",
								"background": "rgba(255,144,0,3)",
								"width": "250rpx",
								"height": "20.339999999999996rpx",
								"top": "26.000000000000004rpx",
								"left": "236rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "18rpx",
								"fontWeight": "normal",
								"maxLines": "2",
								"lineHeight": "19.98rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "center"
							}
						},
						{
							"type": "text",
							"text": "我靠左",
							"css": {
								"color": "rgba(0,0,0)",
								"background": "rgba(255,144,0,3)",
								"width": "250rpx",
								"height": "20rpx",
								"top": "84rpx",
								"left": "236rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "18rpx",
								"fontWeight": "normal",
								"maxLines": "1",
								"lineHeight": "19.98rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "left"
							}
						},
						{
							"type": "text",
							"text": "我靠右",
							"css": {
								"color": "rgba(104,14,33)",
								"background": "rgba(255,144,0,3)",
								"width": "250rpx",
								"height": "20.339999999999996rpx",
								"top": "140.00000000000003rpx",
								"left": "237rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "18rpx",
								"fontWeight": "normal",
								"maxLines": "2",
								"lineHeight": "19.98rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "right"
							}
						},
						{
							"type": "text",
							"text": "我不换行超出就隐藏",
							"css": {
								"color": "#000000",
								"background": "rgba(255,144,0,3)",
								"width": "160.99999999999997rpx",
								"height": "20.339999999999996rpx",
								"top": "24.000000000000004rpx",
								"left": "519rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "18rpx",
								"fontWeight": "normal",
								"maxLines": "1",
								"lineHeight": "19.98rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "left"
							}
						},
						{
							"type": "text",
							"text": "我只有3行超出就隐藏我只有3行超出就隐藏我只有3行超出就隐藏我只有3行超出就隐藏",
							"css": {
								"color": "#000000",
								"background": "rgba(255,144,0,3)",
								"width": "220rpx",
								"height": "78.62400000000001rpx",
								"top": "71rpx",
								"left": "500rpx",
								"rotate": "0",
								"radius": "",
								"borderWidth": "",
								"borderColor": "#000000",
								"shadow": "",
								"padding": "0rpx",
								"fontSize": "18rpx",
								"fontWeight": "normal",
								"maxLines": "3",
								"lineHeight": "25.974000000000004rpx",
								"textStyle": "fill",
								"textDecoration": "none",
								"fontFamily": "",
								"textAlign": "left"
							}
						}
					]
				},
			}
		},
		components: {
			lyzCanvas
		},
		onLoad() {},
		methods: {
		}
	}
</script>

<style>
	.content {}
</style>
