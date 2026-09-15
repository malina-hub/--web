import MegaNav from '../components/mega-nav/MegaNav';
import logoTop from '../assets/figma/logo-top.svg';
import logoFooter from '../assets/figma/logo-footer.svg';
import contactLocation from '../assets/figma/contact-location.svg';
import contactPhone from '../assets/figma/contact-phone.svg';
import contactEmail from '../assets/figma/contact-email.svg';
import policeIcon from '../assets/figma/police.png';
import integrityMark from '../assets/figma/integrity.png';
import productLicense from '../assets/figma/product-license.png';
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
import './FrameworkPage.css';

const productGroups = [
  { title:'智慧大屏', tag:'GITV SMART TV PLATFORM', text:'面向广电运营商与电视厂商的一站式大屏聚合平台，覆盖从内容聚合、智能分发到终端体验的完整链路。', meta:'Launcher 首屏 · 海量点播 · 直播频道', image:productsScreen },
  { title:'智慧泛屏', tag:'GALAXY TV', text:'银河互联网电视旗下旗舰大屏应用，汇聚央媒权威内容与正版影视资源，以智能推荐提供高品质视听服务。', meta:'央媒品质 · 全品类内容 · AI 智能推荐', image:productsHero },
];
const capabilities = [
  ['小可影音智能体','基于大语言模型的多模态影音智能体，以自然语言对话串联内容搜索与播放。'],['AI资讯','集 AI 数字人生成、自动化视频生产与智能播控于一体。'],['天光引擎','银河自研智能内容引擎，以数据反哺前后端业务。'],['数据平台','提供采集、计算、开发、调度、监控及可视化能力。'],['猎户座广告','覆盖开机、桌面、点播与视频贴片等大屏广告场景。']
];
const solutions = [
  ['智慧大屏解决方案','广电运营商 · 智能电视厂商 · OTT/IPTV 平台方','面向大屏业务的内容、桌面与运营需求，构建端到端的智慧大屏生态。',solutionTv,'#/solutions/smarttv'],
  ['智能家居影音解决方案','电视厂商 · 智能家居品牌','以智能电视为家庭影音中枢，连接影音智能体、少儿内容及多设备协同体验。',solutionHome,'#/solutions/homeaudio'],
  ['中屏场景解决方案','投影仪厂商 · 闺蜜机品牌 · 智能显示屏厂商','面向不同形态的中屏设备，组合内容、交互与运营能力，适配多元使用场景。',solutionMid,'#/solutions/midscreen'],
  ['车载屏解决方案','整车厂商 · Tier1 供应商 · 车机系统方案商','面向智能座舱的车载影音场景，融合内容、推荐与多屏协同体验。',solutionAuto,'#/solutions/autoscreen'],
];
const solutionStats = [
  ['2亿+','家庭终端覆盖','覆盖全国 31 省市家庭大屏终端'],
  ['30+','省级广电合作','与各级广电运营商深度合作'],
  ['2亿+','电视品牌合作','主流电视品牌终端全面覆盖'],
];

function PageHero({title,children,image,className=''}){return <section className={`design-hero ${className}`}><div className="design-hero__copy"><h1>{title}</h1><div>{children}</div></div>{image&&<img className="design-hero__image" src={image} alt=""/>}</section>}
function Heading({title,children}){return <header className="design-heading"><h2>{title}</h2>{children&&<p>{children}</p>}</header>}
function Footer(){return <footer className="design-footer" id="contact"><div className="design-footer__callout"><h2>AI 时代的新工作方式<br/>从银河开始</h2><a href="mailto:XXXX@gitv.cn">咨询商务</a></div><div className="design-footer__inner"><div className="design-footer__brand"><div><img src={logoFooter} alt="GITV"/><h2>银河互联网电视</h2></div></div><div className="design-footer__contact"><h3>联系我们</h3><p><img src={contactLocation} alt=""/>北京市丰台区南四环西路188号十八区7号楼</p><p><img src={contactPhone} alt=""/>4006-597-010</p><p><img src={contactEmail} alt=""/>XXXX@gitv.cn</p></div><div className="design-footer__legal"><div>银河互联网电视有限公司 版权所有　©gitv.cn 京ICP备14054596号-2　<span><img src={policeIcon} alt=""/>京公网安备 11010602005139号</span></div><aside><img src={integrityMark} alt="诚信经营标识"/><img src={productLicense} alt="产品许可证标识"/></aside></div></div></footer>}

