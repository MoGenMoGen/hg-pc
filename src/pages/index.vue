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
							<div class="news-right-list-two" v-if="newsIndex==1"></div>
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
				<div class="img-link-inner" v-for="(item,index) in 3" :key="index">
					<img src="https://front.zlhuiyun.com/static/images/1.jpg">
					<div>政策服务</div>
				</div>
			</div>
		</div>
		<div class="common-item" style="background-color: #F6F6F6;">
			<div class="common-box" :style="{width:width+'px'}">
				<commonTitle titleCN="供需平台" titleEN="Supply" color="#F6F6F6"></commonTitle>
			</div>
		</div>
		<div class="common-item">
			<div class="common-box" :style="{width:width+'px'}">
				<commonTitle titleCN="创新活动" titleEN="Activity"></commonTitle>
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
			msg: String
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
			}
		},
		mounted() {},
		methods: {
			changeNews(index) {
				this.newsIndex = index
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
						width: 790px;
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
								width: 390px;
							}
						}
					}
					.news-right {
						width: 380px;
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
									padding-left: 10px;
									box-sizing: border-box;
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
					width: 380px;
					height: 240px;
					position: relative;
					cursor: pointer;

					img {
						width: 380px;
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
