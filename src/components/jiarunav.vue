<template>
    <div>

        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="0">
                <router-link to="index">
                    <img :src="avatar"/>
                </router-link>
            </MenuItem>
            <MenuItem name="1">
                <router-link to="allhouse">
                    <Icon type="ios-home"/>
                    我要租房
                </router-link>
            </MenuItem>
            <MenuItem name="2">
                <router-link to="allrent">
                    <Icon type="md-briefcase"/>
                    我要求租
                </router-link>
            </MenuItem>
            <MenuItem id="center" name="3">
                <router-link to="login">
                    <Icon type="ios-people"/>
                    个人中心
                </router-link>
            </MenuItem>

        </Menu>
        <div>
            <vue-speech v-show="false" lang="zh-CN" @onTranscriptionEnd="onEnd"/>
        </div>

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
        },
        methods: {
            onEnd({lastSentence, transcription}) {
                // `lastSentence` is the last sentence before the pause
                // `transcription` is the full array of sentences
                console.log("voice");
                console.log(lastSentence);
                console.log(transcription);
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