function ProductsPage(){return <><PageHero title="全栈产品，连接多元场景" image={productsHero}><p>从智慧大屏与泛屏产品，到 AI、数据与商业能力，再到银河品牌业务，<br/>以内容、技术与运营，构建完整的大屏生态。</p><div className="hero-pills"><span>大屏与泛屏产品</span><span>AI、数据与商业能力</span><span>银河品牌业务</span></div></PageHero><section className="design-section"><Heading title="大屏与泛屏产品">聚合正版内容，连接终端体验与智能分发。</Heading><div className="product-feature-grid">{productGroups.map(x=><article key={x.title}><img src={x.image} alt=""/><span>{x.tag}</span><h3>{x.title}</h3><p>{x.text}</p><small>{x.meta}</small><a href="mailto:XXXX@gitv.cn">咨询产品详情 →</a></article>)}</div></section><section className="design-section"><Heading title="AI、数据与商业能力">从内容生产与智能交互，到分发、运营与流量变现。</Heading><div className="capability-grid">{capabilities.map(([t,d],i)=><article className={i===0?'wide':''} key={t}>{i===0&&<img src={productsAi} alt=""/>}<span>0{i+1} / INTELLIGENT CAPABILITY</span><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="design-section"><Heading title="银河品牌业务">让内容延伸为沉浸体验，连接家庭与城市生活。</Heading><div className="brand-grid"><a href="#/products/carnival"><b>银河光影嘉年华</b><span>光影互动 · IP 定制 · 节庆活动</span></a><a href="#/products/kids"><b>银河少儿</b><span>多元内容 · 家长管控 · 寓教于乐</span></a></div></section></>}

function SolutionsPage({detail}){const selected=detail?solutions.filter(x=>x[4].endsWith(detail)):solutions;const title=detail?(selected[0]?.[0]||'场景解决方案'):'全栈能力，融入业务场景';return <><PageHero title={title} className={!detail?'solution-overview-hero':''}><p>{detail?(selected[0]?.[2]||'以全栈能力服务多元业务场景。'):'将全栈产品线按业务场景打包，提供开箱即用的整体方案与最佳实践。'}</p>{!detail&&<><div className="design-actions"><a href="mailto:XXXX@gitv.cn">咨询商务</a></div><div className="solution-stats">{solutionStats.map(([value,label,description])=><article key={label}><i aria-hidden="true"/><strong>{value}</strong><b>{label}</b><span>{description}</span></article>)}</div></>}</PageHero><section className="design-section solution-section"><Heading title={detail?'能力组合与合作价值':'选择适合业务的解决方案'}>{detail?'围绕实际业务需求，组合内容、桌面、终端与运营能力。':'从服务对象出发，了解能力组合与合作价值。'}</Heading><div className="solution-list">{selected.map((x,i)=><article key={x[0]} className={i%2?'reverse':''}><div className="solution-media"><img src={x[3]} alt={x[0]}/></div><div><span>0{i+1}</span><h3>{x[0]}</h3><small>{x[1]}</small><p>{x[2]}</p><ul><li>内容与分发：聚合、推荐与媒资运营</li><li>桌面与跨端：终端体验与多屏互动</li><li>数据与商业：分析、运营与价值增长</li></ul><a href={detail?'mailto:XXXX@gitv.cn':x[4]}>查看方案详情 →</a></div></article>)}</div></section></>}

function KidsPage(){const dimensions=[['内容优势','聚合正版高清资源，涵盖多类型儿童内容。'],['团队优势','多年运营商支撑经验，提供技术与运营服务。'],['产品优势','直观终端体验、个性化推荐与家长中心。'],['落地灵活','产品及运营计划清晰，支持灵活落地。']];return <><PageHero title={<>用心打造高价值<br/>儿童视听产品</>} image={kidsHero}><p>聚焦儿童垂类的大屏视听产品，聚合正版内容、智能推荐与家长管控，<br/>为家庭提供安全、丰富的观影体验，兼顾商业共赢与教育价值。</p><div className="design-actions"><a href="#/products/kids?section=kids-features">探索产品能力</a><a href="#/solutions/homeaudio">查看相关方案</a></div></PageHero><section className="design-section" id="kids-features"><Heading title="四大维度，共建儿童内容体验">动画、儿歌、绘本、益智、学科，满足不同年龄段的多元需求。</Heading><div className="dimension-grid">{dimensions.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="design-section"><Heading title="从发现到播放，让好内容更易触达">将终端功能整合为浏览、寻找与播放三个连续场景。</Heading><div className="journey-grid">{[['轻松浏览','瀑布流组合多种版式，自定义 TAB 与特色频道帮助内容快速露出。'],['快速找到','支持九宫格、全拼和语音输入，缩短内容查找路径。'],['安心观看','支持续播、连续播放、家长管控与音频模式。']].map(([t,d],i)=><article key={t}><span>0{i+1} / EXPERIENCE</span><h3>{t}</h3><p>{d}</p></article>)}</div></section><section className="design-section kids-parent"><Heading title="孩子自由探索，家长安心掌握">将观看边界与成长反馈放在同一个家长中心。</Heading><div><img src={aboutHero} alt=""/><ul><li><b>可管</b> 时间有边界</li><li><b>可控</b> 内容有选择</li><li><b>可见</b> 成长有反馈</li></ul></div></section></>}

function EnginePage(){return <><PageHero title="智赋大屏，价值深耕"><p>银河自研智能内容引擎，以数据为中枢，连接自动化编排、高光片段与智能识别，<br/>通过用户反馈优化内容分发，赋能大屏前后端业务。</p><div className="engine-orbit"><span>自动化内容编排</span><b>天光引擎<small>数据反哺 · 正向循环</small></b><span>播放中智能识别</span></div></PageHero><section className="design-section"><Heading title="一次观影，三段引擎之力">从浏览内容到沉浸观看，贯穿用户的内容消费旅程。</Heading><div className="engine-steps">{[['瀑布流自动化编排','根据实时用户画像与运营策略，动态生成内容序列。'],['播放前 · 高光片段吸睛','解析内容库中的精彩片段，将吸引人的内容前置展示。'],['播放中 · 智能识别','识别影人、场景与片段，支持内容引流与交叉推荐。']].map(([t,d],i)=><article key={t}><div><span>0{i+1}</span>{i===1&&<img src={engineHighlight} alt=""/>}</div><section><small>{['个性化 · 可运营','前置展示 · 提转化','非阻断 · 强沉浸'][i]}</small><h3>{t}</h3><p>{d}</p><b>{['用户画像 → 运营策略 → 内容编排','内容解析 → 精彩片段 → 观看兴趣','播放识别 → 背景信息 → 关联内容'][i]}</b></section></article>)}</div></section><section className="design-section"><Heading title="数据驱动决策，持续优化体验">将用户交互转化为策略依据，连接内容分发与业务运营。</Heading><div className="data-flow">{[['采集','点击、停留、快进、退出'],['洞察','分析行为与内容偏好'],['决策','调整编排与推荐策略'],['增长','观察时长与转化效率']].map(([t,d])=><article key={t}><i/><h3>{t}</h3><p>{d}</p></article>)}</div></section></>}

function AboutPage(){const news=[['2026.07.25','银河互联网电视发布影音智能体 2.0，重新定义大屏交互'],['2025.03.11','携手省级广电网络，智慧大屏解决方案覆盖 800 万家庭'],['2024.09.10','银河少儿通过国家少儿内容安全认证，行业首家获此资质']];return <><PageHero title="连接内容、设备与人" image={aboutHero}><p>银河互联网电视有限公司<br/>巩固基础、主动突破、多元拓展、建立生态</p></PageHero><section className="design-section about-intro"><Heading title="立足内容与技术，共建大屏生态"/><p>银河互联网电视有限公司（GITV）成立于 2012 年 7 月，由中央人民广播电台、江苏省广播电视总台和北京爱奇艺科技有限公司共同发起设立。银河以北京为基地，面向全国开展互联网电视业务，依托股东方资源，为内容服务平台与终端厂商提供正版内容及技术产品服务。</p><div><article><small>OUR MISSION</small><h3>连接内容与设备</h3></article><article><small>CONTENT</small><h3>正版内容与技术服务</h3></article></div></section><section className="design-section"><Heading title="稳步发展，持续连接"/><div className="timeline">{[['2012.07','公司成立'],['2015.04','引入战略投资'],['2020.08','深化资源协同']].map(([y,t])=><article key={y}><span>{y}</span><h3>{t}</h3><p>持续汇聚股东资源与行业伙伴，推动互联网电视业务稳步发展。</p></article>)}</div></section><section className="design-section"><Heading title="持续创新，行业前沿">关注银河互联网电视动态与行业洞察。</Heading><div className="news-list">{news.map(([d,t],i)=><article key={d}>{i===0&&<img src={aboutNews} alt=""/>}<span>{d}</span><h3>{t}</h3><p>银河持续推进产品、技术与生态合作，以创新能力服务更多家庭用户。</p></article>)}</div></section><section className="design-section"><Heading title="行业认可，持续前行"/><div className="honor-grid">{['国家高新技术企业','广电行业科技创新奖','CMMI3 级认证','中国智能大屏领军企业','等保三级认证','北京市专精特新企业','智慧大屏行业 Top10','AI 大屏创新奖'].map(x=><span key={x}>{x}</span>)}</div></section><section className="contact-cards"><Heading title="与我们取得联系">期待与您共同探索内容、技术与运营的更多可能。</Heading><div><article><b>商务合作</b><span>XXXX@gitv.cn</span></article><article><b>公司地址</b><span>北京市丰台区南四环西路 188 号</span></article></div></section></>}

export default function FrameworkPage({path}){let page;if(path==='/products'||['aggregation','galaxytv','agent','ainews','advertising','data'].some(x=>path===`/products/${x}`))page=<ProductsPage/>;else if(path==='/products/kids')page=<KidsPage/>;else if(path==='/products/tianguang')page=<EnginePage/>;else if(path==='/about')page=<AboutPage/>;else if(path==='/solutions')page=<SolutionsPage/>;else if(path.startsWith('/solutions/'))page=<SolutionsPage detail={path.split('/').pop()}/>;else page=<ProductsPage/>;return <main className="design-page"><MegaNav logoSrc={logoTop}/>{page}<Footer/></main>}
