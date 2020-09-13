<template>
    <div id="#focus">
        <van-row v-if="dataAll.code === 0" type="flex" justify="flex-start">
            <van-col v-for="item in userHeads" :key="item.userId">
                <van-image round width="80" height="80" :src="item.userHeadImg" class="imgDis" v-lazy="item" >
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </van-col>
        </van-row>
        <van-divider :style="{ borderColor: '#888'}" />
        <van-cell v-for="(user, index) in dataAll.data" :key="user.vlog.vlogId">
            <template #title>
                <van-row>
                    <van-col>
                        <van-image round width="30" height="30" :src="user.userHeadImg" v-lazy="user" >
                            <template v-slot:loading>
                                <van-loading type="spinner" size="20" />
                            </template>
                        </van-image>
                    </van-col>
                    <van-col>
                        <van-cell :value="user.userName"/>
                    </van-col>
                </van-row>
                <van-image v-for="item in user.vlog.vlogImg" :key="item.index" width="100" height="100" :src="item.img" class="imgDis" fit="contain" v-lazy="item" >
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
                <van-cell :value="user.vlog.vlogContext" />
                <van-row>
                    <van-col>
                        <van-rate v-model="user.vlog.star" readonly />
                    </van-col>
                    <van-col class="toRight">
                        <van-icon name="comment-o" size="30"  @click="setIndex(user, index)" />
                        <van-action-sheet v-model="comment" cancel-text="发表评论" @cancel="onComment">
                            <van-field v-model="commentCon" label="评论内容" />
                        </van-action-sheet>
                    </van-col>
                </van-row>
                <van-cell-group class="block">
                    <van-cell v-for="comment in commentList[index]" :key="comment.commentId" >
                        <template #title>
                            <van-row>
                                <van-col class="imgDis">{{ comment.userName }}：</van-col>
                                <van-col>{{ comment.commentContext }}</van-col>
                        </van-row>
                        </template>
                    </van-cell>
                </van-cell-group>
                <van-divider :style="{ borderColor: '#888'}" />
            </template>
        </van-cell> 
    </div>
</template>

<script>
  export default {
    name: 'focus',
    data () {
      return {
        ifCom: false,
        comIndex: {
            user: {

            },
            index: 0
        },
        commentCon: '',
        commentList: [],
        dataAll: {

        },
        show: false,
        comment: false,
      }
    },
    methods: {
        setIndex(user, index) {
            this.comment = true;
            this.comIndex = {
                user: user,
                index: index
            }

        },
        getComment() {
            let that = this;
            let commentData = that.dataAll.data;
            
            //console.log(that.dataAll);
            for (let i = 0; i < commentData.length; i++) {
                let user = commentData[i];
                let urlData = 'http://47.115.90.9:8181/comment/getCommentByVlogId/' + user.vlog.vlogId;
                let data = {
                    params: {
                        "vlogId": user.vlog.vlogId
                    }
                }
                this.$axios
                .get(urlData, data)
                .then(response => {
                    //console.info(response.data);
                    if (response.data.code == 0) {
                        that.commentList.push(response.data.data);
                    }
                }); 
            }
        },
        onComment() {
            if (this.commentCon === null) {
                this.$toast("评论内容不能为空");
            } else {
                let user = this.comIndex.user;
                let index = this.comIndex.index;
                let data = {
                    "commentId": "0",
                    "userId": user.userId,
                    "vlogId": user.vlog.vlogId,
                    "replyUserId": "0",
                    "commentContext": this.commentCon
                };
                this.$axios
                .put('http://47.115.90.9:8181/comment/toVlog', data)
                .then(response => {
                    if (response.data.code == 0) {
                        this.commentList[index].push(data);
                        this.$toast("成功发表评论");
                    }
                });
            }
        },
    },
    computed: {
      userHeads() {
        const res = new Map();
        return this.dataAll.data.filter((arr) => !res.has(arr.userId) && res.set(arr.userId, 1))
      }
    },

    mounted() {
        let that = this;
        let num = sessionStorage.userInfo;
        let urlData = 'http://47.115.90.9:8181/vlog/getAllStarByUserId//' + num;
        this.$axios
            .get(urlData)
            .then(
                response => {
                    that.dataAll = response.data,
                    that.getComment();
                }
            );
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .imgDis {
        margin-right: 10px;
    }
    .toRight {
        float: right;
        margin-right: 15px;
    }
</style>