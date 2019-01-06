<template>
  <Form ref="regForm" :model="regForm" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="username">
      <Input v-model="regForm.username" placeholder="用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="regForm.password" placeholder="密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="name">
      <Input v-model="regForm.name" placeholder="姓名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>

    <Row>
        <Col span="4" style="text-align:center;margin-top: 5px;">证件类型：</Col>
        <Col span="20">
          <FormItem prop="id_type">
            <Select v-model="regForm.id_type" placeholder="请选择证件类型">
              <Option value="身份证" key="身份证">身份证</Option>
              <Option value="护照" key="护照">护照</Option>
              <Option value="学生证" key="学生证">学生证</Option>
            </Select>
          </FormItem>
        </Col>
    </Row>
    
    <FormItem prop="id_number">
      <Input v-model="regForm.id_number" placeholder="证件号码">
        <span slot="prepend">
          <Icon :size="16" type="ios-body"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="phone">
      <Input v-model="regForm.phone" placeholder="手机号码">
        <span slot="prepend">
          <Icon :size="16" type="ios-phone-portrait"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="city">
      <Input v-model="regForm.city" placeholder="所在城市">
        <span slot="prepend">
          <Icon :size="16" type="ios-pin"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>注册</Button>
    </FormItem>
  </Form>
</template>



<script>
import Qs from 'qs';

export default {
  name: 'RegisterForm',
  props: {
    usernameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator(rule, value, callback, source, options) {
            var errors = [];
            if (value.length < 8) errors.push('密码长度不小于8位');
            if (/^[A-Z]*$/.test(value)) errors.push('不能都是大写');
            if (/^[a-z]*$/.test(value)) errors.push('不能都是小写');
            if (! /.*[0-9].*[0-9].*/.test(value)) errors.push('密码应包含至少两个数字');
            callback(errors);
          }}
        ]
      }
    },
    id_typeRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '证件类型不能为空', trigger: 'blur' }
        ]
      }
    },
    id_numberRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '证件号不能为空', trigger: 'blur' }
        ]
      }
    },
    phoneRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '电话号码不能为空', trigger: 'blur' }
        ]
      }
    },
    cityRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '城市不能为空', trigger: 'blur' }
        ]
      }
    },
    nameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      regForm: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        username: this.usernameRules,
        password: this.passwordRules,
        name: this.nameRules,
        id_type: this.id_typeRules,
        id_number: this.id_numberRules,
        phone: this.phoneRules,
        city: this.cityRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs['regForm'].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!');
          console.log(Qs.stringify(this.$data.regForm));
          this.axios.post(
            'http://39.105.181.135/operation/register/',
            Qs.stringify(this.$data.regForm)
          ).then((response) => {
            console.log(response.data);
            switch (response.data.state) {
              case 100:
              case 120:
                window.location.href = './login';
                break;
              case 220:
                alert('注册失败，请重试。');
                break;
              case 221:
                alert('注册失败，用户名已被使用。');
                break;
              case 222:
                alert('注册失败，用户信息错误。');
                break;
            }
          })
        } else {
          this.$Message.error('请检查表单!');
        }
      })
    }
  }
}
</script>

