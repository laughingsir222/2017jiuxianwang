<template>
  <div>
  	<header id="top">
      <div class="left">
          <b>酒仙网</b>
      </div>
     
        
      <input class="center" type="text"/>
        
      
      <p>搜索</p>
      
    </header>
    <main id="main">
      <swipe class="my-swipe">
        <swipe-item class="slide1" ><img :src="pic1"/></swipe-item>
        <swipe-item class="slide2"><img :src="pic2"/></swipe-item>
        <swipe-item class="slide3"><img :src="pic3"/></swipe-item>
        <swipe-item class="slide1" ><img :src="pic4"/></swipe-item>
        <swipe-item class="slide2"><img :src="pic5"/></swipe-item>
        <swipe-item class="slide3"><img :src="pic6"/></swipe-item>
        <swipe-item class="slide1" ><img :src="pic7"/></swipe-item>
        
      </swipe>
    </main>
    <ul id="pc">
      <li><img src="http://img07.jiuxian.com/bill/2017/0803/7cf71c707e3440a7bd5309c39cdddf28.jpg"/></li>
      <li><img src="http://img10.jiuxian.com/bill/2017/0803/d349fd45c1e94052b65e5fff8e6f57a1.jpg"/></li>
      <li><img src="http://img10.jiuxian.com/bill/2017/0803/73fe4e2dd6e14520a03d2ad0a39c55e5.jpg"/></li>
      <li><img src="http://img09.jiuxian.com/bill/2017/0803/c8a764c1245a4453b186d4438d030686.jpg"/></li>
      <li><img src="http://img10.jiuxian.com/bill/2017/0803/c66c156d26084c17b6d4a5fb6b6ed823.jpg"/></li>
      <li><img src="http://img10.jiuxian.com/bill/2017/0807/eac40ba3ecfd42658bb65fcc9dc67737.jpg"/></li>
      <li><img src="http://img07.jiuxian.com/bill/2017/0804/8de7fee914704b4fbffaa961eb76b865.jpg"/></li>
      <li><img src="http://img06.jiuxian.com/bill/2017/0803/07e046eb479d400ba54faed861c875b7.jpg"/></li>
      <li><img src="http://img09.jiuxian.com/bill/2017/0803/9e71244192854db997ea297838f283f9.jpg"/></li>
      <li><img src="http://img08.jiuxian.com/bill/2017/0803/93b70c2c231446d580cae635818eab7e.jpg"/></li>
    </ul>
    <div id="lastu">
      <img class="one" src="http://img06.jiuxian.com/bill/2017/0803/9109ac93943245b19bbdba70286f929c.jpg"/>
      <img class="two" src="http://img08.jiuxian.com/bill/2017/0803/b75a880834cd4c56b2dd38c526ecd595.jpg"/>
      <img class="three" src="http://img09.jiuxian.com/bill/2017/0803/ad42f07e519044f8a5b415e7b348da6f.jpg"/>
    </div>
    <section id="lb1">
      <img src="http://img06.jiuxian.com/bill/2016/1222/c1a96aafcaff438b81d529ed3bff9889.jpg"/>
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(data,index) in datalist"><p>{{data}}</p></div>
              
              
          </div>
         
          
      </div>
    </section>
    <div id="son">
      <lunbo></lunbo>
    </div>
    
    <div id="bk" >
      <h2>爆款推荐</h2>
    
      <ul id="detail">
        <li v-for="(data,index) in detailist" key={{data.commonProductInfo.pid}} @click="hclick(data.commonProductInfo.pid)">
          <span  :style='{background:data.promo[0].backColor}'>{{data.promo[0].name}}</span>
          <img :src="data.commonProductInfo.imgPath"/>
          <p>{{data.commonProductInfo.pname}}</p>
          <h5>{{data.commonProductInfo.jxPrice}}</h5>
        </li>
      </ul>
      
        <ul id="detail1" >
          <li v-for="(item,index) in spanlist" key={{item.commonProductInfo.pid}} @click="fclick(item.commonProductInfo.pid)">
           
            <img :src="item.commonProductInfo.imgPath"/>
            <p>{{item.commonProductInfo.pname}}</p>
            <h5>{{item.commonProductInfo.jxPrice}}</h5>
          </li>
        </ul>
      
      
      
        
    </div>
    <div id="dl">
      
      <p v-show="look" id="kao">亲，看完了</p>
      
      <p>北京酒仙网络科技有限公司版权所有</p>
      <p>北京市北京经济技术开发区经海五路58号院8幢4层</p>
      <p>400-617-9999</p>
      <p>关于我们</p>

      <div @click="gunba" id="gun" v-show="isComing"><i  class="iconfont icon-share"></i></div>
    </div>
    
      
  
    <footer id="footer">
      <ul>
        <router-link to="/home" tag="li" activeClass="active">
          <i class="iconfont icon-mobilephone"></i>
          <p>首页</p>
        </router-link>
        <router-link to="/list" tag="li" activeClass="active">
          <i class="iconfont icon-viewgallery"></i>
          <p>分类</p>
        </router-link>
        <router-link to="/zhc" tag="li" activeClass="active">
         
         <img src="http://img09.jiuxian.com/bill/2017/0803/3b7cd30799784517a418403835e0e402.png"/>
        </router-link>
        <router-link to="/cart" tag="li" activeClass="active">
          <i class="iconfont icon-cart"></i>
          <p>购物车</p>
        </router-link>
        
        <router-link to="/my" tag="li" activeClass="active">
          <i class="iconfont icon-service"></i>
          <p>我的酒仙</p>
        </router-link>
      </ul>
    </footer>
  </div>
  
