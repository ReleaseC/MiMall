import Mock from 'mockjs'
Mock.mock(RegExp('/api/user/login' + ".*"),"get",{
    "status": 0,
    "data": {
        "id|1001-11000":0,
        "success":true,
        "username": "@cname"
    }
})
Mock.mock(RegExp('/api/products' + ".*"),"get",{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 1,
                "categoryId": 3,
                "name": "iphone7",
                "subtitle": "双十一促销",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 7199.22
            },
            {
                "id": 2,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 2999.11
            },
            {
                "id": 3,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 2999.11
            },
            {
                "id": 4,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 2999.11
            },
            {
                "id": 5,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 2999.11
            },
            {
                "id": 6,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 2999.11
            },
            {
                "id": 7,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 2999.11
            },
            {
                "id": 8,
                "categoryId": 2,
                "name": "oppo R8",
                "subtitle": "oppo促销进行中",
                "mainImage": "/imgs/nav-img/nav-1.png",
                "status":1,
                "price": 2999.11
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
})

Mock.mock(RegExp('/api/carts' + ".*"),"get",{
    "status": 0,
    "data": {
        "cartProductVoList": [
            {
                "id": 1,
                "userId": 13,
                "productId": 1,
                "quantity": 1,
                "productName": "iphone7",
                "productSubtitle": "双十一促销",
                "productMainImage": "mainimage.jpg",
                "productPrice": 7199.22,
                "productStatus": 1,
                "productTotalPrice": 7199.22,
                "productStock": 86,
                "productSelected": true,
            },
            {
                "id": 2,
                "userId": 13,
                "productId": 2,
                "quantity": 1,
                "productName": "oppo R8",
                "productSubtitle": "oppo促销进行中",
                "productMainImage": "mainimage.jpg",
                "productPrice": 2999.11,
                "productStatus": 1,
                "productTotalPrice": 2999.11,
                "productStock": 86,
                "productSelected": false,
            }
        ],
        "selectedAll": false,
        "cartTotalPrice": 10198.33,
        "cartTotalQuantity":2
    }
})
Mock.mock(RegExp('/api/shippings' + ".*"),"get",{
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 10,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [
            {
                "id": 4,
                "userId": 13,
                "receiverName": "geely",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066385000,
                "updateTime": 1485066385000
            },
            {
                "id": 5,
                "userId": 13,
                "receiverName": "AAA",
                "receiverPhone": "010",
                "receiverMobile": "18688888888",
                "receiverProvince": "北京",
                "receiverCity": "北京市",
                "receiverDistrict": "海淀区",
                "receiverAddress": "中关村",
                "receiverZip": "100000",
                "createTime": 1485066392000,
                "updateTime": 1485075875000
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
})