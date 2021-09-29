<template>
	<div class="common-title" ref="commonTitle">
		<span>{{titleCN}}</span>
		<el-divider>{{titleEN}}</el-divider>
		<div class="common-bottom"></div>
	</div>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		name: 'commonTitle',
		props: {
			titleCN: {
				default: '',
				type: String
			},
			titleEN: {
				default: '',
				type: String
			},
			color: {
				default: '#fff',
				type: String
			}
		},
		data() {
			return {
				
			}
		},
		watch: {
		},
		mounted() {
			this.$refs.commonTitle.style.setProperty('--color',this.color)
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
	.common-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		--color: '#fff';
		span {
			font-size: 30px;
			color: #303030;
		}
		.el-divider {
			font-size: 14px;
			color: #909090;
			margin: 10px 0;
		}
		.el-divider__text {
			background-color: var(--color);
		}
		.common-bottom {
			width: 83px;
			height: 2px;
			background-color: #FF5400;
			margin-bottom: 40px;
		}
	}
</style>
