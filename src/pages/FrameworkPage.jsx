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

function GalaxyTvPage(){
  const capabilities = [
    ['央媒品质', '央视、卫视、央媒权威内容源，正版高清品质保障。'],
    ['亿级内容库', '海量电影、电视剧、综艺、动漫、少儿、纪录片等全品类覆盖。'],
    ['AI智能推荐', '深度学习算法驱动，千人千面个性化推荐，越看越懂你。'],
    ['极致体验', '4K 超高清、HDR、杜比音效，毫秒级起播零等待。'],
  ];
  return <main className="galaxy-tv-page">
    <section className="galaxy-tv-hero"><div className="galaxy-tv-hero__content"><span className="galaxy-tv-eyebrow">GALAXY PANSCREEN · 智慧泛屏</span><h1>连接每一块屏，<em>享受好内容</em></h1><p>智慧泛屏是银河互联网电视面向泛屏生态推出的全场景视听解决方案。以银河 TV 为核心载体，覆盖智能机顶盒、VR 设备、车载屏、智能音箱、投影仪、一体机等多元终端，将优质视听内容与智能推荐能力延伸至家庭与出行的每一个角落。</p><div className="design-actions"><a href="#galaxy-tv-capabilities">探索产品能力</a><a href="mailto:XXXX@gitv.cn">咨询商务</a></div></div><img src={productsHero} alt="智慧泛屏" /></section>
    <section className="design-section galaxy-tv-capabilities" id="galaxy-tv-capabilities"><Heading title="让好内容触达每一块屏">央媒品质 · 全品类内容 · AI 智能推荐</Heading><div className="galaxy-tv-capability-grid">{capabilities.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </main>;
}

function AiNewsPage(){
  const capabilities = [
    ['AI数字人播报', 'AI数字人视频生产，文本到视频分钟级输出，快速生成适配大屏的资讯内容。'],
    ['全流程自动化', '7×12 小时不间断更新，减少人工介入，让资讯生产与播控持续稳定运行。'],
    ['精准混合推荐', '融合央媒内容、泛娱乐片库与用户画像行为数据，实现更精准的内容匹配。'],
    ['原生高效变现', '通过高峰插播与沉浸式续播，在不打断观看体验的同时提升内容曝光与收益。'],
  ];
  return <main className="ai-news-page">
    <section className="ai-news-hero"><div className="ai-news-hero__content"><span className="ai-news-eyebrow">AI NEWS · AI资讯</span><h1>零干预，<em>高转化</em></h1><p>银河 AI 数字人视频生产与播控一体解决方案，集 AI 生成、自动化生产与智能播控于一体，实现从文本到高质量视频的分钟级高效输出。</p><div className="design-actions"><a href="#ai-news-capabilities">探索产品能力</a><a href="mailto:XXXX@gitv.cn">咨询商务</a></div></div><img src={productsAi} alt="AI资讯智能生产与播控" /></section>
    <section className="design-section ai-news-capabilities" id="ai-news-capabilities"><Heading title="让资讯生产更高效">AI 生成 · 自动化生产 · 智能播控 · 原生变现</Heading><div className="ai-news-capability-grid">{capabilities.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </main>;
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

export default function FrameworkPage({path}){let page;if(path==='/products')page=<ProductMatrixPage/>;else if(['aggregation','agent','advertising','data'].some(x=>path===`/products/${x}`))page=<ProductsPage/>;else if(path==='/products/galaxytv')page=<GalaxyTvPage/>;else if(path==='/products/ainews')page=<AiNewsPage/>;else if(path==='/products/kids')page=<KidsPage/>;else if(path==='/products/tianguang')page=<EnginePage/>;else if(path==='/about')page=<AboutPage/>;else if(path==='/solutions')page=<SolutionsPage/>;else if(path.startsWith('/solutions/'))page=<SolutionsPage detail={path.split('/').pop()}/>;else page=<ProductMatrixPage/>;const isSolutions=path==='/solutions';return <main className="design-page"><MegaNav logoSrc={logoTop}/>{page}<SiteFooter {...(isSolutions?{calloutTitle:'共同探索更多业务场景',calloutSubtitle:'围绕您的终端形态、内容需求与运营目标，沟通适合的能力组合。',calloutAction:'联系我们'}:{})}/></main>}
