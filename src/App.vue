<template>
    <div class="main">
        <van-nav-bar title="盒子" left-text="返回" left-arrow>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <router-view />
        <van-tabbar v-model=route>
            <van-tabbar-item replace to="/" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/want" icon="search">
                想去
            </van-tabbar-item>
            <van-tabbar-item to="/post">
                <van-icon name="plus" size="18" />
            </van-tabbar-item>
            <van-tabbar-item replace to="/message" icon="chat-o">
                消息
            </van-tabbar-item>
            <van-tabbar-item replace to="/me" icon="user-o">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>



export default {
  name: 'App',
  data() {
      return {
          
      }
  },
  components: {

  }
}
</script>

