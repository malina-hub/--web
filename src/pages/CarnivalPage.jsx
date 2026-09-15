import { useRef, useState } from 'react';
import MegaNav from '../components/mega-nav/MegaNav';
import logoTop from '../assets/figma/logo-top.svg';
import logoFooter from '../assets/figma/logo-footer.svg';
import contactLocation from '../assets/figma/contact-location.svg';
import contactPhone from '../assets/figma/contact-phone.svg';
import contactEmail from '../assets/figma/contact-email.svg';
import policeIcon from '../assets/figma/police.png';
import integrityMark from '../assets/figma/integrity.png';
import productLicense from '../assets/figma/product-license.png';
import workshopImage from '../assets/carnival/workshop-2.png';
import xiaohongshuCard from '../assets/carnival/xiaohongshu.jpg';
import AccordionGallery from '../components/AccordionGallery';
import LightRays from '../components/LightRays';
import highlightLight from '../assets/carnival/highlight-light.svg';
import highlightIp from '../assets/carnival/highlight-ip.svg';
import highlightFestival from '../assets/carnival/highlight-festival.svg';
import highlightBrand from '../assets/carnival/highlight-brand.svg';
import valueAuthority from '../assets/carnival/value-authority.svg';
import valueTraffic from '../assets/carnival/value-traffic.svg';
import valueConsumption from '../assets/carnival/value-consumption.svg';
import valueOperation from '../assets/carnival/value-operation.svg';
import './CarnivalPage.css';

const highlights = [
  [highlightLight, '光影互动', '虚拟现实技术与大屏融合，打造沉浸式光影互动体验'],
  [highlightIp, 'IP定制', '热门IP深度定制，打造专属品牌互动场景'],
  [highlightFestival, '节庆活动', '春节/中秋/国庆等节庆主题互动，提升家庭活跃度'],
  [highlightBrand, '品牌营销', '大屏互动营销新玩法，品牌曝光与用户转化一体'],
];

const workshopItems = [
  ['01', '影视妆造揭秘', '影视匠人现场实操特效化妆、塑形造妆技艺，拆解片场化妆幕后趣味知识，观赏性、互动性兼备'],
  ['02', '影视绿幕拍摄', '走进专业影视绿幕片场，体验特效取景、场景合成，一键穿梭奇幻虚拟场景，亲身解锁大片拍摄全过程'],
  ['03', '影视拟音特技', '拟音师利用日常道具还原风雨、打斗等影视音效，现场科普拟音原理，沉浸式感受声音制作全过程'],
  ['04', '影视原声配音', '专业配音演员一人分饰多角演绎影视名场面，游客可近距离聆听声线塑造，上台亲身试音互动，解锁配音幕后乐趣'],
];

const galleryItems = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
];

const workshopTracks = [
  { id: 'workshop', label: '影视幕后工坊', subtitle: '妆造揭秘 · 绿幕拍摄', items: workshopItems.slice(0, 2) },
  { id: 'studio', label: '片场技艺秀', subtitle: '拟音特技 · 原声配音', items: workshopItems.slice(2) },
];

const values = [
  [valueAuthority, '权威品牌曝光', '国家级媒体平台——央广传媒集团媒体矩阵'],
  [valueTraffic, '吸引客流', '影视工业沉浸式体验+大型实景片场，强力吸引全年龄段游客到访'],
  [valueConsumption, '拉动消费', '联动票务、餐饮、住宿、出行，全方位拉动地方文旅消费'],
  [valueOperation, '长效运营', '银河光影嘉年华特色体验环节可授权景区，实现常态化长期稳定运营'],
];

const cities = [
  { city: '北京', date: '2025.12.31 - 2026.01.01', venue: '首钢一高炉 SoReal 科幻乐园', visitors: '1.5万+', feature: '“影视+亲子”主题；跨年夜狂欢派对；强互动性' },
  { city: '上海  |  广富林文化遗址公园', date: '2026.05.01-05.05、05.16-05.17', visitors: '12万+', feature: '“影视+击剑”主题；文体旅商联动；影视互动体验赋能击剑文化传播' },
  { city: '上海 · 泰晤士小镇', date: '2026.09.30-10.04', feature: '“影视+咖啡”主题；多元化、高品质消费场景' },
  { city: '三亚', date: '筹备中', feature: '筹备中，敬请期待' },
];

