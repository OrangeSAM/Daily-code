<template>
	<view><canvas :canvas-id="id" :style="'width:' + boardWidth + '; height:' + boardHeight + ';' + customStyle"></canvas></view>
</template>

<script>
/** 从 0x20 开始到 0x80 的字符宽度数据 */
const CHAR_WIDTH_SCALE_MAP = [0.296, 0.313, 0.436, 0.638, 0.586, 0.89, 0.87, 0.256, 0.334, 0.334, 0.455, 0.742, 0.241, 0.433, 0.241, 0.427, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.586, 0.241, 0.241, 0.742, 0.742, 0.742, 0.483, 1.031, 0.704, 0.627, 0.669, 0.762, 0.55, 0.531, 0.744, 0.773, 0.294, 0.396, 0.635, 0.513, 0.977, 0.813, 0.815, 0.612, 0.815, 0.653, 0.577, 0.573, 0.747, 0.676, 1.018, 0.645, 0.604, 0.62, 0.334, 0.416, 0.334, 0.742, 0.448, 0.295, 0.553, 0.639, 0.501, 0.64, 0.567, 0.347, 0.64, 0.616, 0.266, 0.267, 0.544, 0.266, 0.937, 0.616, 0.636, 0.639, 0.64, 0.382, 0.463, 0.373, 0.616, 0.525, 0.79, 0.507, 0.529, 0.492, 0.334, 0.269, 0.334, 0.742, 0.296];

