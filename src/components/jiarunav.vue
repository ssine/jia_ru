<template>
    <div>

        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="4">
                <img :src="avatar"/>
            </MenuItem>
            <MenuItem name="1">
                <Icon type="ios-home"/>
                我要租房
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-briefcase"/>
                我要求租
            </MenuItem>
            <MenuItem id="center" name="3">
                <Icon type="ios-people"/>
                个人中心
            </MenuItem>

        </Menu>
    </div>
</template>
<script>
    import avatar from '@/images/logo.png';

    export default {
        data() {
            return {
                theme1: 'light',
                avatar: avatar,
            }
        }
    }


</script>

<style scoped>
    img {
        width: 40px;
        margin-top: 10px;
    }
    #center {
        float: right;
    }

</style>