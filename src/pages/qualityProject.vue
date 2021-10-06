<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/project.jpg" class="top-bg">
		<div style="width: 100%;background-color: #fff;">
			<div class="top-info" :style="{width:width+'px'}">
				<breadcrumb :list='list'></breadcrumb>
			</div>
		</div>
		<div class="contentBody" :style="{width:width+'px'}">
			<div class="list-box">
				<div class="list-item" v-for="(item,index) in projList" :key="index">
					<img :src="item.img">
					<span>{{item.name}}</span>
					<div>{{item.summary}}</div>
				</div>
			</div>
		</div>
		<div class="footPage">
			<el-pagination background @current-change="handleCurrentChange" :current-page.sync="currentPage1"
				:page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import breadcrumb from '../components/breadcrumb.vue'
	import {
		mapState
	} from "vuex";
	export default {
		name: 'notice',
		props: {

		},
		data() {
			return {
				list: [{
					name: '首页',
					href: '/'
				}, {
					name: '优质服务',
					href: ''
				}],
				currentPage1: 1,
				pageSize: 6,
				total: 6,
				projList: [{
					img: 'https://admin.zlhuiyun.com/storage/202103/01/14104304867815.jpg',
					name: '英培商务咨询有限公司',
					summary: 'EF英孚教育是全球知名私人英语教育机构，主要致力于语言学习、留学旅游及学位课程等方面。EF 英孚教育已经把世界变成了一个英语大课堂。创新的英语学习...'
				}, {
					img: 'https://admin.zlhuiyun.com/storage/202103/01/14104304867815.jpg',
					name: '英培商务咨询有限公司',
					summary: 'EF英孚教育是全球知名私人英语教育机构，主要致力于语言学习、留学旅游及学位课程等方面。EF 英孚教育已经把世界变成了一个英语大课堂。创新的英语学习...'
				}, {
					img: 'https://admin.zlhuiyun.com/storage/202103/01/14104304867815.jpg',
					name: '英培商务咨询有限公司',
					summary: 'EF英孚教育是全球知名私人英语教育机构，主要致力于语言学习、留学旅游及学位课程等方面。EF 英孚教育已经把世界变成了一个英语大课堂。创新的英语学习...'
				}, {
					img: 'https://admin.zlhuiyun.com/storage/202103/01/14104304867815.jpg',
					name: '英培商务咨询有限公司',
					summary: 'EF英孚教育是全球知名私人英语教育机构，主要致力于语言学习、留学旅游及学位课程等方面。EF 英孚教育已经把世界变成了一个英语大课堂。创新的英语学习...'
				}, {
					img: 'https://admin.zlhuiyun.com/storage/202103/01/14104304867815.jpg',
					name: '英培商务咨询有限公司',
					summary: 'EF英孚教育是全球知名私人英语教育机构，主要致力于语言学习、留学旅游及学位课程等方面。EF 英孚教育已经把世界变成了一个英语大课堂。创新的英语学习...'
				}, {
					img: 'https://admin.zlhuiyun.com/storage/202103/01/14104304867815.jpg',
					name: '英培商务咨询有限公司',
					summary: 'EF英孚教育是全球知名私人英语教育机构，主要致力于语言学习、留学旅游及学位课程等方面。EF 英孚教育已经把世界变成了一个英语大课堂。创新的英语学习...'
				}]
			}
		},
		mounted() {},
		methods: {
			handleCurrentChange(val) {
				this.currentPage1 = val
			},
		},
		components: {
			breadcrumb
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
		background: #F6F6F6;
		padding-bottom: 20px;

		.top-bg {
			width: 100%;
			height: 350px;
			display: block;
		}

		.top-info {
			width: 100%;
			height: 53px;
			display: flex;
			margin: 0 auto;
			align-items: center;
			background-color: #fff;
		}

		.contentBody {
			margin: 0 auto;
			margin-top: 20px;
			display: flex;
			box-sizing: border-box;

			.list-box {
				width: 100%;
				display: flex;
				flex-wrap: wrap;

				.list-item {
					width: calc((100% - 30px * 2) / 3);
					margin-right: 30px;
					margin-bottom: 30px;
					display: flex;
					flex-direction: column;
					font-size: 18px;
					color: #303030;
					background-color: #fff;

					img {
						width: 100%;
						height: 250px;
					}

					span {
						width: 100%;
						padding: 20px;
						box-sizing: border-box;
					}

					div {
						width: 100%;
						padding: 0 20px;
						box-sizing: border-box;
						font-size: 14px;
						color: #909090;
						height: 60px;
						margin-bottom: 20px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						word-wrap: break-word;
						/*! autoprefixer: ignore next */
						-webkit-box-orient: vertical;
					}
				}

				.list-item:nth-child(3n) {
					margin-right: 0;
				}
			}
		}

		.footPage {
			display: flex;
			justify-content: center;
			margin: 44px 0 0;
		}
	}
</style>
