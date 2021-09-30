<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<div class="mark" v-if="popShow==true">

		</div>
		<div class="windowPop" v-if="windowShowOne==true">
			<div class="popHead">
				预约参观
				<span @click="popDown">x</span>
			</div>
			<div class="popBody">
				<div class="bodyLeft">
					<div class="list">
					 <div class="listTitle">
					 	<span >
					 		*
					 	</span>
						企业名称
					 </div>
					</div>
				</div>
			</div>
			<div class="popFoot">
				<div class="btn">
					取消
				</div>
				<div class="btn2">
					确认
				</div>
				
			</div>
		</div>
		<img src="https://front.zlhuiyun.com/static/images/park.jpg" class="top-bg">
		<div :style="{width:bWidth?bWidth+'px':'100%'}" style="background-color: #ffffff;">


			<div class="top-info" :style="{width:width+'px'}">
				<breadcrumb :list="list"></breadcrumb>
			</div>
		</div>
		<div class="contentHead" :style="{width:width+'px'}">
			<div class="list">
				<div class="leftImg">
					<img
						src="https://admin.zlhuiyun.com/storage/202103/25/qingdao1.4d2dd00a18dfd8c2fcac3a89650918f3af43919c (1).png">
				</div>
				<div class="right">
					<div class="title">
						{{info.name}}
					</div>
					<div class="item">
						<img src="../../public/images/地址.png">
						{{info.address}}
					</div>
					<div class="item">
						<img src="../../public/images/省级.png">
						{{info.level}}
					</div>
					<div class="item">
						<img src="../../public/images/园区.png">
						{{info.nature}}
					</div>
					<div class="item">
						<img src="../../public/images/面积.png">
						{{info.area}}
					</div>
					<div class="btn">
						<div class="btn1" @click="appointment">
							预约参观
						</div>
						<div class="btn1">
							申请入住
						</div>
						<div class="btn2">
							<img src="../../public/images/分享.png">
							分享
						</div>
					</div>
				</div>
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
				<div :id="`list${index}`" class="rightList" v-for="(item,index) in bodyList" :key="index">
					<div class="listHead">
						<div style="width:6px ; height: 20px;background-color: #EB6118 ;">

						</div>
						<span>{{item.title}}</span>

					</div>
					<div class="listBody">
						{{item.content}}
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
			msg: String,
		},
		data() {
			return {
				currentIndex: 0,
				popShow: false,
				windowShowOne:false,
				serve: [],
				bodyList: [{
					title: '空间详情',
					content: "20年多来，863计划始终瞄准世界高技术发展前沿，按照有所为、有所不为的原则，在事关国家长远发展和国家安全的重要高技术领域，以提高我国自主创新能力为宗旨，坚持战略性、前沿性和前瞻性，以前沿技术研究发展为重点，统筹部署高技术的集成应用和产业化示范，充分发挥高技术引领未来发展的先导作用。863计划经过20多年的实施，为我国高技术的起步、发展和产业化奠定了坚实基础。1986—2005年期间，国家累计投入863计划330亿元，承担863计划研究任务的科研人员超过15万名，约有500余家研究机构，300余所大专院校，近千家企业参与了863计划的研究开发工作。据不完全统计，20年来，863计划发表论文12万多篇，获得国内外专利8000多项，制定国家和行业标准1800多项。"
				}, {
					title: "入住条件",
					content: "大数据产业、人工智能产业"
				}, {
					title: "位置及服务",
					content: "详细地址： 河南省 新乡市 新乡县 新乡市新东产业集聚区新东大道国家863新乡科技产业园 ,联系人：zhangzhen, 联系电话：15898833333"
				}],
				NavList: [
					'空间详情',
					'入驻条件',
					'位置及联系'
				],
				list: [{
						name: "首页",
						href: '/',

					},
					{
						name: "园区招商",
						href: '/park',

					},
					{
						name: "深圳5G产业园",
						href: '',

					}
				],
				info: {
					name: "深圳5G产业园",
					address: "广东省 深圳市 福田区 深圳福田区创业大道1号",
					level: "省级",
					nature: "专业园区",

					area: "30000.00㎡"
				}
			}
		},
		computed: {
			...mapState([
				'bWidth',
				'width'
			])
		},
		mounted() {
			this.serve = this.bodyList[2].content.split(",")
		},
		components: {
			breadcrumb,


		},
		methods: {
			changeIndex(index) {
				this.currentIndex = index
				if (index == 0) {
					window.location.href = "#list0"
					let anchorElement = document.getElementById('list0');

					anchorElement.scrollIntoView({
						behavior: 'smooth'
					});

				}
				if (index == 1) {
					window.location.href = "#list1"
					let anchorElement = document.getElementById('list1');

					anchorElement.scrollIntoView({
						behavior: 'smooth'
					});
				}
				if (index == 2) {
					window.location.href = "#list2"
					let anchorElement = document.getElementById('list2');

					anchorElement.scrollIntoView({
						behavior: 'smooth'
					});
				}
			},
			appointment() {
				this.popShow = true
				this.windowShowOne=true
			},
			popDown(){
				this.popShow = false
				this.windowShowOne=false
			}
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.container {
		background: #F6F6F6;

		.windowPop {
			background-color: #ffffff;
			position: fixed;
			top: 30%;
			left: 50%;
			transform: translateX(-50%);
			z-index: 199;
			width: 800px;

			.popHead {
				padding: 30px;
				font-size: 20px;
				font-weight: 400;
				color: #303030;
				position: relative;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);

				span {
					font-size: 25px;
					position: absolute;
					right: 20px;
					top: 50%;
					transform: translateY(-50%);
					opacity: 0.7;
					cursor: pointer;
				}
			}
			.popBody {
			    padding: 32px;
				box-sizing: border-box;
				display: flex;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
				.bodyLeft{
					.list{
						.listTitle{
							font-size: 16px;
							font-weight: 400;
							color: #606060;
							font-family: Microsoft YaHei;
							span{
								font-size: 16px;
								font-weight: 400;
								color: #EB6118;
							}
						}
						
					}
				}
			}
			.popFoot{
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 40px 280px;
				box-sizing: border-box;
				.btn{
					width: 100px;
					height: 32px;
					background: rgba(235, 97, 24, 0);
					border: 1px solid #EB6118;
					border-radius: 3px;
					font-size: 14px;
					font-weight: 400;
					color: #EB6118;
					text-align: center;
					line-height: 32px;
					cursor: pointer;
				}
				.btn2{
					width: 100px;
					height: 32px;
					background: #EB6118;
					border-radius: 3px;
					font-size: 14px;
					font-weight: 400;
					color: #FFFFFF;
					text-align: center;
					line-height: 32px;
					margin-left:40px ;
					cursor: pointer;
				}
			}



		}

		.mark {
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.5;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 100;

		}

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

		.contentHead {
			margin: 20px auto;
			box-sizing: border-box;
			background-color: #ffffff;
			padding: 20px;

			.list {
				display: flex;

				.leftImg {
					width: 400px;
					height: 250px;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.right {
					margin-left: 30px;

					.title {
						font-size: 18px;
						font-weight: 400;
						color: #303030;
						margin-bottom: 20px;
					}

					.item {
						font-size: 14px;
						font-weight: 400;
						color: #909090;
						margin-top: 10px;
						display: flex;
						align-items: center;

						img {
							width: 13px;
							height: 15px;
							margin-right: 8px;

						}
					}

					.btn {
						display: flex;
						margin-top: 20px;

						.btn1 {
							width: 100px;
							height: 32px;
							background: #EB6118;
							border-radius: 3px;
							font-size: 14px;
							font-weight: 400;
							color: #FFFFFF;
							text-align: center;
							line-height: 32px;
							margin-right: 10px;
							cursor: pointer;
						}

						.btn2 {
							width: 100px;
							height: 32px;
							background: rgba(235, 97, 24, 0);
							border: 1px solid #EB6118;
							border-radius: 3px;
							font-size: 14px;
							font-weight: 400;
							color: #EB6118;
							display: flex;
							justify-content: center;
							align-items: center;
							cursor: pointer;

							img {
								width: 15px;
								height: 15px;
								margin-right: 5px;
							}
						}

					}
				}
			}
		}

		.contentBody {
			margin-top: 20px;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding-bottom: 184px;

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
