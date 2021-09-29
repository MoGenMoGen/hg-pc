<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/park.jpg" class="top-bg">
		<div class="top-info" :style="{width:width+'px'}">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }" class="nav">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/park' }">园区招商</el-breadcrumb-item>
				<el-breadcrumb-item>深圳5G产业园</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>

<script>
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
				
			}
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
