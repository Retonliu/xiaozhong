
<template>
    <div id="login">
        <van-form @click="toLogin">
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
        <van-button @click="bingYiBan = true;" round block color="linear-gradient(to right, #ff6034, #ee0a24)" type="info" url="http://47.115.90.9:8181/yibanuser/yibanlogin">
                易班授权
        </van-button>
        <van-cell value="注册" to="/regisiter" />
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
            bingYiBan: false
        }
    },
    methods: {
        toLogin() {
            if (this.bingYiBan !== true) {
                this.$toast("请先绑定易班");
            }
        }
    }
    
}
</script>