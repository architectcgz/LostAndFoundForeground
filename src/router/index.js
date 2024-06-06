import UserLogin from '@/views/user/UserLogin.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserForgetPwd from '../views/user/UserForgetPwd.vue'
import Home from "@/views/home/Home.vue";
import UserRegister from "@/views/user/UserRegister.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/home',
      name:'home',
      meta:{
        title: '校园失物招领管理'
      },
      component: Home
    },
    {
      path: '/user/login',
      name: 'userLogin',
      meta: {
        title: '用户登陆页面'
      },
      component: UserLogin
    },
    {
      path: '/user/forget_pwd',
      name: 'userForgetPwd',
      meta: {
        title: '忘记密码'
      },
      component: UserForgetPwd
    },
    {
      path: '/user/register',
      name: 'userRegister',
      meta:{
        title: "用户注册"
      },
      component: UserRegister
    }
  ]
})
//router设置页面标题
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
}
)
export default router