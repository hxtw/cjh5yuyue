import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
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
      path: '/login',
      name: 'login',
      component: function(resolve){
        require(['../components/login.vue'],resolve)
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
      path: '/branchTime',
      name: 'choseBranchTime',
      component: function(resolve){
        require(['../components/choseBranchTime.vue'],resolve)
      }
    },
    {
      path: '/selectBranch',
      name: 'selectBranch',
      component: function(resolve){
        require(['../components/selectBranch.vue'],resolve)
      }
    },
    {
      path: '/myApp',
      name: 'myAppointment',
      component: function(resolve){
        require(['../components/myAppointment.vue'],resolve)
      }
    },
    {
      path: '/appDetails',
      name: 'appointmentDetails',
      component: function(resolve){
        require(['../components/appointmentDetails.vue'],resolve)
      }
    },
    {
      path: '/test',
      name: 'test',
      component: function(resolve){
        require(['../components/test/test.vue'],resolve)
      },
      children:[
        {path:'/',
        component: function(resolve){
            require(['../components/test/test.vue'],resolve)
          }
        },
        {path:'/test1',
          component: function(resolve){
            require(['../components/test/test1.vue'],resolve)
          }
        }]
    }
  ]
})
