<template>
<div class="container py-5">
<form>
  <div class="form-row">
       <div class="form-group col-md-6">
      <label for="inputPassword4">Name</label>
      <input v-model="name" type="name" class="form-control" id="inputPassword4" placeholder="Name">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input  v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input v-model="password" type="password" class="form-control"   placeholder="Password">
    </div>

  </div>

  <button @click="register"  type="button" class="btn btn-primary">Sign in</button>
</form>
</div>

</template>


<script>
export default {
data(){
    return{
        email:'',
        password:'',
        name: '',
    }
},
methods:{
    register(){
          axios.post('/api/auth/register',{
                    email:this.email,
                    password:this.password,
                    name:this.name
                }).then(response=>{
                    const token= response.data.access_token
                    localStorage.setItem('access_token', token)
                    const status = response.status;
                     if (response.status == 200) {
							    window.location = "/"
						}
                }).catch(error=>{
                    console.log(error)

                })

    }
}
}
</script>



