<template>
    <div>
        <el-form  ref="form" :model="form" label-width="80px"
                  style="padding:40px 30px 20px 20px;background: #ffffff;border-radius: 5px;box-shadow: 0 0 5px rgba(0,0,0,0.5)">
            <el-form-item label="班级名称">
                <el-input v-model="form.cname" prop="cname"></el-input>
            </el-form-item>
            <el-form-item label="所属方向">
                <el-select v-model="form.did" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.did"
                            :label="item.dname"
                            :value="item.did">
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
        name:'Addclasses',
        data:function(){
            return {
                did: '',
                form: {
                    cname: '',
                    did: ''
                },
                options: []
            }
        },
        methods: {
             onSubmit() {
                 this.$http.post('/home/classAdd.php',this.form).then(res => {
                     if(res.body=='ok'){
                         this.$router.push({path:'managerClass'});
                     }else if(res.body=='error'){
                         this.$message({
                             message: '添加失败',
                             type: 'warning'
                         });
                     }
                 })
             }
         },
        mounted(){
            this.$http.get('/home/managerDir.php').then(res => {
                this.options = res.body;
            })
        }
    }
</script>
<style></style>