<template>
  <div>
    
    <section id="sec">
       <router-view></router-view>
    </section>
   
  </div>
</template>

<script>
import Vue from "vue";
import router from "./router";
import "./assets/iconfont/iconfont.css";
Vue.component("detail-header",{
  template:`
  <div :style="{background:ywcolor}">
    <header style="width:100%;height:0.8rem;padding:0 0.1rem;display:flex;justify-content:space-between;align-items:center">
      <i class="iconfont icon-back" @click="goback" ></i>
      <span>{{msg}}</span>
      <i class="iconfont icon-navlist"></i>
    </header>
  </div>
  `,

  props:["ywcolor","msg"],
  methods:{
      goback(){
        router.go(-1)
      }
  }
})
export default {
  
}
</script>

<style lang="scss">
html,body{
  height:100%;
  font-size:0.3rem;
  
}
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}


</style>
