<template>
    <div>
        <jiarunav></jiarunav>
        <!--<div>-->
        <!--<vue-speech lang="zh-CN" @onTranscriptionEnd="onEnd"/>-->
        <!--</div>-->
        <GoodsList></GoodsList>


    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';
    import GoodsList from '@/components/GoodsList';

    export default {
        components: {
            jiarunav,
            GoodsList,
        },
        name: "allhouse",
        methods: {}
    }
</script>

<style scoped>
    p {
        font-size: 20px;
        padding: 20px;
    }
</style>