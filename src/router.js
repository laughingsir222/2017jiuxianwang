import Vue from "vue";
import VueRouter from "vue-router";
import home from "./comp/home.vue";
import goods from "./comp/goods.vue";
import list from "./comp/list.vue";
import zhc from "./comp/zhc.vue";
import cart from "./comp/cart.vue";
import my from "./comp/my.vue";
import lunbo from "./comp/lunbo.vue";
import user from "./comp/user.vue";
import regist from "./comp/regist.vue";
import zhuce from "./comp/zhuce.vue";
import drink from "./comp/drink.vue";
Vue.use(VueRouter);


const routes=[
 {path:"/",redirect:"/home"},
 {path:"/home",component:home},
 {path:"/goods/:ywid",component:goods},
 {path:"/list",component:list},
 {path:"/zhc",component:zhc},
 {path:"/cart",component:cart},
 {path:"/zhuce",component:zhuce},
 {path:"/drink/:ppid",component:drink},
 {path:"/my",component:my,
   children:[
        {
  			path:"user",
  			component:user
  		},
  		{
  			path:"regist",
  			component:regist
  		},
  		
  		{
  			path:"/my",
  			redirect:"/my/user"
  		}
   
   ]


},
 {path:"/lunbo",component:lunbo}
]

var router=new VueRouter({
	routes:routes
})

export default router;