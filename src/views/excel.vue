<template>
<div>
    <el-row>
        <el-button round @click="exportStore">导出到磁盘</el-button>
        <el-button type="primary" round @click="exportDownload">下载导出</el-button>
        <el-button type="success" round @click="exportDownloadSheets">下载导出多页sheets</el-button>
        <el-button type="info" round @click="exportDownloadImages">下载导出图片</el-button>
        <el-button type="warning" round @click="exportQueue">队列导出</el-button>
        <el-button type="danger" round @click="exportQueueWsImg">队列导出图片并接收websocket广播通知</el-button>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'Excel',
    data() {
      return {
      }
    },
    methods: {
        exportStore() {
            window.open(process.env.VUE_APP_API_BASE_URL+'/api/excel/export/store')
        },
        exportDownload() {
            window.open(process.env.VUE_APP_API_BASE_URL+'/api/excel/export/download')
        },
        exportDownloadSheets() {
            window.open(process.env.VUE_APP_API_BASE_URL+'/api/excel/export/download-sheets')
        },
        exportDownloadImages() {
            window.open(process.env.VUE_APP_API_BASE_URL+'/api/excel/export/download-images')
        },
        exportQueue() {
            window.open(process.env.VUE_APP_API_BASE_URL+'/api/excel/export/queue')
        },
        exportQueueWsImg() {
            
        },
    }
}
</script>

<style lang="scss">
</style>