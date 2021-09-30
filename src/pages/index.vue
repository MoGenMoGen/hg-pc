<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="../../public/images/topBg.png" class="top-bg">
		<div class="top-info" :style="{width:width+'px'}">
			<div class="top-info-item" v-for="(item,index) in infoList" :key="index">
				<img :src="item.url">
				<div>
					<span style="font-size: 28px;color: #FF5400;">{{item.num}}+</span>
					<span>{{item.name}}</span>
				</div>
			</div>
		</div>
		<div class="common-item" style="background-color: #F6F6F6;">
			<div class="common-box" :style="{width:width+'px'}">
				<commonTitle titleCN="新闻资讯" titleEN="News" color="#F6F6F6"></commonTitle>
				<div class="news-box">
					<div class="news-left">
						<div class="news-left-top">
							<el-carousel height="300px" indicator-position="none">
								<el-carousel-item v-for="item in 4" :key="item">
									<img src="../../public/images/logo-1.png" style="width: 100%;height: 100%;">
									<div class="news-title">1111</div>
								</el-carousel-item>
							</el-carousel>
						</div>
						<div class="news-left-bottom">
							<el-carousel height="260px" indicator-position="none">
								<el-carousel-item v-for="item in 4" :key="item">
									<img src="../../public/images/logo-1.png" style="width: 100%;height: 100%;">
									<div class="news-title">1111</div>
								</el-carousel-item>
							</el-carousel>
							<el-carousel height="260px" indicator-position="none">
								<el-carousel-item v-for="item in 4" :key="item">
									<img src="../../public/images/logo-1.png" style="width: 100%;height: 100%;">
									<div class="news-title">1111</div>
								</el-carousel-item>
							</el-carousel>
						</div>
					</div>
					<div class="news-right">
						<div class="news-right-tab">
							<div v-for="(item,index) in newsTab" :key="index" 
							:class="{'news-right-tab-active':newsIndex==index}" @click="changeNews(index)">{{item}}</div>
						</div>
						<div class="news-right-list">
							<div class="news-right-list-one" v-for="(item,index) in 5" :key="index" v-if="newsIndex==0">
								<div>
									<span style="font-size: 24px;">25</span>
									<span>2021-03</span>
								</div>
								<div style="align-items: flex-start;">
									<span class="one-line" style="font-size: 14px;">对话掌门人—青春正担当</span>
									<span class="one-line" style="color: #909090;">12月13日，由兰州市委统战部主办，兰州市新的...</span>
								</div>
							</div>
							<div class="news-right-list-two" v-if="newsIndex==1" v-for="(item,index) in 5" :key="index">
								<p class="one-line"><span :style="{color:index==1?'#FF5400':'#0DA988'}">[重要]</span> 五一放假值班通知</p>
								<p>2021-04-20</p>
							</div>
						</div>
						<div class="news-right-more">
							<div>查看更多 ></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="common-item">
			<div class="common-box img-link" :style="{width:width+'px'}">
				<div class="img-link-inner" v-for="(item,index) in imgLinkList" :key="index" @click="toPage(item.href)">
					<img :src="item.img">
					<div>{{item.name}}</div>
				</div>
			</div>
		</div>
		<div class="common-item" style="background-color: #F6F6F6;">
			<div class="common-box" :style="{width:width+'px'}">
				<commonTitle titleCN="供需平台" titleEN="Supply" color="#F6F6F6"></commonTitle>
				<div class="supply-box">
					<div class="supply-left">
						<div class="supply-top">
							<div><div class="supply-place"></div><span>产业资源</span>（共6条）</div>
							<div @click="toPage('./supplyPlatform?typeId=0')">查看更多 ></div>
						</div>
						<div class="supply-left-list">
							<div class="supply-left-item" v-for="(item,index) in 6" :key="index">
								<img class="supply-left-item-left" src="https://admin.zlhuiyun.com/storage/202011/30/iGD86WV66XnccnwvTmqnRF3Nzff3pN6S.jpg">
								<div class="supply-left-item-right">
									<span class="one-line">商标顾问注册</span>
									<div>
										<p class="one-line" style="margin-bottom: 10px;"><img src="../../public/images/园区.png">资源</p>
										<p><img src="../../public/images/时间.png">2021-06-30</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="supply-right">
						<div class="supply-top" style="border-bottom: 1px solid rgba(0,0,0,0.1);">
							<div><div class="supply-place"></div><span>需求信息</span>（共7条）</div>
							<div @click="toPage('./supplyPlatform?typeId=1')">查看更多 ></div>
						</div>
						<div class="supply-right-list">
							<div v-for="(item,index) in 7" :key="index" class="supply-right-item">
								·<span style="color: #EB6118;">[需求]</span> <p class="one-line">铜衬的改进-寻求专家</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="common-item">
			<div class="common-box" :style="{width:width+'px'}">
				<commonTitle titleCN="创新活动" titleEN="Activity"></commonTitle>
				<div class="active-list">
					<div class="active-item" v-for="(item,index) in 6" :key="index">
						<div class="active-item-top">
							<span class="active-item-top-b" v-if="index==0||index==3">未开始</span>
							<span class="active-item-top-g" v-if="index==1||index==4">进行中</span>
							<span class="active-item-top-e" v-if="index==2||index==5">已结束</span>
							<img src="https://admin.zlhuiyun.com/storage/202109/07/banner4.jpeg">
						</div>
						<div class="active-item-info">
							<p class="active-item-info-title one-line">庆祝共产党建党100周年大型活动</p>
							<p class="active-item-info-cont one-line"><img src="../../public/images/地址.png">北京市 北京市 东城区</p>
							<p class="active-item-info-cont"><img src="../../public/images/时间.png">2021-06-30</p>
							<p class="active-item-info-btn" v-if="index==0||index==3">我要报名</p>
							<p class="active-item-info-btn active-item-info-btn2" v-if="index!=0&&index!=3">查看详情</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="common-item" style="background-color: #F6F6F6;">
			<div class="common-box" :style="{width:width+'px'}">
				<commonTitle titleCN="合作伙伴" titleEN="Partner" color="#F6F6F6"></commonTitle>
				<div class="img-link-bottom">
					<img src="../../public/images/logo-1.png" v-for="(item,index) in 10" :key="index">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import img1 from '../../public/images/园区空间.png'
	import img2 from '../../public/images/园区项目.png'
	import img3 from '../../public/images/政策传递.png'
	import img4 from '../../public/images/招商入驻.png'
	import img5 from '../../public/images/公共服务.png'
	import img6 from '../../public/images/活动宣传.png'
	import commonTitle from "../components/commonTitle.vue"
	import {
		mapState
	} from "vuex";
	export default {
		name: 'index',
		props: {
			
		},
		data() {
			return {
				infoList: [{
					url: img1,
					num: 58600,
					name: '园区空间（m²）'
				}, {
					url: img2,
					num: 987,
					name: '园区项目（个）'
				}, {
					url: img3,
					num: 157,
					name: '政策传递（条）'
				}, {
					url: img4,
					num: 1256,
					name: '招商入驻（个）'
				}, {
					url: img5,
					num: 2566,
					name: '公共服务（条）'
				}, {
					url: img6,
					num: 66,
					name: '活动宣传（条）'
				}],
				newsTab: ['新闻资讯','通知公告'],
				newsIndex: 0,
				imgLinkList: [{
					name: '政策服务',
					href: '/',
					img: 'https://front.zlhuiyun.com/static/images/1.jpg'
				},{
					name: '投融资服务',
					href: '/',
					img: 'https://front.zlhuiyun.com/static/images/2.jpg'
				},{
					name: '优质项目',
					href: '/',
					img: 'https://front.zlhuiyun.com/static/images/3.jpg'
				}]
			}
		},
		mounted() {},
		methods: {
			changeNews(index) {
				this.newsIndex = index
			},
			toPage(href) {
				this.$router.push(href)
			}
		},
		components: {
			commonTitle
		},
		computed: {
			...mapState([
				'bWidth',
				'width'
			])
		},
	}
