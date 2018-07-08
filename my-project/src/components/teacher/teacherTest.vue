<template>
    <div class="panel admin-panel">
        <div class="panel-head"><strong class="icon-reorder"> 试题列表</strong></div>
        <div class="padding border-bottom">
            <router-link class="button border-yellow" :to="{name:'Addtest'}"><span class="icon-plus-square-o"></span>添加试题</router-link>
        </div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="解析">
                            <span>{{ props.row.exp}}</span>
                        </el-form-item>
                        <br>
                        <el-form-item label="选项">
                            <a v-for="item in props.row.options">
                                {{item}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="试题id"
                    prop="tid">
            </el-table-column>
            <el-table-column
                    label="题干"
                    prop="title1">
            </el-table-column>
            <el-table-column
                    label="答案"
                    prop="answer">
            </el-table-column>
            <el-table-column
                    label="试题类型"
                    prop="tname">
            </el-table-column>
            <el-table-column
                    label="出题人"
                    prop="author">
            </el-table-column>
            <el-table-column
                    label="分数"
                    prop="score">
            </el-table-column>
            <el-table-column
                    label="阶段名称"
                    prop="sname">
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <router-link :to="{name:'testUpdate',query:{tid:scope.row.tid}}">修改</router-link>
                    <el-button type="text" size="small" @click="del(scope.row.tid)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
    export default {
        data() {
            return {
                tableData5: []
            }
        },
        computed:{
            tableData(){
                let tableData = [];
                this.tableData5.forEach(e=>{
                    let v = e.title.split('_');
                    let title1 = v[0];
                    let options = [];
                    if(v[1]){
                        let arr = v[1].split('|');
                        for(let i =0;i<arr.length;i++){
                            options.push(arr[i]);
                        }
                    }else{
                        options = '';
                    }
                    tableData.push({tid:e.tid,title1:title1,options:options,answer:e.answer,tname:e.tname,exp:e.exp,author:e.author,sname:e.sname,score:e.score})
                });
                return tableData;
            }
        },
        methods:{
            del(tid)
            {
                this.$http.post('/home/testDelete.php', {tid}).then(res => {
                    if (res.body == 'ok') {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.tableData5 = this.tableData5.filter(ele => ele.tid != tid);
                    } else if(res.body == 'error'){
                        this.$message({
                            showClose: true,
                            message: '删除失败'
                        })
                    }
                })
            }
        },
        beforeCreate(){
            this.$http.post('/home/teacherTest.php').then(res => {
                this.tableData5 = res.body;
            })
        }
    }
</script>