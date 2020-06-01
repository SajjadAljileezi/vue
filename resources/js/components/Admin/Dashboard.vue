<template>
    <div>
<div class="d-flex flex-row">
  <div   class="p-2"><p> Categories </p>
        </div>
  <div v-for="(account, index) in accounts" :key="account.id" class="p-2">   <a-input v-model="account.type" placeholder="Basic usage" /> </div>
  <div class="p-2"><a-button @click="openSeaseme " type="primary">
      +
    </a-button></div><div class="p-2"><a-button @click="addClient()" type="primary">
     Add
    </a-button></div>
</div>

  
   

    </div>
</template>
<script>
export default {


        data(){
 return{
     accounts:[{
         type:"",
     }],

        }
    },
    methods:{
        openSeaseme() {
				this.accounts.push({
                    type:"",
				});
            },
            addClient() {
				axios
					.post("/api/auth/catg", {
						accounts: this.accounts
					})
					.then(function(response) {
						const status = response.status;
						//redirect logic
						if (response.status == 200) {
							    window.location = "/api/auth/admin"
						}
                    })
                    .catch(e => {
        console.error(e);
      });
			}
    }
}
</script>