</script>

<style scoped lang="less">
	.one-line {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.container {
		.top-bg {
			width: 100%;
			height: 943px;
			display: block;
		}

		.top-info {
			width: 100%;
			height: 137px;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			align-items: center;
			background-color: #fff;

			.top-info-item {
				display: flex;
				align-items: center;

				img {
					width: 60px;
					height: 60px;
					margin-right: 10px;
				}

				div {
					display: flex;
					flex-direction: column;
					font-size: 14px;
					color: #606060;
				}
			}
		}

		.common-item {
			padding: 40px 0;

			.common-box {
				margin: 0 auto;

				.img-link-bottom {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;

					img {
						width: 19%;
						height: 100px;
						margin-right: 1%;
						margin-bottom: 1%;
					}

					img:nth-child(5n) {
						margin-right: 0;
					}
				}

				.news-box {
					display: flex;
					justify-content: center;
					align-items: center;
					.news-title {
						width: 100%;
						height: 40px;
						background-color: rgba(0,0,0,0.2);
						line-height: 40px;
						text-align: center;
						color: #fff;
						font-size: 16px;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
					}
					.news-left {
						flex: 2;
						display: flex;
						flex-direction: column;
						margin-right: 30px;
						.news-left-top {
							position: relative;
						}
						.news-left-bottom {
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-top: 10px;
							position: relative;
							.el-carousel {
								flex: 1;
								margin-right: 30px;
							}
							.el-carousel:last-child {
								margin-right: 0;
							}
						}
					}
					.news-right {
						flex: 1;
						height: 570px;
						display: flex;
						flex-direction: column;
						background-color: #fff;
						.news-right-tab {
							width: 100%;
							height: 49px;
							line-height: 49px;
							border-bottom: 1px solid rgba(0,0,0,0.1);
							display: flex;
							align-items: center;
							div {
								text-align: center;
								width: 190px;
								color: #909090;
								font-size: 18px;
								cursor: pointer;
							}
							.news-right-tab-active {
								background-color: #FF5400;
								color: #fff;
							}
						}
						.news-right-list {
							width: 100%;
							display: flex;
							flex-direction: column;
							.news-right-list-one {
								width: 100%;
								height: 90px;
								padding: 20px;
								box-sizing: border-box;
								border-bottom: 1px solid #F6F6F6;
								display: flex;
								align-items: center;
								color: #303030;
								font-size: 12px;
								cursor: pointer;
								div {
									display: flex;
									flex-direction: column;
									justify-content: center;
									align-items: center;
								}
								div:first-child {
									border-right: 1px solid rgba(0,0,0,0.05);
									padding-right: 10px;
								}
								div:last-child {
									max-width: 270px;
									padding-left: 10px;
									box-sizing: border-box;
								}
							}
							.news-right-list-two {
								width: 100%;
								height: 90px;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								font-size: 14px;
								color: #303030;
								padding: 20px 30px;
								box-sizing: border-box;
								border-bottom: 1px solid #F6F6F6;
								cursor: pointer;
								p:last-child {
									font-size: 12px;
									color: #909090;
								}
							}
						}
						.news-right-more {
							width: 100%;
							height: 65px;
							display: flex;
							justify-content: center;
							align-items: center;
							div {
								width: 110px;
								height: 32px;
								line-height: 32px;
								text-align: center;
								border: 1px solid #CDCDCD;
								font-size: 14px;
								color: #909090;
								border-radius: 3px;
								cursor: pointer;
							}
						}
					}
				}
				
				.active-list {
					display: flex;
					flex-wrap: wrap;
					.active-item {
						flex: 1;
						margin-right: 30px;
						display: flex;
						flex-direction: column;
						box-sizing: border-box;
						border: 1px solid #EAEAEA;
						margin-bottom: 30px;
						.active-item-top {
							position: relative;
							span {
								width: 80px;
								height: 32px;
								line-height: 32px;
								text-align: center;
								position: absolute;
								top: 20px;
								left: 20px;
								border-radius: 3px;
								font-size: 14px;
							}
							.active-item-top-b {
								background-color: #fff;
								color: #EB6118;
							}
							.active-item-top-g {
								background-color: #EB6118;
								color: #fff;
							}
							.active-item-top-e {
								background-color: #888888;
								color: #fff;
							}
							img {
								width: 100%;
								height: 250px;
								display: block;
							}
						}
						.active-item-info {
							display: flex;
							flex-direction: column;
							width: 100%;
							padding: 20px 20px 30px;
							box-sizing: border-box;
							.active-item-info-title {
								font-size: 18px;
								color: #303030;
								margin-bottom: 20px;
							}
							.active-item-info-cont {
								font-size: 14px;
								color: #909090;
								display: flex;
								align-items: center;
								margin-bottom: 10px;
								img {
									width: 15px;
									height: 15px;
									margin-right: 8px;
								}
							}
							.active-item-info-btn {
								width: 100px;
								height: 32px;
								line-height: 32px;
								text-align: center;
								font-size: 14px;
								color: #fff;
								background-color: #EB6118;
								border-radius: 3px;
								margin-top: 20px;
								cursor: pointer;
							}
							.active-item-info-btn2 {
								background-color: #fff;
								border: 1px solid #EB6118;
								color: #EB6118;
								box-sizing: border-box;
							}
						}
					}
					.active-item:nth-child(3n) {
						margin-right: 0;
					}
				}
				.supply-box {
					display: flex;
					justify-content: center;
					align-items: center;
					.supply-top {
						width: 100%;
						padding: 30px;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 14px;
						color: #909090;
						div {
							display: flex;
							align-items: center;
							.supply-place {
								width: 4px;
								height: 20px;
								background-color: #FF5400;
								margin-right: 15px;
							}
							span {
								font-size: 18px;
								color: #303030;
							}
						}
						div:last-child {
							cursor: pointer;
						}
					}
					.supply-left {
						// width: 790px;
						flex: 2;
						margin-right: 30px;
						background-color: #fff;
						.supply-left-list {
							display: flex;
							flex-wrap: wrap;
							padding: 0 30px;
							box-sizing: border-box;
							.supply-left-item {
								width: 47%;
								height: 160px;
								margin-right: 6%;
								padding: 15px;
								box-sizing: border-box;
								display: flex;
								align-items: center;
								border: 1px solid #EAEAEA;
								box-sizing: border-box;
								margin-bottom: 30px;
								cursor: pointer;
								.supply-left-item-left {
									width: 138px;
									height: 124px;
									object-fit: cover;
									margin-right: 30px;
									flex-shrink: 1;
								}
								.supply-left-item-right {
									max-width: 170px;
									height: 124px;
									display: flex;
									flex-direction: column;
									justify-content: space-around;
									span {
										font-size: 18px;
										color: #303030;
									}
									div {
										p{
											display: flex;
											align-items: center;
											font-size: 14px;
											color: #909090;
											img {
												width: 15px;
												height: 15px;
												margin-right: 5px;
											}
										}
									}
									
								}
							}
							.supply-left-item:nth-child(2n) {
								margin-right: 0;
							}
						}
					}
					.supply-right {
						// width: 380px;
						flex: 1;
						background-color: #fff;
						.supply-right-list {
							display: flex;
							flex-direction: column;
							height: 570px;
							.supply-right-item {
								height: 73px;
								border-bottom: 1px dotted rgba(0,0,0,0.1);
								display: flex;
								align-items: center;
								color: #606060;
								font-size: 14px;
								padding: 30px;
								box-sizing: border-box;
								cursor: pointer;
								span {
									margin: 0 10px;
								}
								p {
									max-width: 66%;
								}
							}
						}
					}
				}
			}

			.img-link {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.img-link-inner {
					// width: 380px;
					flex: 1;
					margin-right: 30px;
					height: 240px;
					position: relative;
					cursor: pointer;

					img {
						width: 100%;
						height: 240px;
						object-fit: cover;
					}

					div {
						width: 100%;
						height: 45px;
						line-height: 45px;
						background-color: rgba(0, 0, 0, 0.5);
						text-align: center;
						font-size: 18px;
						color: #fff;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
					}
				}

				.img-link-inner:last-child {
					margin-right: 0;
				}
			}

		}
	}
</style>
