<template>
    <div>
        <el-form  ref="form" :model="form" label-width="80px"
                  style="padding:40px 30px 20px 20px;background: #ffffff;border-radius: 5px;box-shadow: 0 0 5px rgba(0,0,0,0.5)">

            <el-form-item label="tid" v-model="form.tid" prop="tid">
                {{form.tid}}
            </el-form-item>
            <el-form-item label="教师姓名">
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
            <el-form-item label="所属方向">
                <el-select v-model="form.did" placeholder="请选择">
                    <el-option
                            v-for="item in optionsDir"
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
        name:'teacherUpdate',
        data:function(){
            return {
                tid:'',
                form:{
                    tid:'',
                    mname:'',
                    cid:'',
                    did:''
                },
                options: [],
                optionsDir: []
            }
        },
        methods: {
            onSubmit() {
                this.$http.post('/home/teacherQuery.php',this.form).then(res => {
                    if(res.body=='ok'){
                        this.$router.push({path:'managerTeacher'});
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
            this.tid = this.$route.query.tid;
            this.$http.get('/home/teacherGet.php?tid='+this.tid).then(res=>{
                this.form = res.body;
            });
            this.$http.get('/home/managerClass.php').then(res=>{
                this.options = res.body;
            })
            this.$http.get('/home/managerDir.php').then(res=>{
                this.optionsDir = res.body;
            })
        }
    }
</script>
<style></style>