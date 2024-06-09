import UserLogin from '@/views/user/UserLogin.vue'
import { createRouter, createWebHistory } from 'vue-router'
import UserForgetPwd from '../views/user/UserForgetPwd.vue'
import UserRegister from "@/views/user/UserRegister.vue";
import LostForm from "@/views/lost/LostForm.vue";
import Home from "@/views/home/Home.vue";
import AboutUs from "@/views/About.vue";
import LostList from "@/views/lost/lostList/LostList.vue";
import FoundForm from "@/views/Found/FoundForm.vue";
import FoundList from "@/views/Found/FoundList.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      meta:{
        title: '校园失物招领管理'
      },
      component: Home
    },
    {
      path:'/about',
      name:'about',
      meta:{
        title: "关于"
      },
      component: AboutUs
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
    },
    {
      path:'/lost',
      name:'lostList',
      meta:{
        title: "失物处"
      },
      component: LostList
    },
    {
      path: '/lost/form',
      name: 'lostForm',
      meta:{
        title: "填写失物表"
      },
      component:LostForm
    },
    {
      path: '/found/form',
      name: 'foundForm',
      meta:{
        title: "填写招领表"
      },
      component:FoundForm
    },
    {
      path: '/found',
      name: 'foundList',
      meta:{
        title: "招领处"
      },
      component:FoundList
    },


  ]
})
//router设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
}
)
export default router
