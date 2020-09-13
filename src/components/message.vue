<template>
    <div id="message">
        <van-cell value="消息" />
        <van-cell-group>
            <van-cell value="潮州牌坊街附近有好的民宿推荐嘛">
                <template #title>
                    <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg">
                        <template v-slot:loading>
                            <van-loading type="spinner" size="20" />
                        </template>
                    </van-image>
                </template>
            </van-cell>
            <van-cell value="用户111评论乐我的帖子《大理》">
                <template #title>
                    <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg">
                        <template v-slot:loading>
                            <van-loading type="spinner" size="20" />
                        </template>
                    </van-image>
                </template>
            </van-cell>
            <van-cell value="用户2点赞了我的帖子《厦门小众景点》">
                <template #title>
                    <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg">
                        <template v-slot:loading>
                            <van-loading type="spinner" size="20" />
                        </template>
                    </van-image>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    name: 'message',
    /*methods: {
        yiban() {
            this.$axios.get('http://47.115.90.9:8181/yibanuser/yibanlogin')
            .then(res => (console.log(res.data)))
            .catch(err => {
                console.info(err.message);
            })
        },
    }*/
}
</script>