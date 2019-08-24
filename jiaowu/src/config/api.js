const ApiRootUrl = 'http://106.14.44.160:8360/api/';
const ServerUrl='https://ystmusic.hzhuishi.cn';

module.exports = {

  getUserInfo: ServerUrl + '/Api/CommonApi/getUserInfo',
  getOpenid: ServerUrl + '/Api/Weixin/getOpenid',
  userInfoSave: ServerUrl + '/Api/CommonApi/userInfoSave',
  weixinPay: ServerUrl + '/Api/CommonApi/weixinPay',
  yuyue: ServerUrl + '/Api/CommonApi/yuyue',
  getYouhuiquan: ServerUrl + '/Api/CommonApi/getYouhuiquan',
  getMyYouhuiquan: ServerUrl + '/Api/CommonApi/getMyYouhuiquan',
  lingquYouhuiquan: ServerUrl + '/Api/CommonApi/lingquYouhuiquan',

  kechengList: ServerUrl + '/Api/Project/kechengList',

  getOrderDetail: ServerUrl + '/Api/CommonApi/getOrderDetail',
  pingjia: ServerUrl + '/Api/CommonApi/pingjia',
  config: ServerUrl + '/Api/CommonApi/config',
  getOrder: ServerUrl + '/Api/CommonApi/getOrder',
  getJishiOrder: ServerUrl + '/Api/CommonApi/getJishiOrder',
  yuyuePanduan: ServerUrl + '/Api/CommonApi/yuyuePanduan',

  userCount: ServerUrl + '/Api/CommonApi/userCount',
  quxiao: ServerUrl + '/Api/CommonApi/quxaoCaozuo',
  quxiaoOrder: ServerUrl + '/Api/CommonApi/quxiaoOrder',
  yuePay: ServerUrl + '/Api/CommonApi/yuePay',


  zuopinList: ServerUrl+'/Api/Project/zuopinList',
  liuyan: ServerUrl+'/Api/Project/liuyan',
  liuyanHuifu: ServerUrl+'/Api/Project/liuyanHuifu',
  liuyanDetail: ServerUrl+'/Api/Project/liuyanDetail',


  getIconList: ServerUrl+'/Api/CommonApi/getIconList',
  getHyIconList: ServerUrl+'/Api/CommonApi/getHyIconList',
  
  getLunbo: ServerUrl+'/Api/CommonApi/getLunbo',

  CatalogList: ApiRootUrl + 'catalog/index',  // 分类目录全部分类数据接口
  CatalogCurrent: ApiRootUrl + 'catalog/current',  // 分类目录当前分类数据接口

  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', // 微信登录

  GoodsCount: ApiRootUrl + 'goods/count',  // 统计商品总数
  GoodsList: ServerUrl + '/Api/CommonApi/getProList',
  proDetail: ServerUrl + '/Api/CommonApi/getProDetail',
  sendMsg: ServerUrl + '/Api/CommonApi/sendMsg',
  bindPhone: ServerUrl + '/Api/CommonApi/bindPost',

  getYeji: ServerUrl + '/Api/CommonApi/getYeji',
  getPaihangbang: ServerUrl + '/Api/CommonApi/getPaihangbang',

  couponList: ServerUrl + '/Api/CommonApi/couponList',
  couponMyList: ServerUrl + '/Api/CommonApi/couponMyList',

  yishiyong: ServerUrl + '/Api/CommonApi/yishiyong',


  GoodsCategory: ServerUrl + '/Api/CommonApi/getTagList',  // 获得分类数据
  getJishiDetail: ServerUrl + '/Api/CommonApi/getJishiDetail',  // 获得商品的详情
  GoodsNew: ApiRootUrl + 'goods/new',  // 新品
  GoodsHot: ApiRootUrl + 'goods/hot',  // 热门
  GoodsRelated: ApiRootUrl + 'goods/related',  // 商品详情页的关联商品（大家都在看）

  BrandList: ApiRootUrl + 'brand/list',  // 品牌列表
  BrandDetail: ApiRootUrl + 'brand/detail',  // 品牌详情

  CartList: ApiRootUrl + 'cart/index', // 获取购物车的数据
  CartAdd: ApiRootUrl + 'cart/add', // 添加商品到购物车
  CartUpdate: ApiRootUrl + 'cart/update', // 更新购物车的商品
  CartDelete: ApiRootUrl + 'cart/delete', // 删除购物车的商品
  CartChecked: ApiRootUrl + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: ApiRootUrl + 'cart/goodscount', // 获取购物车商品件数
  CartCheckout: ApiRootUrl + 'cart/checkout', // 下单前信息确认

  OrderSubmit: ApiRootUrl + 'order/submit', // 提交订单
  PayPrepayId: ApiRootUrl + 'pay/prepay', // 获取微信统一下单prepay_id

  CollectList: ApiRootUrl + 'collect/list',  // 收藏列表
  CollectAddOrDelete: ApiRootUrl + 'collect/addordelete',  // 添加或取消收藏

  CommentList: ApiRootUrl + 'comment/list',  // 评论列表
  CommentCount: ApiRootUrl + 'comment/count',  // 评论总数
  CommentPost: ApiRootUrl + 'comment/post',   // 发表评论


  TopicList: ServerUrl+'/Api/CommonApi/zixunList',
  TopicDetail: ServerUrl+'/Api/CommonApi/zixunDetail',

  shenghuoList: ServerUrl+'/Api/Project/shenghuoList',
  shenghuoDetail: ServerUrl+'/Api/Project/shenghuoDetail',

  xuexiList: ServerUrl+'/Api/Project/xuexiList',
  xuexiDetail: ServerUrl+'/Api/Project/xuexiDetail',

  kaoshiList: ServerUrl+'/Api/Project/kaoshiList',

  kaoshiDetail: ServerUrl+'/Api/Project/kaoshiDetail',

  myKechengList: ServerUrl+'/Api/Project/myKechengList',

  liuyanList: ServerUrl+'/Api/Project/liuyanList',

  qingjia: ServerUrl+'/Api/Project/qingjia',
  qingjiaDetail: ServerUrl+'/Api/Project/qingjiaDetail',
  qingjiaList: ServerUrl+'/Api/Project/qingjiaList',

  shenhe: ServerUrl+'/Api/Project/shenhe',

  myXuesheng: ServerUrl+'/Api/Project/myXuesheng',

  qingjiaShenpi: ServerUrl+'/Api/Project/qingjiaShenpi',

  SearchIndex: ApiRootUrl + 'search/index',  // 搜索页面数据
  SearchResult: ApiRootUrl + 'search/result',  // 搜索数据
  SearchHelper: ApiRootUrl + 'search/helper',  // 搜索帮助
  SearchClearHistory: ApiRootUrl + 'search/clearhistory',  // 搜索帮助

  AddressList: ApiRootUrl + 'address/list',  // 收货地址列表
  AddressDetail: ApiRootUrl + 'address/detail',  // 收货地址详情
  AddressSave: ApiRootUrl + 'address/save',  // 保存收货地址
  AddressDelete: ApiRootUrl + 'address/delete',  // 保存收货地址

  RegionList: ApiRootUrl + 'region/list',  // 获取区域列表

  getHuiyuanka: ServerUrl + '/Api/CommonApi/getHuiyuanKa',
  getHuiyuanKaDetail: ServerUrl + '/Api/CommonApi/getHuiyuankaDetail',

  OrderList: ServerUrl + '/api/order_list.json',  // 订单列表



  OrderDetail: ApiRootUrl + 'order/detail',  // 订单详情
  OrderCancel: ApiRootUrl + 'order/cancel',  // 取消订单
  OrderExpress: ApiRootUrl + 'order/express', // 物流详情

  FootprintList: ApiRootUrl + 'footprint/list',  // 足迹列表
  FootprintDelete: ApiRootUrl + 'footprint/delete'  // 删除足迹
}
