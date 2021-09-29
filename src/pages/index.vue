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
				}]
			}
		},
		mounted() {},
		methods: {},
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
						background-color: rgba(0,0,0,0.5);
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
