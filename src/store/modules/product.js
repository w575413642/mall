import { productBack, detail, allProduct } from '@/api/product'
const product = {
    state: {
    },
    mutations: {

    },
    actions: {

        async allProductInfo({
            commit
        }, Parm) {
            return await allProduct(Parm)
        },
        async getDetailInfo({
            commit
        }, Parm) {
            return await detail(Parm)
        },
        async ProductInfo({
            commit
        }, Parm) {
            return await productBack(Parm)
        },

    }
}

export default product