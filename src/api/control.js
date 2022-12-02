import request from '@/utils/http'

export function allDevices(data) {
  return request({
    url: '/api/control/devices',
    method: 'post',
    data:data
  })
}

export function authDevices(id,data) {
  return request({
    url:`/api/control/device/${id}`,
    method: 'put',
    data:data
  })
}