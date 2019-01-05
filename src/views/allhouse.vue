<template>
    <div>
    <jiarunav></jiarunav>
    <GoodsList></GoodsList>
    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';
    import GoodsList from '@/components/GoodsList';
    export default {
        components:{
            jiarunav,
            GoodsList,
        },
        name: "allhouse"
    }
</script>

<style scoped>

</style>