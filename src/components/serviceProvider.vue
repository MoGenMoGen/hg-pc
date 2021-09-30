<template>
	<div class="container">
		<div class="search-box">
			<div class="search-box-left">
				<el-input class="search" placeholder="请输入公司名称" prefix-icon="el-icon-search" v-model="name"></el-input>
				<el-select v-model="value1" placeholder="服务商分类" class="search">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-button type="danger" plain style="width: 73px;">重置</el-button>
			</div>
			<div class="search-box-right">申请成为服务商</div>
		</div>
		<div class="list-box">
			<div class="list-item" v-for="(item,index) in 6" :key="index">
				<img class="list-item-img" src="https://admin.zlhuiyun.com/storage/202108/24/t8.jpg">
				<div class="list-item-bottom">
					<p class="list-item-bottom-title">天晟律师事务所</p>
					<div>
						<p><img src="../../public/images/姓名.png">张嘉译</p>
						<p><img src="../../public/images/电话.png">15203565841</p>
					</div>
					<p><img src="../../public/images/园区.png">服务</p>
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
	export default {
		name: 'commonTitle',
		props: {
		},
		data() {
			return {
				name: '',
				value1: "",
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				currentPage1: 1,
				pageSize: 6,
				total: 5,
			}
		},
		watch: {
		},
		mounted() {
		},
		methods: {
			handleCurrentChange(val) {
				this.currentPage1 = val
			},
		},
		computed: {
		},
	}
</script>

<style lang="less" scoped>
	.one-line {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.container {
		.search-box {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.search-box-left {
				display: flex;
				align-items: center;
				.el-input {
					width: 190px;
					margin-right: 10px;
				}
				.el-select {
					width: 170px;
					margin-right: 10px;
				}
			}
			.search-box-right {
				padding: 10px 20px;
				font-size: 12px;
				color: #fff;
				background-color: #EB6118;
				border-radius: 3px;
				cursor: pointer;
			}
		}
		.list-box {
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			margin-top: 20px;
			.list-item {
				width: 32%;
				margin-right: 2%;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				margin-bottom: 30px;
				cursor: pointer;
				background-color: #fff;
				.list-item-img {
					height: 200px;
				}
				.list-item-bottom {
					width: 100%;
					padding: 20px 15px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					font-size: 14px;
					color: #909090;
					.list-item-bottom-title {
						font-size: 18px;
						color: #303030;
						margin-bottom: 20px;
					}
					div {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 10px;
					}
					p {
						display: flex;
						align-items: center;
						img {
							width: 15px;
							height: 15px;
							margin-right: 6px;
						}
					}
				}
			}
			.list-item:nth-child(3n) {
				margin-right: 0;
			}
		}
		.footPage {
			display: flex;
			justify-content: center;
			margin: 44px 0 0;
		}
	}
</style>
