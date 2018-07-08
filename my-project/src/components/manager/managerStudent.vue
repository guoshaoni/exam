<template>
    <div>
        <div class="panel admin-panel">
            <div class="panel-head"><strong class="icon-reorder"> 学生列表</strong></div>
            <div class="padding border-bottom">
                <router-link  class="button border-yellow" :to="{name:'Addstudent'}" ><span class="icon-plus-square-o"></span> 添加学生</router-link>
            </div>
            <el-table
                    :data="tableData"
                    ref="multipleTable"
                    style="width: 100%"  @selection-change="handleSelectionChange" max-height="350">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="uid"
                        label="uid">
                </el-table-column>
                <el-table-column
                        prop="mname"
                        label="姓名"
                >
                </el-table-column>
                <el-table-column
                        prop="cname"
                        label="班级"
                >
                </el-table-column>
                <el-table-column
                        label="操作"
                >
                    <template slot-scope="scope">
                        <router-link :to="{name:'studentUpdate',query:{uid:scope.row.uid}}" style="color: #409EFF;font-size: 14px">修改</router-link>
                    </template>
                </el-table-column>

            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="reverseSelect">反选</el-button>
                <el-button @click="cancelSelect">取消选择</el-button>
                <el-button @click="del">删除</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'managerStudent',
        data: function () {
            return {
                tableData: [
                    {
                        uid:'',
                        mname:'',
                        cname:''
                    }
                ],
                multipleSelection: []
            }
        },
        methods:{
            del(){
                let ids  = this.multipleSelection.map(ele=>ele.uid);
                this.$http.post('/home/studentDelete.php?ids='+ids).then(res=>{
                    if(res.body =='ok'){
                        this.tableData =  this.tableData.filter(ele=>ids.indexOf(ele.uid) ==-1);

                    }else if(res.body =='error'){
                        this.$message({
                            showClose: true,
                            message: '删除失败'
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
        mounted() {
            this.$http.get('/home/managerStudent.php').then(res => {
                this.tableData = res.body;
            })
        }
    }
</script>
<style>

</style>