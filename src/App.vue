<template>
  <div id="app">
	<myHeader></myHeader>
	<router-view></router-view>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue"

export default {
  name: 'app',
  components: {
	  myHeader,
  }
}
</script>

<style scoped="scoped" lang="less">
	#app {
		width: 100%;
		::-webkit-scrollbar {
		  width: 5px;
		  height: 1px;
		}
		::-webkit-scrollbar-thumb { //滑块部分
		  border-radius: 5px;
		  background-color: #b6b6b6;
		}
	}
</style>
