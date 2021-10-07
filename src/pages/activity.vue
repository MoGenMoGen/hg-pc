<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/activity.jpg" class="top-bg">
		<div :style="{width:bWidth?bWidth+'px':'100%'}" style="background-color: #ffffff;">
			<div class="top-info" :style="{width:width+'px'}">
				<breadcrumb :list='list'></breadcrumb>
			</div>
		</div>
		<div class="searchBox" :style="{width:width+'px'}">
			<el-input class="search" placeholder="园区名称	" prefix-icon="el-icon-search" v-model="input1">
			</el-input>
			<el-select v-model="value1" placeholder="活动状态" class="search">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value2" placeholder="活动分类" class="search">
				<el-option v-for="item in optionsTwo" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value3" placeholder="活动地区" class="search">
				<el-option v-for="item in optionsThree" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value4" placeholder="是否免费" class="search">
				<el-option v-for="item in optionsFour" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value5" placeholder="客流性质" class="search">
				<el-option v-for="item in optionsFive" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-button type="danger" plain style="width: 73px;">重置</el-button>
		</div>
		<div class="common-box" :style="{width:width+'px'}" style="margin: 0 auto;">
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
</template>

<script>
	import breadcrumb from '../components/breadcrumb.vue'
	import {
		mapState
	} from "vuex";
	export default {
		name: 'park',
		props: {
			msg: String
		},
		data() {
			return {
				value1: "",
				value2: "",
				value3: "",
				value4: "",
				value5: "",
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
				optionsTwo: [{
					value: '选项1',
					label: '烧杯'
				}, {
					value: '选项2',
					label: '漏逗'
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
				optionsThree: [{
					value: '选项1',
					label: '姚峰'
				}, {
					value: '选项2',
					label: '摩根'
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
				optionsFour: [{
					value: '选项1',
					label: '姚峰'
				}, {
					value: '选项2',
					label: '摩根'
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
				optionsFive: [{
					value: '选项1',
					label: '姚峰'
				}, {
					value: '选项2',
					label: '摩根'
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
				list: [{
					name: "首页",
					href: '/',
				}, {
					name: "园区活动",
					href: '',
				}],
			}
		},
		computed: {
			...mapState([
				'bWidth',
				'width'
			])
		},
		components: {
			breadcrumb,
		}
	}
</script>

<style lang="less" scoped="scoped">
	.container {
		background: #F6F6F6;

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

		.searchBox {
			margin: 20px auto 40px;
			display: flex;

			.search {
				margin-right: 10px;
				width: 190px;
				height: 32px;

				.el-input {
					height: 32px;
				}

			}
		}

		.active-list {
			display: flex;
			flex-wrap: wrap;

			.active-item {
				// flex: 1;
				width: 31%;
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
	}
</style>
