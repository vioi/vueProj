<template>
    <div class="shopcar-container">
        <!-- 商品列表项区域 -->
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div v-for="item in goodslist" :key="item.id" class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getSelectedGood[item.id]" @change="switchChanged($store.getters.getSelectedGood[item.id],item.id)"></mt-switch>
                        <img :src="item.thumb_path">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <shop-box :goodid="item.id" :initCount="$store.getters.getGoodsCount[item.id]"></shop-box>
                                <a @click="deleteGood(item.id)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计{{ $store.getters.getSelectGoodMsg.sumprice }}</p>
                        <p>已勾选商品 <span class="red">{{ $store.getters.getSelectGoodMsg.sumcount }}</span> 件，总价<span class="red">￥{{ $store.getters.getSelectGoodMsg.sumprice }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    console.log("ShopContainer")
    import ShopBox from '@/components/common/shopcarbox.vue'
    import Vue from 'vue'
    export default {
        data:function(){
            return {
                goodslist:[],
                rootPath:Vue.http.options.root
            }
        },
        created(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                //获取购物车中所保存的商品id
                let idArr = []
                this.$store.state.car.forEach(item=>{
                    idArr.push(item.id)
                })
                this.$http.get("api/goods/getshopcarlist/" + idArr.join(",")).then(result => {
                    if (result.body.status === 0) {
                        this.goodslist = result.body.message;
                        this.goodslist.forEach(item=>{
                            item.thumb_path = this.rootPath + item.thumb_path;
                        })
                        //console.log(this.goodslist)
                    }
                });
            },
            deleteGood(id){
                this.$store.commit('deleteCar',id)
                //手动删除goodslist数组对应的信息
                let idx = this.goodslist.findIndex(item=>{
                    return item.id == id;
                })
                this.goodslist.splice(idx,1)
            },
            switchChanged(isselectd,id){
                //console.log(isselectd,id)
                let obj = {
                    isselectd,
                    id
                }
                this.$store.commit('updateCar',obj)
            }
        },
        watch: {

        },
        components:{
            ShopBox
        }
    }
</script>

<style lang="less" scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;
        .goods-list {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }
            img {
                width: 60px;
            }
            h1 {
                font-size: 13px;
            }
            .info {
                .price {
                    color: red;
                    font-weight: bold;
                }
            }
        }
        .jiesuan {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red {
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
</style>