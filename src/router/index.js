import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import park from '../pages/park.vue'
import parkDetail from '../pages/parkDetail.vue'
Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	
	routes: [{
		path: '/',
		name: 'index',
		component: index
	},
	{
		path: '/park',
		name: 'park',
		component: park
	},
	{
		path: '/parkDetail',
		name: 'parkDetail',
		component: parkDetail
	}]
})