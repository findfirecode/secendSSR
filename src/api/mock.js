import Mock from 'mockjs'
const mockData = {
    'listinfo':[
        {
            img:require("../assets/img/li1.jpg"),
            title:'鸡爪 零食 精品零食 特价',
            sale:"包邮|第二件9.9"
        },
        {
            img:require("../assets/img/li1.jpg"),
            title:'虾条 韩国',
            sale:"包邮|第二件9.9"
        },
        {
            img:require("../assets/img/li1.jpg"),
            title:'山药薄片 零食',
            sale:"包邮|第二件9.9"
        },
        {
            img:require("../assets/img/li1.jpg"),
            title:'香浓糕点 奶香 烘焙',
            sale:"包邮|第二件9.9"
        },
        {
            img:require("../assets/img/li1.jpg"),
            title:'零食大礼包',
            sale:"包邮|第二件9.9"
        },
        {
            img:require("../assets/img/li1.jpg"),
            title:'沙琪玛',
            sale:"包邮|第二件9.9"
        },
    ],
}
Mock.mock('/productlist',mockData)
