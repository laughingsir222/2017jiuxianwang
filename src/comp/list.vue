<template>
  <div>
  	<detail-header ywcolor="#de4943" msg="选酒"></detail-header>
  	<div id="sear">
  		<div>
  			<input id="ok1" type="text" placeholder="飞天茅台"/>
  			<input  id="ok2" type="submit" value="搜索"/>
  		</div>
  	</div>
  	<ul id="search">
  		<li @click="hclick(1)">
  			<i class="iconfont icon-filter"></i>
  			<p>白酒</p>
  		</li>
  		<li @click="hclick1(2)">
  			<i class="iconfont icon-electronics"></i>
  			<p>葡萄酒</p>
  		</li>
  		<li @click="hclick2(4)">
  			<i class="iconfont icon-raw"></i>
  			<p>洋酒</p>
  		</li>
  	</ul>
  </div>
</template>

<script>
import Vue from "vue";
import "../assets/iconfont/iconfont.css";
import router from "../router";
export default {
  methods:{
  	hclick(val){
       router.push(`/drink/${val}`)
  	},
  	hclick1(val){
       router.push(`/drink/${val}`)
  	},
  	hclick2(val){
       router.push(`/drink/${val}`)
  	}
  }
}
</script>

<style scoped lang="scss">
*{
	padding:0;
	margin:0;
	box-sizing:border-box;
}
#sear{
	width:100%;
	height:1.2rem;
	display:flex;
	justify-content:center;
	align-items:center;
	div{  
		width:100%;
		height:100%;
		background:#e2e2e2;
		display:flex;
		justify-content: center;
		align-items:center;
		
         
		input{
			
            font-size: 0.3rem;
			border:none;
			text-align: center;

		}
		#ok1{
              width:50%;
              height:0.8rem;
              background:#fff;
		}
		#ok2{
			width:20%;
			height:0.8rem;
			background:#de4943;
		}
	}

}

#search{
	width:100%;
	list-style:none;
	display:flex;
	justify-content:center;
	margin-top:0.3rem;

	li{
        width:30%;
        padding:0.4rem;
        height:2rem;
        border:1px solid;
        text-align: center;
        font-size: 0.3rem;
	}
}
</style>
