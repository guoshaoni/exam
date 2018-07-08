<template>
    <div>
        <el-form  ref="form" :model="form" label-width="80px"
                  style="padding:40px 30px 20px 20px;background: #ffffff;border-radius: 5px;box-shadow: 0 0 5px rgba(0,0,0,0.5)">

            <el-form-item label="pid" v-model="form.pid" prop="pid">
                {{form.pid}}
            </el-form-item>
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

        <!--批量添加试卷-->
        <div class="panel admin-panel">
            <el-table
                    :data="tableData"
                    ref="multipleTable"
                    style="width: 100%"  @selection-change="handleSelectionChange" max-height="350">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="tid"
                        label="tid">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="试题及选项"
                >
                </el-table-column>
                <el-table-column
                        prop="sname"
                        label="所属阶段名称"
                >
                </el-table-column>
                <el-table-column
                        prop="pname"
                        label="试卷名称"
                >
                </el-table-column>
                <el-table-column
                        prop="cname"
                        label="班级名称"
                >
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="reverseSelect">反选</el-button>
                <el-button @click="cancelSelect">取消选择</el-button>
                <el-button @click="add">添加</el-button>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        name:'paperUpdate',
        data:function(){
            return {
                pid:'',
                form:{
                    pid:'',
                    pname:'',
                    pauthor:'',
                    cid:''
                },
                options: [],
                tableData:[]
            }
        },
        methods: {
            onSubmit() {
                this.$http.post('/home/paperQuery.php',this.form).then(res => {
                    if(res.body=='ok'){
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        this.$router.push({path:'paper'});
                    }else if(res.body=='error'){
                        this.$message({
                            message: '修改失败',
                            type: 'warning'
                        });
                    }
                })
            },
            add(){
                let ids  = this.multipleSelection.map(ele=>ele.tid);
                this.$http.post('/home/addPextra.php',{ids:ids,pid:this.pid}).then(res=>{
                    console.log(res.body);
                    return ;
                    if(res.body =='ok'){
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
//                        this.$router.push({path:'paper'});
                    }else if(res.body =='error'){
                        this.$message({
                            showClose: true,
                            message: '添加失败'
                        });
                    }
                })
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            cancelSelect(){
                this.$refs.multipleTable.clearSelection();
            },
            reverseSelect(){
                this.tableData.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            }
        },
        mounted(){
            this.pid = this.$route.query.pid;
            this.$http.get('/home/paperGet.php?pid='+this.pid).then(res=>{
                this.form = res.body;
            });
            this.$http.get('/home/managerClass.php').then(res=>{
                this.options = res.body;
            })
            this.$http.get('/home/pextraInfo.php').then(res=>{
                this.tableData=res.body;
            })
        }
    }
</script>
<style></style>