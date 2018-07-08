<template>
    <div>
        <ul class="main">
            <li class="exam" v-for="item in table">
                <router-link :to="{name:'studentPaper',query:{pid:item.pid}}">
                    <img src="../../assets/images/11.jpg" alt="">
                    <div class="text">
                        <span>{{item.pname}}</span>
                        <span>{{cname}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'history',
        data:function(){
            return {
                cname:'',
                table:[]
            }
        },
        mounted(){
            this.$http.get('/home/history.php').then(res=>{
                this.table = res.body[0];
                this.cname = res.body[1];
            })
        }
    }
</script>
<style>
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
    }
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 25px;
    }
    .main .exam{
        width: 300px;
        height: 200px;
        margin-top: 20px;
        margin-right: 40px;
        border: 1px solid #cccccc;
    }
    .main .exam:nth-of-type(4n){
        margin-right: 0;
    }
    .main .exam img{
        width: 100%;
        height: 150px;
        filter: grayscale(1);
    }
    .main .exam .text{
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color:#333333;
        display: flex;
        justify-content: space-between;
    }
</style>