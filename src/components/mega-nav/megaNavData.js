export const megaNavItems = [
  {
    id: 'galaxy', label: '银河+', href: null, showGroupTitles: false,
    groups: [{ items: [
      { title: '银河光影嘉年华', description: '沉浸式大屏 IP 互动体验平台', href: '#/products/carnival', accent: '#fb923c', icon: 'film' },
      { title: '银河少儿', description: '安全、丰富的儿童视听产品', href: '#/products/kids', accent: '#f472b6', icon: 'spark' },
    ] }],
  },
  {
    id: 'products', label: '产品矩阵', href: '#/products', showGroupTitles: true,
    groups: [
      { title: '平台产品', items: [
        { title: '智慧大屏', description: '全场景大屏内容聚合与智能分发平台', href: '#/products/aggregation', accent: '#00d4ff', icon: 'screen' },
        { title: '智慧泛屏', description: '央媒品质·亿级内容·极致体验', href: '#/products/galaxytv', accent: '#ff6b35', icon: 'play' },
      ] },
      { title: '智能技术', items: [
        { title: '小可影音智能体', description: '重新定义大屏交互的 AI 智能体', href: '#/products/agent', accent: '#a78bfa', icon: 'bot' },
        { title: '天光引擎', description: '全链路赋能，激活业务新效能', href: '#/products/tianguang', accent: '#f59e0b', icon: 'sun' },
        { title: '数据平台', description: '全链路数据能力，驱动业务增长', href: '#/products/data', accent: '#60a5fa', icon: 'data' },
      ] },
      { title: '商业增长', items: [
        { title: '猎户座广告', description: '大屏流量变现的全场景广告平台', href: '#/products/advertising', accent: '#34d399', icon: 'orbit' },
      ] },
      { title: '内容与品牌 IP', items: [
        { title: 'AI 资讯', description: '零干预·高转化的资讯体验方案', href: '#/products/ainews', accent: '#06b6d4', icon: 'news' },
      ] },
    ],
  },
  {
    id: 'solutions', label: '解决方案', href: '#/solutions', showGroupTitles: false,
    groups: [{ items: [
      { title: '智慧大屏解决方案', description: '内容、桌面与运营一体化', href: '#/solutions/smarttv', accent: '#00d4ff', icon: 'screen' },
      { title: '智能家居影音解决方案', description: '连接影音内容与家庭设备', href: '#/solutions/homeaudio', accent: '#a78bfa', icon: 'home' },
      { title: '中屏场景解决方案', description: '适配多形态中屏使用场景', href: '#/solutions/midscreen', accent: '#34d399', icon: 'tablet' },
      { title: '车载屏解决方案', description: '智能座舱影音与多屏协同', href: '#/solutions/autoscreen', accent: '#fb923c', icon: 'car' },
    ] }],
  },
];
