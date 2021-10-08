<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/activity.jpg" class="top-bg">
		<div :style="{width:bWidth?bWidth+'px':'100%'}" style="background-color: #ffffff;">
			<div class="top-info" :style="{width:width+'px'}">
				<breadcrumb :list='list'></breadcrumb>
			</div>
		</div>
		<div class="contentBody" :style="{width:width+'px'}">
			<div class="bodyLeft">
				<div class="leftNav" v-for="(item,index) in NavList" :key="index"
					:class="currentIndex==index?'active':''" @click="changeIndex(index)">
					<span>
						{{item}}
					</span>
				</div>
			</div>
			<div class="bodyRight" v-if="currentIndex==0">
				产业园区（cnyuanqu）是集聚的载体，其主要构成应有相关文化创意设计方面的企业，有提供高科技技术支持(如数字网络技术)的企业，有国际化的策划推广和信息咨询等中介机构；还有从事文化创意产品生产的企业和在文化经营方面富有经验的经纪公司等。这种相互接驳的企业集群，构成立体的多重交织的产业链环，对提高创新能力和经济效益都具有实际意义。而以行政区域划分或行业分割方式构建的创意产业园区，毕竟会受到传统利益格局和资源配置的影响，难以达到理想的要素
			</div>
			<div class="bodyRightTwo" v-if="currentIndex==1">
				<el-timeline :reverse="reverse" >
					<el-timeline-item v-for="(activity, index) in activities" :key="index" placement='top'
						:timestamp="activity.timestamp">
						{{activity.content}}
						
					</el-timeline-item>
				</el-timeline>
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
		name: 'aboutUs',
		props: {
			msg: String
		},
		data() {
			return {
				reverse: true,
				activities: [{
					content: '国家级孵化园区',
					timestamp: '2018-04-15'
				}, {
					content: '省级示范基地',
					timestamp: '2018-04-13'
				}, {
					content: '园区启动运营',
					timestamp: '2018-04-11'
				}],
				list: [{
					name: "首页",
					href: '/',
				}, {
					name: "关于我们",
					href: '',
				}],
				NavList: [
					'园区简介',
					'大事件年表',
				],
				currentIndex: 0,
			}
		},
		methods: {
			changeIndex(index) {
				this.currentIndex = index
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

		.contentBody {
			margin: 0 auto;
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding-bottom: 100px;

			.bodyLeft {
				transition: all 0.3s;

				.leftNav {
					cursor: pointer;
					width: 225px;
					height: 60px;
					background-color: #ffffff;
					line-height: 60px;
					box-sizing: border-box;
					font-size: 16px;
					font-weight: 400;
					color: #909090;
					margin-bottom: 10px;
					transition: all 0.3s;

					span {
						margin-left: 47px;
					}
				}

				.active {
					border-left: 6px solid #EB6118;
					color: #EB6118;
					box-sizing: border-box;
					transition: all 0.3s;

					span {
						margin-left: 41px;
					}
				}
			}

			.bodyRight {
				margin-left: 40px;
				width: 935px;
				min-height: calc(100vh - 668px);
				background-color: #ffffff;
				padding: 36px 34px;
				font-size: 14px;
				font-weight: 400;
				text-indent: 2em;
				color: #909090;
			}

			.bodyRightTwo {
				margin-left: 40px;
				width: 935px;
				min-height: calc(100vh - 668px);
				background-color: #ffffff;
				padding: 36px 34px;
			}
		}
	}
</style>
