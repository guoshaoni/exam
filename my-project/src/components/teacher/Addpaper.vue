<template>
    <div>
        <!--单个试卷的添加-->
        <el-form  ref="form" :model="form" label-width="80px"
                  style="padding:40px 30px 20px 20px;background: #ffffff;border-radius: 5px;box-shadow: 0 0 5px rgba(0,0,0,0.5)">

            <el-form-item label="试卷名称">
                <el-input v-model="form.pname" prop="pname"></el-input>
            </el-form-item>
            <el-form-item label="出题人">
                <el-input v-model="form.pauthor" prop="pauthor"></el-input>
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
        name:'Addpaper',
        data:function(){
            return {
                pid:'',
                form:{
                    pname:'',
                    pauthor:'',
                    cid:''
                },
                options: []
            }
        },
        methods: {
            onSubmit() {
                this.$http.post('/home/paperAdd.php',this.form).then(res => {
                    if(res.body=='ok'){
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        this.$router.push({path:'paper'});
                    }else if(res.body=='error'){
                        this.$message({
                            message: '添加失败',
                            type: 'warning'
                        });
                    }
                })
            },
        },
        mounted(){
            this.$http.get('/home/managerClass.php').then(res=>{
                this.options = res.body;
            })
        }
    }
</script>
<style></style>