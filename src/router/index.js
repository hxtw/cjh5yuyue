import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: function(resolve){
        require(['../components/HelloWorld.vue'],resolve)
      }
    },
    {
      path: '/test',
      name: 'test',
      component: function(resolve){
        require(['../components/test.vue'],resolve)
      }
    },
  ]
})
