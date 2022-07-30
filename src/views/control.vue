<template>
  <div>
    <el-container>
      <el-header>控制全部-公共广播</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple"> 
              <el-button type="primary" round @click="sendInstruction('prev')">prev</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary" round @click="sendInstruction('next')">next</el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { allDevices } from '@/api/control'

export default {
  name: 'Control',
  data() {
    return {
    }
  },
  methods: {
    sendInstruction(direction){
      allDevices({action_type:'move',action:direction})
      .then((response)=>{
        console.log(response)
      })
    }
  }
}

</script>

<style lang="scss">
  .el-header, .el-footer {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>