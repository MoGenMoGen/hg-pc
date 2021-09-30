<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/resource.jpg" class="top-bg">
		<div style="width: 100%;background-color: #fff;">
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
			<div class="bodyRight">
				<industrialResources v-if="currentIndex==0"></industrialResources>
				<demandInfo v-if="currentIndex==1"></demandInfo>
				<serviceProvider v-if="currentIndex==2"></serviceProvider>
			</div>
		</div>
		<vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
	</div>
</template>

<script>
	import breadcrumb from '../components/breadcrumb.vue'
	import industrialResources from '../components/industrialResources.vue'
	import demandInfo from '../components/demandInfo.vue'
	import serviceProvider from '../components/serviceProvider.vue'
	import VueUeditorWrap from 'vue-ueditor-wrap'
	import {
		mapState
	} from "vuex";
	export default {
		name: 'supplyPlatform',
		props: {

		},
		data() {
			return {
				list: [{
					name: '首页',
					href: '/'
				}, {
					name: '供需平台',
					href: ''
				}],
				NavList: [
					'产业资源',
					'需求信息',
					'优质服务商'
				],
				currentIndex: 0,
				msg: '',
				myConfig: {
				  // 编辑器不自动被内容撑高
				  autoHeightEnabled: false,
				  // 初始容器高度
				  initialFrameHeight: 440,
				  // 初始容器宽度
				  initialFrameWidth: "100%",
				  // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
				  serverUrl: "https://www.ship88.cn/general/ueditor/exec",
				  // serverUrl: "https://www.ship88.cn/general/oss/upload",
				
				  UEDITOR_HOME_URL: "/UEditor/",
				  // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
				  // UEDITOR_HOME_URL:
				  //   process.env.NODE_ENV === "production"
				  //     ? "/static/ueditor/"
				  //     : "/static/ueditor/"
				},
			}
		},
		mounted() {
			if(this.until.getQueryString('typeId')) {
				this.currentIndex = this.until.getQueryString('typeId')
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.currentPage1 = val
			},
			changeIndex(index) {
				this.currentIndex = index
			}
		},
		components: {
			breadcrumb,
			industrialResources,
			demandInfo,
			serviceProvider,
			VueUeditorWrap
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
			justify-content: space-between;
			box-sizing: border-box;

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
				.rightList {
					background-color: #ffffff;
					margin-bottom: 20px;

					.listHead {
						padding: 30px;
						border-bottom: 1px solid rgba(0, 0, 0, 0.1);
						display: flex;
						font-size: 20px;
						font-weight: 400;
						color: #EB6118;
						align-items: center;

						span {
							margin-left: 10px;
						}
					}

					.listBody {
						padding: 30px;
						font-size: 14px;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #606060;
						text-indent: 2em;
					}
				}
			}
		}
	}
</style>
