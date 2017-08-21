<template>
  <div>
  	<detail-header ywcolor="#de4943" msg="商品列表"></detail-header>
  	<!-- <p>{{$route.params.ppid}}</p> -->
  	<ul id="list">
  		<li><p>综合</p></li>
  		<li><p>销量</p></li>
  		<li><p>价格</p></li>
  		<li><i class="iconfont icon-category"></i></li>
  	</ul>
  	<ul id="fan"   v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="0"
	  infinite-scroll-immediate-check="false">
	     <li v-html="msg"></li>
	     
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import "../assets/iconfont/iconfont.css";
import axios from "axios";
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
export default {
  data(){
  	return{
  		msg:"",
  		current:2
  	}
  },
  mounted(){
       axios.get(`/jiu?id=${this.$route.params.ppid}&page=${this.current}`).then(res=>{
       	//console.log(res.data);
       	// res.data = res.data.replace(/<script[^>]*?>[\s\S]*?<\/script>/i, "<p></p>");
        // res.data = res.data.replace(/<input((?!type).)*type=["']?.*["']?[^>]*[/]?/i, "<p></p>")
        //<input((?!type).)*type=["']?.*["']?[^>]*[/]?>
       	this.msg=res.data;
       })
  },
  methods:{
  	loadMore(){
  		console.log('a')
  		this.current++;
  		console.log(this.current)
  		axios.get(`/jiu?id=${this.$route.params.ppid}&page=${this.current}`).then(res=>{
       	console.log(res.data);
       	// res.data = res.data.replace(/<input((?!type).)*type=["']?.*["']?[^>]*[/]?/i, "<p></p>")
       	// res.data = res.data.replace(/<script[^>]*?>[\s\S]*?<\/script>/i, "<p></p>");
       	this.msg+=res.data;
       })
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
#fan{
  list-style: none;
  .clearfix{
    border-bottom:1px solid #ccc;
  }
}
#list{
	list-style:none;
  padding:0.2rem;
  border-bottom:1px solid #ccc;
	width:100%;
	height:0.8rem;
	display:flex;
	justify-content:space-between;
	align-items:center;
	li{
       text-align: center;
       padding:0.25rem;
	}
}
</style>



