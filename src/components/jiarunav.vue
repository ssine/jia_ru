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
                    租房信息
                </router-link>
            </MenuItem>
            <MenuItem name="2">
                <router-link to="allrental">
                    <Icon type="md-briefcase"/>
                    求租信息
                </router-link>
            </MenuItem>
            <MenuItem id="center" name="3" @click.native="jump">
                    <Icon type="ios-people"/>
                    个人中心
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
                let search_str = lastSentence;
                if (search_str.search("房屋信息") !== -1) {
                    window.location.href = 'http://localhost:8888/allhouse'
                }
                if (search_str.search("求租信息") !== -1) {
                    window.location.href = 'http://localhost:8888/allrental'
                }
                if (search_str.search("搜索房屋") !== -1) {
                    let search_key = search_str.substr(4);
                    window.location.href = 'http://localhost:8888/allhouse?search_key=' + search_key;
                }
                if (search_str.search("搜索求租") !== -1) {
                    let search_key = search_str.substr(4);
                    window.location.href = 'http://localhost:8888/allrental?search_key=' + search_key;
                }
            },
            jump: function () {
                window.location.href='http://localhost:9999/#/stats';
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