<template>
	<div class="breadcrumb">
		<div class="breadcrumb-item" v-for="(item,index) in list" :key="index" @click="toPage(item.href)">
			<span :class="{'breadcrumb-item-no':item.href==''}">{{item.name}}</span>
			<span style="color: #909090;" v-if="item.href">></span>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		name: 'breadcrumb',
		props: {
			list: {
				type: Array,
				default: function() {
					return [{
						name: '首页',
						href: '/'
					}]
				}
			},
		},
		data() {
			return {
				
			}
		},
		watch: {
		},
		mounted() {
		},
		methods: {
			toPage(href) {
				this.$router.push(href)
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

<style lang="less" scoped>
	.breadcrumb {
		display: flex;
		align-items: center;
		.breadcrumb-item {
			font-size: 14px;
			color: #FF6818;
			cursor: pointer;
			span {
				margin-right: 10px;
			}
			.breadcrumb-item-no {
				color: #909090;
				cursor: default;
			}
		}
	}
</style>
