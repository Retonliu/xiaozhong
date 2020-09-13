<template>
    <div id="index">
        <van-tabs route sticky>
            <van-tab title="热门" to="/"  active-class = "active" />
            <van-tab title="关注" to="/focus" active-class = "active" />
        </van-tabs>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            active: 0,
        }
    }
}
</script>