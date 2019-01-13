<template>
    <div>

        <jiarunav></jiarunav>
        <div class="main_stage">
            <Card class="main_card">
                <Form v-show="page_num === 0" label-position="left" :label-width="100" class="form">
                    <FormItem label="起始日期">
                        <DatePicker type="daterange" @on-change="select_date" :value="value2" placement="bottom-end"
                                    placeholder="Select date"
                                    style="width: 200px"></DatePicker>

                </FormItem>
                    <FormItem label="租期">
                        {{period}} 个月
                </FormItem>
                    <Button type="primary" @click="submitall()">确认租房</Button>
            </Form>
            </Card>

        </div>
    </div>
</template>

<script>
    import jiarunav from '@/components/jiarunav.vue';


    export default {
        name: "apply_house",
        components: {

            jiarunav,
        },
        data() {
            return {
                page_num: 0,
                value2: ['2019-01-20', '2019-03-20'],
                start_date: "",
                end_date: "",
                period: "",
                datevalue: '',

            }
        },
        methods: {
            transDate: function (date) {
                return date.substr(5, 2) + '/' + date.substr(8, 2) + '/' + date.substr(0, 4);
            },
            submitall: function () {

                let post_data = {
                    house_id: this.house_id,
                    period: this.period,
                    start_date: this.start_date,
                    end_date: this.end_date,
                };
                console.log(post_data);
                this.axios.post(
                    '/api/operation/apply-house/',
                    this.Qs.stringify(post_data)
                ).then((response) => {
                    console.log(response.data);
                    switch (response.data.state) {
                        case 160:
                            this.$Message.success("申请成功，即将跳转到个人中心");
                            setTimeout(function () {
                                window.location.href = 'http://localhost:9999/#/stats';
                            }, 2000);
                            break;
                        default:
                            this.$Message.error("申请失败，请重试");
                    }


                });
            },
            select_date: function (data) {
                this.value2 = data;
                console.log(this.value2);
                this.start_date = this.transDate(this.value2[0]);
                this.end_date = this.transDate(this.value2[1]);
                console.log(this.period);
                this.period = (Number(this.end_date.substr(6, 4)) - Number(this.start_date.substr(6, 4))) * 12 + Number(this.end_date.substr(0, 2)) - Number(this.start_date.substr(0, 2));
                console.log(this.period);
            }
        },
        created: function () {
            this.house_id = this.$route.query.house_id;
        },
        mounted: function () {
            this.start_date = this.transDate(this.value2[0]);
            this.end_date = this.transDate(this.value2[1]);
            this.period = (Number(this.end_date.substr(6, 4)) - Number(this.start_date.substr(6, 4))) * 12 + Number(this.end_date.substr(0, 2)) - Number(this.start_date.substr(0, 2));
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

    .main_card {
        width: 500px;
        text-align: center;
        margin: auto;
    }

    /*.form_line {*/
    /*line-height: 40px;*/
    /*}*/

    .upload_img {
        height: 400px;
    }

    .form {
        /*width: 800px;*/

    }
</style>