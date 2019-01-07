<template>
    <div>
        <jiarunav></jiarunav>
        <!--<GoodsDetail></GoodsDetail>-->
        <swiper :imgs="house.imgs"></swiper>
        <div class="main_stage">
            <Row>
                <Col span="16">
                    <div class="stage_left">
                        <div class="house_district">{{house.district}}</div>
                        <div class="house_district">{{house.description}}</div>
                        <div class="icon_stage">
                            <span><Icon type="ios-wifi"/></span>
                            <Icon type="md-alarm"/>
                            <Icon type="ios-construct"/>
                            <Icon type="ios-game-controller-b"/>
                            <Icon type="ios-snow"/>
                        </div>

                        <div class="remark_stage"></div>

                        <baidu-map class="map" :center="location" :zoom="15">
                            <bm-marker :position="location" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                                <!--<bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>-->
                            </bm-marker>
                        </baidu-map>
                    </div>
                </Col>
                <Col span="8">
                    <div class="stage_right">
                        <Card>
                            <div class="house_district house_price">${{house.cost}}/月</div>
                            <Rate disabled v-model="rate_value"/>
                        </Card>
                    </div>
                </Col>
            </Row>

        </div>

    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';
    import GoodsDetail from '@/components/GoodsDetail';
    import swiper from '@/components/goodsDetail/gallery.vue';


    export default {
        components: {
            jiarunav,
            GoodsDetail,
            swiper,
        },
        name: "house",
        data() {
            return {
                house_id: 388,
                house: {
                    "user_id": 567,
                    "district": "北京市海淀区西土城路",
                    "community": "金典小区",
                    "unit": "8单元",
                    "type": "五居",
                    "area": 20,
                    "floor": 8,
                    "elevator": 1,
                    "description": "这房豪华",
                    "imgs": [
                        "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large",
                        "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large",
                        "https://a0.muscache.com/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg?aki_policy=xx_large"
                    ],
                    "deposit": 2000,
                    "pay_method": "月",
                    "cost": 2500,
                    "house_state": "已租",
                    "register_time": "1959/4/12",
                    "modify_time": "1959/6/12"
                },
                rate_value: 3.5,
                location: {},
            }
        },
        created() {
            var jsonp = require('jsonp');
            let that = this;
            jsonp('http://api.map.baidu.com/geocoder/v2/?address=北京市海淀区上地十街10号&output=json&ak=DA137DSpWRBxmO5LktIiHccpAGFi7kY4', null, function (err, data) {
                if (err) {
                    console.error(err.message);
                } else {
                    //console.log(data);
                    that.location = data.result.location;
                    that.$data.location = data.result.location;
                    console.log(that.$data);
                }
            });
            console.log(that.location);

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
        color: rgb(72, 72, 72) !important;
        padding-top: 6px !important;
        padding-bottom: 6px !important;
        margin: 0px !important;
    }

    .house_price {

    }

    .stage_right {
        float: right;
        width: 376px !important;
    }

    .icon_stage {
        font-size: 40px;
    }

    .map {
        width: 80%;
        height: 400px;
    }
</style>