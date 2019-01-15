<template>

    <Form label-position="left" :label-width="100" class="item-class-show">
        <FormItem label="房屋地区" class="form_line">
            <al-cascader v-model="d_district"/>
        </FormItem>
        <FormItem label="价格范围" class="item-class-group">
            <Slider v-model="d_price" :step="250" :max="10000" show-stops range></Slider>
        </FormItem>
        <FormItem label="面积范围:" class="item-class-group">

            <Slider v-model="d_area" :step="10" :max="200" show-stops range></Slider>
        </FormItem>
        <FormItem label="楼层范围:" class="item-class-group">

            <Slider v-model="d_floor" :min="1" :step="1" :max="10" show-stops range></Slider>
        </FormItem>
        <FormItem label="房屋类型:" class="item-class-group">
            <RadioGroup v-model="d_type" type="button">
                <Radio label="不限"></Radio>
                <Radio label="一居"></Radio>
                <Radio label="二居"></Radio>
                <Radio label="三居"></Radio>
                <Radio label="其他"></Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="排序方式:" class="item-class-group">
            <RadioGroup v-model="d_rank" type="button">
                <Radio label="无排序"></Radio>
                <Radio label="价格升序"></Radio>
                <Radio label="价格降序"></Radio>
                <Radio label="面积升序"></Radio>
                <Radio label="面积降序"></Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="电梯:" class="item-class-group">
            <Switch v-model="elevator"></Switch>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="update_select()">确定</Button>
        </FormItem>
    </Form>
</template>
<script>
    //import Radio from "../../../dist/vendors";
    export default {
        name: 'GoodsClassNav',
        //  components: {Radio},
        data() {
            return {
                d_price: [250, 5000],
                d_area: [10, 100],
                d_floor: [0, 100],
                d_type: "不限",
                d_rank: "无排序",
                d_district: [],
                elevator: true,
            };
        },
        methods: {
            district2str: function (district_json) {

                let district_str = '';

                for (let i = 0; i < district_json.length; i++) {
                    if (i !== 0) {
                        this.district_str += '\ ';
                    }
                    district_str += district_json[i].name;
                }
                if (district_json.length === 0) {
                    district_str = 0;
                }
                return district_str;
            },
            update_select: function(){
                let house_type = 0;
                switch (this.d_type) {
                    case "不限":
                        house_type = 0;
                        break;
                    case "一居":
                        house_type = 1;
                        break;
                    case "二居":
                        house_type = 2;
                        break;
                    case "三居":
                        house_type = 3;
                        break;
                    case "其他":
                        house_type = 4;
                        break;
                }

                let order = 0;
                switch (this.d_type) {
                    case "无排序":
                        order = 0;
                        break;
                    case "价格升序":
                        order = 1;
                        break;
                    case "价格降序":
                        order = 2;
                        break;
                    case "面积升序":
                        order = 3;
                        break;
                    case "面积降序":
                        order = 4;
                        break;
                }

                let data = {
                    district: this.district2str(this.d_district),
                    min_price: this.d_price[0],
                    max_price: this.d_price[1],
                    min_area: this.d_area[0],
                    max_area: this.d_area[1],
                    min_floor: this.d_floor[0],
                    max_floor: this.d_floor[1],
                    d_type: house_type,
                    orderby: order,
                    elevator: this.elevator === true ? 1 : 0,
                };
                this.$emit('update_house_list',data);
            }
        },
        mounted: function () {
            this.update_select();
        }
    };
</script>

<style scoped>
    .item-class-show {
        margin: 15px auto;
        width: 100%;
        /*text-align: center;*/
    }

    .item-class-group {
        margin-top: 1px;
        height: 45px;
        /*border-bottom: 1px solid #ccc;*/
    }

    .item-class-group:first-child {
        /*border-top: 1px solid #ccc;*/
    }

    .item-class-name {
        padding-left: 15px;
        line-height: 44px;
        color: #666;
        font-weight: bold;
        background-color: #f3f3f3;
    }

    .item-class-name:first-child {
        line-height: 43px;
    }

    .item-class-select span {
        margin-left: 15px;
        width: 160px;
        color: #005aa0;
        line-height: 45px;
        cursor: pointer;
    }
</style>
