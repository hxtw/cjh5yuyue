import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: function(resolve){
        require(['../components/index.vue'],resolve)
      }
    },
    {
      path: '/information',
      name: 'information',
      component: function(resolve){
        require(['../components/healthInformation.vue'],resolve)
      }
    },
    {
      path: '/setMeal',
      name: 'setMeal',
      component: function(resolve){
        require(['../components/setMeal.vue'],resolve)
      }
    },
    {
      path: '/branch',
      name: 'selectBranch',
      component: function(resolve){
        require(['../components/selectBranch.vue'],resolve)
      }
    },
  ]
})