const setStringPrototype = (screen) => {
	/* eslint-disable no-extend-native */
	  /**
	   * 是否支持负数
	   * @param {Boolean} minus 是否支持负数
	   * @param {Number} baseSize 当设置了 % 号时，设置的基准值
	   */
	String.prototype.toPx = function (minus, baseSize) {
		const reg = minus ? (/^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px|%)$/g) : (/^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px|%)$/g)
		const results = reg.exec(this);
		if (!this || !results) {
		    return 0;
		}
		const unit = results[2];
		const value = parseFloat(this);
		let res = 0;
		if (unit === 'rpx') {
		      res = Math.round(value * (screen || 0.5) * 1);
		} else if (unit === 'px') {
		      res = Math.round(value * 1);
		} else if (unit === '%') {
		     res = Math.round(value * baseSize / 100);
		}
		return res;
	}
}
export default {
	props:{
		board: {
			type: Object,
		},
		isAsync: {
			type: Boolean,
			default: true
		},
		pixelRatio: Number,
		customStyle: String,
		isRenderImage: Boolean
	},
	data() {
		return {
			timer: null,
			// #ifdef H5 || APP-PLUS || MP-TOUTIAO
			id: `painter_${Math.random()}`
			// #endif
			// #ifndef H5 || APP-PLUS || MP-TOUTIAO
			id: `painter`
			// #endif
		}
	},
	watch:{
		board: {
			handler: 'drawAll',
			// immediate: true 
			// deep: true
		}
	},
	computed:{
		dpr() {
			return this.pixelRatio || uni.getSystemInfoSync().pixelRatio
		},
		windowWidth() {
			return uni.getSystemInfoSync().windowWidth
		},
		boardWidth() {
			const {width = 200} = this.board || {}
			return width 
		},
		boardHeight() {
			const {height = 200} = this.board || {}
			return height
		}
	},
	created() {
		this.init()
	},
	mounted() {
		if(this.context) {
			this.drawAll()
		}
	},
	methods: {
		async initBoard() {
			const { board } = this
			if(board?.views?.length) {
				let result = await Promise.all(board.views.map(async (item) => {
					if(item.type === 'image') {
						const {height, width, path} = await this.getImageInfo(item.url)
						return Object.assign({}, item, {height, width, url: path})
					}
					return item
				}))
				return result || []
			}
			return []
		},
		init() {
			this.context = uni.createCanvasContext(this.id, this)
			setStringPrototype(this.windowWidth / 750)
		},
		draw(view) {
			this.context.setFillStyle(view.background || 'white')
			this.context.fillRect(view.css.left.toPx(), view.css.top.toPx(), view.css.width.toPx(), view.css.height.toPx())
			this.context.clip()
			this.drawView(this.context, view)
			this.context.draw(true, () => {
				if(this.isRenderImage) {
					setTimeout(() => {
						this.saveImgToLocal();
					}, 100)
				}
			})
		},
		async drawAll() {
			let views = this.isAsync ? await this.initBoard() : this.board.views
			if(!this.context || !views.length) {return}
			const board = this.drawRect(this.context, {type: 'view',  css: {left: `${this.board?.left || 0}`, top: `${this.board?.top || 0}`, width: `${this.boardWidth}`, height: `${this.boardHeight}`, background: this.board?.background}})
			const promises = views.map(item => this.drawView(this.context, item)) || [Promise.resolve()]
			Promise.all([board].concat(promises)).then((res) => {
				this.context.draw(true, () => {
					// 防止字节大量生成
					if(this.isRenderImage) {
						clearTimeout(this.timer)
						this.timer = setTimeout(() => {
							this.saveImgToLocal();
						}, 100)
					}
				})
			})
		},
		saveImgToLocal() {
			uni.canvasToTempFilePath({
				// x: 0,
				// y: 0,
				// width:  this.boardWidth.toPx(),
				// height: this.boardWidth.toPx(),
				canvasId: this.id,
				destWidth: this.toNumber(this.boardWidth) * this.dpr,
				destHeight: this.toNumber(this.boardHeight) *  this.dpr,
				success: async (res) => {
					const photo = await this.getImageInfo(res.tempFilePath)
					if(photo.path) {
						this.$emit('success', photo.path)
					}
				},
				fail: (error) => {
					console.error(`canvasToTempFilePath failed, ${JSON.stringify(error)}`);
					this.$emit('fail', {
					  error: error
					})
				}
			}, this)
		},
		async drawView(context, view) {
			if(view.type == 'view') {
				return this.drawRect(context, view)
			} else if(view.type == 'image') {
				if(this.isAsync) {
					return this.drawRect(context, view)
				} else {
					const {height = 0, width = 0, path: url} = await this.getImageInfo(view.url)
					return this.drawRect(context, Object.assign(view, {height, width, url}))
				}
			} else if(view.type == 'text'){
				return this.drawText(context, view)
			}
		},
		toNumber(value, minus = 0, baseSize = 0) {
			if(typeof value === 'string') {
				return value.toPx(minus, baseSize)
			} else if(typeof value === 'number') {
				return value
			} else {
				return 0
			}
		},
		base64src(base64data) {
			return new Promise((resolve, reject) => {
				const fs = uni.getFileSystemManager()
				//自定义文件名
				const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
				  if (!format) {reject(new Error('ERROR_BASE64SRC_PARSE'))}
				const time = new Date().getTime();
				const filePath = `${wx.env.USER_DATA_PATH}/${time}.${format}`
				const buffer = uni.base64ToArrayBuffer(bodyData)
				fs.writeFile({
				    filePath,
				    data: buffer,
				    encoding: 'binary',
				    success() {
						resolve(filePath)
				    },
				    fail(err) {
						reject()
						this.$emit('fail', {
						  error: err
						})
						console.log('获取base64图片失败', err)
				    }
				})
			})
		},
		//获取图片
		getImageInfo(imgSrc){
			console.log(imgSrc)
			return new Promise(async (resolve, reject) => {
				// #ifndef H5 || APP-PLUS
				if(/^data:image\/(\w+);base64/.test(imgSrc)) {
					imgSrc = await this.base64src(imgSrc)
				}
				// #endif
				uni.getImageInfo({
					src: imgSrc,
					success: (image) => {
						console.log(image)
						// 微信小程序会把相对路径转为不完整的绝对路径，要在前面加'/'
						// const res = await this.downloadImage(image.path)
						image.path =  /^(http|\/\/|\/|wxfile|data:image\/(\w+);base64|file|bdfile)/.test(image.path)  ? image.path :  `/${image.path}`
						resolve(image)
						// console.log('获取图片成功',image)
					},
					fail: (err) => {
						console.log(image)
						reject();
						this.$emit('fail', {
						  error: err
						})
						console.log('获取图片失败', err, imgSrc)
					}
				});
			})
		},
		downloadImage(url) {
			return new Promise((resolve, reject) => {
				const downloadTask = uni.downloadFile({
					url,
					success: (res) => {
						if(res.statusCode !== 200) {
							console.error(`downloadFile ${url} failed res.statusCode is not 200`)
							reject();
							return;
						} else {
							resolve(res.tempFilePath)
						}
					},
					fail: (error) => {
						uni.showToast({
							title: error
						})
						console.error(`downloadFile ${url} failed ${JSON.stringify(error)}`);
						resolve(url);

					}
				})
			})
		},
		measureText(context, text, fontSize) {
			// #ifndef APP-PLUS
			return context.measureText(text).width
			// #endif
			// #ifdef APP-PLUS
			// app measureText为0需要累加计算
			return text.split("").reduce((widthScaleSum, char) => {
				let code = char.charCodeAt(0);
				let widthScale = CHAR_WIDTH_SCALE_MAP[code - 0x20] || 1;
				return widthScaleSum + widthScale;
			  }, 0) * fontSize;
			// #endif
		},
		calcTextArrs(context, view) {
			// 拆分行
			const textArray = view.text.split('\n')
			// 设置属性
			// #ifndef MP-TOUTIAO
			const fontWeight = view.css.fontWeight === 'bold' ? 'bold' : 'normal'
			const textStyle = view.css.textStyle === 'italic' ? 'italic' : 'normal'
			// #endif
			// #ifdef MP-TOUTIAO
			const fontWeight = view.css.fontWeight === 'bold' ? 'bold' : ''
			const textStyle = view.css.textStyle === 'italic' ? 'italic' : ''
			// #endif
			const fontSize = view.css.fontSize ?  this.toNumber(view.css.fontSize) : '20rpx'.toPx()
			const fontFamily = view.css.fontFamily || 'sans-serif'
			context.font = `${textStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
		
			let width = 0
			let height = 0
			let lines = 0
			const linesArray = []
			for (let index = 0; index < textArray.length; index++) {
				const text = textArray[index]
				const textLength = this.measureText(context, text, fontSize) // context.measureText(text).width
				const minWidth = fontSize
				let partWidth = view.css.width ? this.toNumber(view.css.width) : textLength
		
				if(partWidth < minWidth) {
					partWidth = minWidth
				}
				const calLines = Math.ceil(textLength / partWidth)
				width = partWidth > width ? partWidth : width;
				lines += calLines;
				linesArray[index] = calLines;
			}
			// 计算行数
			lines = view.css.maxLines < lines ? view.css.maxLines : lines
			// 计算行高
			const lineHeight = view.css.lineHeight ? (typeof view.css.lineHeight === 'number' ? this.toNumber(view.css.lineHeight) *  fontSize : this.toNumber(view.css.lineHeight)) : fontSize * 1.2
			height = lineHeight * lines
		
			return {
				fontSize,
				width: width,
				height: height,
				lines: lines,
				lineHeight: lineHeight,
				textArray: textArray,
				linesArray: linesArray,
			}
		
		},
		drawText(context, view) {
			return new Promise( async (resolve, reject) => {
				const {width, height, lines, lineHeight, textArray, linesArray, fontSize} =  this.calcTextArrs(context, view)
				context.fillStyle = (view.css?.color || 'black')
				// context.setTextBaseline('top')
				let lineIndex = 0
				for (let i = 0; i < textArray.length; i++) {
					const preLineLength = Math.ceil(textArray[i].length / linesArray[i])
					let start = 0
					let alreadyCount = 0
					for (let j = 0; j < linesArray[i]; j++) {
						context.save()
						// 绘制行数大于最大行数，则直接跳出循环
						if (lineIndex >= lines) {
							break;
						}
						alreadyCount = preLineLength
						let text = textArray[i].substr(start, alreadyCount)
						let measuredWith = this.measureText(context, text, fontSize)
						// 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
						// 如果已经到文本末尾，也不要进行该循环
						 while ((start + alreadyCount <= textArray[i].length) && (width - measuredWith > fontSize || measuredWith - width > fontSize)) {
							if (measuredWith < width) {
								text = textArray[i].substr(start, ++alreadyCount);
							} else {
								if (text.length <= 1) {
									// 如果只有一个字符时，直接跳出循环
									break;
								}
								text = textArray[i].substr(start, --alreadyCount);
								// break;
							}
							measuredWith = this.measureText(context, text, fontSize)
						}
						start += text.length
						// 如果是最后一行了，发现还有未绘制完的内容，则加...
						if (lineIndex === lines - 1 && (i < textArray.length - 1 || start < textArray[i].length)) {
							while (this.measureText(context, `${text}...`, fontSize) > width) {
								if (text.length <= 1) {
									// 如果只有一个字符时，直接跳出循环
									break;
								}
								text = text.substring(0, text.length - 1);
							}
							text += '...';
							measuredWith = this.measureText(context, text, fontSize)
						}
						context.setTextAlign(view.css.textAlign ? view.css.textAlign : 'left');
						let x = this.toNumber(view.css.left);
						let lineX;
						switch (view.css.textAlign) {
							case 'center':
								x = x + measuredWith / 2 +  ((this.toNumber(view.css.width) || this.toNumber(this.boardWidth, 0 , this.windowWidth)) - measuredWith) / 2;
								lineX = x - measuredWith / 2;
								break;
							case 'right':
								x = x + (this.toNumber(view.css.width) || this.toNumber(this.boardWidth, 0 , this.windowWidth));
								lineX = x - measuredWith;
								break;
							default:
								lineX = x;
								break;
						}
						// top 等于字体高度加行高
						const y = this.toNumber(view.css.top) + (lineIndex === 0 ? fontSize : (fontSize + lineIndex * lineHeight))
						//const y = (view.css?.top?.toPx() || 0) + (this.toNumber(view.css.fontSize) + lineIndex * lineHeight) - this.toNumber(view.css.fontSize)
						lineIndex++;
						if (view.css.textStyle === 'stroke') {
							context.strokeText(text, x, y, measuredWith)
						} else {
							context.fillText(text, x, y, measuredWith * this.dpr)
						}
						if (view.css.textDecoration) {
							context.lineWidth = fontSize / 13;
							context.beginPath();
							if (/\bunderline\b/.test(view.css.textDecoration)) {
							  context.moveTo(lineX, y);
							  context.lineTo(lineX + measuredWith, y);
							}
							if (/\boverline\b/.test(view.css.textDecoration)) {
							  context.moveTo(lineX, y - fontSize);
							  context.lineTo(lineX + measuredWith, y - fontSize);
							}
							if (/\bline-through\b/.test(view.css.textDecoration)) {
							  context.moveTo(lineX, y - fontSize / 2.5);
							  context.lineTo(lineX + measuredWith, y - fontSize / 2.5);
							}
							context.closePath();
							context.strokeStyle = view.css.color;
							context.stroke();
						}
						context.restore()
					}
				}
				setTimeout(() => resolve('ok'), 100)
			})
		},
		drawRect(context, view) {
			return new Promise((resolve, reject) => {
				let left = view.css?.left?.toPx() || 0
				let top = view.css?.top?.toPx() || 0
				const width = view.css?.width.toPx() || 0
				const height = view.css?.height.toPx() || 0
				
				// 圆角
				let [topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius] = view.css?.radius?.split(' ').map((item) => /^\d/.test(item) && item.toPx(0, width), []) || [0]
				let radius = topLeftRadius
				topRightRadius = topRightRadius || topLeftRadius
				bottomRightRadius = bottomRightRadius || topLeftRadius
				bottomLeftRadius = bottomLeftRadius || topRightRadius
				
				
				// 字节不支持 transparent
				const color = view.css?.backgroundColor || view.css?.background || 'white' //'transparent'
				const border = view.css?.border?.split(' ').map(item => /^\d/.test(item) ? item.toPx() : item)
				const shadow = view.css?.shadow
				const angle  = view.css?.rotate
				 
				context.save()
				context.setFillStyle(color)
				// 旋转 
				if(angle) {
					context.translate(left + width / 2, top + height / 2)
					context.rotate(angle * Math.PI / 180)
					context.translate(- left - width / 2 , - top - height / 2)
				}
				// 投影
				if(shadow) {
					const [x, y, b, c] = shadow.split(' ')
					context.shadowOffsetX = x.toPx()
					context.shadowOffsetY = y.toPx()
					context.shadowBlur = b.toPx()
					context.shadowColor = c
				}
				// 圆角
				if(radius) {
					context.beginPath()
					// 右下角
					context.arc(left + width - (bottomRightRadius || radius), top + height - (bottomRightRadius || radius), (bottomRightRadius || radius), 0, Math.PI * 0.5)
					context.lineTo(left + (bottomLeftRadius || radius), top + height)
					// 左下角
					context.arc(left + (bottomLeftRadius || radius), top + height - (bottomLeftRadius || radius), (bottomLeftRadius || radius), Math.PI * 0.5, Math.PI)
					context.lineTo(left, top + radius)
					// 左上角
					context.arc(left + radius, top + radius, radius, Math.PI, Math.PI * 1.5)
					context.lineTo(left + width - (topRightRadius || radius), top)
					// 右上角
					context.arc(left + width - (topRightRadius || radius), top + (topRightRadius || radius), (topRightRadius || radius), Math.PI * 1.5, Math.PI * 2)
					context.closePath()
					context.fill()
				} else {
					context.fillRect(left, top, width, height)
				}

				// 填充图片
				if(view?.type == 'image') {
					// 字节不支持 transparent
					context.fillStyle = 'white'
					radius && context.clip()
					// 获得缩放到图片大小级别的裁减框
					let rWidth = view.width
					let rHeight = view.height

					let startX = 0
					let startY = 0
					// 绘画区域比例
					const cp = width / height
					// 原图比例
					const op = rWidth / rHeight
					if (cp >= op) {
						rHeight = rWidth / cp;
						// startY = Math.round((view.height - rHeight) / 2)
					} else {
						rWidth = rHeight * cp;
						startX = Math.round((view.width - rWidth) / 2)
					}
					if (view.css && view.mode === 'scaleToFill') {
						console.log(view)
						context.drawImage(view.url, left, top, width, height);
					} else {
						console.log(view)
						context.drawImage(view.url, startX, startY, rWidth, rHeight, left, top, width, height)
					}
				}
				// 描边
				if(border) {
					const lineWidth = border[0]
					context.lineWidth = lineWidth
					if(border[1] == 'dashed') {
						context.setLineDash([Math.ceil(lineWidth * 4 / 3), Math.ceil(lineWidth * 4 / 3)])
					} else if(border[1] == 'dotted') {
						context.setLineDash([lineWidth, lineWidth])
					}
					// 字节不支持strokeStyle
					context.setStrokeStyle(border[2])
					// context.strokeStyle = border[2]
					if(radius) {
						context.stroke()
					} else {
						context.strokeRect(left, top, width, height)
					}
				}
				context.restore()
				setTimeout(() => resolve('ok'), 50)
			})
		},
	}
}
</script>

<style></style>