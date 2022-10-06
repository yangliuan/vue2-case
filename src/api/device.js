import request from '@/utils/http'

export function deviceLogin(data) {
    return request({
      url: '/api/display/login',
      method: 'post',
      data:data
    })
}