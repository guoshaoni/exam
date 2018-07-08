<template>
    <div>
        <el-form  ref="form" :model="form" label-width="80px"
                  style="padding:40px 30px 20px 20px;background: #ffffff;border-radius: 5px;box-shadow: 0 0 5px rgba(0,0,0,0.5)">

            <el-form-item label="uid" v-model="form.uid" prop="uid">
                {{form.uid}}
            </el-form-item>
            <el-form-item label="学生姓名">
                <el-input v-model="form.mname" prop="mname"></el-input>
            </el-form-item>
            <el-form-item label="所属班级">
                <el-select v-model="form.cid" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.cid"
                            :label="item.cname"
                            :value="item.cid">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:'studentUpdate',
        data:function(){
            return {
                uid:'',
                form:{
                    uid:'',
                    mname:''
                },
                options: []
            }
        },
         methods: {
             onSubmit() {
                 this.$http.post('/home/studentQuery.php',this.form).then(res => {
                     if(res.body=='ok'){
                         this.$router.push({path:'managerStudent'});
                     }else if(res.body=='error'){
                         this.$message({
                             message: '修改失败',
                             type: 'warning'
                         });
                     }
                 })
             }
         },
        mounted(){
            this.uid = this.$route.query.uid;
            this.$http.get('/home/studentGet.php?uid='+this.uid).then(res=>{
                this.form = res.body;
            });
            this.$http.get('/home/managerClass.php').then(res=>{
                this.options = res.body;
            })
        }
    }
</script>
<style></style>