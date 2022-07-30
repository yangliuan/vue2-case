import request from '@/utils/http'

export function allDevices(data) {
    return request({
      url: '/api/control/devices',
      method: 'post',
      data:data
    })
}