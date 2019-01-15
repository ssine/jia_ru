<template>
    <div>
        <Sreach></Sreach>

        <div class="container">

            <!-- 商品标签导航 -->
            <GoodsClassNav @update_house_list="update_house_list"></GoodsClassNav>
            <!-- 商品展示容器 -->
            <div class="">
                <Row class="house-item" v-for="(item,index) in display_house" :key="index">
                    <Col span="8">
                        <img class="img" :src="'http://39.105.181.135/' + item.img"/>
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
                            <Tag v-for="(iitem,iindex) in item.tag" color="purple" :key="iindex">{{iitem}}</Tag>
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
                            <Button :to="'/house?house_id=' + item.house_id">查看更多</Button>
                        </router-link>
                    </Col>
                    <Divider/>

                </Row>
                <Alert v-show="there_result" type="warning" show-icon>
                    未搜索到结果
                    <template slot="desc">
                        根据相关法律法规和政策,部分搜索结果未予显示
                    </template>
                </Alert>
            </div>
            <div class="goods-page">
                <Page :total="house_num" show-elevator show-sizer @on-change="update_page_num" :page-size="page_size"/>
            </div>
        </div>

        <Footer></Footer>
        <!--<Spin size="large" fix v-if="isLoading"></Spin>-->
    </div>
</template>


<script>
    import Sreach from '@/components/Sreach';
    import GoodsClassNav from '@/components/nav/GoodsClassNav';
    import Footer from '@/components/footer/Footer';

    export default {
        name: 'GoodsList',
        data() {
            return {
                allhouse: [],
                display_house: [],
                house_type: {},
                page_num: 0,
                //筛选条件
                select_c: {},
                house_num: 0,
                page_size: 10,
                there_result: true,
                search_key: '',
            };
        },
        computed: {},
        methods: {
            update_house_list(data) {
                console.log(data);
                this.select_c = data;
                this.get_house_list();
            },
            get_house_list() {

                let post_data = {
                    search_key: this.search_key,
                    seq: this.page_num,
                    district: this.select_c.district,
                    min_floor: this.select_c.min_floor,
                    max_floor: this.select_c.max_floor,
                    min_price: this.select_c.min_price,
                    max_price: this.select_c.max_price,
                    house_type: this.select_c.d_type,
                    elevator: this.select_c.elevator == 1 ? 1 : 2,
                    orderby: this.select_c.orderby,
                    max_area: this.select_c.max_area,
                    min_area: this.select_c.min_area,
                };
                console.log(post_data);
                this.axios.post(
                    '/api/gethouselist/',
                    this.Qs.stringify(post_data)
                ).then((response) => {
                    console.log(response.data);
                    this.allhouse = response.data.houses;
                    this.house_num = this.allhouse.length;
                    this.there_result = this.house_num <= 0;
                    this.update_page_num(1);
                });
            },
            update_page_num(pagenum) {
                //console.log(pagenum);
                this.page_num = pagenum;
                let start = (this.page_num - 1) * this.page_size;
                let end = start + this.page_size;
                this.display_house = [];
                console.log(start, end);
                for (var i = start; i < end && i < this.house_num; i++) {
                    this.display_house.push(this.allhouse[i]);
                    console.log(this.display_house);
                }

            },

        },
        created() {

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

    img {
        width: 300px;
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
