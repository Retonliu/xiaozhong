<template>
    <div id="want">
        <van-tabs route sticky>
            <van-tab title="打卡的帖" to="/want/store" />
            <van-tab title="收藏的帖" to="/want/collection" />
        </van-tabs>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'want',
    data() {
        return {

        }
    }
}
</script>