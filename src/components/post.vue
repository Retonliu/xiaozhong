<template>
    <div id="post">
        <van-form @submit="uploadImg">
            <van-field v-model="title" label="帖子标题" placeholder="说点啥" />
            <van-field
              v-model="text"
              rows="1"
              autosize
              label="帖子内容"
              type="textarea"
              placeholder="输入你的帖子内容"
             />
            <van-field name="uploader" label="文件上传">
                <template #input>
                    <van-uploader v-model="fileList" :max-count="9" :before-read="beforeRead" :after-read="afterRead" />
                </template>
            </van-field>
            <van-field>
                <template #input>
                    <van-rate v-model="star" />
                </template>
            </van-field>
            <van-button round block type="info" native-type="submit">提交</van-button>
        </van-form>
    </div>
</template>



<script>
export default {
    name: 'post',
    data() {
        return {
            title: '',
            text: '',
            star: 0,
            imgList: [
            ],
            fileList: [

            ]
        }
    },
    methods: {
        beforeRead(file) {
          //console.log(file);
            if (file.type !== 'image/jpeg') {
                //Toast('请上传 jpg 格式图片');
                return false;
            }
            return true;
        },
        afterRead(file) {
            this.imgList.push(file.file);
            //console.log(file.file);
        },
        uploadImg() {
            let configs = {
                headers:{'Content-Type':'multipart/form-data'}
            };
            let that = this;
            let formData = new FormData();
            
            let userId = sessionStorage.userInfo;
            formData.append('userId', userId);
            formData.append('vlogTitle', this.title);
            this.imgList.map(item => (formData.append('file', item)));
            formData.append('vlogContext', this.text);
            //console.log(formData.getAll('file'));
            this.$axios
                .post('http://47.115.90.9:8181/myVlog/createVlog', formData, configs)
                .then(function (res) {
                    if (res.data.code === 0) {
                        that.$toast("发布成功");
                    }
                })
                .catch(err => {
                    console.info(err.message);
            })
        }
    }
}
</script>