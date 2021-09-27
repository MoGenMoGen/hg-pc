<template>
	<div class="container">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
			 text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1">处理中心</el-menu-item>
		</el-menu>
	</div>
</template>


<script>
	export default {
		name: 'header',
		props: {

		},
		data() {
			return {
				activeIndex: '1',
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {}
</style>
