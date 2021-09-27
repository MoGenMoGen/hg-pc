<template>
  <div class="hello">
	  <img src="https://admin.zlhuiyun.com/storage/202007/08/auGHQgxkcMnv81g5kCSyRbIQLumsGalb.jpg">
	  <img src="https://admin.zlhuiyun.com/storage/202007/08/auGHQgxkcMnv81g5kCSyRbIQLumsGalb.jpg">
	  <router-link to="HelloWWorld">1111</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
	.hello {
		width: 100%;
		img {
			width: 100%;
			height: 650px;
			display: block;
		}
	}
</style>
