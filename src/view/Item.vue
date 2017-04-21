<template>
  <div class="item">
    <el-table
    :data="cb.item"
    border
    style="width: 92% ;margin:auto" @row-click="handleEdit">
      <el-table-column label="title" >
        <template scope="scope">
          <span style="">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="num" width="0.3">
        <template scope="scope">
          <el-button v-if="scope.row.num!=0"
          size="small"
          type="danger" >
            {{scope.row.num}}
          </el-button>
          <el-button v-else
          size="small">
            {{scope.row.num}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cb:""
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    handleEdit(row, event, column) {
      window.location.href="/#/list/"+row.name;
    },
    //获取数据
    fetchData(){
      this.$http.get('http://localhost:9090/module_list.json', [])
      .then((data)=>{this.cb=JSON.parse(data.bodyText)}, (err)=>{console.log(err);});
    }
  }
}
</script>
<style>
</style>