</template>

<script>
import Vue from "vue";
import axios from "axios";
import router from "../router";
import "../assets/iconfont/iconfont.css";
import { Swipe, SwipeItem } from 'vue-swipe';
import "vue-swipe/dist/vue-swipe.css";
import swiper from "../assets/swiper-3.3.1.min.js";
import "../assets/swiper-3.3.1.min.css";
import lunbo from "./lunbo.vue";
Vue.component('lunbo',lunbo);
import { Indicator } from 'mint-ui';
import { Loadmore } from 'mint-ui';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


export default {
  data(){
    return{
      datalist:[],
      detailist:[],
      spanlist:[],
      fan:[],
      isComing:false,
      look:false,
      
      
      pic1:require("../assets/1.jpg"),
      pic2:require("../assets/2.jpg"),
      pic3:require("../assets/3.jpg"),
      pic4:require("../assets/4.jpg"),
      pic5:require("../assets/5.jpg"),
      pic6:require("../assets/6.jpg"),
      pic7:require("../assets/7.jpg")
    }
    
  },

  mounted(){
      Indicator.open('加载中...');
      axios.get("/jxw").then(res=>{
      	// console.log(res.data.hashMapList.length);
        //console.log(res.data.hashMapList)
      
       var oarr=res.data.hashMapList;
       console.log(oarr[0].commonProductInfo.pid)
  
       var newarr=[];
       var goodarr=[];
       for(var i=0;i<oarr.length;i++){
          if(oarr[i].promo==undefined){
               newarr.push(oarr[i])
          }
          if(oarr[i].promo!==undefined){
               goodarr.push(oarr[i])
          }
       }

     
       
       this.spanlist=newarr;
       this.detailist=goodarr;
      
       Indicator.close();
       
       

      })
      
      setTimeout(()=>{
        this.datalist=["酒界大咖齐聚酒仙，共贺酒仙网8周岁生日快乐","APP首单满100送100活动规则 点击查看!","老酒特卖 6瓶低至49元 领券更享折上折!"];
        this.$nextTick(()=>{
          
          var swiper = new Swiper('#lb1 .swiper-container', {
              pagination: '.swiper-pagination',
              paginationClickable: true,
              autoplay: 1500,
              loop:true,
              direction: 'vertical'
          })
        })
      },1000)

      window.addEventListener("scroll",()=>{
       
        if(document.body.scrollTop>=3000){
          this.isComing=true
        }else{
          this.isComing=false
        }
        if(document.body.scrollTop>=17200){
          this.look=true;
          
        }
        if(document.body.scrollTop<17500){
            this.look=false;
            return
          }

      })


  },
  destroyed(){
          removeEventListener("scroll",()=>{
                
                if(document.body.scrollTop>=3000){
                  this.isComing=true
                }else{
                  this.isComing=false
                }
                if(document.body.scrollTop>=17000){
                  this.look=true;
                  
                }
                if(document.body.scrollTop<17500){
                    this.look=false;
                    return
                }

          })
  },
  methods:{
      hclick(val){
       router.push(`/goods/${val}`);
       console.log(val)
      },
      fclick(val){
        router.push(`/goods/${val}`);
        console.log(val)
      },
      gunba(){
        document.body.scrollTop=0;
         
         
        
      }
  }
}
</script>

