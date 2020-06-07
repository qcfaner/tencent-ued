let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock
let Random = Mock.Random;

let app = express();        //实例化express

// 设置头信息、解决跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/service/article-list',function(req, res){
    let articleList = [];
    for (let i = 0; i < 10; i++) {
        let tempDate = Mock.mock({
            'author|1': ['sunny', 'qcfaner', 'jack'],
            'color': Random.color()
        });
        articleList.push(Mock.mock({
            'id': Random.id(),              // id
            'title': Random.ctitle(5, 15),  // 文章标题
            'describe': Random.csentence(60, 100),   // 文章概览 Random.image('690x180', tempDate.color, '#FFF', 'QQ.COM UED')
            'previewImage': (i>0 && i%2 == 0)? Random.image('690x180', tempDate.color, "#FFF", 'Tencent-UED'):"",
            'meta': {
                'author': tempDate.author,
                'picture': Random.image('60x60', tempDate.color, tempDate.author),
                'createDate': Random.datetime(),
                'tag|1': ['交互设计', '作品案例', '前端技术',  '杂七杂八',  '用户研究',  '视觉设计', '资源推荐'],
                'comments|1-10': 10
            },
        }));
    };
    res.json({
        status: 200,
        data: articleList
    });
})

// 启动 mock 服务，并暴露端口；
app.listen('8090', () => {
    console.log(`mock server running at: http://localhost:8090/`);
})