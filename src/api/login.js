// test
import request from '@/utils/request'
import requestForm from '@/utils/requestForm'
export function login(params) {
  const data = requestForm({
    ...params
  })
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
};