<style scoped lang="scss">
#top{
  width:100%;
  position:fixed;
  top:0;
  left:0;
  height:0.8rem;
  display: flex;
  justify-content: center;
  align-items:center;
  padding:0.08rem;
  background: rgba(0,0,0,0.2);
  
  color:#fff;
  z-index:10;
  .left{
    margin-right:1rem;
    border:1px solid #ccc;
    border-radius:40%;
    width:1rem;
    height:0.4rem;
    line-height: 0.4rem;
    font-size:0.2rem;
    text-align: center;
    color:red;
    background:#fff;

  }
  .center{
    margin-right:1.2rem;
    width:3.5rem;
    height:0.4rem;
    
    background:#fff;
    
  }
  p{
    font-size:0.2rem;
  }
}

#main{
  width:100%;
  .my-swipe{
    width:100%;
    height:4rem;
   

  }
  img{
    width:100%;
    height:4rem;
  }
}
#pc{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  li{
    list-style: none;
    width:20%;
    img{
      width:100%;
      display:block;
    }
  }
}
#lastu{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  img{
    display:block;
  }
  .one{
    width:100%;
  }
  .two{
    width:50%;
  }
  .three{
    width:50%;
  }
}

#lb1{
      padding:0.1rem;
      display:flex;
      width:100%;
      height:0.5rem;
      
      img{
        width:2rem;
        height:0.5rem;
      }
      .swiper-container {
              width: 90%;
              height: 100%;
      }
      .swiper-slide {
              text-align: center;
              font-size: 0.25rem;
              width:100%;
              background: #fff;

              /* Center slide text vertically */
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;
              align-items: center;
          }

}
#bk{
  width:100%;
  text-align: center;
  h2{
    width:100%;
    height:0.7rem;
    line-height: 0.6rem;
    text-align: center;
    padding-bottom:0.1rem;
    border-bottom:0.1rem solid #ccc; 
  }
  #detail{
    width:100%;
    display:flex;
    flex-wrap: wrap;
    li{
      width:50%;
      display:flex;
      align-items:center;
      flex-direction: column;
      height:5rem;
      padding:0.2rem;
      overflow: hidden;
      border-right:0.01rem solid #ccc;
      border-bottom:0.01rem solid #ccc;
      position:relative;
      img{
        width:100%;
      }
      p{
        width:100%;
        height:0.4rem;
        overflow:hidden;
        margin-bottom:0.1rem;
      }
      h5{
        width:100%;
        color:red;


      }
      span{
        width:1rem;
        height:0.4rem;
        border:0.01rem solid #ccc;
        text-align: center;
        position:absolute;
        top:0;
        left:0;

      }


    }
  }
  #detail1{
    width:100%;
    display:flex;
    flex-wrap: wrap;
    li{
      width:50%;
      display:flex;
      align-items:center;
      flex-direction: column;
      height:5rem;
      padding:0.2rem;
      overflow: hidden;
      border-right:0.01rem solid #ccc;
      border-bottom:0.01rem solid #ccc;
      
      img{
        width:100%;
      }
      p{
        width:100%;
        height:0.4rem;
        overflow:hidden;
        margin-bottom:0.1rem;
      }
      h5{
        width:100%;
        color:red;


      }
      


    }
  }
}
#dl{
  width:100%;
  height:6rem;
  background:#f3f5f6;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p{
    height:0.5rem;
    line-height:0.5rem;
    color:#3e3e3e;
    font-size:0.2rem;
  }
  #gun{
    position:fixed;
    bottom:2rem;
    right:0.6rem;
    z-index:5;
    font-size:0.5rem;
    width:1rem;
    height:1rem;
    background:#ccc;
    border-radius:50%;
    text-align: center;
    #kao{
      font-size:0.4rem;
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
    justify-content: center;
    li{
      text-align:center;
      padding:0 0.2rem;
      height:0.8rem;

    }
  }
}
.active{
  color:#eb3f3f;
}
</style>
