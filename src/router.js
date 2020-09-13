import VueRouter from 'vue-router';
import Vue from 'vue';
import Index from './components/index.vue';
import Want from './components/want.vue';
import Message from './components/message.vue';
import Me from './components/me.vue';
import Post from './components/post.vue';
import Focus from './components/focus.vue';
import Hot from './components/hot.vue';
import Login from './components/login.vue';
import Regisiter from './components/regisiter.vue';
import Collection from './components/collection.vue';
import Store from './components/store.vue';
import MyStore from './components/myStore.vue';
import MyLike from './components/myLike.vue';
import MyVlog from './components/myVlog.vue';
import LoginNoYi from './components/loginNoYi.vue'
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: Index,
        redirect: '/hot',
        children: [
            {
                path: 'hot',
                name: 'hot',
                component: Hot,
                meta: {
                    login: true
                }
            },
            {
                path: 'focus',
                name: 'focus',
                component: Focus,
                meta: {
                    login: true
                }
            }
        ],
    },
    {
        path: '/want',
        component: Want,
        redirect: '/want/store',
        children: [
            {
                path: 'store',   //当前路径为 /want/store
                name: 'store',
                component: Store,
                meta: {
                    login: true
                }
            },
            {
                path: 'collection',
                name: 'collection',
                component: Collection,
                meta: {
                    login: true
                }
            }
        ],
    },
    {
        path: '/post',
        name: 'post',
        component: Post,
        meta: {
            login: true
        }
    },
    {
        path: '/message',
        name: 'message',
        component: Message,
        meta: {
            login: true
        }
    },
    {
        path: '/me',
        name: 'me',
        component: Me,
        meta: {
            login: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/loginNoYi',
        name: 'loginNoYi',
        component: LoginNoYi,
    },
    {
        path: '/regisiter',
        name: 'regisiter',
        component: Regisiter
    },
    {
        path: '/myStore',
        name: 'myStore',
        component: MyStore
    },
    {
        path: '/myLike',
        name: 'myLike',
        component: MyLike
    },
    {
        path: '/myVlog',
        name: 'myVlog',
        component: MyVlog
    }
]

const router = new VueRouter({
    routes,
  })

router.beforeEach((to, from, next) => {
    //此处获取登陆的用户信息，可以按照自己的方法获取，此处暂时用localStorage里面获取
    const userInfo = sessionStorage.userInfo
    //判断是否存在用户信息、或者该页面是否需要登陆
    if (userInfo || !to.meta.login) {
      //如果能获取到用户信息，说明用户已经登陆了，或者该页面不需要登陆也能进入就直接放行进入该页面
      next()
    } else {
      //否则的跳转到登陆页面，并且带上当前页面的地址，用于登陆后重新跳回来
      next({
        name: 'login',
        query: {
          redirect: to.fullPath//当前页面的地址
        }
      })
    }
  })

export default router
