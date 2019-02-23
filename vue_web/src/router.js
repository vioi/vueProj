import Vue from "vue";
import Router from "vue-router";
/*import HomeContainer from '@/views/HomeContainer.vue'
import MemberContainer from '@/views/MemberContainer.vue'
import ShopcarContainer from '@/views/ShopcarContainer.vue'
import SearchContainer from '@/views/SearchContainer.vue'*/
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'
import PhotoList from '@/components/photo/PhotoList.vue'
import PhotoInfo from '@/components/photo/PhotoInfo.vue'
import GoodList from '@/components/good/GoodList.vue'
import GoodInfo from '@/components/good/GoodInfo.vue'
import GoodDesc from '@/components/good/GoodDesc.vue'
import GoodComment from '@/components/good/GoodComment.vue'

//路由懒加载
const HomeContainer = () => import('@/views/HomeContainer.vue')
const MemberContainer = () => import('@/views/MemberContainer.vue')
const ShopcarContainer = () => import('@/views/ShopcarContainer.vue')
const SearchContainer = () => import('@/views/SearchContainer.vue')


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect:"/home",
    },
    {
      path: "/home",
      component:HomeContainer,
      meta:{
        title:"首页"
      }
    },
    {
      path: "/member",
      component:MemberContainer,
      meta:{
        title:"会员中心"
      }
    },
    {
      path: "/shopcar",
      component:ShopcarContainer,
      meta:{
        title:"购物车"
      }
    },
    {
      path: "/search",
      component:SearchContainer,
      meta:{
        title:"搜索"
      }
    },
    {
      path: "/home/newsList",
      component:NewsList,
      meta:{
        title:"新闻资讯"
      }
    },
    {
      path: "/home/newsinfo/:id",
      component:NewsInfo,
      meta:{
        title:"新闻详情"
      }
    },
    {
      path: "/home/photoList",
      component:PhotoList,
      meta:{
        title:"图片分享"
      }
    },
    {
      path: "/home/photoInfo/:id",
      component:PhotoInfo,
      meta:{
        title:"图片详情"
      }
    },
    {
      path: '/home/goodList',
      component:GoodList,
      meta:{
        title:"商品列表"
      }
    },
    {
      path: '/home/goodInfo/:id',
      component:GoodInfo,
      name:'goodInfo',
      meta:{
        title:"商品详情"
      }
    },
    {
      path: '/home/goodDesc/:id',
      component:GoodDesc,
      name:'goodDesc',
      meta:{
        title:"商品详情"
      }
    },
    {
      path: '/home/goodComment/:id',
      component:GoodComment,
      name:'goodComment',
      meta:{
        title:"商品评论"
      }
    }
  ],
  linkActiveClass:"mui-active"
});
