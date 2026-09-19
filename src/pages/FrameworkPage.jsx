import MegaNav, { NavIcon } from '../components/mega-nav/MegaNav';
import CircularGallery from '../components/CircularGallery';
import SiteFooter from '../components/SiteFooter';
import logoTop from '../assets/figma/logo-top.svg';
import productsHero from '../assets/figma-pages/products-hero.png';
import productsScreen from '../assets/figma-pages/products-screen.png';
import productsAi from '../assets/figma-pages/products-ai.png';
import solutionTv from '../assets/figma-pages/solutions-smarttv.png';
import solutionHome from '../assets/figma-pages/solutions-home.png';
import solutionMid from '../assets/figma-pages/solutions-mid.png';
import solutionAuto from '../assets/figma-pages/solutions-auto.png';
import kidsHero from '../assets/figma-pages/kids-hero.png';
import engineHighlight from '../assets/figma-pages/engine-highlight.png';
import aboutHero from '../assets/figma-pages/about-hero.png';
import aboutNews from '../assets/figma-pages/about-news.png';
import aggregationHeroLeft from '../assets/figma-pages/products-aggregation/aggregation-raw-01.png';
import aggregationHeroCenter from '../assets/figma-pages/products-aggregation/aggregation-raw-05.png';
import aggregationHeroRight from '../assets/figma-pages/products-aggregation/aggregation-raw-06.png';
import figmaHeroBackground from '../assets/figma-pages/engine-hero.png';
import smartWideHeroBackground from '../assets/figma-pages/smart-wide-hero-bg.png';
import advertisingHeroBackground from '../assets/figma-pages/advertising/advertising-hero-bg.png';
import metricIconRise from '../assets/figma-pages/engine-metric-rise.png';
import metricIconTarget from '../assets/figma-pages/engine-metric-target.png';
import metricIconScale from '../assets/figma-pages/engine-metric-scale.png';
import dataCardOne from '../assets/figma-pages/engine-data-1.svg';
import dataCardTwo from '../assets/figma-pages/engine-data-2.svg';
import dataCardThree from '../assets/figma-pages/engine-data-3.svg';
import smartFeatureLauncher from '../assets/figma-pages/smart-screen/smart-feature-01.png';
import smartFeatureVOD from '../assets/figma-pages/smart-screen/smart-feature-02.png';
import smartFeatureLive from '../assets/figma-pages/smart-screen/smart-feature-03.png';
import smartFeatureSearch from '../assets/figma-pages/smart-screen/smart-feature-04.png';
import adKfc from '../assets/figma-pages/advertising/kfc.png';
import adCk from '../assets/figma-pages/advertising/ck.png';
import adSisley from '../assets/figma-pages/advertising/sisley.png';
import adVitasoy from '../assets/figma-pages/advertising/vitasoy.png';
import adHailu from '../assets/figma-pages/advertising/hailu.png';
import adAsahi from '../assets/figma-pages/advertising/asahi.png';
import adYulin from '../assets/figma-pages/advertising/yulin.png';
import adCcb from '../assets/figma-pages/advertising/ccb.png';
import './FrameworkPage.css';

const productGroups = [
  { title:'智慧大屏', tag:'GITV SMART TV PLATFORM', text:'面向广电运营商与电视厂商的一站式大屏聚合平台，覆盖从内容聚合、智能分发到终端体验的完整链路。', meta:'Launcher 首屏 · 海量点播 · 直播频道', image:productsScreen },
  { title:'智慧泛屏', tag:'GALAXY TV', text:'银河互联网电视旗下旗舰大屏应用，汇聚央媒权威内容与正版影视资源，以智能推荐提供高品质视听服务。', meta:'央媒品质 · 全品类内容 · AI 智能推荐', image:productsHero },
];
const capabilities = [
  ['小可影音智能体','基于大语言模型的多模态影音智能体，以自然语言对话串联内容搜索与播放。'],['AI资讯','集 AI 数字人生成、自动化视频生产与智能播控于一体。'],['天光引擎','银河自研智能内容引擎，以数据反哺前后端业务。'],['数据平台','提供采集、计算、开发、调度、监控及可视化能力。'],['猎户座广告','覆盖开机、桌面、点播与视频贴片等大屏广告场景。']
];
const solutions = [
  ['智慧大屏解决方案','广电运营商 · 智能电视厂商 · OTT/IPTV 平台方','面向广电运营商与电视厂商的端到端智慧大屏解决方案，从内容、Launcher、数据到增值运营，构建全链路大屏生态，并打通手机与平板的跨端协同体验。',solutionTv,'#/solutions/smarttv'],
  ['智能家居影音解决方案','电视厂商 · 智能家居品牌 · 家庭用户','以智能电视为家庭影音中枢，融合AI智能体、银河少儿、智能音箱等设备，并通过手机/平板大小屏互动延伸控制入口，打造全场景智能家居影音体验。',solutionHome,'#/solutions/homeaudio'],
  ['中屏场景解决方案','投影仪厂商 · 闺蜜机品牌 · 智能显示屏厂商','面向投影仪、闺蜜机、智能显示屏等中屏设备的场景化解决方案，适配多元使用场景，提供内容、交互与运营的全栈能力。',solutionMid,'#/solutions/midscreen'],
  ['车载屏解决方案','整车厂商 · Tier1供应商 · 车机系统方案商','面向智能座舱车载屏的专属解决方案，融合影音娱乐、导航辅助、场景推荐与安全交互，打造第三生活空间的车内沉浸体验。',solutionAuto,'#/solutions/autoscreen'],
];
const solutionOverviewCards = [
  { title:'智慧大屏解决方案', description:solutions[0][2], tags:['广电运营商','智能电视厂商','OTT/IPTV平台方'], image:solutionTv, href:solutions[0][4], metrics:[['+35%','用户CTR'],['+60%','运营效率']] },
  { title:'智能家居影音解决方案', description:solutions[1][2], tags:['电视厂商','智能家居品牌','家庭用户'], image:solutionHome, href:solutions[1][4], metrics:[['+180%','语音调起率'],['+45%','用户停留时长']] },
  { title:'中屏场景解决方案', description:solutions[2][2], tags:['投影仪厂商','闺蜜机品牌','智能显示屏厂商'], href:solutions[2][4], metrics:[['8+','设备适配'],['+40%','续航时长']] },
  { title:'车载屏解决方案', description:solutions[3][2], tags:['整车厂商','Tier1供应商','车机系统方案商'], href:solutions[3][4], metrics:[['+180%','语音调起率'],['+45%','用户停留时长']] },
];
const solutionStats = [
  ['2亿+','家庭终端覆盖','覆盖全国 31 省市家庭大屏终端'],
  ['30+','省级广电合作','与各级广电运营商深度合作'],
  ['2亿+','电视品牌合作','主流电视品牌终端全面覆盖'],
];

