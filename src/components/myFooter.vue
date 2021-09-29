<template>
	<div class="myFooter" :style="{width:bWidth?bWidth+'px':'100%'}">
		<div class="footer-inner" :style="{width:width+'px'}">
			<div class="footer-link" v-for="(item,index) in linkList" :key="index">
				<p>{{item.name}}</p>
				<span v-for="(newItem,newIndex) in item.linkItem" :key="newIndex">{{newItem.name}}</span>
			</div>
			<div class="footer-link">
				<p>联系我们</p>
				<span style="cursor: default;">联系方式：15099990000</span>
				<span style="cursor: default;">合作邮箱：253565288@qq.com</span>
				<span style="cursor: default;">公司地址：浙江省宁波镇海区</span>
			</div>
			<div class="footer-link" style="display: flex;align-items: center;">
				<img src="https://pic4.zhimg.com/80/v2-2e577a79b55b40a442e1f0523a3e0fcf_720w.png">
				<span>小程序码</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		name: 'myFooter',
		props: {

		},
		data() {
			return {
				linkList: [{
					name: '政策支持',
					linkItem: [{
						name: '载体地图',
						link: '/'
					}, {
						name: '创新政策',
						link: '/'
					}, {
						name: '双创活动',
						link: '/'
					}]
				}, {
					name: '创客支持',
					linkItem: [{
						name: '资源平台',
						link: '/'
					}, {
						name: '成果转化',
						link: '/'
					}, {
						name: '投融资服务',
						link: '/'
					}]
				}, {
					name: '资源服务',
					linkItem: [{
						name: '导师服务',
						link: '/'
					}, {
						name: '优质项目',
						link: '/'
					}, {
						name: '人才公寓',
						link: '/'
					}]
				}, {
					name: '关于我们',
					linkItem: [{
						name: '新闻资讯',
						link: '/'
					}, {
						name: '关于我们',
						link: '/'
					}]
				}]
			}
		},
		watch: {
			$route() {

			},
		},
		mounted() {

		},
		methods: {
		},
		computed: {
			...mapState([
				'bWidth',
				'width'
			])
		},
	}
</script>

<style lang="less" scoped>
	.myFooter {
		background-color: #303030;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 0;
		.footer-inner {
			display: flex;
			justify-content: space-between;
			.footer-link {
				display: flex;
				flex-direction: column;
				p {
					font-size: 14px;
					color: #fff;
					margin-bottom: 20px;
				}
				span {
					font-size: 12px;
					color: #fff;
					opacity: 0.5;
					margin-bottom: 20px;
					cursor: pointer;
				}
				span:last-child {
					margin-bottom: 0;
				}
				img {
					width: 127px;
					height: 127px;
					margin-bottom: 10px;
				}
			}
		}
	}
</style>
