<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/park.jpg" class="top-bg">
		<div class="top-info" :style="{width:width+'px'}">
		     <breadcrumb :list='list'></breadcrumb>
		</div>
		<div class="searchBox" :style="{width:width+'px'}">
			<el-input class="search" placeholder="园区名称	" prefix-icon="el-icon-search" v-model="input1">
			</el-input>
			<el-select v-model="value1" placeholder="地区" class="search">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value2" placeholder="园区级别" class="search">
				<el-option v-for="item in optionsTwo" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-select v-model="value3" placeholder="园区类型" class="search">
				<el-option v-for="item in optionsThree" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-button type="danger" plain style="width: 73px;">重置</el-button>
		</div>
		<div class="contentList" :style="{width:width+'px'}">
			<div class="list" v-for="(item,index) in listInfo" :key="index" @click="toDetail">
				<div class="leftImg">
					<img
						src="https://admin.zlhuiyun.com/storage/202103/25/qingdao1.4d2dd00a18dfd8c2fcac3a89650918f3af43919c (1).png">
				</div>
				<div class="right">
					<div class="title">
						{{item.name}}
					</div>
					<div class="address">
						{{item.address}}
					</div>
					<div class="level">
						{{item.level}}
					</div>
					<div class="introduce">
						{{item.content}}
					</div>
					<div class="btn">
						了解详情
					</div>
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
		name: 'park',
		props: {
			msg: String
		},
		data() {
			return {
				list:[{
					name:"首页",
					href:'/',
				},{
					name:"园区招商",
					href:'',
				}
				],
				 currentPage1: 1,
				  pageSize:4, 
				input1: "",
				value1: "",
				value2: "",
				value3: "",
				 total:5,
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
				listInfo:[
					{
						name:"深圳5G产业园",
						address:"广东省 深圳市 福田区 深圳福田区创业大道1号",
						level:"省级",
						content:"深圳新一代产业园配套福田区“1+9+N”专项产业资金政策，包括招商引资、总部经济、科技创新..."
						
					},
					{
						name:"深圳5G产业园",
						address:"广东省 深圳市 福田区 深圳福田区创业大道1号",
						level:"省级",
						content:"深圳新一代产业园配套福田区“1+9+N”专项产业资金政策，包括招商引资、总部经济、科技创新..."
						
					},
					{
						name:"深圳5G产业园",
						address:"广东省 深圳市 福田区 深圳福田区创业大道1号",
						level:"省级",
						content:"深圳新一代产业园配套福田区“1+9+N”专项产业资金政策，包括招商引资、总部经济、科技创新..."
						
					},
					{
						name:"深圳5G产业园",
						address:"广东省 深圳市 福田区 深圳福田区创业大道1号",
						level:"省级",
						content:"深圳新一代产业园配套福田区“1+9+N”专项产业资金政策，包括招商引资、总部经济、科技创新..."
						
					},
					{
						name:"深圳5G产业园",
						address:"广东省 深圳市 福田区 深圳福田区创业大道1号",
						level:"省级",
						content:"深圳新一代产业园配套福田区“1+9+N”专项产业资金政策，包括招商引资、总部经济、科技创新..."
						
					},
				]

			}
		},
		computed: {
			...mapState([
				'bWidth',
				'width'
			])
		},
		methods:{
			handleCurrentChange(val){
				this.currentPage1=val
				this.listInfo =this.listInfo
			},
			toDetail(){
				this.$router.push('/parkDetail')
			}
		},
		components:{
			breadcrumb,
		}
		

	}
</script>

<style lang="less" scoped="scoped">
	.container {
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

		.contentList {
			margin: 0 auto;
			
			.list {
				display: flex;
				margin-bottom: 20px;

				.leftImg {
					width: 400px;
					height: 250px;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.right {
					padding: 20px 37px;
					box-sizing: border-box;

					.title {
						font-size: 18px;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #303030;
					
					}
					.address{
						font-size: 14px;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #909090;
						margin-top: 20px;
					}
					.level{
						font-size: 14px;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #909090;
						margin-top: 10px;
						
					}
					.introduce{
						font-size: 16px;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #606060;
						margin-top: 20px;
					}
					.btn{
						width: 100px;
						height: 32px;
						background: #EB6118;
						border-radius: 3px;
						font-size: 14px;
						font-family: Microsoft YaHei;
						font-weight: 400;
						color: #FFFFFF;
						margin-top: 42px;
						text-align: center;
						line-height: 32px;
					}
				}
			}
		}
		.footPage{
			display: flex;
			justify-content: center;
			margin: 44px 0 20px;
		}
	}
</style>
