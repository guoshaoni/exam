<template>
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 内容列表</strong></div>
        <div class="padding border-bottom">
            <router-link class="button border-yellow" :to="{name:'Addclasses'}"><span class="icon-plus-square-o"></span>添加内容</router-link>
        </div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="cid"
                    label="cid">
            </el-table-column>
            <el-table-column
                    prop="cname"
                    label="班级名称">
            </el-table-column>
            <el-table-column
                    prop="dname"
                    label="方向名称">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <router-link :to="{name:'classUpdate',query:{cid:scope.row.cid}}">修改</router-link>
                    <el-button type="text" size="small" @click="del(scope.row.cid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'manageClass',
        data: function () {
            return {
                tableData: []
            }
        },
        methods:{
            del(cid){
                this.$http.post('/home/classDelete.php',{cid}).then(res=>{
                    if(res.body =='ok'){
                        this.tableData =  this.tableData.filter(ele=>ele.cid != cid);
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
            this.$http.get('/home/managerClass.php').then(res => {
                this.tableData = res.body;
            })
        }
    }
</script>
<style>

</style>