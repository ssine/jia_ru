/*
* @Author: Gavin
* @Date: 2018-06-11 11:27:10
* @Last Modified by: Gavin
* @Last Modified time: 2018-06-11 12:23:40
* @Describe: 搜索商品导航标签
*/
<template>

    <Form :label-position="left" :label-width="100" class="item-class-show">
        <FormItem label="价格范围" class="item-class-group">
            <Slider v-model="d_price" :step="500" :max="10000" show-stops range></Slider>
        </FormItem>
        <FormItem label="面积范围:" class="item-class-group">

            <Slider v-model="d_area" :step="10" :max="200" show-stops range></Slider>
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
                d_price: [1000, 5000],
                d_area: [10, 50],
                d_type: "不限",
            };
        },
        methods: {
            update_select: function(){
                let data = {
                    d_price: this.d_price,
                    d_area: this.d_area,
                    d_type: this.d_type,
                }
                this.$emit('update_house_list',data);
            }
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
