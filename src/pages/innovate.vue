<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/news.jpg" class="top-bg">
		<div :style="{width:bWidth?bWidth+'px':'100%'}" style="background-color: #ffffff;">
			<div class="top-info" :style="{width:width+'px'}">
				<breadcrumb :list='list'></breadcrumb>
			</div>
		</div>
		<div class="headBtn" :style="{width:width+'px'}">
			<div class="btn">
				申请成为服务器
			</div>
		</div>
		<div class="headSearchBox" :style="{width:width+'px'}">
			<div class="searchList">
				<div class="listTitle">
					政策级别：
				</div>
				
				<div class="listContent" v-for="(item,index) in searchContent.zhengce" :key="index" @click="changeIndexOne(index)" :class="currentIndexOne==index?'active':''">
					{{item}}
				</div>
			</div>
			<div class="searchList">
				<div class="listTitle">
					所属部门：
				</div>
				<div class="listContent" v-for="(item,index) in searchContent.bumen" :key="index" @click="changeIndexTwo(index)" :class="currentIndexTwo==index?'active':''">
					{{item}}
				</div>
			</div>
			<div class="searchList">
				<div class="listTitle">
					政治类型：
				</div>
				<div class="listContent" v-for="(item,index) in searchContent.leixing" :key="index" @click="changeIndexThree(index)" :class="currentIndexThree==index?'active':''">
					{{item}}
				</div>
			</div>
			<div class="searchList">
				<div class="listTitle">
					政策标签：
				</div>
				<div class="listContent" v-for="(item,index) in searchContent.biaoqian" :key="index" @click="changeIndexFour(index)" :class="currentIndexFour==index?'active':''">
					{{item}}
				</div>
			</div>
		</div>
		<div class="bodyContent" :style="{width:width+'px'}">
			<div class="contentList" v-for="(item,index) in contentList" :key="index" @click="toDetail">
				<div class="listLeft">
					·
					<span>[{{item.type}}]</span>
					{{item.content}}
				</div>
				<div class="listRight">
					{{item.time}}
				</div>
			</div>
		</div>
		<div class="footPage">
		     <!-- <page-ination :total="total" :pageSize="pageSize" @changeP='pageChange'></page-ination> -->
		     <el-pagination
		       background
		       @current-change="handleCurrentChange"
		       :current-page.sync="currentPage1"
		       :page-size="pageSize"
		       layout="prev, pager, next, jumper"
		       :total="total">
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
		name: 'innovate',
		props: {
			msg: String
		},
		data() {
			return {
				currentIndexOne:0,
				currentIndexTwo:0,
				currentIndexThree:0,
				currentIndexFour:0,
				currentPage1:1,
				pageSize:4,
				 total:5,
				list: [{
						name: '首页',
						href: '/',

					},
					{
						name: '创新政策',
						href: '',

					}
				],
				searchContent: {
					zhengce: ['全部','国家级', '省级', '市级', '区县级'],
					bumen:['全部','发展和改革委员会', '工业和信息化部门', '科学技术部门', '商务部门','国务院','其他'],
					leixing:['全部','国家级', '省级'],
					biaoqian:['全部','科研平台', '中小企业发展', '战略规划', '民营经济','节能环保']
				},
				contentList:[
					{
						type:'创孵',
						content:'一次性创业补贴+一次性创业岗位开发补贴',
						time:'2020-11-01 至 2022-05-26'
					},
					{
						type:'创孵',
						content:'一次性创业补贴+一次性创业岗位开发补贴',
						time:'2020-11-01 至 2022-05-26'
					},
					{
						type:'创孵',
						content:'最新大学生创业政策集锦',
						time:'2020-11-01 至 2022-05-26'
					}
				]
			}
		},
		methods:{
			changeIndexOne(index){
				this.currentIndexOne=index
			},
			changeIndexTwo(index){
				this.currentIndexTwo=index
			},
			changeIndexThree(index){
				this.currentIndexThree=index
			},
			changeIndexFour(index){
				this.currentIndexFour=index
			},
			handleCurrentChange(val){
				this.currentPage1=val
			},
			toDetail(){
				this.$router.push('/innovateDetail')
			}
			
			
		},
		components: {
			breadcrumb,
		},
		computed: {
			...mapState([
				'bWidth',
				'width'
			])
		},
		
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

		.headBtn {
			padding: 30px 0 30px;
			margin: 0 auto;
			display: flex;
			justify-content: flex-end;

			.btn {
				text-align: center;
				line-height: 32px;
				width: 120px;
				height: 32px;
				background: #EB6118;
				border-radius: 3px;
				font-size: 12px;
				font-weight: 400;
				color: #FFFFFF;
				cursor: pointer;
			}
		}

		.headSearchBox {
			background-color: #ffffff;
			padding: 42px 32px;
			margin: 0 auto;
			box-sizing: border-box;
			.searchList {
				margin-top: 20px;
				display: flex;
				align-items: center;

				.listTitle {
					font-size: 14px;
					font-weight: 400;
					color: #606060;
				}

				.listContent {
					font-size: 14px;
					 padding: 8px 10px;
					text-align: center;
					
					font-weight: 400;
					color: #909090;
					margin-left: 10px;
					transition: all 0.3s;
					box-sizing: border-box;
					cursor: pointer;
				}
				.active{
					
					background: #0CC59E;
					font-size: 14px;
					font-weight: 400;
					color: #FFFFFF;
					text-align: center;
					transition: all 0.3s;
				}

			}
		}
		.bodyContent{
			margin: 20px auto;
			box-sizing: border-box;
			background-color: #ffffff;
			.contentList{
				padding: 30px;
				box-sizing: border-box;
				cursor: pointer;
				display: flex;
			    justify-content: space-between;
				border-bottom: 2px dashed rgba(0,0,0,0.1) ;
				.listLeft{
					font-size: 14px;
					font-weight: 400;
					color: #606060;
					
					span{
						font-size: 14px;
						font-weight: 400;
						color: #EB6118;
					}
				}
				.listRight{
					font-size: 14px;
					font-weight: 400;
					color: #909090;
				}
				
				
				
			}
		}
		.footPage{
			display: flex;
			justify-content: center;
			margin: 100px 0 0px;
			padding-bottom: 100px;
		}
	}
</style>
