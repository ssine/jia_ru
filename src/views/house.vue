<template>
    <div>
        <jiarunav></jiarunav>
        <!--<GoodsDetail></GoodsDetail>-->
        <swiper></swiper>
    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';
    import GoodsDetail from '@/components/GoodsDetail';
    import swiper from '@/components/goodsDetail/gallery.vue';
    export default {
        components:{
            jiarunav,
            GoodsDetail,
            swiper,
        },
        name: "house"
    }
</script>

<style scoped>

</style>