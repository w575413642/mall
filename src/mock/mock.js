import { stat } from "fs";

const Mock = require('mockjs');
const Random = Mock.Random;
function getQueryVariable(variable, parm) {
    //    var query = window.location.search.substring(1);
    var vars = parm.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

Mock.mock('/auth/allProduct', 'post', Option => {
    return {
        "code": 1,
        "msg": "成功",
        "data": [{
            "orderId": "20170233654158",
            "status": "等待付款",
            "detail": [{
                "specifications": "",
                "description":"买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                "totalPrice": "7855",
                "price": "120",
                "number": "20",
                "img": "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb"
            },
            {
                "specifications": "",
                "description":"买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                "totalPrice": "7855",
                "price": "120",
                "number": "20",
                "img": "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb"
            },
            {
                "specifications": "",
                "description":"买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                "totalPrice": "7855",
                "price": "120",
                "number": "20",
                "img": "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb"
            }]
        }, {
            "orderId": "20170233654158",
            "status": "等待付款",
            "detail": [{
                "specifications": "",
                "description":"买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                "totalPrice": "7855",
                "price": "120",
                "number": "20",
                "img": "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb"
            },
            {
                "specifications": "",
                "description":"买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                "totalPrice": "7855",
                "price": "120",
                "number": "20",
                "img": "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb"
            },
            {
                "specifications": "",
                "description":"买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                "totalPrice": "7855",
                "price": "120",
                "number": "20",
                "img": "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb"
            }]
        }]
    }
})
Mock.mock('/auth/detailInfo', 'post', Option => {
    return {
        "code": 1,
        "msg": "成功",
        "data": {
            topHeaderPicture: [{ id: "1", title: "鞋子", img: 'http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb' }, { id: "12", title: "鞋子", img: 'http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb' }, { id: "13", title: "鞋子", img: 'http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb' }],
            name: "买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
            price: {
                originalPrice: "699",
                presentPrice: "589"
            },
            sales: "660",
            specifications: ["1", "2", "3", "4"],
            company: "件",
            evaluateSize: 18,
            descriptionPicture: [{ id: "1", title: "鞋子", img: "https://demoshop.youpzt.com/uploads/product/2017-01-27/588a21ad9b3f8.jpg" }, { id: "1", title: "鞋子", img: "https://demoshop.youpzt.com/uploads/product/2017-01-27/588a21ad97b09.jpg" }, { id: "1", title: "鞋子", img: "https://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg" }]
        }
    }
})
Mock.mock('/auth/defaultMsg', 'post', Option => {
    return {
        "code": 1,
        "msg": "成功",
        "data": {
            "default": {
                name: "王伟俊",
                phone: "13256147777",
                // address: "新疆维吾尔自治区克孜勒苏柯尔克孜自治州阿图什市格达良乡伊什塔其艾日克比临其街7号楼12单元1360室"
                address: "山东省济南市历下区正觉寺小区1区14号楼2单元406室"
            }
        }
    }
})
Mock.mock('auth/shopping', 'post', {
    "code": 1,
    "msg": "成功",
    "data": [
        {
            name: "一番超市",
            data: [{
                id: 1,
                name: "电动拖鞋1",
                img: "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb",
                description: "买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                price: "123",
                number: "13",
            }, {
                id: 2,
                name: "电动拖鞋2",
                img: "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb",
                description: "买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                price: "123",
                number: "13",
            }]
        },
        {
            name: "天天超市",
            data: [{
                id: 3,
                name: "电动拖鞋3",
                img: "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb",
                description: "买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                price: "123",
                number: "13",
            }, {
                id: 4,
                name: "电动拖鞋4",
                img: "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb",
                description: "买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                price: "123",
                number: "13",
            }, {
                id: 5,
                name: "电动拖鞋5",
                img: "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb",
                description: "买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                price: "123",
                number: "13",
            }]
        },
        {
            name: "一家电视购物",
            data: [{
                id: 6,
                name: "电动拖鞋6",
                img: "http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-07-15/5968f647a8927.jpg!wap-thumb",
                description: "买一送一情侣棉拖鞋女冬季包跟2018新款居家用室内家居毛拖男冬天",
                price: "123",
                number: "13",
            }]
        }
    ]
})
Mock.mock('/auth/detail', 'post', (config) => {
    return {
        // 
        "code": 1,
        "msg": "成功",
        "data": {
            "id": "12",
            "name": "shanhai",
            "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
            "price": "3200",
            "href": "http://www.baidu.com",
            "freight": "0",
            "payment": "24",
            "address": "广东",
            "evaluation_number": "27",
            "data_picture": ['https://demoshop.youpzt.com/uploads/product/2017-01-23/58858307ac436.jpg', 'http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-03-01/58b6a72e7d14c.jpg'],
            "detail_img": ['http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-01-23/5885827eeaea2.jpg', 'http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-01-23/5885827eeaea2.jpg', 'http://dev-eacoomall.oss-cn-shenzhen.aliyuncs.com/attachment/uploads/product/2017-01-23/5885827eeaea2.jpg']
        }
    }
})
Mock.mock('/auth/product', 'post', (config) => {
    return {
        "code": 1,
        "msg": "成功",
        "data": [
            {
                "id": "12",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "13",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "14",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "15",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "16",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "17",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "18",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }
        ]
    }
})
Mock.mock('/auth/processInfo', 'post', (config) => {
    return {
        "code": 1,
        "msg": "成功",
        "data": {
            "process": [{
                "name": "待付款",
                "icon": "daifukuan",
                "info": "0",
            }, {
                "name": "待发货",
                "icon": "icon077",
                "info": "10",
            }, {
                "name": "待收货",
                "icon": "daifahuo1",
                "info": "23",
            }, {
                "name": "待分享",
                "icon": "daipingjia1",
                "info": "6",
            }]
        }
    }
});
Mock.mock('/auth/accountInfo', 'post', (config) => {
    return {
        "code": 1,
        "msg": "成功",
        "data": {
            "account_info": [{
                "name": "资金账户",
                "number": "668.36",
                "company": "元",
            }, {
                "name": "优惠券",
                "number": "24",
                "company": "张",
            }, {
                "name": "积分",
                "number": "6985",
                "company": "分",
            }]
        }
    }
});
Mock.mock('/auth/account', 'post', (config) => {
    return {
        "code": 1,
        "msg": "成功",
        "data": {
            "name": "王伟军",
            "phone": "132****9717",
            "type": "正式用户",
            "header": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg",
            "share": "赵俊峰",
            "evaluate": {
                "all": 34,
                "haveImg": 4
            }
        }
    }
});
Mock.mock('/auth/evaluate', 'post', (config) => {
    return {
        "code": 1,
        "msg": "成功",
        "data": {
            "name": "吃橘子的小王同学觉得很好玩",
            "header": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg",
            "evaluate": {
                "allEvaluate": 34,
                "haveImgEvaluate": 4
            },
            "evaluate_info": [{
                "id": "11",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "number": "24",
                "business": "中华好手机丶",
                "href": "http://www.baidu.com"
            },
            {
                "id": "22",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "number": "24",
                "business": "中华好手机丶",
                "href": "http://www.baidu.com"
            },
            {
                "id": "33",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "number": "24",
                "business": "中华好手机丶",
                "href": "http://www.baidu.com"
            },
            {
                "id": "44",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "number": "24",
                "business": "中华好手机丶",
                "href": "http://www.baidu.com"
            }]
        }
    }
});
Mock.mock('/auth/arrivals', 'post', option => {
    if (getQueryVariable('page', option.body) == 1) {
        return {
            "code": 1,
            "msg": "成功",
            "data": [{
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }, {
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "2",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "3",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            },
            {
                "id": "4",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com",
                "freight": "0",
                "payment": "24",
                "address": "广东"
            }]
        }
    }
    if (getQueryVariable('page', option.body) == 2) {
        return {
            "code": 1,
            "msg": "成功",
            "data": [{
                "id": "11",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "22",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "33",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "44",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            }]
        }
    }
    if (getQueryVariable('page', option.body) == 3) {
        return {
            "code": 1,
            "msg": "成功",
            "data": [{
                "id": "12",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "21",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "33",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "44",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            }]
        }
    }
    if (getQueryVariable('page', option.body) != 3 || getQueryVariable('page', option.body) != 2 || getQueryVariable('page', option.body) != 1) {
        return {
            "code": 1,
            "msg": "成功",
            "data": []
        }
    }
});
Mock.mock('/auth/commodity', 'post', {
    "code": 1,
    "msg": "成功",
    "data": {
        "commodity": [
            [{
                "id": "1",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "2",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "3",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            }],
            [{
                "id": "4",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "5",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "6",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            }],
            [{
                "id": "7",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "8",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            },
            {
                "id": "9",
                "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
                "name": "shanhai",
                "description": '爱疯16土豪金，Apple iPhone 6s Plus 16G 玫瑰金 移动联通电信4G手机',
                "price": "3200",
                "href": "http://www.baidu.com"
            }]
        ]
    }
});
Mock.mock('/auth/list', 'post', {
    "code": 1,
    "msg": "成功",
    "data": {
        "list": [{
            "id": "1",
            "icon": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
            "name": "shanhai",
            "href": "http://www.baidu.com"
        },
        {
            "id": "2",
            "icon": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
            "name": "shanhai",
            "href": "http://www.baidu.com"
        },
        {
            "id": "3",
            "icon": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
            "name": "shanhai",
            "href": "http://www.baidu.com"
        },
        {
            "id": "4",
            "icon": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/e2b412c0-d4b5-11e6-848f-e1eccacdc2a1.png",
            "name": "shanhai",
            "href": "http://www.baidu.com"
        }]
    }
});
Mock.mock('/auth/pictures', 'post', {
    "code": 1,
    "msg": "成功",
    "data": {
        "pictures": [{
            "id": "1",
            "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/14751114169537.jpg",
            "title": "shanhai",
            "href": "http://www.baidu.com"
        },
        {
            "id": "2",
            "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/14751114169537.jpg",
            "title": "shanhai",
            "href": "http://www.baidu.com"
        },
        {
            "id": "3",
            "img": "https://demoshop.youpzt.com/themes/shop-mobile/public/img/14751114169537.jpg",
            "title": "shanhai",
            "href": "http://www.baidu.com"
        }]
    }
});
// 登录

Mock.mock('/auth/login', 'post', (config) => {
    if (getQueryVariable('username', config.body) == 'admin' && getQueryVariable('password', config.body) == 'admin') {
        return {
            "code": 1,
            "msg": "成功",
            "data": {
                "maxAge": 60000,
                "Token": "admin"
            }
        }
    } else {
        return {
            "code": 0,
            "msg": "账号名密码错误",
            "data": {

            }
        }
    }
});
