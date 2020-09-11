import Mock from 'mockjs'

let data=[
    {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599796261792&di=4c18b04083eeac7222819f7cd4083052&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D3e33c6fab8096b6381195e583c328733%2Ff3628da0cd11728b73658df7cefcc3cec2fd2c79.jpg',
        title:'男人不出轨',
        id:0
    },
    {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599796261792&di=9d6e5312c7c07a0271fe87a1388e706d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171114%2F0fc43e9ad58f4a5cb41a018925b0e475.jpeg',
        title:'民谣先生',
        id:1
    },
    {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599796261792&di=80807bedba93268bb9b28d25dd4d674f&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fe1fe9925bc315c60c412f6be8eb1cb13485477d8.jpg',
        title:'理所当然是最可怕的',
        id:2
    },
    {
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599796261793&di=02c609f852685aad089bc54baed7ad42&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201309%2F26%2F20130926095128_SiPMh.jpeg',
        title:'25元get高颜值衣橱',
        id:3
    }
]
Mock.mock('/api/list',{
    code:200,
    data:data
})