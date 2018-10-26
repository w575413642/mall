// test
import request from '@/utils/request'
import requestForm from '@/utils/requestForm'
export function account(params) {
    const data = requestForm({
        ...params
    })
    return request({
        url: '/auth/account',
        method: 'post',
        data
    })
};
export function evaluateInfo(params) {
    const data = requestForm({
        ...params
    })
    return request({
        url: '/auth/evaluate',
        method: 'post',
        data
    })
};
export function accountInfo(params) {
    const data = requestForm({
        ...params
    })
    return request({
        url: '/auth/accountInfo',
        method: 'post',
        data
    })
};
export function processInfo(params) {
    const data = requestForm({
        ...params
    })
    return request({
        url: '/auth/processInfo',
        method: 'post',
        data
    })
};
export function defaultMsg(params) {
    const data = requestForm({
        ...params
    })
    return request({
        url: '/auth/defaultMsg',
        method: 'post',
        data
    })
};