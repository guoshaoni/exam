<template>
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 题型列表</strong></div>
        <div class="padding border-bottom">
            <router-link class="button border-yellow" :to="{name:'Addtype'}"><span class="icon-plus-square-o"></span>添加题型</router-link>
        </div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="tid"
                    label="tid">
            </el-table-column>
            <el-table-column
                    prop="tname"
                    label="题型名称">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <router-link :to="{name:'typeUpdate',query:{tid:scope.row.tid}}">修改</router-link>
                    <el-button type="text" size="small" @click="del(scope.row.tid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'testType',
        data: function () {
            return {
                tableData: []
            }
        },
        methods:{
            del(tid){
                this.$http.post('/home/typeDelete.php',{tid}).then(res=>{
                    if(res.body =='ok'){
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.tableData =  this.tableData.filter(ele=>ele.tid != tid);
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
            this.$http.post('/home/testType.php').then(res => {
                this.tableData = res.body;
            })
        }
    }
</script>
<style>

</style>