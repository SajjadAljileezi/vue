<template>
    <div class="mt-5">
        <div class="container">
<carousel
v-for="(product, index) in products" :key="index"
:items="6"
:stagePadding="2"
:margin="5"
:responsive="{0:{items:2,nav:false},600:{items:6,nav:false}}"

>
<router-link :to="product.id">
    <a-card  hoverable style="width: 100%">
    <img
      slot="cover"
      alt="example"
      :src="product.src"
    />
    <a-card-meta :title="product.title">
      <template slot="description">
       {{product.description}}
      </template>
    </a-card-meta>
  </a-card>
  </router-link>
</carousel>
<!-- Gallery  -->

</div>
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
    data() {
    return {
        products:[
           {id:'5',
           title:'Europe Street beat',
           description:'18.99',
                src:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

           }
        ],
        gallery:false,
      isHovering: false,
      value: 1,
    };
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
    },
  },
}
</script>
