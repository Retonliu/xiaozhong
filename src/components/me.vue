<template>
    <div id="me">
        <van-uploader :after-read="changeImg" :max-count="1" upload-text="点击更换头像">
            <van-row>
                <van-col class="disLeft">
                    <van-image round width="100" height="100" :src="HeadImg">
                        <template v-slot:loading>
                            <van-loading type="spinner" size="20" />
                        </template>
                    </van-image>
                </van-col>
                <van-col class="lowFont" v-if="dataAll.data != null">
                    {{ dataAll.data[0].userName }}
                </van-col>
            </van-row>
            
        </van-uploader>

        <van-grid direction="horizontal" :column-num="3">
            <van-grid-item icon="like-o" text="关注" to="/myLike" />
            <van-grid-item icon="star-o" text="收藏夹" to="/myStore" />
            <van-grid-item icon="closed-eye" text="历史纪录" to="myVlog" />
        </van-grid>
        <br />
        <br />
        <br />
        <br />
        <van-cell value="我的帖子" @click="quit"/>
        <br />
        <br />
        <van-cell-group v-if="dataAll.code === 0">
            <!--<van-cell>{{dataAll.data[1].vlog.vlogImg[0].img }}</van-cell>-->
            <van-cell v-for="item in dataAll.data" :key="item.vlog.vlogId" :value="item.vlog.vlogTitle">
                <template #title>
                    <van-image width="80" height="80" :src="item.userHeadImg" >
                        <template v-slot:loading>
                            <van-loading type="spinner" size="20" />
                        </template>
                    </van-image>
                    <van-divider :style="{  borderColor: '#888'}" />
                </template>
            </van-cell>
        </van-cell-group>

    </div>
</template>

<script>
export default {
    name: 'me',
    data() {
        return {
            HeadImg: "",
            dataAll: {
                    /*"code": 0,
                        "msg": "成功",
                        "data": [
                            {
                                "userId": 1,
                                "userName": "包头",
                                "userHeadImg": "https://img.yzcdn.cn/vant/cat.jpeg",
                                "vlog": {
                                    "vlogId": "1",
                                    "vlogTitle": "南澳之旅",
                                    "vlogContext": "包头的第一个vlog",
                                    "vlogImg": [
                                        {
                                            "img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1754910039,1803584689&fm=26&gp=0.jpg"
                                        }
                                    ],
                                    "support": 5,
                                    "comment": 10,
                                    "star": 10,
                                    "time": "2020-08-28"
                                }
                            }
                        ]*/
                    }
            
        }
    },
    methods: {
        changeImg(file) {
            //console.log(file.file);
            let that = this;
            let configs = {
                headers:{'Content-Type':'multipart/form-data'}
            };
            let formData = new FormData();
            let urlData = 'http://47.115.90.9:8181/user/uploadHeadImg/' + sessionStorage.userInfo;
            //console.log(urlData);
            formData.append('file', file.file);
            
            this.$axios
                .post(urlData, formData, configs)
                .then(function (res) {
                    //console.log(res.data);
                    if (res.data.code === 0) {
                        that.setHead();
                        that.$toast("修改成功");
                    }
                })
                .catch(err => {
                    console.info(err.message);
            })
        },
        setHead() {
            let that = this;
            let num = sessionStorage.userInfo;
            let urlData = 'http://47.115.90.9:8181/user/findImgUrlByUserId/' + num;
            
            that.$axios.get(urlData)
            .then(res => {
                if(res.data.code === 0) {
                    that.HeadImg = res.data.data.imgUrl;
                    console.log(that.HeadImg);
                }
            })
        },
        quit() {
            this.$toast("退出登陆");
            sessionStorage.removeItem("userInfo");
        }
    },
    mounted() {
        let that = this;
        let num = sessionStorage.userInfo;
        let urlData = 'http://47.115.90.9:8181/vlog/getAllByUserId/' + num;
        //alert(urlData);
        this.$axios
            .get(urlData)
            .then(response => {
                that.dataAll = response.data;
                that.setHead();
            })

    }

}
</script>

<style scoped>
    .disLeft {
        margin-right: 305px;
    }
    .lowFont {
        margin-top: 20px;
        font-size: 20px;
    }
</style>
