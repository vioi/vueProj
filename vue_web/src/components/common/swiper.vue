<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用key -->
            <!-- 将来谁使用此轮播图组件，谁为我们传递lunbotuList -->
            <!-- 此时lunbotuList 应该是父组件向子组件传值来设置 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <!--:class="{'full': isfull}" 表示是否需要添加full样式，如果为true表示需要添加。
                     为了解决在商品详情页面中轮播图的图片使用宽高100%页面不好看的问题-->
                <img :src="item.src" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        created() {

        },
        props:['lunbotuList','isfull'],
        methods: {},
        components: {}
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            /*让图片居中*/
            text-align: center;

            img {
                /*高度100%*/
                height: 100%;
            }
        }
    }

    /*是否启用宽度100%*/
    .full {
        width: 100%;
    }
</style>