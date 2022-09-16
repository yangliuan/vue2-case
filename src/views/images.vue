<template>
    <div>
        <el-row>
        <el-button round @click="intervertionWaterMarker">生成水印</el-button>
        <el-button type="primary" round @click="intervertionPicwordWatermark">图文混合水印，自定适配图片大小</el-button>
        <el-button type="success" round @click="intervertionMaskCutRound">使用图层蒙版裁切成制定形状</el-button>
        <el-button type="info" round @click="intervertionDrawGraphics">海报绘制图形头像</el-button>
        <el-button type="warning" round @click="intervertionResponseImg">绘制图形并响应为图片</el-button>

        <el-button type="danger" round @click="intervertionTile">平铺填充</el-button>
        <el-button type="danger" round @click="intervertionReadbase64">读取base64格式图片</el-button>
        <el-upload
            class="upload-demo"
            drag
            accept=".jpg,.jpeg,.png,.bmp,.webp,.gif"
            :action="upload_url"
            :on-success="uploadSuccess"
            name="image_compress"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">图片压缩</div>
        </el-upload>
        <el-upload
            class="upload-demo"
            drag
            accept=".jpg,.jpeg,.png,.bmp,.webp,.gif"
            :action="upload_url"
            :on-success="uploadSuccess"
            name="image_thumbail"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">适配裁切方式生成缩略图</div>
        </el-upload>
        <el-upload
            class="upload-demo"
            drag
            accept=".jpg,.jpeg,.png,.bmp,.webp,.gif"
            :action="upload_url"
            :on-success="uploadSuccess"
            name="image_convert"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">图片转换格式</div>
        </el-upload>
    </el-row>
    </div>
</template>

<script>
export default {
    data() {

    },
    method: {
        intervertionWaterMarker() {

        },
        intervertionPicwordWatermark() {

        },
        intervertionMaskCutRound() {

        },
        intervertionDrawGraphics() {

        },
        intervertionResponseImg() {

        },
        intervertionTile() {

        },
        intervertionReadbase64() {

        },
        intervertionImageCompress() {

        },
        intervertionImageThumbnail() {

        },
        intervertionImageConvert() {

        },
        intervertionImageConvert() {

        }

    }
}
</script>