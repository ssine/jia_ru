<template>
    <div>
        <jiarunav></jiarunav>
        <rentalList></rentalList>


    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';
    import rentalList from '@/components/rentalList.vue';
    //
    export default {
        components: {
            jiarunav,
            rentalList,
        },
        name: "allhouse",
        methods: {},
        created: function () {

        },
    }
</script>

<style scoped>
    p {
        font-size: 20px;
        padding: 20px;
    }
</style>