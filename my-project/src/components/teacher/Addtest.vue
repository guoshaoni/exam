<template>
    <div>
        <el-form  ref="form" :model="form" label-width="80px"
                  style="padding:40px 30px 20px 20px;background: #ffffff;border-radius: 5px;box-shadow: 0 0 5px rgba(0,0,0,0.5)">
            <el-form-item label="tid" v-model="form.tid" prop="tid">
                {{form.tid}}
            </el-form-item>
            <el-form-item label="题干及选项">
                <el-input v-model="form.title" prop="title"></el-input>
            </el-form-item>
            <el-form-item label="答案">
                <el-input v-model="form.answer" prop="answer"></el-input>
            </el-form-item>
            <el-form-item label="试题类型">
                <el-select v-model="form.type" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.tid"
                            :label="item.tname"
                            :value="item.tid">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="出题人">
                <el-input v-model="form.author" prop="author"></el-input>
            </el-form-item>
            <el-form-item label="分数">
                <el-input v-model="form.score" prop="score"></el-input>
            </el-form-item>
            <el-form-item label="所属阶段">
                <el-select v-model="form.sid" placeholder="请选择">
                    <el-option
                            v-for="item in options1"
                            :key="item.sid"
                            :label="item.sname"
                            :value="item.sid">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="解析">
                <el-input v-model="form.exp" prop="exp"></el-input>
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
                tid:'',
                form:{
                    tid:'',
                    title:'',
                    answer:'',
                    score:'',
                    author:'',
                    exp:'',
                    sid:'',
                    type:''
                },
                options: [],
                options1: []
            }
        },
        methods: {
            onSubmit() {
                this.$http.post('/home/testAdd.php',this.form).then(res => {
                    if(res.body=='ok'){
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        this.$router.push({path:'teacherTest'});
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
            this.$http.get('/home/testType.php').then(res=>{
                this.options = res.body;
            });
            this.$http.get('/home/managerStage.php').then(res=>{
                this.options1 = res.body;
            })
        }
    }
</script>
<style></style>