<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/notice.jpg" class="top-bg">
		<div style="width: 100%;background-color: #fff;">
			<div class="top-info" :style="{width:width+'px'}">
				<breadcrumb :list='list'></breadcrumb>
			</div>
		</div>
		<div class="contentBody" :style="{width:width+'px'}">
			<div class="list-box">
				<div class="list-item" v-for="(item,index) in noticeList" :key="index">
					<div>
						· <span style="color: #EB6118;">[重要]</span> {{item.name}}
					</div>
					<p>{{item.time}}</p>
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
					name: '通知公告',
					href: ''
				}],
				currentPage1: 1,
				pageSize: 10,
				total: 5,
				noticeList: [{
					name:'五一放假值班通知',
					time: '2022-05-26'
				},{
					name:'五一放假值班通知',
					time: '2022-05-26'
				},{
					name:'五一放假值班通知',
					time: '2022-05-26'
				},{
					name:'五一放假值班通知',
					time: '2022-05-26'
				},{
					name:'五一放假值班通知',
					time: '2022-05-26'
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
				background-color: #fff;
				display: flex;
				flex-direction: column;
				.list-item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 14px;
					color: #606060;
					padding: 30px;
					box-sizing: border-box;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					cursor: pointer;
					span {
						color: #909090;
					}
				}
				.list-item:last-child {
					border-bottom: 0;
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
