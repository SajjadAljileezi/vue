<template>
<div>
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

        <div class="d-flex flex-row bd-highlight ">
  <div class="p-2 bd-highlight fl">Hi!</div>
  <div v-if="!loggedIn" class="p-2 bd-highlight"><router-link to="/signing"> Sign in </router-link></div> <span class="sl m-2">or</span>
  <div v-if="!loggedIn" class="p-2 bd-highlight">  <router-link to="/register"> Register </router-link></div>
</div>
<span class="sl m-2 d-none d-lg-block">|</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse " id="navbarCollapse" style="">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Daily Deals <span class="sr-only">(current)</span></a>
            </li>
            <span class="sl m-2 d-none d-lg-block">|</span>
            <li class="nav-item active">
              <a class="nav-link" href="#">Help & Contact</a>
            </li>

          </ul>
          <ul class="navbar-nav ">

             <li  @click="logout" v-if="loggedIn" class="nav-item">
              <router-link  to=""> Logout </router-link>
            </li>
          </ul>
        </div>
      </nav>
</div>
</template>


<script>
export default {
 computed:{
     loggedIn(){
         return this.$store.getters.loggedIn
     },

 },
      methods: {
         logout(){

this.$store.dispatch('destroyToken')
    .then(response=>{
            // location.reload()
    })
         }
     },

}
</script>



