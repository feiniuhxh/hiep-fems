<template>
  <div class="login-container">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon
             class="login-form">
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="userName">
        <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <!--<div id="main" style="width: 1409px;height: 600px;"></div>-->
      <el-form-item>
        <el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getUUID} from '@/utils'

  export default {
    data () {
      return {
        dataForm: {
          userName: '',
          password: '',
          uuid: ''
        },
        dataRule: {
          userName: [
            {required: true, message: '帐号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      // 提交表单
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.dataForm.uuid = getUUID()
            this.$http({
              url: this.$http.adornUrl('/sys/login'),
              method: 'post',
              data: this.$http.adornData({
                'username': this.dataForm.userName,
                'password': this.dataForm.password,
                'uuid': this.dataForm.uuid
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$cookie.set('token', data.token)
                this.$router.replace({name: 'home'})
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/mixin.scss";

  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    @include relative;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(38, 50, 56, .6);
    overflow: hidden;

    &:before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(https://aurora-1255840532.cos.ap-chengdu.myqcloud.com/1547428971990.jpg);
      background-size: cover;
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }

    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .login-btn-submit {
      width: 100%;
      margin-top: 38px;
    }
  }
</style>
