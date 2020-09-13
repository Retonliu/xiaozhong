
<template>
    <div id="login">
        <van-form @submit="toLogin">
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
            bingYiBan: true
        }
    },
    methods: {
        //登陆的方法
        /*bindYi() {
            this.bingYiBan = true;
            this.$axios({
                url: "/oauth/authorize",
                method: "get",
                crossdomain: true,
                }).then(res => {
                    console.log(res.data);
            })
        },*/
        toLogin() {
            if (this.bingYiBan !== true) {
                this.$toast("未绑定易班");
            } else {
                let that = this;
                let data = {
                    userName: that.username,
                    password: that.password
                }
                this.$axios.post('http://47.115.90.9:8181/user/login', data)
                .then(res => {
                    //console.log(res.data);
                    if (res.data.code === 0) {
                        sessionStorage.userInfo = res.data.data.userId;
                        //alert();
                        //sessionStorage.userInfo = res.data;
                        //获取回跳的redirect地址
                        const redirect = this.$route.query.redirect
                        if (redirect) {
                            
                            //如果redirect存在说明当前用户是进入某页面后未登陆自动跳转到登陆页面来的，所以登陆完成后得再次回跳到该地址
                            this.$router.push(redirect)
                        } else {
                        //否则跳转到默认的页面，首页或者其他页面
                            this.$router.push('/')
                        }
                    } else {
                        this.$toast("用户名或者密码错误");
                    }
                })
                .catch(err => {
                    console.info(err.message);
                })
            }
        }
    }
}
</script>