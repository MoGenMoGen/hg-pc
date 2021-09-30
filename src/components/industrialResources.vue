<template>
	<div class="container">
		<div class="search-box">
			<div class="search-box-left">
				<el-input class="search" placeholder="资源名称" prefix-icon="el-icon-search" v-model="name"></el-input>
				<el-select v-model="value1" placeholder="资源分类" class="search">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
				<el-button type="danger" plain style="width: 73px;">重置</el-button>
			</div>
			<div class="search-box-right">申请成为服务商</div>
		</div>
		<div class="list-box">
			<div class="list-item" v-for="(item,index) in 6" :key="index">
				<img class="list-item-left" src="https://admin.zlhuiyun.com/storage/202011/30/iGD86WV66XnccnwvTmqnRF3Nzff3pN6S.jpg">
				<div class="list-item-right">
					<span class="one-line">商标顾问注册</span>
					<div>
						<p class="one-line" style="margin-bottom: 10px;"><img src="../../public/images/园区.png">资源</p>
						<p><img src="../../public/images/时间.png">2021-06-30</p>
					</div>
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
				width: 47%;
				height: 160px;
				margin-right: 6%;
				padding: 15px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				margin-bottom: 30px;
				cursor: pointer;
				background-color: #fff;
				.list-item-left {
					width: 138px;
					height: 124px;
					object-fit: cover;
					margin-right: 30px;
					flex-shrink: 1;
				}
				.list-item-right {
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
			.list-item:nth-child(2n) {
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
