<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.username" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>

<script>
import Qs from 'qs';

export default {
  name: 'LoginForm',
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
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        username: 'super_admin',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        username: this.usernameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.axios.post(
            'http://39.105.181.135/operation/login/',
            Qs.stringify(this.$data.form)
          ).then((response) => {
            console.log(response.data);
            switch (response.data.state) {
              case 100:
              case 110:
                window.location.href = './index';
                break;
              case 210:
                alert('登录失败，请重试。');
                break;
              case 211:
                alert('登录失败，用户名或密码错误。');
                break;
            }
          })
        } else {
          this.$Message.error('请输入用户名与密码!');
        }
      })
    }
  }
}
</script>
