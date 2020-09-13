<template>
    <van-form @submit="toRegi">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
    
    <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
            提交
        </van-button>
    </div>
  </van-form>
</template>

<script>
export default {
    name: 'regisiter',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        toRegi() {
            let that = this;
            let data = {
                userName: that.username,
                password: that.password
            }
            //你的一些其他校验及其他操作，如校验用户名密码是否为空
            //var that = this;
            //请求登陆接口
            this.$axios.post('http://47.115.90.9:8181/user/register', data)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.info(err.message);
            })
        }
    }
}
</script>