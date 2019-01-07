<template>
    <div>
        <Sreach></Sreach>

        <div class="container">

            <!-- 商品标签导航 -->
            <GoodsClassNav @update_house_list="update_house_list"></GoodsClassNav>
            <!-- 商品展示容器 -->
            <div class="">
                <Row class="house-item" v-for="item in house">
                    <Col span="8">
                        <img :src="item.img"/>
                    </Col>
                    <Col span="8">
                        <h3 class="item-name">
                            {{item.name}}
                        </h3>
                        <img v-show="item.formaldehyde === 1"
                             src="http://static8.ziroom.com/phoenix/pc/images/201810/img_deepbreath_unselected_90_2x2.png"/>
                        <h4 class="item-description">
                            {{item.description}}
                        </h4>
                        <div class="item-icon">
                            <Tag v-for="iitem in item.tag" color="purple">{{iitem}}</Tag>
                        </div>
                        <h2 class="item-area">
                            {{item.area}}平米
                        </h2>
                    </Col>

                    <Col class="house_right" span="8">
                        <div class="item-price">
                            ${{item.price}}
                        </div>
                        <router-link to="">
                            <Button>查看更多</Button>
                        </router-link>
                    </Col>
                    <Divider/>

                </Row>
            </div>
            <div class="goods-page">
                <Page :total="40" show-elevator show-sizer @on-change="update_page_num"/>
            </div>
        </div>

        <Footer></Footer>
        <Spin size="large" fix v-if="isLoading"></Spin>
    </div>
</template>

<script>
    import Sreach from '@/components/Sreach';
    import GoodsClassNav from '@/components/nav/GoodsClassNav';
    import Footer from '@/components/footer/Footer';

    export default {
        name: 'allrent',

        data() {
            return {
                rental: [],
            };
        },
        computed: {},
        methods: {

            update_house_list(data) {
                console.log(data);
            },
            update_page_num(pagenum) {
                console.log(pagenum);
            }
        },
        created() {


            this.axios.get('https://www.easy-mock.com/mock/5c2f26227106f779e7eaca4d/jr/gethouselist').then((response) => {
                console.log(response.data);
                this.house = response.data.house_list;
                console.log(this.orderGoodsList);

            })
        },
        mounted() {

        },
        components: {
            Sreach,
            GoodsClassNav,
            Footer
        }
    };
</script>

<style scoped>
    .container {
        margin: 15px auto;
        width: 70%;
        /*min-width: 1000px;*/
    }

    .house-item {

    }

    .house-item h3 {
        font-size: 20px;
        font-weight: 550;
        position: relative;
        display: inline-block;
        line-height: 24px;
        margin-bottom: 10px;
    }

    .item-price {
        font-size: 30px;
        color: #ffa000;
        height: 32px;
        line-height: 32px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .house_right {
        text-align: center;
        margin: auto;
    }


    .goods-page {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }

    /* ---------------商品栏结束------------------- */
</style>
