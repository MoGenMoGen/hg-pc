<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="https://front.zlhuiyun.com/static/images/news.jpg" class="top-bg">
		<div :style="{width:bWidth?bWidth+'px':'100%'}" style="background-color: #ffffff;">
			<div class="top-info" :style="{width:width+'px'}">
				<breadcrumb :list="list"></breadcrumb>
			</div>
		</div>
		<div class="contentBox" :style="{width:width+'px'}" >
			<div class="contentLeft">
				一次性创业补贴+一次性创业岗位开发补贴
			</div>
			<div class="contentRight">
				<div class="title">
					申报成功企业名单
				</div>
				<div class="bodyList">
				   <div class="list">
						聚联科技有限公司
				   </div>
				   <div class="list">
					   骆兴轴承
				   </div>
				   
				</div>
			</div>
		</div>
		<div class="lastBtn" :style="{width:width+'px'}">
			<div class="btn1">
				立即收藏
			</div>
			<div class="btn2">
				立即申报
			</div>
		</div>
		</div>
</template>

<script>
	import breadcrumb from '../components/breadcrumb.vue'
	import {
		mapState
	} from "vuex";
	export default{
		name: 'innovateDetail',
		props: {
			msg: String,
		},
		data(){
			return{
				list:[{
					name:'首页',
					href:"/"
				},
				{
					name:'创新政策',
					href:"/innovate"
				},
				{
					name:'一次性创业补贴+一次性创业岗位开发补贴',
					href:""
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
		 .contentBox{
			margin:0px auto;
			margin-top:20px;
			display: flex;
			box-sizing: border-box;
			.contentLeft{
				width: 65%;
				background-color:#ffffff;
				height: 200px;
			}
			.contentRight{
				width: 25%;
				background-color: #ffffff;
				margin-left: 20px;
				min-height: 580px;
				.title{
					width: 100%;
					padding: 30px;
					box-sizing: border-box;
					font-size: 18px;
					font-weight: 400;
					color: #303030;
					border-bottom: 1px solid rgba(0,0,0,0.1);
				}
				.bodyList{
					padding-left:30px ;
					box-sizing: border-box;
					.list{
						margin-top: 30px;
						font-size: 14px;
						font-weight: 400;
						color: #606060;
					}
				}
			}
		 }
		 .lastBtn{
			 margin: 0px auto;
			 margin-top: 50px;
			 padding-bottom: 100px;
			 display: flex;
			 justify-content: center;
			 .btn1{
				 width: 100px;
				 height: 32px;
				 background: #FFFFFF;
				 border: 1px solid #EB6118;
				 border-radius: 3px;
				 font-size: 14px;
				 font-weight: 400;
				 color: #EB6118;
				 cursor: pointer;
				 text-align: center;
				 line-height: 32px;
			 }
			 .btn2{
				 width: 100px;
				 height: 32px;
				 background: #EB6118;
				 border-radius: 3px;
				 font-size: 14px;
				 font-weight: 400;
				 color: #FFFFFF;
				 cursor: pointer;
				 text-align: center;
				 line-height: 32px;
				 margin-left: 30px;
			 }
		 }
		}
</style>
