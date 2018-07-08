<template>
   <div>
      <header>
         <div>
            <img src="../../assets/images/y.jpg" class="img">
         </div>
         <div class="right">
            <a href="#/student/exam">考试</a>&nbsp;&nbsp;
            <a href="#/student/history">历史记录</a>&nbsp;
            <span>学生姓名:</span>&nbsp;
            <span>张三</span>&nbsp;&nbsp;
            <a href="#/">退出</a>
         </div>
      </header>
      <div class="admin">
         <router-view width="100%" height="100%"></router-view>
      </div>
   </div>
</template>
<script>
    export default{
        name:'student',
        data(){
            return {
                uid:'',
                mname:''
            }
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
   header{
      width: 100%;
      height: 80px;
      background: #cccccc;
      display: flex;
      justify-content: space-between;
      padding: 15px 30px;
      overflow: hidden;
      box-sizing: border-box;
   }
   header .img{
      width:50px;
      height: 50px;
      border-radius: 50%;
   }
   header .right{
      line-height: 40px;
      font-size: 20px;
      color: #08bbe1;
   }
   header .right a{
      font-size: 20px;
      color: #08bbe1;
   }
</style>