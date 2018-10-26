// test
import request from '@/utils/request'
import requestForm from '@/utils/requestForm'
export function productBack(params) {
  const data = requestForm({
    ...params
  })
  return request({
    url: '/auth/arrivals',
    method: 'post',
    data
  })
};
export function detail(params) {
  const data = requestForm({
    ...params
  })
  return request({
    url: '/auth/detailInfo',
    method: 'post',
    data
  })
};
export function allProduct(params) {
  const data = requestForm({
    ...params
  })
  return request({
    url: '/auth/allProduct',
    method: 'post',
    data
  })
};