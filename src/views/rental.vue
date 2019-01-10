<template>
    <div>
        <jiarunav></jiarunav>
        <div class="main_stage">
            <Row>
                <Col span="16">
                    <div class="stage_left">
                        <div class="house_district">{{location_name}}</div>
                        <div class="house_district">{{house.description}}</div>
                        <h1 style="margin-top: 30px; margin-bottom: 30px">房屋信息</h1>
                        <Row>
                            <Col class="base_info" span="4">
                                基本信息
                            </Col>
                            <Col span="12">
                                <Form class="house_detail" :label-width="80">
                                    <FormItem label="房屋面积"><span class="house_detail">{{house.area}}平方米</span>
                                    </FormItem>
                                    <FormItem label="单元"><span class="house_detail">{{house.unit}}单元</span></FormItem>
                                    <FormItem label="楼层"><span class="house_detail">{{house.floor}}层</span></FormItem>
                                    <FormItem label="房型"><span class="house_detail">{{house.type}}</span></FormItem>
                                    <FormItem label="电梯"><span class="house_detail">{{house.elevator}}也一样</span>
                                    </FormItem>

                                </Form>
                            </Col>
                        </Row>
                        <h1 style="margin-top: 30px; margin-bottom: 30px">家装信息</h1>
                        <div class="icon_stage">
                            <span><Icon type="ios-wifi"/></span>
                            <Icon type="md-alarm"/>
                            <Icon type="ios-construct"/>
                            <Icon type="ios-game-controller-b"/>
                            <Icon type="ios-snow"/>
                        </div>

                        <div class="remark_stage"></div>

                        <h1 style="margin-top: 30px; margin-bottom: 30px">位置信息</h1>
                        <baidu-map class="map" :center="location" :zoom="15">
                            <bm-marker :position="location" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                                <!--<bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>-->
                            </bm-marker>
                        </baidu-map>
                    </div>
                </Col>
                <Col span="8">
                    <div class="stage_right">
                        <Affix :offset-top="50">
                            <Card>
                                <p slot="title">
                                    <Icon type="ios-card"></Icon>
                                    租房方式
                                </p>
                                <div class="house_district house_price">${{house.cost}}/月</div>
                                <div class="house_district house_price">{{house.pay_method}}付</div>
                                <div class="house_district house_price">押${{house.deposit}}</div>
                            </Card>
                        </Affix>
                    </div>
                </Col>
            </Row>

        </div>

    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';
    import swiper from '@/components/goodsDetail/gallery.vue';


    export default {
        components: {
            jiarunav,
            swiper,
        },
        name: "rantal",
        data() {
            return {
                house_id: 5,
                house: {
                    "user_id": 567,
                    "district": "北京市海淀区西土城路",
                    "community": "金典小区",
                    "type": "五居",
                    "floor": 8,
                    "elevator": "有",
                    "description": "这房豪华",
                    "deposit": 2000,
                    "pay_method": "月",
                    "cost": 2500,
                    "house_state": "已租",
                    "register_time": "1959/4/12",
                    "modify_time": "1959/6/12"
                },
                location: {},
                location_name: '',
            }
        },
        created() {

            console.log(this.$route.query.house_id);
            //console.log(that.location);

        },
        mounted() {
            let location_name_query = '';

            let post_data = {
                house_id: this.house_id,
            };
            this.axios.post(
                'http://39.105.181.135/data/house-info/',
                this.Qs.stringify(post_data)
            ).then((response) => {
                console.log(response.data);
                let house_type = response.data.type;
                console.log(house_type, 'sas"');
                switch (house_type) {
                    case 1:
                        response.data.type = "一居";
                        break;
                    case 2:
                        response.data.type = "二居";
                        break;
                    case 3:
                        response.data.type = "三居";
                        break;
                    case 4:
                        response.data.type = "四居";
                        break;
                }
                let house_state = response.data.house_state;
                switch (house_state) {
                    case true:
                        house_state = "已租";
                        break;
                    case false:
                        house_state = "未租";
                        break;
                }
                response.data.imgs = [
                    "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large",
                    "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large",
                    "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large"
                ];
                this.house = response.data;
                this.location_name = this.house.district + this.house.community;

                var jsonp = require('jsonp');
                let that = this;
                jsonp('http://api.map.baidu.com/geocoder/v2/?address=' + this.location_name + '&output=json&ak=DA137DSpWRBxmO5LktIiHccpAGFi7kY4', null, function (err, data) {
                    if (err) {
                        //console.error(err.message);
                    } else {
                        //console.log(data);
                        that.location = data.result.location;
                        that.$data.location = data.result.location;
                        //console.log(that.$data);
                    }
                });

            });


        }
    }
</script>

<style scoped>
    .main_stage {
        width: 70%;
        text-align: center;
        margin: auto;
    }

    .house_district {
        overflow-wrap: break-word;
        font-size: 32px;
        font-weight: 800;
        line-height: 1.125em !important;
        color: rgb(72, 72, 72);
        padding-top: 6px !important;
        padding-bottom: 6px !important;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .house_price {
        color: #F5BD19;
    }

    .base_info {
        width: 23.33%;
        font-size: 18px;
        color: rgba(16, 29, 55, .6);
    }

    .ivu-form-item-content > .house_detail {
        font-size: 20px;
        text-align: center;
        line-height: 18px;
        margin-bottom: 18px;
        list-style: none;
    }

    .stage_right {
        float: right;
        width: 376px !important;
        margin-top: 50px;
    }

    .icon_stage {
        font-size: 40px;
    }

    .map {
        text-align: center;
        width: 80%;
        height: 400px;
        margin: auto;
    }
</style>