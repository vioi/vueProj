<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ news.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ news.add_time | dataFormatter }}</span>
            <span>点击：{{ news.click }}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="news.content"></div>

        <!--使用子组件-->
        <Comment :id="newsid"></Comment>
    </div>
</template>

<script>
    console.log("xxx")
import Comment from '@/components/common/comment.vue'
export default {
    data:function(){
        return {
            newsid:this.$route.params.id,
            news:{}
        }
    },
    beforeCreate(){
        console.log("newsInfo的beforeCreate方法")
    },
    created(){
        this.getnew();
        console.log("newsInfo的created方法")
    },
    methods:{
        getnew(){
            this.$http.get("api/getnew/"+this.newsid).then(function ({body}) {
                if(body.status === 0 && body.message.length > 0)
                this.news = body.message[0]
            })
        }
    },
    components:{
        Comment
    }
}
</script>

<style lang="less">
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>