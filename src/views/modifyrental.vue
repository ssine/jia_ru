<template>
    <div>

        <jiarunav></jiarunav>
        <div class="main_stage">
            <div>
                <Steps :current="page_num">
                    <Step title="填写基本信息" icon="ios-person"></Step>
                    <Step title="确认" icon="ios-mail"></Step>
                </Steps>
            </div>

            <Form v-show="page_num === 0" :label-position="left" :label-width="100" class="form">
                <FormItem label="房屋地区" class="form_line">
                    <al-cascader v-model="c_district"/>
                </FormItem>

                <FormItem label="房屋地址" class="form_line">

                    <Input v-model="com_name" placeholder="新华" clearable style="width: 200px"/>
                    小区
                </FormItem>
                <FormItem label="l楼层" class="form_line">
                    <InputNumber :step="1" :min="1" v-model="com_floor"></InputNumber>
                </FormItem>

                <FormItem label="房屋类型" class="form_line">

                    <RadioGroup v-model="house_type">
                        <Radio label="一居"></Radio>
                        <Radio label="二居"></Radio>
                        <Radio label="三居"></Radio>
                        <Radio label="其他"></Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem label="电梯" class="form_line">

                    <Switch v-model="elevator"></Switch>
                </FormItem>
                <FormItem label="房屋描述" class="form_line">

                    <Input v-model="description" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                           placeholder="这是个好房子"/>
                </FormItem>
                <FormItem label="押金" class="form_line">
                    <InputNumber :step="100" :min="300" v-model="deposit"></InputNumber>
                </FormItem>
                <FormItem label="支付方式" class="form_line">

                    <RadioGroup v-model="pay_method">
                        <Radio label="月"></Radio>
                        <Radio label="季"></Radio>
                        <Radio label="年"></Radio>
                        (付)
                    </RadioGroup>
                </FormItem>

                <FormItem label="租金" class="form_line">
                    <InputNumber :step="100" :min="300" v-model="cost"></InputNumber>

                </FormItem>


            </Form>
            <div v-show="page_num === 1" class="confrim">
                <Form :label-position="left" :label-width="100" class="form">
                    <FormItem label="房屋地区" class="form_line">
                        {{district_str}}
                    </FormItem>

                    <FormItem label="房屋地址" class="form_line">
                        {{com_name}}小区{{com_floor}}层楼
                    </FormItem>
                    <FormItem label="房屋类型" class="form_line">
                        {{house_type}}
                    </FormItem>

                    <FormItem label="电梯" class="form_line">
                        <span v-show="elevator === true">有</span>
                        <span v-show="elevator === false">无</span>
                    </FormItem>
                    <FormItem label="房屋描述" class="form_line">
                        <p>{{description}}</p>
                    </FormItem>
                    <FormItem label="押金" class="form_line">
                        {{deposit}}
                    </FormItem>
                    <FormItem label="支付方式" class="form_line">
                        {{pay_method}}
                    </FormItem>

                    <FormItem label="租金" class="form_line">
                        {{cost}}
                    </FormItem>


                </Form>

            </div>
            <Button type="primary" @click="add_page()">下一步</Button>
        </div>
    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';

    export default {
        name: "modifyrental",
        components: {
            jiarunav,
        },
        data() {
            return {
                page_num: 0,
                c_district: [],
                com_name: "",
                com_floor: "",
                house_type: "一居",
                elevator: true,
                description: "",
                deposit: 300,
                pay_method: "月付",
                cost: 300,
                ruleValidate: {
                    area: [
                        {required: true, message: 'The name cannot be empty', trigger: 'change'}
                    ]
                },
                district_str: '',
                btn_content: '下一步'


            }
        },
        created: function () {
            this.house_id = this.$route.query.house_id;

        },
        mounted: function () {
            let post_data = {
                rental_id: this.rental_id,
            };
            this.axios.post(
                '/api/data/rental-info/',
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
                let adata = response.data;
                this.cost = adata.cost;
                this.district_str = adata.district;
                this.com_name = adata.community;
                this.com_floor = adata.floor;
                this.type = adata.type;
                this.area = adata.area;
                this.elevator = adata.elevator == 0 ? false : true;
                this.description = adata.description;
                this.deposit = adata.deposit;
                this.pay_method = adata.pay_method;
            });

        },
        methods: {
            add_page: function () {
                if (this.page_num < 3) {
                    if (this.page_num === 1) {
                        this.btn_content = '提交';
                    }
                    this.page_num += 1;
                }
                if (this.page_num == 3) {
                    this.submitall();
                }
                console.log(this.c_district);
                this.district_str = this.c_district2str();
            },
            c_district2str: function () {
                console.log(this.c_district);
                this.district_str = '';

                for (let i = 0; i < this.c_district.length; i++) {
                    if (i !== 0) {
                        this.district_str += ' ';
                    }
                    this.district_str += this.c_district[i].name;
                }
                return this.district_str;
            },
            submitall: function () {
                console.log('1233');
                let type_num = 0;
                switch (this.type) {
                    case "一居":
                        type_num = 1;
                        break;
                    case "二居":
                        type_num = 2;
                        break;
                    case "三居":
                        type_num = 3;
                        break;
                    case "四居":
                        type_num = 4;
                        break;
                }

                let post_data = {
                    district: this.c_district2str(),
                    community: this.com_name,
                    type: type_num,
                    floor: this.com_floor,
                    description: this.description,
                    elevator: this.elevator === true ? 1 : 0,
                    deposit: this.deposit,
                    pay_method: this.pay_method,
                    cost: this.cost,

                };
                console.log(post_data);
                console.log('1233');
                this.axios.post(
                    '/api/data/addrental/',
                    this.Qs.stringify(post_data)
                ).then((response) => {
                    console.log(response.data);
                });
            }
        },
        computed: {}

    }
</script>

<style scoped>
    .main_stage {
        width: 70%;
        /*text-align: center;*/
        margin: auto;
    }

    /*.form_line {*/
    /*line-height: 40px;*/
    /*}*/

    .upload_img {
        height: 400px;
    }

    .form {
        width: 800px;

    }
</style>