function SectionHeading({ title, children }) {
  return <div className="section-heading"><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

function MediaPanel({ className = '', children }) {
  return <div className={`media-panel ${className}`}>{children}</div>;
}

function WorkshopExperience() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="workshop-experience">
      <nav className="workshop-tabs" aria-label="影视工业体验类型">
        {workshopItems.map(([number, title], index) => (
          <button type="button" className={activeTab === index ? 'is-active' : ''} onClick={() => setActiveTab(index)} key={number}>
            <strong>{title}</strong>
            <span>打造沉浸式大屏IP互动体验场</span>
          </button>
        ))}
      </nav>
      <div className="workshop-gallery">
        <AccordionGallery key={activeTab} items={galleryItems} defaultIndex={activeTab % galleryItems.length} expandRatio={0.52} trigger="hover" overlayColor="#383838" height={460} gap={10} radius={12} accentColor="#80adf9" />
      </div>
    </div>
  );
}

function WorkshopSchedule() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const track = workshopTracks[trackIndex];

  const selectTrack = (index) => {
    setTrackIndex(index);
    setActiveIndex(0);
  };

  const selectItem = (index) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="schedule-layout">
      <aside className="schedule-nav" aria-label="影视体验日程">
        <div className="schedule-meta"><h3>体验日程</h3><span>银河光影嘉年华</span><strong>{track.subtitle}</strong></div>
        <div className="schedule-list" style={{ '--active-offset': `${activeIndex * 120}px` }}>
          {track.items.map(([number, title], index) => <button type="button" className={activeIndex === index ? 'is-active' : ''} onClick={() => selectItem(index)} key={number}><span>{number}</span><strong>{title}</strong></button>)}
        </div>
      </aside>
      <div className="schedule-content">
        <div className="schedule-tabs" role="tablist" aria-label="体验场次">
          {workshopTracks.map((item, index) => <button type="button" role="tab" aria-selected={trackIndex === index} className={trackIndex === index ? 'is-active' : ''} onClick={() => selectTrack(index)} key={item.id}>{item.label}</button>)}
        </div>
        <div className="schedule-cards">
          {track.items.map(([number, title, text], index) => (
            <article ref={(node) => { cardRefs.current[index] = node; }} className={`schedule-card ${activeIndex === index ? 'is-active' : ''}`} key={number} onMouseEnter={() => setActiveIndex(index)}>
              <div><span>EXPERIENCE {number}</span><h3>{title}</h3><p>{text}</p></div><b aria-hidden="true">{number}</b>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function CityCard({ city, date, venue, visitors, feature, upcoming = false }) {
  return (
    <article className={`city-card ${upcoming ? 'is-upcoming' : ''}`}>
      <h3>{city}</h3><p className="city-date">{date}</p>
      {venue && <dl><div><dt>场馆</dt><dd>{venue}</dd></div>{visitors && <div><dt>参观人次</dt><dd>{visitors}</dd></div>}<div><dt>{upcoming ? '' : '站点亮点'}</dt><dd>{feature}</dd></div></dl>}
      {!venue && <p className="city-pending">筹备中，敬请期待</p>}
      {!upcoming && <button type="button" onClick={() => document.querySelector('#highlights')?.scrollIntoView({ behavior: 'smooth' })}>查看活动精选图频 <span>→</span></button>}
    </article>
  );
}

function CityShowcase() {
  const [activeCity, setActiveCity] = useState(1);
  const shift = (step) => setActiveCity((current) => (current + step + cities.length) % cities.length);
  return (
    <div className="city-showcase">
      <div className="city-stack">
        {cities.map((city, index) => {
          const delta = (index - activeCity + cities.length) % cities.length;
          const position = delta === 0 ? 'is-active' : delta === 1 ? 'is-next' : delta === cities.length - 1 ? 'is-prev' : 'is-hidden';
          return <article className={`city-slide ${position}`} key={city.city} aria-hidden={position === 'is-hidden'}>
            <div className="city-slide__head"><i aria-hidden="true">⌖</i><div><h3>{city.city}</h3><p>{city.date}</p></div></div>
            {city.visitors && <div className="city-slide__metric"><span>参观人次</span><strong>{city.visitors}</strong></div>}
            <div className="city-slide__feature"><span>{city.visitors ? '活动亮点' : ''}</span><p>{city.venue ? `场馆  ${city.venue}\n` : ''}{city.feature}</p></div>
            {position === 'is-active' && city.visitors && <button type="button" onClick={() => document.querySelector('#highlights')?.scrollIntoView({ behavior: 'smooth' })}>查看详情</button>}
          </article>;
        })}
      </div>
      <div className="city-controls"><button type="button" onClick={() => shift(-1)} aria-label="上一站">←</button><button type="button" onClick={() => shift(1)} aria-label="下一站">→</button></div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-callout"><h2>准备好一起点亮<br/>下一座城市了吗</h2><a href="mailto:XXXX@gitv.cn">咨询商务</a></div>
      <div className="footer-inner">
        <div className="footer-brand"><div><img src={logoFooter} alt="GITV" /><h2>银河互联网电视</h2></div><p>智慧大屏整体解决方案引领者，以「内容+技术+运营」三位一体能力，连接内容、设备与人。让我们共同巩固基础、主动突破、多元拓展、建立生态。</p></div>
        <div className="footer-contact"><h3>联系我们</h3><div><p><img src={contactLocation} alt="" />北京市丰台区南四环西路188号十八区7号楼</p><p><img src={contactPhone} alt="" />4006-597-010</p><p><img src={contactEmail} alt="" />XXXX@gitv.cn</p></div></div>
        <div className="footer-legal"><div><p><span>银河互联网电视有限公司 版权所有</span><span>©gitv.cn 京ICP备14054596号-2</span><span><img src={policeIcon} alt="" />京公网安备 11010602005139号</span></p><p><span>网络文化经营许可证：京网文（2024）1468-073号</span><span>增值电信业务经营许可证：京B2-20212732</span></p><p><span>增值电信业务经营许可证：B2-20233776</span><span>互联网药品信息服务资格证书：(京)-经营性-2024-0502</span></p></div><aside><img src={integrityMark} alt="诚信经营标识" /><img src={productLicense} alt="产品许可证标识" /></aside></div>
      </div>
    </footer>
  );
}

export default function CarnivalPage() {
  const scrollTo = (selector, event) => {
    event.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const navigate = (href, event) => {
    if (href === '#/products/carnival') {
      event?.preventDefault();
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#/products/carnival`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="carnival-page">
      <MegaNav logoSrc={logoTop} onNavigate={navigate} />
      <section className="carnival-hero" id="top">
        <div className="hero-rays" aria-hidden="true"><LightRays raysOrigin="top-center" raysColor="#007ef7" raysSpeed={2.1} lightSpread={0.8} rayLength={1.2} followMouse mouseInfluence={0.1} noiseAmount={0.1} distortion={0.05} className="custom-rays" /></div>
        <div className="hero-copy">
          <div className="hero-title"><h1>银河光影嘉年华</h1></div>
          <p className="hero-description">打造沉浸式大屏IP互动体验场景，通过虚拟现实技术、光影互动装置与IP内容深度融合，为家庭用户提供前所未有的视觉盛宴与互动体验，覆盖节庆活动、品牌营销、影视宣传等多元场景。</p>
          <div className="hero-actions">
            <div className="hero-action-popover hero-action-popover--social">
              <a className="hero-action-button hero-action-button--primary" href="#highlights" onClick={(event) => scrollTo('#highlights', event)}>了解详情 <span>→</span></a>
              <div className="social-preview" role="tooltip"><img src={xiaohongshuCard} alt="银河光影嘉年华小红书官方账号" /></div>
            </div>
            <a className="hero-action-button" href="#footprints" onClick={(event) => scrollTo('#footprints', event)}>查看活动档期</a>
            <div className="hero-action-popover hero-action-popover--contact">
              <button className="hero-action-button" type="button" aria-haspopup="dialog">咨询商务</button>
              <aside className="business-popover" role="dialog" aria-label="商务合作咨询">
                <span className="business-popover__icon"><img src={contactEmail} alt="" /></span>
                <h2>商务合作咨询</h2>
                <p>欢迎联系商务负责人，沟通合作机会与活动档期</p>
                <div className="business-popover__email"><small>商务邮箱</small><strong>wangmx@cnb.cn</strong></div>
                <a className="business-popover__send" href="mailto:wangmx@cnb.cn"><img src={contactEmail} alt="" />发送邮件</a>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section core" id="highlights"><div className="container"><SectionHeading title="一场嘉年华，四种沉浸体验" /><div className="four-grid">{highlights.map(([icon, title, text]) => <article className="feature-card" key={title}><img src={icon} alt="" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="content-section workshop" id="workshop"><div className="container"><SectionHeading title="亲手走进电影幕后">影视幕后工坊・影视手艺片场技艺秀</SectionHeading><WorkshopExperience /></div></section>

      <section className="content-section live"><div className="container"><SectionHeading title="身临其境，感受光影现场">每一帧都是沉浸式光影盛宴的精彩瞬间</SectionHeading><div className="live-media"><img src={workshopImage} alt="银河光影嘉年华活动现场"/></div></div></section>

      <section className="content-section footprints" id="footprints"><div className="container"><SectionHeading title="下一站，与你的城市相见">足迹已至北京、上海，更多城市即将点亮</SectionHeading><CityShowcase /></div></section>

      <section className="content-section value"><div className="container"><SectionHeading title="让一场光影盛会，为城市持续创造价值">以影视工业体验为切入点，帮助地方文旅引流增收</SectionHeading><div className="four-grid value-grid">{values.map(([image,title,text]) => <article key={title}><img src={image} alt="" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <Footer />
    </main>
  );
}
