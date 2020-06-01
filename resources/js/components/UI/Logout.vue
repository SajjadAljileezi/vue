<template>

</template>


<script>
export default {
created(){

this.$store.dispatch('destroyToken')
    .then(response=>{
            // location.reload()
    })

}}
</script>



