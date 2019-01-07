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

            <Form v-show="page_num === 0" :label-position="left" :label-width="200" class="form">
                <FormItem label="房屋地区" class="form_line">
                    <al-cascader v-model="res_c"/>
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
                        <Radio label="月付"></Radio>
                        <Radio label="季付"></Radio>
                        <Radio label="年付"></Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem label="租金" class="form_line">
                    <InputNumber :step="100" :min="300" v-model="cost"></InputNumber>

                </FormItem>


            </Form>
            <div v-show="page_num === 1" class="upload_img">
                <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>Click or drag files here to upload</p>
                    </div>
                </Upload>
            </div>
            <div v-show="page_num === 2" class="confrim">
                <div class="form_line">
                    <span class="form_item">房屋地址</span>
                    <span class="form_value">{{com_name}}{{com_unit}}{{com_floor}}</span>
                </div>
                <div class="form_line">
                    <span class="form_item">房屋类型</span>
                    <span class="form_value">{{house_type}}</span>
                </div>
                <div class="form_line">
                    <span class="form_item">房屋面积</span>
                    <span class="form_value">{{area}}</span>
                </div>
                <div class="form_line">
                    <span class="form_item">电梯</span>
                    <span class="form_value">{{elevator}}</span>

                </div>
                <div class="form_line">
                    <span class="form_item">房屋描述</span>
                    <span class="form_value">{{description}}</span>
                </div>
                <div class="form_line">
                    <span class="form_item">押金</span>
                    <span class="form_value">{{deposit}}</span>


                </div>
                <div class="form_line">
                    <span class="form_item">支付方式</span>
                    <span class="form_value">{{pay_method}}</span>
                </div>

                <div class="form_line">
                    <span class="form_item">组件</span>
                    <span class="form_value">{{cost}}</span>
                </div>

            </div>
            <Button type="primary" @click="add_page()">下一步</Button>
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
                res_c: [],
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
                }


            }
        },
        methods: {
            add_page: function () {
                this.page_num += 1;
            }
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
</style>