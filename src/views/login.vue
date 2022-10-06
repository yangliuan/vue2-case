<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="MAC">
        <el-input v-model="form.mac" placeholder=""></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { deviceLogin } from  '@/api/device.js'

export default {
  name: 'APP',
  data () {
    return {
        form: {
            mac: 'FC:34:97:97:AA:45',
        }
    }
  },
  methods: {
    onSubmit() {
        deviceLogin({mac:this.form.mac})
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: auto;
    padding: 5px;
    width:800px;
    height:600px;
  }
</style>
