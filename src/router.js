import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TreeTable from './views/TreeTable.vue';
import UsageReport from './views/UsageReport/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tree-table',
      name: 'tree-table',
      component: TreeTable,
    },
    {
      path: '/usage-report',
      name: 'usage-report',
      component: UsageReport,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
