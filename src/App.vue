<template>
  <div id="app" :style="{width:bWidth?bWidth+'px':'100%'}">
	<myHeader></myHeader>
	<router-view></router-view>
	<myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue"
import myFooter from "./components/myFooter.vue"
import {mapState} from "vuex";
export default {
  name: 'app',
  components: {
	  myHeader,myFooter
  },
  data(){
	return {
		bWidth:0,
		width:0,
	}  
  },
  mounted() {
  	this.getWidth()
  	window.onresize = () => {
  		this.getWidth()
  	}
  },
  methods: {
  	getWidth() {
  		let data = this.until.getWidth()
  		this.bWidth = data.bWidth
  		this.width = data.width
  		this.$store.commit('changeWidth',data)
  	}
  },
  computed: {
    ...mapState()
  },
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
