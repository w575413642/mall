// test
import request from '@/utils/request'
import requestForm from '@/utils/requestForm'
export function pictures(params) {
  const data = requestForm({
    ...params
  })
  return request({
    url: '/auth/pictures',
    method: 'post',
    data
  })
};
export function list(params) {
    const data = requestForm({
      ...params
    })
    return request({
      url: '/auth/list',
      method: 'post',
      data
    })
  };
  export function commodity(params) {
    const data = requestForm({
      ...params
    })
    return request({
      url: '/auth/commodity',
      method: 'post',
      data
    })
  };
  export function arrivals(params) {
    const data = requestForm({
      ...params
    })
    return request({
      url: '/auth/arrivals',
      method: 'post',
      data
    })
  };