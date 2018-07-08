<template>
    <div>
        <el-form  ref="form" :model="form" label-width="80px"
                  style="padding:40px 30px 20px 20px;background: #ffffff;border-radius: 5px;box-shadow: 0 0 5px rgba(0,0,0,0.5)">

            <el-form-item label="did" v-model="form.did" prop="did">
                {{form.did}}
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="form.dname" prop="dname"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:'dirUpdate',
        data:function(){
            return {
                did:'',
                form:{
                    did:'',
                    dname:[]
                }
            }
        },
         methods: {
             onSubmit() {
                 this.$http.post('/home/dirQuery.php',this.form).then(res => {
                     if(res.body=='ok'){
                         this.$message({
                             message: '修改成功',
                             type: 'success'
                         });
                         this.$router.push({path:'managerDir'});
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
            this.did = this.$route.query.did;
            this.$http.get('/home/dirGet.php?did='+this.did).then(res=>{
                this.form = res.body;
            })
        }
    }
</script>
<style></style>