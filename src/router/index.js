import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWWorld from '../components/HelloWorld.vue'
import index from '../components/index.vue'
Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	
	routes: [{
		path: '/',
		name: 'index',
		component: index
	},{
		path: '/HelloWWorld',
		name: 'HelloWWorld',
		component: HelloWWorld
	}]
})