<template>
  <el-form ref="cb" :model="cb" label-width="80px" style="width: 95% ;margin:auto">
    <el-form-item label="title：">
      {{cb.info.title}}
    </el-form-item>
    <el-form-item label="时间：">
      {{cb.info.time}}
    </el-form-item>
    <el-form-item label="内容：">
      {{cb.info.content}}
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        cb:{
          "status":0,
          "info":{
            "id":0,
            "title":"",
            "content":"",
            "time":""
          }
        }
      }
    },
    created () {
      this.fetchData(this.$route.params.id);
    },
    methods: {
      //获取数据
      fetchData(id){
        this.$http.get('http://localhost:3000/'+id+'.json', [])
        .then((data)=>{this.cb=JSON.parse(data.bodyText)}, (err)=>{console.log(err);});
      }
    }
  }
</script>
<style>

</style>
