<template>
    <div>
        <jiarunav></jiarunav>
        <GoodsDetail></GoodsDetail>
    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';
    import GoodsDetail from '@/components/GoodsDetail';
    export default {
        components:{
            jiarunav,
            GoodsDetail,
        },
        name: "house"
    }
</script>

<style scoped>

</style>