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
import { exportImgQueue } from  '@/api/excel.js'
import { laraecho } from '@/utils/laravel-echo'
import { Message } from 'element-ui'

export default {
    name: 'Excel',
    data() {
      return {
      }
    },
    created() {
        laraecho.channel('excel')
        .listen('ExcelExportCompletedEvent', (e) => {
            this.downloadExcel(e.excel_path,e.disk)
            console.log(e);
        })
    },
    methods: {
        exportStore() {
            window.open(process.env.VUE_APP_API_BASE_URL + '/api/excel/export/store')
        },
        exportDownload() {
            window.open(process.env.VUE_APP_API_BASE_URL + '/api/excel/export/download')
        },
        exportDownloadSheets() {
            window.open(process.env.VUE_APP_API_BASE_URL + '/api/excel/export/download-sheets')
        },
        exportDownloadImages() {
            window.open(process.env.VUE_APP_API_BASE_URL + '/api/excel/export/download-images')
        },
        exportQueue() {
            window.open(process.env.VUE_APP_API_BASE_URL + '/api/excel/export/queue')
        },
        exportQueueWsImg() {
            exportImgQueue()
        },
        downloadExcel(excel_path,disk) {
            Message({
                message: 'excel异步导出完毕，开始下载...',
                type: 'success'
            })
            window.open(process.env.VUE_APP_API_BASE_URL + '/api/files/download?storage_path=' + excel_path + '&disk=' + disk)
        }
    }
}
</script>

<style lang="scss">
</style>