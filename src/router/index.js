import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import park from '../pages/park.vue'
import parkDetail from '../pages/parkDetail.vue'
import newsinfo from '../pages/newsinfo.vue'
import supplyPlatform from '../pages/supplyPlatform.vue'
import innovate from '../pages/innovate.vue'
import innovateDetail from '../pages/innovateDetail.vue'
import investService from '../pages/investService.vue'
import scienceResource from '../pages/scienceResource.vue'
import notice from '../pages/notice.vue'
import qualityProject from '../pages/qualityProject.vue'
import activity from '../pages/activity.vue'
import aboutUs from '../pages/aboutUs.vue'
import partyBuild from '../pages/partyBuild.vue'

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
	},
	{
		// 新闻资讯
		path: '/newsinfo',
		name: 'newsinfo',
		component: newsinfo
	},
	{
		// 投融资服务
		path: '/investService',
		name: 'investService',
		component: investService
	},
	{
		// 科技资源
		path: '/scienceResource',
		name: 'scienceResource',
		component: scienceResource
	},
	{
		// 通知公告
		path: '/notice',
		name: 'notice',
		component: notice
	},
	{
		// 优质服务
		path: '/qualityProject',
		name: 'qualityProject',
		component: qualityProject
	},
	{
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
	},
	{
		// 园区活动
		path: '/activity',
		name: 'activity',
		component: activity
	},
	{
		//关于我们
		path: '/aboutUs',
		name: 'aboutUs',
		component: aboutUs
	}
	,
	{
		//智慧党建
		path: '/partyBuild',
		name: 'partyBuild',
		component: partyBuild
	}

	]
})


