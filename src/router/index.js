import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import park from '../pages/park.vue'
import parkDetail from '../pages/parkDetail.vue'
import newsinfo from '../pages/newsinfo.vue' 

import supplyPlatform from '../pages/supplyPlatform.vue'

import innovate from '../pages/innovate.vue'
import innovateDetail from '../pages/innovateDetail.vue' 

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
		},
		{
			// 新闻资讯
			path: '/newsinfo',
			name: 'newsinfo',
			component: newsinfo
		},
		{

			// 供需平台
			path: '/supplyPlatform',
			name: 'supplyPlatform',
			component: supplyPlatform,
		},
		{

			// 创新政策
			path: '/innovate',
			name: 'innovate',
			component: innovate
		},
		{
			// 创新政策详情
			path: '/innovateDetail',
			name: 'innovateDetail',
			component: innovateDetail 
		}
	]
})
