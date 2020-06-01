<template>
     <div >
<Nav />
<Search />
<Slider />
<Deals />
     </div>
</template>

<script>
import Nav from './UI/Nav'
import Search from './UI/Search'
import Slider from './UI/Slider'
import Deals from './UI/Deals'
    export default {
    components:{
            Nav,
            Search,
            Slider,
            Deals
      },
    }
</script>
