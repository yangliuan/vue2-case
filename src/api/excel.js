import request from '@/utils/http'

export function exportImgQueue() {
    return request({
      url: '/api/excel/export/queue-images',
      method: 'post',
    })
}