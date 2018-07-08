<template>
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 试卷列表</strong></div>
        <div class="padding border-bottom">
            <router-link class="button border-yellow" :to="{name:'Addpaper'}"><span class="icon-plus-square-o"></span>添加试卷</router-link>
        </div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="pid"
                    label="pid">
            </el-table-column>
            <el-table-column
                    prop="pname"
                    label="试卷名称">
            </el-table-column>
            <el-table-column
                    prop="pauthor"
                    label="出题人">
            </el-table-column>
            <el-table-column
                    prop="cname"
                    label="班级名称">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <router-link :to="{name:'paperUpdate',query:{pid:scope.row.pid}}">修改</router-link>
                    <el-button type="text" size="small" @click="del(scope.row.pid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'paper',
        data: function () {
            return {
                tableData: [{
                    pid:'',
                    pname:'',
                    cname:''
                }]
            }
        },
        methods:{
            del(pid){
                this.$http.post('/home/paperDelete.php',{pid}).then(res=>{
                    if(res.body =='ok'){
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.tableData =  this.tableData.filter(ele=>ele.pid != pid);
                    }else if(res.body =='error'){
                        this.$message({
                            showClose: true,
                            message: '删除失败'
                        });
                    }
                })
            }
        },
        mounted() {
            this.$http.post('/home/paper.php').then(res => {
                this.tableData = res.body;
            })
        }
    }
</script>
<style>

</style>