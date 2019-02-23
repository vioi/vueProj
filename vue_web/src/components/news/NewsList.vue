<template>
    <div>
        <ul class="mui-table-view">
            <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1 style="white-space:pre-wrap">{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dataFormatter }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data:function () {
            return {
                newsList:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){
                this.$http.get('api/getnewslist').then(function({body}){
                    if(body.status === 0){
                        this.newsList = body.message;
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
