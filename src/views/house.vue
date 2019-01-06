<template>
    <div>
        <jiarunav></jiarunav>
        <!--<GoodsDetail></GoodsDetail>-->
        <swiper :imgs="imgs"></swiper>
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
        name: "house",
        data() {
            return {
                imgs: [
                    "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large",
                    "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large",
                    "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large"
                ]
            }
        }
    }
</script>

<style scoped>

</style>