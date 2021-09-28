<template>
	<div class="container" :style="{width:bWidth?bWidth+'px':'100%'}">
		<img src="../../public/images/topBg.png" class="top-bg">
		<div class="top-info" :style="{width:width+'px'}">
			<div class="top-info-item" v-for="(item,index) in infoList" :key="index">
				<img :src="item.url">
				<div>
					<span style="font-size: 28px;color: #FF5400;">{{item.num}}+</span>
					<span>{{item.name}}</span>
				</div>
			</div>
		</div>
		<div style="height: 100px;">

		</div>
	</div>
</template>

<script>
	import img1 from '../../public/images/园区空间.png'
	import img2 from '../../public/images/园区项目.png'
	import img3 from '../../public/images/政策传递.png'
	import img4 from '../../public/images/招商入驻.png'
	import img5 from '../../public/images/公共服务.png'
	import img6 from '../../public/images/活动宣传.png'
	import {mapState} from "vuex";
	export default {
		name: 'index',
		props: {
			msg: String
		},
		data() {
			return {
				infoList: [{
					url: img1,
					num: 58600,
					name: '园区空间（m²）'
				}, {
					url: img2,
					num: 987,
					name: '园区项目（个）'
				}, {
					url: img3,
					num: 157,
					name: '政策传递（条）'
				}, {
					url: img4,
					num: 1256,
					name: '招商入驻（个）'
				}, {
					url: img5,
					num: 2566,
					name: '公共服务（条）'
				}, {
					url: img6,
					num: 66,
					name: '活动宣传（条）'
				}]
			}
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

<style scoped lang="less">
	.container {
		.top-bg {
			width: 100%;
			height: 943px;
			display: block;
		}

		.top-info {
			width: 100%;
			height: 137px;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			align-items: center;
			background-color: #fff;

			.top-info-item {
				display: flex;
				align-items: center;

				img {
					width: 60px;
					height: 60px;
					margin-right: 10px;
				}

				div {
					display: flex;
					flex-direction: column;
					font-size: 14px;
					color: #606060;
				}
			}
		}
	}
</style>
