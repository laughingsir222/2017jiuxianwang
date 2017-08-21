<template>
  <div>
  	<detail-header ywcolor="#de4943" msg="用户登录"></detail-header>
  	<ul id="he">
  		<router-link to="/my/user" tag="li" activeClass="act">帐号登录</router-link>
  		<router-link to="/my/regist" tag="li" activeClass="act">手机动态密码登录</router-link>
  	</ul>
  	<main>
  		<router-view></router-view>
  	</main>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  
}
</script>

<style scoped lang="scss">
*{
	list-style:none;
	box-sizing:border-box;
}

#he{
	width:100%;
	
	display:flex;
	justify-content:center;
	align-items:center;
	padding:0.2rem 0.5rem;
	li{
		padding:0 0.4rem;
		height:0.8rem;
		flex:1;
		
	}

}
.act{
	color:red;
}
</style>
