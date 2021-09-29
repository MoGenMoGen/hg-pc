<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/park.jpg" class="top-bg">
		<div class="top-info" :style="{width:width+'px'}">
			<breadcrumb :list="list"></breadcrumb>
		</div>
	<!-- 	<div class="contentHead">
			<div class="list">
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
		</div> -->
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
		data(){
			return{
				list:[{
					name:"首页",
					href:'/',
					
				},
				{
						name:"园区招商",
					href:'/park',
					
				},
				{
					name:"深圳5G产业园",
					href:'',
					
				}]
			}
		},
		computed: {
			...mapState([
				'bWidth',
				'width'
			])
		},
		components:{
			breadcrumb,
		}
	}
</script>

<style lang="less" scoped="scoped">
	.container{
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
			.nav{
				color: #FF6818 !important;
			}
		
		}
	}
</style>
