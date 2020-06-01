<template>
<div class="container py-5">
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input  v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input v-model="password" type="password" class="form-control"   placeholder="Password">
    </div>

  </div>
<div class="form-group">
    <div class="form-check">
      <input v-model="remeberme" class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Remember me
      </label>
    </div>
  </div>
  <button @click="logins"  type="button" class="btn btn-primary">Sign in</button>
</form>
</div>

</template>


<script>
export default {
data(){
    return{
        email:'',
        password:'',
        remeberme:  Boolean,
    }
},
methods:{
      logins() {
this.$store.dispatch('retrieveToken',{
     email:this.email,
      password:this.password,
      remeberme:this.remeberme,
})
.then(response=>{
   const status =
       (response.status);
      //redirect logic
      if (response.status == 200) {
        window.location = "/"
      }
})
  },
    // register(){
    //       axios.post('/api/auth/login',{
    //                 email:this.email,
    //                 password:this.password,
    //                 remeberme:this.remeberme
    //             }).then(response=>{
    //                 const token= response.data.access_token
    //                 localStorage.setItem('access_token', token)
    //                 const status = response.status;
    //                  if (response.status == 200) {
	// 						    window.location = "/"
	// 					}
    //             }).catch(error=>{
    //                 console.log(error)

    //             })

    // }
}
}
</script>



