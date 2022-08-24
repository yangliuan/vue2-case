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
      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/wps-office.docx"
      :action="upload_url"
      :on-success="uploadSuccess"
      name="word"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">word转htmldemo，只能上传word文件</div>
    </el-upload>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <pre>{{word_content}}</pre>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>

export default {
    data() {
      return {
        form: {
          url: '',
        },
        upload_url: process.env.VUE_APP_API_BASE_URL + '/api/doc/word/word-to-html',
        dialogVisible: false,
        word_content: '',
      }
    },
    methods: {
      onHtmlToWordSubmit() {
        window.open(process.env.VUE_APP_API_BASE_URL + '/api/doc/word/html-to-word?url='+this.form.url)
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      uploadSuccess(response, file, fileList) {
          console.log(response,file,fileList)
          this.dialogVisible = true
          this.word_content = response
      }
    }
}
</script>