<template>
	<div class="container">
		<img src="https://admin.zlhuiyun.com/storage/202011/30/hsTpZQN09fkqlqPjEdqhp6Oye6FQ2u8b.png">
		<ul class="nav">
			<li v-for="(item,index) in navList" :key="index" :class="{active:activeIndex==index}" @click="handleSelect(index,item.href)">{{item.name}}</li>
		</ul>
		<el-button>登录</el-button>
	</div>
</template>


<script>
	export default {
		name: 'header',
		props: {

		},
		data() {
			return {
				activeIndex: 0,
				navList: [{
					name: '首页',
					href: '/'
				},{
					name: '园区招商',
					href: '/'
				},{
					name: '创新政策',
					href: '/'
				},{
					name: '园区活动',
					href: '/'
				},{
					name: '供需平台',
					href: '/'
				},{
					name: '科技资源',
					href: '/'
				},{
					name: '投融资服务',
					href: '/'
				},{
					name: '智慧党建',
					href: '/'
				},{
					name: '新闻资讯',
					href: '/'
				},{
					name: '关于我们',
					href: '/'
				}]
			}
		},
		methods: {
			handleSelect(index,href) {
				this.activeIndex = index
				this.$router.push(href)
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background-color: rgba(0,0,0,0.4);
		width: 100%;
		height: 82px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		.nav {
			display: flex;
			align-items: center;
			margin: 0 20px;
			li {
				width: 100px;
				text-align: center;
				color: #fff;
				font-size: 16px;
				cursor: pointer;
				padding: 10px 0;
			}
			.active {
				font-size: 18px;
				border-bottom: 2px solid #fff;
			}
		}
		img {
			width: 46px;
			height: 47px;
		}
	}
</style>
