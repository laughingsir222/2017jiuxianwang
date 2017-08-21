<template>
  <div id="all">
  	
  	<detail-header ywcolor="#de4943" msg="商品详情"></detail-header>
  	<div id="part1" v-if="goodsinfo">
  		<h2>{{goodsinfo.advWords}}</h2>
  		<!-- <span>{{goodsinfo.proBasicPromo[0].actAdv}}</span> -->
  		<p id="price">{{goodsinfo.price}}</p>
  	</div>
  	<div id="part2" v-if="goodsinfo">
  		<p id="one"><span>优惠</span><span class="ok1"><!-- {{goodsinfo.proBasicPromo[0].tagName}} --></span><span class="ok2">{{goodsinfo.advWords}}</span></p>
  		<p id="two"><span>金币</span><span class="ok3">赠送{{goodsinfo.goldCoinNum}}个金币</span></p>
  	</div>
  	<div id="part3">
  		<div class="qb">
  			<div class="ca">
  				<span>数量</span>
  				<div>
	  				<button @click="btnclick" class="left" v-model="jian" >-</button>
	  				<input type="text" v-model="sum" value="1"/>
	  				<button @click="btn2click" class="right" v-model="jia">+</button>
  				</div>
  			</div>
  			<div class="place">
  				<p>送至<span>辽宁</span></p>
  				
  			</div>
  		</div>
  		<div class="xb">
  			<p><img src="http://img08.jiuxian.com/bill/2016/1129/2f2973f1af9341e885c073353b1f2ade.png"/>店铺发货&售后</p>
  			<p><img src="http://img08.jiuxian.com/bill/2016/1129/570c079e749949da977fd08990cfd4a4.png"/>7天退换</p>
  		</div>
  	</div>
  	<div id="part4" v-if="starinfo">
  		<div class="up">
  		   <p>商品评价<span>({{starinfo.totalEval}}人评价)</span></p>
  		   <p>好评度{{starinfo.goodEval}}%</p>
  		</div>
  		<ul class="down">
  			<li class="son" v-for="(data,index) in list">
  				<p class="f1" style="display:flex;justify-content:space-between;"><span>{{data.userName}}</span><i>{{data.createTime}}</i></p>
  				<p class="f2">{{data.content}}</p>
  				<ul>
	  				<li id="pic" v-for="item in data.imageList" >
	  				   <img :src="item.bigImage" />
	  				</li>
  			  </ul>
  			</li>
  		</ul>
  	</div>
  	<footer id="footer">
  		<ul>
  		  <router-link to="/goods" tag="li" activeClass="active">
  		    <i class="iconfont icon-comments"></i>
  		    <p>联系卖家</p>
  		  </router-link>
  		  <router-link to="/goods" tag="li" activeClass="active">
  		    <i class="iconfont icon-store"></i>
  		    <p>店铺</p>
  		  </router-link>
  		  
  		  <router-link to="/cart" tag="li" activeClass="active" id="cart">
  		    <i class="iconfont icon-cart"></i>
  		    <p>购物车</p>
  		    <span v-if="isShow">{{msg}}</span>
  		  </router-link>
  		  
  		  <li>
  		     <button class="btn1" @click="hclick">加入购物车</button>
  		  </li>
  		  <li>
  		     <button class="btn2">立即购买</button>
  		  </li>
  		</ul>
  	</footer>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import {Toast} from "mint-ui";
import "../assets/iconfont/iconfont.css";
export default {
  data(){
  	return{
       goodsinfo:null,
       starinfo:null,
       list:[],
       jian:1,
       jia:1,
       sum:1,
       msg:'',
       isShow:false
  	}
  },
  mounted(){
    axios.get(`/jxw/goods?id=${this.$route.params.ywid}`).then(res=>{
    	console.log(res.data);
    	this.goodsinfo=res.data.productPromo;

    })
    axios.get(`/jxw/goods/pingjia?id=${this.$route.params.ywid}`).then(res=>{
    	console.log(res.data.proEvalList);
    	this.starinfo=res.data
    	this.list=res.data.proEvalList;
    	

    })

  },
  methods:{
  	hclick(){
  		if(this.msg!==''){
  			Toast({
	  		  message: '加入购物车成功',
	  		  position: 'middle',
	  		  duration: 5000
	  		});
  		}else{
  			console.log('err')
  		}
  		
  	},
  	btnclick(){
  		this.jian=this.sum;
  		this.jian--;
  		if(this.jian<1){
  			return false;
  		}
  		this.sum=this.jian;
  		this.msg=this.sum;
  		this.isShow=true;
  		console.log(this.jian)

  	},
  	btn2click(){
  		this.jia=this.sum;
  		this.jia++;
  		this.sum=this.jia;
  		this.msg=this.sum;
  		this.isShow=true;
  	}
  }
}
</script>

