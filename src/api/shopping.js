import request from '@/utils/request'
import requestForm from '@/utils/requestForm'
export function shoppingInfo(params) {
    const data = requestForm({
        ...params
    })
    return request({
        url: 'auth/shopping',
        method: 'post',
        data
    })
};