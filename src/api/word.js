import request from '@/utils/http'

export function htmlToWord(data) {
    return request({
      url: '/api/doc/word/html-to-word',
      method: 'post',
      data: data
    })
}

export function wordToHtml(data) {
    return request({
      url: '/api/doc/word/word-to-html',
      method: 'post',
      data: data
    })
}