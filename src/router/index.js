// import Vue from "vue";
// import  VueRouter from 'vue-router'
// import HelloWord from "../components/HelloWorld.vue";

// Vue.use(VueRouter);

// const router = new VueRouter({
//      mode:'history', 
//     routes :[
//         {
//           path: "/",
//           name:'HelloWord',
//           component: HelloWord,
//         },
//         // {
//         //   path: "/Signup",
//         //   name:'anout',
//         //   component: () => import("../view/Signup.vue"),
//         // },
//       ]
// })
// //5.导入路由实例
// export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWord from "../components/HelloWorld.vue";
import Signup from '../view/signup.vue'
import NotFound from '../view/notFound.vue'
import ArrayMerging from '../view/arrayMerging.vue'
 

Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    name: 'HelloWord', 
    component: HelloWord,

  },
  {
    path: '/signup',
    name: 'signup', 
    component: Signup ,
    beforeEnter(to, from, next) {
      console.log(to,from,'ffffaaaa');
      if (to.path === '/HelloWord') {
          next()
      } else {
          next('/notFound')
      }
  }
  },
  {
    path: '/notFound', 
    name: 'notFound', 
    component: NotFound 
  },
  {
    path:'/arrayMerging',
    name: 'arrayMerging', 
    component: ArrayMerging 
  }
]
 
// router.beforeEach((to,from,next)=>{
	
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
export default router