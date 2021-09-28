<template>
	<div class="myHeader" :style="{width:bWidth?bWidth+'px':'100%'}">
		<div class="header-inner" :style="{width:width+'px'}">
			<div class="nav">
				<img src="../../public/images/LOGO.png">
				<ul class="nav-tab">
					<li v-for="(item,index) in navList" :key="index" :class="{'active':activeIndex==index}"
						@click="handleSelect(index,item.href)">{{item.name}}</li>
				</ul>
			</div>
			<div class="login">
				<div class="btn" v-if="!isLogin" @click="isLogin=true">登录</div>
				<div class="info" v-if="isLogin">
					<img src="../../public/images/LOGO.png">
					<span>15888888888<img src="../../public/images/arrowDownW.png"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from "vuex";
	export default {
		name: 'myHeader',
		props: {

		},
		data() {
			return {
				activeIndex: 0,
				navList: [{
					name: '首页',
					href: '/'
				}, {
					name: '园区招商',
					href: '/'
				}, {
					name: '创新政策',
					href: '/'
				}, {
					name: '园区活动',
					href: '/'
				}, {
					name: '供需平台',
					href: '/'
				}, {
					name: '科技资源',
					href: '/'
				}, {
					name: '投融资服务',
					href: '/'
				}, {
					name: '智慧党建',
					href: '/'
				}, {
					name: '新闻资讯',
					href: '/'
				}, {
					name: '关于我们',
					href: '/'
				}],
				isLogin: false
			}
		},
		watch: {
			$route() {

			},
		},
		mounted() {
			
		},
		methods: {
			handleSelect(index, href) {
				this.activeIndex = index
				this.$router.push(href)
			},
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
	.myHeader {
		background-color: rgba(0, 0, 0, 0.4);
		height: 82px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		.header-inner {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.nav {
				display: flex;
				align-items: center;

				img {
					width: 46px;
					height: 47px;
					margin-right: 30px;
				}

				.nav-tab {
					display: flex;
					align-items: center;

					li {
						width: 90px;
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

			}

			.login {
				.btn {
					width: 76px;
					height: 32px;
					line-height: 32px;
					text-align: center;
					color: #fff;
					background-color: #EB6118;
					border-radius: 5px;
					font-size: 16px;
					cursor: pointer;
				}

				.info {
					display: flex;
					align-items: center;
					position: relative;
					font-size: 16px;
					color: #fff;
					cursor: pointer;

					img {
						width: 39px;
						height: 39px;
						border-radius: 50%;
						margin-right: 10px;
					}

					span {
						display: flex;
						align-items: center;

						img {
							width: 18px;
							height: 10px;
							border-radius: 0;
							margin-right: 0;
							margin-left: 10px;
						}
					}
				}
			}
		}
	}
</style>
