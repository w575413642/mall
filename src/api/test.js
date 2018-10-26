// test
import request from '@/utils/request'
import requestForm from '@/utils/requestForm'
export function test(params) {
  const data = requestForm({
    ...params
  })
  return request({
    url: '/news/index',
    method: 'post',
    data
  })
};