<template>
    <div>

        <jiarunav></jiarunav>
        <div class="main_stage">
            <div>
                <Steps :current="page_num">
                    <Step title="填写基本信息" icon="ios-person"></Step>
                    <Step title="上传照片" icon="ios-camera"></Step>
                    <Step title="确认" icon="ios-mail"></Step>
                </Steps>
            </div>

            <Form v-show="page_num === 0" label-position="left" :label-width="100" class="form">
                <FormItem label="房屋地区" class="form_line">
                    <al-cascader v-model="c_district"/>
                </FormItem>

                <FormItem label="房屋地址" class="form_line">

                    <Input v-model="com_name" placeholder="新华" clearable style="width: 200px"/>
                    小区
                    <Input v-model="com_unit" placeholder="8" clearable style="width: 200px"/>
                    单元
                    <Input v-model="com_floor" placeholder="2" clearable style="width: 200px"/>
                    层
                </FormItem>
                <FormItem label="房屋类型" class="form_line">

                    <RadioGroup v-model="house_type">
                        <Radio label="一居"></Radio>
                        <Radio label="二居"></Radio>
                        <Radio label="三居"></Radio>
                        <Radio label="其他"></Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="房屋面积" class="form_line">

                    <Input v-model="area" placeholder="30" style="width: 300px"/>
                    平米
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
            <div v-show="page_num === 1" class="upload_img">
                <Upload
                        multiple
                        :with-credentials="true"
                        type="drag"
                        action="/api/data/uploadfile/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>Click or drag files here to upload</p>
                    </div>
                </Upload>
            </div>
            <div v-show="page_num === 2" class="confrim">
                <Form label-position="left" :label-width="100" class="form">
                    <FormItem label="房屋地区" class="form_line">
                        {{district_str}}
                    </FormItem>

                    <FormItem label="房屋地址" class="form_line">
                        {{com_name}}{{com_unit}}{{com_floor}}
                    </FormItem>
                    <FormItem label="房屋类型" class="form_line">
                        {{house_type}}
                    </FormItem>
                    <FormItem label="房屋面积" class="form_line">
                        {{area}}
                        平米
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
            <Button type="primary" @click="add_page()">{{btn_content}}</Button>
        </div>
    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';

    export default {
        name: "addhouse",
        components: {
            jiarunav,
        },
        data() {
            return {
                page_num: 0,
                c_district: [],
                com_name: "",
                com_unit: "",
                com_floor: "",
                house_type: "一居",
                area: "",
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
                    unit: this.com_unit,
                    type: type_num,
                    area: this.area,
                    floor: this.com_floor,
                    description: this.description,
                    elevator: this.elevator === true ? 1 : 0,
                    deposit: this.deposit,
                    pay_method: this.pay_method.substr(0, 1),
                    cost: this.cost

                };
                this.axios.post(
                    '/api/data/addhouse/',
                    this.Qs.stringify(post_data)
                ).then((response) => {
                    console.log(response.data);
                    switch (response.data.state) {
                        case 250:
                            alert("参数错误，请检查输入");
                            this.page_num = 0;
                            break;
                        case 150:
                            this.$Message.success("添加成功，即将跳转到个人中心");
                            setTimeout(function () {
                                window.location.href = 'http://localhost:9999/#/stats';
                            }, 2000);
                            break;
                        default:
                            this.$Message.error("添加失败，请重试");
                    }
                });
            }
        },
        computed: {


        }

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