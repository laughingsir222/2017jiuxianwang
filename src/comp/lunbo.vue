<template>
  <div>
  	<header id="first">
  		<div class="left">
  			<b>掌上秒拍</b>
  			<span>距结束</span>
  		</div>
  		<div class="right">
  			<span>更多商品等你来抢</span>
  		</div>
  	</header>
  	<div id="lb2">
	  	 <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-slider="index" v-for="(data,index) in looplist">
		        	<img :src="data.proImg"/>
			    	<p>{{data.proName}}</p>
			    	<h5>￥{{data.proPrice}}.00</h5>
			    	<h6 style="color:red;"><s>￥{{data.jxPrice}}</s></h6>
		        </div>
		        
		    </div>
		    
		</div>

  		
  	</div>
  	<ul id="tu">
  		<li><img src="http://img09.jiuxian.com/bill/2017/0727/7e7c289a0e47406880a62293fdc3f577.jpg"/></li>
  		<li><img src="http://img08.jiuxian.com/bill/2017/0727/8df9b0c9c1234f57950133c73690332c.jpg"/></li>
  		<li><img src="http://img09.jiuxian.com/bill/2017/0802/09e65de003c747139df378f3bb4c48e9.jpg"/></li>
  		<li><img src="http://img08.jiuxian.com/bill/2017/0727/fab572a023c64bc1b621fa3ed556d329.jpg"/></li>
  		<li><img src="http://img09.jiuxian.com/bill/2017/0807/c6738671250846a1b7ee98b14b69eed1.jpg"/></li>
  		<li><img src="http://img06.jiuxian.com/bill/2017/0727/6024e9e7fec84addaaeb8c05fc7f4c3d.jpg"/></li>
  	</ul>

  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import swiper from "../assets/swiper-3.3.1.min.js";
import "../assets/swiper-3.3.1.min.css";
Vue.directive("slider",function(el,binding,vnode){
   if(binding.value==vnode.context.looplist.length-1){
   	var swiper = new Swiper('#lb2 .swiper-container', {
   	    pagination: '.swiper-pagination',
   	    slidesPerView: 4,
   	    loop:true,
   	    paginationClickable: true,
   	    spaceBetween: 30
   	})
   }
})
export default {
  data(){
  	return{
  		looplist:[]
  	}
  },
  mounted(){

  	axios.get("/jxw/lb").then(res=>{
  		console.log(res.data.killProList);
  		this.looplist=res.data.killProList;
  		
  	})
  }
  
}
</script>

<style scoped lang="scss">
#first{
	width:100%;
	height:1rem;
	padding:0.2rem;
	display:flex;
	justify-content:space-between;
}
#lb2{
	
	.swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 0.2rem;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: left;
        P{
        	height:0.2rem;
        	line-height:0.2rem;
        	overflow:hidden;
        	margin-bottom: 0.1rem;
        }
        h5{
        	height:0.2rem;
        }



    }
}
#tu{
	width:100%;
	margin-top:0.1rem;
	li{
		width:100%;
		img{
			width:100%;
		}
	}
}

</style>
