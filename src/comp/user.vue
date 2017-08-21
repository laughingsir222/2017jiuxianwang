<template>
  <div>
    <section  id="sec">
    	<div id="ok1">
	    	<input id="username" v-model="text1" @blur="hinput1" type="text" placeholder="手机/用户名/手机号"/>
	    	<i  class="iconfont icon-accountfilling"></i>
    	</div>
    	<span class="ss" v-if="isShow">!请输入用户名</span>
    	<div id="ok2">
		  	<input id="password" @blur="hinput2" type="password" v-model="text2" placeholder="密码"/>
		  	<i class="iconfont icon-creditlevelfilling"></i>
	  	</div>
	  	<span class="ss" v-if="isShow1"  >!请输入密码</span>
	  	<div id="up">
		  	<input type="text" @blur="hinput3" v-model="text3"/>
		  	<img src="https://mlogin.jiuxian.com/captchaimg"/>
		  	<span @click="hclick">换一张</span>
	  	</div>
	  	<span class="ss" v-if="isShow2">!请输入验证码</span>
	  	<button id="btn" @click="btnclick">立即登录</button>
	  	<div id="mz">
	  		<router-link to="/zhuce" tag="p">免费注册</router-link>
	  		<span>找回密码</span>
	  	</div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import "../assets/iconfont/iconfont.css";
import  {Toast} from "mint-ui";
import axios from "axios";
import router from "../router";
export default {
	data(){
         return{
           isShow:false,
           isShow1:false,
           isShow2:false,
           text1:'',
           text2:'',
           text3:''
         }
	},
	mounted(){

	},

    methods:{
    	hclick(){
    		location.reload() 
    	},
    	hinput1(){
    		if(this.text1==''){
    			this.isShow=true
    		}
    		
    	},
    	hinput2(){
    		if(this.text2==''){
    			this.isShow1=true
    		}
    		
    	},
    	hinput3(){
    		if(this.text3==''){
    			this.isShow2=true
    		}
    		
    		
    	},
    	btnclick(){
    		if(this.text1!==''&&this.text2!==''&&this.text3!==''){
                   
					var username=this.text1;
					var password=this.text2;
					axios.post("/users/login4ajax",{
						username:username,
						password:password
					}).then(res=>{
						console.log(res.data)
						if(res.data.code==1){
							router.push("/home")
						}else{
			     			Toast({
				   	  		  message: '用户名密码不正确',
				   	  		  position: 'middle',
				   	  		  width:'3rem',
				   	  		  duration: 5000
				   	  		});
						}

					}).catch(err=>{
						console.log('err')
					})
					
	     			
    		}else{
     			Toast({
	   	  		  message: '用户名密码不能为空',
	   	  		  position: 'middle',
	   	  		  width:'3rem',
	   	  		  duration: 5000
	   	  		});
    		}

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
#sec{
	width:100%;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	align-items:center;
	padding:0.2rem 0.3rem;
    #ok1{
    	width:100%;
    	position:relative;
    		#username{
    	       width:100%;
    	       height:0.8rem;
    	       margin-bottom: 0.4rem;
    	       text-align: center;
    	       font-size:0.28rem;
    		}
    		i{
    			position:absolute;
    			top:0.2rem;
    			left:0.1rem;
    		}
    }
    #ok2{
    	width:100%;
    	position:relative;
    		#password{
    			width:100%;
    	         height:0.8rem;
    	         margin-bottom: 0.4rem;
    	          text-align: center;
    	       font-size:0.28rem;
    		}
    		i{
    			position:absolute;
    			top:0.2rem;
    			left:0.1rem;
    		}
    }
	
	
	#up{
		width:100%;
		 height:0.8rem;
		 margin-bottom: 0.4rem;
		 display:flex;
		 input{
		 	width:35%;
		 	height:0.8rem;
		 	text-align: center;
    	    font-size:0.28rem;

		 }
		 img{
		 	width:40%;
		 }
		 span{
		 	width:15%;
		 }

	}
	#btn{
		width:100%;
		 height:0.6rem;
		 margin-bottom: 0.2rem;
		 font-size:0.3rem;
		 background: #DE4B45;
		 border-radius:4%;
		 border: none;
		 color:#fff;

	}
	#mz{
		width:100%;
		margin-top: 0.4rem;
		display:flex;
		justify-content:space-between;
		
		p{
			flex:1;
			margin-right:2.6rem;
			text-decoration: underline;
		}
		span{
			flex:1;
			text-decoration: underline;
		}
	}
	.ss{
		color:red;
		font-size:0.23rem;
		text-align:left;
		display:block;
	}
}


</style>
