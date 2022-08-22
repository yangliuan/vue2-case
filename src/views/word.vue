<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="网页地址">
            <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onHtmlToWordSubmit">网页html转word</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { htmlToWord } from '@/api/word'
export default {
    data() {
      return {
        form: {
          url: '',
        }
      }
    },
    methods: {
      onHtmlToWordSubmit() {
        htmlToWord(this.form)
      }
    }
}
</script>