function PageHero({title,children,image,className=''}){return <section className={`design-hero ${className}`}><div className="design-hero__copy"><h1>{title}</h1><div>{children}</div></div>{image&&<img className="design-hero__image" src={image} alt=""/>}</section>}
function Heading({title,children}){return <header className="design-heading"><h2>{title}</h2>{children&&<p>{children}</p>}</header>}

function ProductsPage(){return <><PageHero title="全栈产品，连接多元场景" image={productsHero}><p>从智慧大屏与泛屏产品，到 AI、数据与商业能力，再到银河品牌业务，<br/>以内容、技术与运营，构建完整的大屏生态。</p><div className="hero-pills"><span>大屏与泛屏产品</span><span>AI、数据与商业能力</span><span>银河品牌业务</span></div></PageHero><section className="design-section"><Heading title="大屏与泛屏产品">聚合正版内容，连接终端体验与智能分发。</Heading><div className="product-feature-grid">{productGroups.map(x=><article key={x.title}><img src={x.image} alt=""/><span>{x.tag}</span><h3>{x.title}</h3><p>{x.text}</p><small>{x.meta}</small><a href="mailto:XXXX@gitv.cn">咨询产品详情 →</a></article>)}</div></section><section className="design-section"><Heading title="AI、数据与商业能力">从内容生产与智能交互，到分发、运营与流量变现。</Heading><div className="capability-grid">{capabilities.map(([t,d],i)=><article className={i===0?'wide':''} key={t}>{i===0&&<img src={productsAi} alt=""/>}<span>0{i+1} / INTELLIGENT CAPABILITY</span><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="design-section"><Heading title="银河品牌业务">让内容延伸为沉浸体验，连接家庭与城市生活。</Heading><div className="brand-grid"><a href="#/products/carnival"><b>银河光影嘉年华</b><span>光影互动 · IP 定制 · 节庆活动</span></a><a href="#/products/kids"><b>银河少儿</b><span>多元内容 · 家长管控 · 寓教于乐</span></a></div></section></>}

function ProductMatrixPage(){
  const productCards = [
    ['智慧大屏', '面向广电运营商与电视厂商的一站式大屏聚合平台，覆盖从内容聚合、智能分发到终端体验的完整链路。', '#/products/aggregation', 'smart-screen', ['Launcher首屏', '海量点播', '直播频道']],
    ['智慧泛屏', '智慧泛屏是银河互联网电视旗下旗舰大屏应用，汇聚央媒权威内容与海量正版影视资源，覆盖全品类内容。', '#/products/galaxytv', 'smart-wide', ['央媒品质', '亿级内容库', 'AI智能推荐']],
  ];
  const capabilities = [
    ['小可影音智能体', '基于大语言模型的多模态影音智能体，支持自然语言对话、内容搜索、智能家居控制、生活服务接入。', '#/products/agent', 'agent-image', ['自然对话', '远场语音', '智能家居']],
    ['AI资讯', '银河 AI 数字人视频生产与播控一体解决方案，集 AI 生成、自动化生产与智能播控于一体。', '#/products/ainews', 'ai-news-image', ['AI数字人播报', '全流程自动化', '精准混合推荐']],
    ['天光引擎', '银河自研的智能内容引擎，以数据反哺形成正向循环，赋能前后端业务全场景。', '#/products/tianguang', 'tianguang-image', ['自动化编排', '高光片段', '智能识别']],
    ['猎户座广告', '覆盖开机、桌面、点播、视频贴片等全场景的大屏广告资源平台，支持精准定向投放。', '#/products/advertising', 'orbit-image', ['精准投放', '全场景覆盖', '效果可视']],
    ['数据平台', '提供埋点、采集、计算、开发、调度、监控、智能推荐和数据可视化等全链路数据能力。', '#/products/data', 'data-image', ['数据采集', '实时计算', '智能决策']],
  ];
  const brands = [
    ['银河光影嘉年华', '打造沉浸式大屏 IP 互动体验场景，通过虚拟现实技术、光影互动装置与 IP 内容深度融合。', '#/products/carnival', 'film', ['光影互动', 'IP定制', '节庆活动']],
    ['银河少儿', '专为 0-12 岁儿童打造的安全内容平台，涵盖动画、儿歌、教育、绘本等多元内容。', '#/products/kids', 'kids-image', ['多元内容', '家长管控', '寓教于乐']],
  ];
  const galleryItems = [
    { image: aggregationHeroCenter, text: '智慧大屏' },
    { image: aggregationHeroLeft, text: '智慧泛屏' },
    { image: aggregationHeroRight, text: '影音智能体' },
    { image: aggregationHeroCenter, text: 'AI资讯' },
    { image: aggregationHeroRight, text: '天光引擎' },
    { image: aggregationHeroCenter, text: '数据平台' },
  ];
  const Card = ({title, text, href, image, icon, tags = [], className=''}) => <article className={`matrix-card ${className}`}>
    {image && <img className="matrix-card__image" src={image} alt=""/>}
    <div className="matrix-card__body"><h3 className="matrix-card__title">{icon && <span className="matrix-card__icon"><NavIcon name={icon}/></span>}{title}</h3><p>{text}</p><div className="matrix-card__tags">{tags.map(tag => <span className="matrix-card__tag" key={tag}>{tag}</span>)}</div><a href={href}>查看详情</a></div>
  </article>;
  return <main className="product-matrix-page">
    <section className="matrix-hero"><div className="matrix-hero__copy"><h1>全栈产品，连接多元场景</h1><p>从智慧大屏与泛屏产品，到 AI、数据与商业能力，再到银河品牌业务，<br/>以内容、技术与运营，构建完整生态体系。</p><a href="mailto:XXXX@gitv.cn">咨询商务</a></div><div className="matrix-hero__visual"><CircularGallery items={galleryItems} bend={5} textColor="#ffffff" borderRadius={0.06} scrollEase={0.02} scrollSpeed={2.1} fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" font="bold 30px Orbitron"/></div></section>
    <section className="matrix-section matrix-products"><Heading title="大屏与泛屏产品">聚合正版内容，连接终端体验与智能分发</Heading><div className="matrix-product-grid">{productCards.map(([title,text,href,icon,tags])=><Card key={title} title={title} text={text} href={href} icon={icon} tags={tags} image={aggregationHeroCenter}/>)}</div></section>
    <section className="matrix-section matrix-capabilities"><Heading title="AI、数据与商业能力">从内容生产与智能交互，到分发、运营与流量变现。</Heading><div className="matrix-capability-grid"><Card title={capabilities[0][0]} text={capabilities[0][1]} href={capabilities[0][2]} icon={capabilities[0][3]} tags={capabilities[0][4]} image={aggregationHeroRight} className="matrix-card--wide"/>{capabilities.slice(1).map(([title,text,href,icon,tags])=><Card key={title} title={title} text={text} href={href} icon={icon} tags={tags}/>)}</div></section>
    <section className="matrix-section matrix-brands"><Heading title="银河品牌业务">让内容延伸为沉浸体验，连接家庭与城市生活。</Heading><div className="matrix-product-grid">{brands.map(([title,text,href,icon,tags])=><Card key={title} title={title} text={text} href={href} icon={icon} tags={tags} image={aggregationHeroCenter}/>)}</div></section>
  </main>;
}

const smartMetrics = [
  ['数十亿级', '日均处理请求', metricIconScale],
  ['90%+', '推荐准确率', metricIconTarget],
  ['90%+', '推荐准确率', metricIconTarget],
  ['显著跃升', '观看时长与点击转化', metricIconRise],
];

function FigmaHero({ title, description, anchor, button = '查看解决方案', heroImage = figmaHeroBackground }) {
  return <section className="figma-product-hero" style={{ '--figma-hero-image': `url(${heroImage})` }}>
    <div className="figma-product-hero__content"><h1>{title}</h1><p>{description}</p><div className="figma-product-hero__actions"><a className="is-primary" href={`#${anchor}`}>{button}</a><a href="mailto:XXXX@gitv.cn">咨询商务</a></div></div>
  </section>;
}

function FigmaMetrics({ title, description, items = smartMetrics }) {
  return <section className="figma-metrics-section"><Heading title={title}>{description}</Heading><div className="figma-metrics-panel">{items.map(([value, label, icon], index) => <article key={`${value}-${label}-${index}`}><img src={icon} alt="" /><strong>{value}</strong><span>{label}</span></article>)}</div></section>;
}

const smartContentFeatures = [
  { title:'央媒品质', text:'央视、卫视、央媒权威内容源，正版高清品质保障。', points:['央视、卫视、央媒权威内容源', '正版高清品质保障'], image:smartFeatureLauncher },
  { title:'亿级内容库', text:'海量电影、电视剧、综艺、动漫、少儿、纪录片等全品类覆盖。', points:['电影、电视剧、综艺、动漫', '少儿、纪录片等全品类'], image:smartFeatureVOD, reverse:true },
  { title:'AI智能推荐', text:'深度学习算法驱动，千人千面个性化推荐，越看越懂你。', points:['深度学习算法驱动', '千人千面个性化推荐'], image:smartFeatureLive },
  { title:'极致体验', text:'4K 超高清、HDR、杜比音效，毫秒级起播零等待。', points:['4K 超高清 · HDR · 杜比音效', '毫秒级起播 · 零等待'], image:smartFeatureSearch, reverse:true },
];

function SmartWideFeature({ feature }) {
  const copy = <div className="smart-wide-feature__copy"><div className="smart-wide-feature__intro"><h3>{feature.title}</h3><p>{feature.text}</p></div><div className="smart-wide-feature__details"><ul>{feature.points.map(point => <li key={point}>{point}</li>)}</ul><a href="mailto:XXXX@gitv.cn">咨询产品</a></div></div>;
  const visual = <div className="smart-wide-feature__visual"><img src={feature.image} alt={`${feature.title}产品界面`} /></div>;
  return <article className={`smart-wide-feature${feature.reverse ? ' is-reverse' : ''}`}>{feature.reverse ? <>{visual}{copy}</> : <>{copy}{visual}</>}</article>;
}

function SmartWidePage() {
  const scenes = [
    ['智能电视', '为电视厂商提供完整的大屏内容与产品体验。', 'smart-screen'],
    ['运营商终端', '支持广电与电信运营商打造差异化家庭影音服务。', 'data-image'],
    ['智能投影', '适配投影仪、闺蜜机等泛屏终端。', 'smart-wide'],
    ['家庭娱乐', '覆盖影视、亲子、资讯与休闲娱乐等家庭场景。', 'kids-image'],
  ];
  return <div className="figma-product-page figma-smart-wide-page">
    <FigmaHero title={<>连接每一块屏，<em>享受好内容</em></>} description="面向泛屏生态的全场景视听解决方案，以银河 TV 为核心，覆盖智能机顶盒、VR、车载屏、智能音箱、投影仪等多元终端，让优质内容与智能推荐延伸至家庭与出行。" anchor="smart-wide-content" heroImage={smartWideHeroBackground} />
    <FigmaMetrics title="为什么选择天光引擎" description="天光引擎深度嵌入观影主链路，让每一次点击都更精准，每一段观看都更沉浸" />
    <section className="figma-light-section smart-wide-content-section" id="smart-wide-content"><Heading title="让好内容触达每一块屏">央媒品质 · 全品类内容 · AI 智能推荐</Heading><div className="smart-wide-feature-list">{smartContentFeatures.map(feature => <SmartWideFeature key={feature.title} feature={feature} />)}</div></section>
    <section className="figma-light-section figma-scenes-section"><Heading title="典型应用场景" /><div className="figma-scene-grid">{scenes.map(([title, text, icon]) => <article key={title}><span className="figma-card-icon"><NavIcon name={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </div>;
}

function DataDashboard() {
  return <div className="data-dashboard"><div className="data-dashboard__surface"><div className="data-dashboard__top"><strong>GITV</strong><span>数据资产沉淀</span></div><div className="data-dashboard__hero"><small>数据资产中心</small><b>看清每一次增长</b></div><div className="data-dashboard__tiles"><i>埋点日志</i><i>终端数据</i><i>业务指标</i></div></div></div>;
}

function DataPage() {
  const products = [
    ['BI平台', '敏捷多主题数据查询，辅助数据化运营决策。'],
    ['RT平台', '面向内外部客户的数据可视化平台，已开放给多个移动省公司。'],
    ['DMP平台', '融合大数据与 AI，洞察用户行为，精准圈选与分发受众。'],
    ['多维分析平台', '点选即可查询分析，自由探索数据价值。'],
  ];
  const scenes = [['运营商数据化运营决策', '支撑业务数据统一分析与实时决策。'], ['广电业务数据概览', '聚合关键指标，快速掌握业务运行状态。'], ['广告精准投放与分账', '以数据洞察人群与效果，提升经营效率。']];
  return <div className="figma-product-page figma-data-page">
    <FigmaHero title={<>全链路数据能力，<em>驱动业务增长</em></>} description="提供数据支撑“埋点、采集、计算、开发、调度、监控、智能推荐和数据可视化”等能力，全链路支撑各业务线数据化运营能力，促进数据驱动业务创新。覆盖移动、电信、联通、广电等业务，日均处理百亿级事件。" anchor="data-capabilities" />
    <section className="figma-light-section data-capabilities-section" id="data-capabilities"><Heading title="四大核心能力">全链路支撑各业务线数据化运营能力，促进数据驱动业务创新</Heading><div className="data-capabilities__body"><div className="figma-tabs"><button className="is-active">数据采集</button><button>数据资产</button><button>数据标签</button><button>智能推荐</button></div><div className="data-feature"><div><h3>数据采集</h3><p>多源实时采集，链路安全稳定</p><ul><li>采集链路安全稳定</li><li>采集场景丰富多样</li></ul><a href="mailto:XXXX@gitv.cn">咨询方案</a></div><DataDashboard /></div></div></section>
    <section className="figma-light-section data-summary-section"><Heading title="让数据能力，稳稳跑在业务之上">从埋点、采集到计算、调度、监控与推荐，覆盖数据全链路业务能力。</Heading><div className="data-summary-grid">{[[dataCardOne, '全链路数据能力', '埋点 · 采集 · 计算'], [dataCardTwo, '多源实时采集', '客户端 · 业务 · 第三方'], [dataCardThree, '标签推荐与可视化', '3000+ 标签 · BI / RT']].map(([image, title, text]) => <article key={title}><img src={image} alt="" /><div><b>{title}</b><span>{text}</span></div></article>)}</div></section>
    <section className="figma-light-section data-products-section"><Heading title="全方位大数据产品">四大子产品协同，覆盖数据分析、可视化、营销与智能推荐全场景</Heading><div className="data-product-grid">{products.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="figma-light-section data-scenes-section"><Heading title="每一个业务现场，都有数据答案" /><div className="data-scene-grid">{scenes.map(([title, text]) => <article key={title}><span className="figma-card-icon"><NavIcon name="data-image" /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </div>;
}

const adCases = [
  [adKfc, '餐饮连锁 · 春节IP联名', '肯德基×哪吒：春节创意开机，沉浸先声夺人', '春节营销旺季，肯德基联名国民级IP《哪吒》，以创意开机广告抢占大屏第一入口：哪吒主题创意画面全屏呈现，生动视效带来沉浸式品牌体验，“开机即见”先入为主锁定家庭注意力，让品牌春节主张随国民IP在团圆场景中强势出圈。投放累计曝光超百万次，高效占位品牌节日心智。'],
  [adCk, '国际时尚', 'CK·全国年轻群体大屏时尚营销', 'Calvin Klein依托银河互联网电视OTT全国覆盖能力，以DMP数据能力定向18-30岁年轻消费群体，全国范围投放开机大屏广告。依托智能电视全屏高清视觉呈现，CK标志性的黑白极简美学与年轻化品牌调性在家庭场景中获得沉浸式表达，开机即触达的强曝光形式有效建立品牌第一印象。'],
  [adSisley, '高端美妆', '希思黎·高端美妆人群精准触达', '法国高端护肤品牌希思黎（Sisley）携手银河OTT，全国范围定向热爱时尚、关注美妆护肤、有明确皮肤保养需求的年轻女性人群。依托大屏4K超高清画质，希思黎植物护肤的产品质感与品牌格调得以完整呈现，助力希思黎在高价值女性人群中建立“高端、专业、值得信赖”的品牌心智。'],
  [adVitasoy, '饮料食品', '维他奶·核心区域竞品人群精准拦截', '维他奶聚焦广东、上海两大核心销售区域，通过银河DMP三重定向叠加投放：定向18-45岁关注饮料、美食、快餐内容的高潜人群，锁定关注及点击过竞品品牌及产品的用户，并聚焦核心市场避免预算外溢。开机广告与贴片广告组合触达，有效拦截竞品人群注意力。'],
  [adHailu, '医药健康', '海露·全广告位组合高频覆盖', '海露人工泪液全国范围广泛投放，采用开机广告、贴片广告、角标广告多形式组合策略，全面覆盖用户从开机到观影的完整大屏使用路径。三层广告位层层递进、高频叠加，形成“看见—理解—记住”的完整触达闭环，助力海露在护眼品类中建立大屏认知优势。'],
  [adAsahi, '酒水饮料', '朝日啤酒·五城高价值人群精投', '朝日啤酒锁定上海、深圳、广州、杭州、福州五大重点销售城市，通过银河DMP多标签交叉圈定20-45岁核心消费人群，实现从品牌粉丝、品类爱好者到高端消费力人群的立体覆盖。城市定向确保广告投放与销售渠道高度重合，助力核心城市市场深耕。'],
  [adYulin, '医药健康 · 体育营销', '玉林正骨水·世界杯体育人群场景营销', '玉林正骨水借势世界杯顶级体育IP，携手银河OTT大屏于6-7月赛事周期集中强势曝光。依托DMP内容兴趣定向能力，精准锁定关注世界杯及体育内容的高潜人群，聚焦成都、南宁、郑州三大核心市场，让品牌传播与观赛情绪深度绑定，强化“运动守护、国民好药”的品牌认知。'],
  [adCcb, '金融银行', '中国建设银行：开机广告区域品牌深耕', '建设银行杭州分行依托银河互联网电视大屏资源，定向投放杭州区域开机广告，于19-22时家庭观影高峰集中曝光，全屏沉浸式呈现品牌形象，实现“开机即见品牌”的强触达。通过地域精准定向聚焦杭州本地家庭用户，投放期间累计触达杭州地区百万户智能电视家庭，强化“身边可信的银行”区域品牌形象。'],
];

function AdvertisingPage() {
  const formats = [['创意开机', '开机全屏展示，强势第一眼曝光，触达用户开机第一时刻', ['支持秒针曝光监测', '地域/频次/时间定向', '智能电视+盒子全终端覆盖']], ['Launcher Tips', '开机进入桌面即弹出，点击可跳转详情页全屏播放', ['位置及大小灵活配置', '支持秒针曝光监测', '支持推荐语和副推荐语配置']]];
  const smallFormats = [['Tips图片广告', '进入Launcher即弹出，用户观看内容必经路径，强势曝光'], ['活动频道焦点首映', '开机进入Launcher页，落焦指定焦点图广告位，1s后自动全屏展示视频广告'], ['首页焦点视频', '桌面首页核心流量入口，点击可全屏播放，原生融入桌面'], ['屏保广告', '无操作5分钟启动，展示5秒/张，5轮播，覆盖低活跃时段']];
  return <div className="figma-product-page figma-ad-page">
    <FigmaHero title={<>家庭大屏营销 · <em>全域价值经营</em></>} description="立足牌照方公信力与内容品质优势，依托运营商渠道与大数据能力，提供从策略洞察、精准触达到效果评估的全链路营销解决方案。" anchor="ad-platforms" button="了解广告资源" heroImage={advertisingHeroBackground} />
    <section className="figma-light-section ad-platform-section" id="ad-platforms"><Heading title="两大核心平台">全链路闭环服务</Heading><div className="ad-platform-grid"><article><span>✦ 全链路闭环服务</span><h3>银河广告聚合平台及银河广告 ADX 平台</h3><div className="ad-platform-copy"><p>面向品牌广告主的一站式大屏投放中枢，整合开机、前贴、暂停、角标、屏保等全场景广告资源。</p><p>支持程序化购买与灵活排期，覆盖投放规划、素材管理、实时监测与效果归因，帮助品牌实现高效、透明、可衡量的营销投放。</p></div></article><article><span>✦ 全链路闭环服务</span><h3>银河大数据平台（DMP）</h3><div className="ad-platform-copy"><p>融合运营商通讯数据、亿级内容播放数据与用户收视行为数据，构建覆盖用户属性、兴趣偏好与家庭场景的多维标签体系。</p><p>支持人群精准圈选、定向投放与实时效果监测，让品牌看得准、投得对、算得清。</p></div></article></div></section>
    <section className="figma-light-section ad-formats-section"><Heading title="覆盖每一个关键入口">从开机、桌面到点播与贴片，覆盖家庭大屏全场景广告资源。</Heading><div className="figma-tabs"><button className="is-active">Launcher 广告</button><button>直播广告</button><button>点播广告</button></div><div className="ad-format-grid">{formats.map(([title, text, points]) => <article key={title}><div><span>✦ 全链路闭环服务</span><h3>{title}</h3><p>{text}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul><a href="mailto:XXXX@gitv.cn">咨询产品</a></div><div className="ad-format-visual"><b>{title}</b><i /><i /><i /></div></article>)}</div><div className="ad-small-format-grid">{smallFormats.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="figma-light-section ad-cases-section"><Heading title="跨行业实践，验证大屏营销价值">覆盖餐饮、时尚、美妆、食品等行业，以多元广告场景组合持续验证家庭大屏营销价值。</Heading><div className="ad-case-marquee"><div className="ad-case-track">{[...adCases, ...adCases].map(([image, tag, title, text], index) => <article className="ad-case-card" key={`${title}-${index}`}><img src={image} alt="" /><div><span>{tag}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
  </div>;
}

function AiNewsPage() {
  const metrics = [['AI数字人', '文本到视频分钟级输出', metricIconScale], ['7×24小时', '全流程自动化更新', metricIconTarget], ['精准推荐', '央媒内容 + 泛娱乐片库 + 用户画像', metricIconTarget], ['高效变现', '高峰插播 + 沉浸式续播', metricIconRise]];
  const features = [['AI数字人播报', 'AI数字人视频生产，文本到视频分钟级输出。', ['文本到视频', '分钟级输出'], smartFeatureLauncher], ['全流程自动化', '7×24 小时不间断更新，零人工干预。', ['7×24小时', '零人工干预'], smartFeatureVOD], ['精准混合推荐', '央媒内容 + 泛娱乐片库 + 用户画像行为数据匹配。', ['央媒权威内容', '用户画像匹配'], smartFeatureLive], ['原生高效变现', '高峰精准插播 + 沉浸式续播，提升曝光收益。', ['精准插播', '沉浸式续播'], smartFeatureSearch]];
  const scenes = [['AI直播资讯频道', '打造 7×24 小时自动更新的智能资讯频道。'], ['AI点播资讯专区', '沉淀 AI 生成内容，支持点播场景灵活分发。'], ['开机AI快讯推荐', '以开机快讯快速触达用户，提升内容曝光。'], ['广告 / 付费内容转化', '结合精准推荐与沉浸式续播，提升内容与广告收益。']];
  return <div className="figma-product-page figma-ai-page">
    <FigmaHero title={<>零干预 · <em>高转化的资讯体验方案</em></>} description="银河 AI 数字人生产与播控一体解决方案，实现从文本到高质量视频的分钟级输出，7×24 小时自动化更新，并融合央媒内容、泛娱乐片库与用户画像精准匹配。" anchor="ai-capabilities" />
    <FigmaMetrics title="四大核心能力板块" items={metrics}>AI数字人、自动化生产、精准推荐与高效变现，构建资讯内容从生产到分发的完整闭环。</FigmaMetrics>
    <section className="figma-light-section ai-feature-section" id="ai-capabilities"><Heading title="从生产到分发，让资讯持续高效触达">AI数字人、自动化生产与智能播控协同，打造零干预、高转化的资讯体验。</Heading><div className="ai-feature-list">{features.map(([title, text, points, image], index) => <article key={title} className={index % 2 ? 'is-reverse' : ''}><div className="ai-feature-copy"><h3>{title}</h3><p>{text}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul><a href="mailto:XXXX@gitv.cn">咨询产品</a></div><img src={image} alt={`${title}产品界面`} /></article>)}</div></section>
    <section className="figma-light-section ai-scenes-section"><Heading title="典型应用场景" /><div className="figma-scene-grid">{scenes.map(([title, text]) => <article key={title}><span className="figma-card-icon"><NavIcon name="ai-news-image" /></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </div>;
}

function SolutionOverviewPage(){return <main className="solutions-overview-page">
  <section className="solution-overview-hero">
    <div className="solution-overview-hero__content">
      <div className="solution-overview-hero__copy">
        <h1>全栈能力，融入业务场景</h1>
        <p>将全栈产品线按业务场景打包，提供开箱即用的整体方案与最佳实践。</p>
      </div>
      <a className="solution-overview-hero__cta" href="mailto:XXXX@gitv.cn">咨询商务</a>
    </div>
    <div className="solution-stats">{solutionStats.map(([value,label,description])=><article key={label}><i aria-hidden="true"/><strong>{value}</strong><b>{label}</b><span>{description}</span></article>)}</div>
  </section>
  <section className="solution-catalog-section">
    <Heading title="选择适合业务的解决方案">从服务对象出发，了解能力组合与合作价值。</Heading>
    <div className="solution-catalog-list">{solutionOverviewCards.map((card,index)=><article key={card.title} className={`solution-catalog-row ${index%2?'is-reverse':''}`}>
      <div className={`solution-catalog-media ${card.image?'':'is-placeholder'}`}>{card.image&&<img src={card.image} alt=""/>}</div>
      <div className="solution-catalog-copy">
        <div className="solution-catalog-copy__top"><h3>{card.title}</h3><p>{card.description}</p><div className="solution-tags">{card.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>
        <div className="solution-catalog-copy__bottom"><div className="solution-metrics">{card.metrics.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><a className="solution-card-button" href={card.href}>查看详情</a></div>
      </div>
    </article>)}</div>
  </section>
</main>}

function SolutionsPage({detail}){if(!detail)return <SolutionOverviewPage/>;const selected=solutions.filter(x=>x[4].endsWith(detail));const title=selected[0]?.[0]||'场景解决方案';return <><PageHero title={title}><p>{selected[0]?.[2]||'以全栈能力服务多元业务场景。'}</p></PageHero><section className="design-section solution-section"><Heading title="能力组合与合作价值">围绕实际业务需求，组合内容、桌面、终端与运营能力。</Heading><div className="solution-list">{selected.map((x,i)=><article key={x[0]} className={i%2?'reverse':''}><div className="solution-media"><img src={x[3]} alt={x[0]}/></div><div><span>0{i+1}</span><h3>{x[0]}</h3><small>{x[1]}</small><p>{x[2]}</p><ul><li>内容与分发：聚合、推荐与媒资运营</li><li>桌面与跨端：终端体验与多屏互动</li><li>数据与商业：分析、运营与价值增长</li></ul><a href="mailto:XXXX@gitv.cn">查看方案详情 →</a></div></article>)}</div></section></>}

function KidsPage(){const dimensions=[['内容优势','聚合正版高清资源，涵盖多类型儿童内容。'],['团队优势','多年运营商支撑经验，提供技术与运营服务。'],['产品优势','直观终端体验、个性化推荐与家长中心。'],['落地灵活','产品及运营计划清晰，支持灵活落地。']];return <><PageHero title={<>用心打造高价值<br/>儿童视听产品</>} image={kidsHero}><p>聚焦儿童垂类的大屏视听产品，聚合正版内容、智能推荐与家长管控，<br/>为家庭提供安全、丰富的观影体验，兼顾商业共赢与教育价值。</p><div className="design-actions"><a href="#/products/kids?section=kids-features">探索产品能力</a><a href="#/solutions/homeaudio">查看相关方案</a></div></PageHero><section className="design-section" id="kids-features"><Heading title="四大维度，共建儿童内容体验">动画、儿歌、绘本、益智、学科，满足不同年龄段的多元需求。</Heading><div className="dimension-grid">{dimensions.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="design-section"><Heading title="从发现到播放，让好内容更易触达">将终端功能整合为浏览、寻找与播放三个连续场景。</Heading><div className="journey-grid">{[['轻松浏览','瀑布流组合多种版式，自定义 TAB 与特色频道帮助内容快速露出。'],['快速找到','支持九宫格、全拼和语音输入，缩短内容查找路径。'],['安心观看','支持续播、连续播放、家长管控与音频模式。']].map(([t,d],i)=><article key={t}><span>0{i+1} / EXPERIENCE</span><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="design-section kids-parent"><Heading title="孩子自由探索，家长安心掌握">将观看边界与成长反馈放在同一个家长中心。</Heading><div><img src={aboutHero} alt=""/><ul><li><b>可管</b> 时间有边界</li><li><b>可控</b> 内容有选择</li><li><b>可见</b> 成长有反馈</li></ul></div></section></>}

function EnginePage(){return <><PageHero title="智赋大屏，价值深耕"><p>银河自研智能内容引擎，以数据为中枢，连接自动化编排、高光片段与智能识别，<br/>通过用户反馈优化内容分发，赋能大屏前后端业务。</p><div className="engine-orbit"><span>自动化内容编排</span><b>天光引擎<small>数据反哺 · 正向循环</small></b><span>播放中智能识别</span></div></PageHero><section className="design-section"><Heading title="一次观影，三段引擎之力">从浏览内容到沉浸观看，贯穿用户的内容消费旅程。</Heading><div className="engine-steps">{[['瀑布流自动化编排','根据实时用户画像与运营策略，动态生成内容序列。'],['播放前 · 高光片段吸睛','解析内容库中的精彩片段，将吸引人的内容前置展示。'],['播放中 · 智能识别','识别影人、场景与片段，支持内容引流与交叉推荐。']].map(([t,d],i)=><article key={t}><div><span>0{i+1}</span>{i===1&&<img src={engineHighlight} alt=""/>}</div><section><small>{['个性化 · 可运营','前置展示 · 提转化','非阻断 · 强沉浸'][i]}</small><h3>{t}</h3><p>{d}</p><b>{['用户画像 → 运营策略 → 内容编排','内容解析 → 精彩片段 → 观看兴趣','播放识别 → 背景信息 → 关联内容'][i]}</b></section></article>)}</div></section><section className="design-section"><Heading title="数据驱动决策，持续优化体验">将用户交互转化为策略依据，连接内容分发与业务运营。</Heading><div className="data-flow">{[['采集','点击、停留、快进、退出'],['洞察','分析行为与内容偏好'],['决策','调整编排与推荐策略'],['增长','观察时长与转化效率']].map(([t,d])=><article key={t}><i/><h3>{t}</h3><p>{d}</p></article>)}</div></section></>}

function AboutPage(){const news=[['2026.07.25','银河互联网电视发布影音智能体 2.0，重新定义大屏交互'],['2025.03.11','携手省级广电网络，智慧大屏解决方案覆盖 800 万家庭'],['2024.09.10','银河少儿通过国家少儿内容安全认证，行业首家获此资质']];return <><PageHero title="连接内容、设备与人" image={aboutHero}><p>银河互联网电视有限公司<br/>巩固基础、主动突破、多元拓展、建立生态</p></PageHero><section className="design-section about-intro"><Heading title="立足内容与技术，共建大屏生态"/><p>银河互联网电视有限公司（GITV）成立于 2012 年 7 月，由中央人民广播电台、江苏省广播电视总台和北京爱奇艺科技有限公司共同发起设立。银河以北京为基地，面向全国开展互联网电视业务，依托股东方资源，为内容服务平台与终端厂商提供正版内容及技术产品服务。</p><div><article><small>OUR MISSION</small><h3>连接内容与设备</h3></article><article><small>CONTENT</small><h3>正版内容与技术服务</h3></article></div></section><section className="design-section"><Heading title="稳步发展，持续连接"/><div className="timeline">{[['2012.07','公司成立'],['2015.04','引入战略投资'],['2020.08','深化资源协同']].map(([y,t])=><article key={y}><span>{y}</span><h3>{t}</h3><p>持续汇聚股东资源与行业伙伴，推动互联网电视业务稳步发展。</p></article>)}</div></section><section className="design-section"><Heading title="持续创新，行业前沿">关注银河互联网电视动态与行业洞察。</Heading><div className="news-list">{news.map(([d,t],i)=><article key={d}>{i===0&&<img src={aboutNews} alt=""/>}<span>{d}</span><h3>{t}</h3><p>银河持续推进产品、技术与生态合作，以创新能力服务更多家庭用户。</p></article>)}</div></section><section className="design-section"><Heading title="行业认可，持续前行"/><div className="honor-grid">{['国家高新技术企业','广电行业科技创新奖','CMMI3 级认证','中国智能大屏领军企业','等保三级认证','北京市专精特新企业','智慧大屏行业 Top10','AI 大屏创新奖'].map(x=><span key={x}>{x}</span>)}</div></section><section className="contact-cards"><Heading title="与我们取得联系">期待与您共同探索内容、技术与运营的更多可能。</Heading><div><article><b>商务合作</b><span>XXXX@gitv.cn</span></article><article><b>公司地址</b><span>北京市丰台区南四环西路 188 号</span></article></div></section></>}

export default function FrameworkPage({path}){
  let page;
  if(path==='/products') page=<ProductMatrixPage/>;
  else if(path==='/products/data') page=<DataPage/>;
  else if(path==='/products/advertising') page=<AdvertisingPage/>;
  else if(path==='/products/galaxytv') page=<SmartWidePage/>;
  else if(path==='/products/ainews') page=<AiNewsPage/>;
  else if(['aggregation','agent'].some(x=>path===`/products/${x}`)) page=<ProductsPage/>;
  else if(path==='/products/kids') page=<KidsPage/>;
  else if(path==='/products/tianguang') page=<EnginePage/>;
  else if(path==='/about') page=<AboutPage/>;
  else if(path==='/solutions') page=<SolutionsPage/>;
  else if(path.startsWith('/solutions/')) page=<SolutionsPage detail={path.split('/').pop()}/>;
  else page=<ProductMatrixPage/>;
  const isSolutions=path==='/solutions';
  const isFigmaProduct=['/products/data','/products/advertising','/products/galaxytv','/products/ainews'].includes(path);
  const footerProps = path==='/products/data'
    ? {calloutTitle:'AI 时代的新工作方式',calloutSubtitle:'从银河开始',calloutAction:'咨询商务'}
    : {calloutTitle:'让优质内容进入更多家庭大屏',calloutSubtitle:'',calloutAction:'咨询产品合作'};
  return <main className={`design-page${isFigmaProduct ? ' design-page--figma-product' : ''}`}><MegaNav logoSrc={logoTop}/>{page}<SiteFooter {...(isSolutions?{calloutTitle:'共同探索更多业务场景',calloutSubtitle:'围绕您的终端形态、内容需求与运营目标，沟通适合的能力组合。',calloutAction:'联系我们'}:isFigmaProduct?footerProps:{})}/></main>
}
