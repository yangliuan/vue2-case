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
    <el-upload
      class="upload-demo"
      drag
      action=""
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
import { htmlToWord } from '@/api/word'
export default {
    data() {
      return {
        form: {
          url: '',
        },
        upload_url:process.env.VUE_APP_API_BASE_URL + ''
      }
    },
    methods: {
      onHtmlToWordSubmit() {
        htmlToWord(this.form)
      }
    }
}
</script>