<style scoped lang="scss">

#all{
	width:100%;
	background:#f3f5f6;
   #part1{
   	width:100%;
   	height:2rem;
   	display:flex;
   	flex-direction: column;
   	align-items:left;
   	background:#fff;
   	margin-bottom:0.2rem;
   	color:#eb3f3f;
   	background:url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502179004387&di=17f4b87d9602422e5c40741787ee53a5&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F9%2F3%2F2014090310461853edc.jpg") no-repeat;
   	background-size:cover;
   	h2{
   		text-shadow:0.08rem 0.08rem 0.1rem grey;
   		font-size:0.3rem;
   		margin-bottom: 0.2rem;
   		color:white;
   	}
   }
   #part2{
   	width:100%;
   	padding:0.1rem;
   	background:#fff;
   	margin-bottom: 0.3rem;
   	#one{
   		width:100%;
   		height:0.5rem;
   		display:flex;
   		.ok1{
   			padding-left:0.3rem;
   		}

   	}
   	#two{
   		width:100%;
   		height:0.5rem;
   		display:flex;
   		.ok3{
   			padding-left:0.3rem;
   		}
   		
   	}

   }
   #part3{
   	width:100%;

   	.qb{
   		width:100%;
   		height:2rem;
   		background:#fff;
   		display:flex;
   		padding-top:0.3rem;
   		flex-direction: column;
   		.ca{
   			display:flex;
   			flex-direction: row;
   			div{
   				padding-left:0.3rem;
   				button{
   					width:0.4rem;
   					height:0.4rem;
   					background:#fff;
   					font-size:0.4rem;

   				}
   				input{
   					width:0.4rem;
   					height:0.4rem;
   					border:none;
   					font-size:0.3rem;
   					text-align:center;
   				}
   			}
   			span{
   				margin-right:0.2rem;
   			}
   		}
   		.place{
   			span{
   				padding-left:0.3rem;
   			}
   		}
   	}
   	.xb{
   		width:100%;
   		height:0.8rem;
   		background:#f3f5f6;
   		margin-bottom:0.3rem;
   		display:flex;
   		align-items:center;
   		justify-content: center;

   	}
   }
   #part4{
   		width:100%;
   		background:#fff;
   		.up{
   			width:100%;
   			padding:0.1rem;
   			display:flex;
   			justify-content: space-between;
   			align-items:center;
   			border-bottom:1px solid #ccc;
   		}
   		.down{
   			width:100%;

   			.son{
   				width:100%;
   				padding:0.1rem;
   				display:flex;
   				flex-wrap: wrap;
   				flex-direction: row;
   				border-bottom: 1px solid #ccc;
          ul{
            width:100%;
            #pic{
              overflow: hidden;
               img{
                   float:left;
                   width:2rem;
                   height:2rem;
               }

            }
          }

   				img{
   					width:2rem;

   				}
   				

   				.f1{
   					width:100%;
   					display:flex;
   					flex-direction: row;
   					justify-content: space-between;
   					span{
   						font-size:0.24rem;
   						color:#3e3e3e;
   					}
   					i{
   						font-size:0.15rem;
   					}

   				}

   			}
   		}
   	}
}
#footer{
  z-index:10;
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  background:#f3f5f6;
  border-top:1px solid;

  ul{
    list-style:none;
    width:100%;
    padding:0.1rem;
    display:flex;
    flex-direction: row;
    justify-content: center;
    li{
      text-align:center;
      padding:0 0.1rem;
      height:1rem;


      button{
      	width:1.4rem;
      	height:0.6rem;
      	border:1px solid;
      	font-size:0.26rem;
      	color:#fff;
      	

      }
      .btn1{
      		background:#fc5a5a;
      }
      .btn2{
      		background:#3c3f51;
      }
    }
  }
  #cart{
  	position:relative;
  	span{
  		width:0.4rem;
  		height:0.4rem;
  		background:#fc5a5a;
  		border-radius:50%;
  		color:#fff;
  		position:absolute;
  		top:0;
  		left:0.5rem;

  	}
  }
}
</style>
