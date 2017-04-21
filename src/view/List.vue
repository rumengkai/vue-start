<template>
  <div class="list" style="width: 92% ;margin:auto">
    <div class="head">
      <span class="span">模块: {{this.name}} </span>
      &nbsp;&nbsp;共 {{this.cb.item.length}} 条
      <el-button type="danger" @click="deleteList">&nbsp;&nbsp;清空&nbsp;&nbsp;</el-button>
    </div>
    <el-table
      :data="cb.item"
      border
      style="width: 100% ;margin:auto" @row-click="handleEdit">
      <el-table-column label="title">
        <template scope="scope">
          <span style="">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="IP">
        <template scope="scope">
          <span style="">{{ scope.row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column label="time" >
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block" style="margin:100px auto;width:auto;">
      <el-pagination
      layout="prev, pager, next"
      :total="30">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name:this.$route.params.id,
        cb:{item:[]}
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      handleEdit(row, event, column) {
        window.location.href="/#/detail/"+row.id;
      },
      //获取数据
      fetchData(){
        this.$http.get('http://localhost:9090/module_info.json', [])
        .then((data)=>{this.cb=JSON.parse(data.bodyText)}, (err)=>{console.log(err);});
      },
      deleteList() {
        // window.location.href="/#/detail/"+row.id;
        console.log("执行"+this.name+"删除操作");
      },
    }
  }
</script>
<style>
.list .head .span{
  font-size: 20px;
  display: inline-block;
}
.list .head{
  margin:20px 0 ;
}
.list .head button{
  float: right;
}

</style>
