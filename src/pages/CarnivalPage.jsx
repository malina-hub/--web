import { useRef, useState } from 'react';
import MegaNav from '../components/mega-nav/MegaNav';
import SiteFooter from '../components/SiteFooter';
import logoTop from '../assets/figma/logo-top.svg';
import contactEmail from '../assets/figma/contact-email.svg';
import citySwitchArrow from '../assets/city-switch-arrow.svg';
import cityFrame from '../assets/city-frame.svg';
import workshopImage from '../assets/carnival/workshop-2.png';
import liveVideo from '../assets/carnival/galaxy-carnival-live.mp4';
import makeupImage from '../assets/carnival/微信图片_20260723160434.jpg';
import makeupImageAlt from '../assets/carnival/微信图片_20260723160442.jpg';
import greenScreenImage from '../assets/carnival/微信图片_20260723160520.jpg';
import greenScreenImageAlt from '../assets/carnival/微信图片_20260723160537.jpg';
import foleyVideo from '../assets/carnival/C6419.MP4';
import foleyVideoAlt from '../assets/carnival/C6563.MP4';
import dubbingVideo from '../assets/carnival/C0235.MP4';
import dubbingVideoAlt from '../assets/carnival/C0239.MP4';
import xiaohongshuCard from '../assets/carnival/xiaohongshu.jpg';
import AccordionGallery from '../components/AccordionGallery';
import Prism from '../components/Prism';
import SpotlightCard from '../components/SpotlightCard';
import BorderGlow from '../components/BorderGlow';
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

const gallerySets = [
  [{ image: makeupImage, label: '影视妆造揭秘', link: '#' }, { image: makeupImageAlt, label: '妆造现场', link: '#' }],
  [{ image: greenScreenImage, label: '影视绿幕拍摄', link: '#' }, { image: greenScreenImageAlt, label: '绿幕现场', link: '#' }],
  [{ image: foleyVideo, label: '影视拟音特技', link: '#' }, { image: foleyVideoAlt, label: '拟音特效现场', link: '#' }],
  [{ image: dubbingVideo, label: '影视原声配音', link: '#' }, { image: dubbingVideoAlt, label: '原声配音现场', link: '#' }],
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
  { city: '上海', date: '2026.05.01-05.05、05.16-05.17', venue: '广富林文化遗址公园', visitors: '12万+', feature: '“影视+击剑”主题；文体旅商联动；影视互动体验赋能击剑文化传播' },
  { city: '上海', date: '2026.09.30-10.04', venue: '泰晤士小镇', visitors: '12万+', feature: '“影视+咖啡”主题；多元化、高品质消费场景' },
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
          <BorderGlow key={number} className={activeTab === index ? 'is-active' : ''} borderRadius={12} colors={['#80adf9', '#c084fc', '#38bdf8']}><button type="button" className={activeTab === index ? 'is-active' : ''} onClick={() => setActiveTab(index)}>
            <strong>{title}</strong>
            <span>打造沉浸式大屏IP互动体验场</span>
          </button></BorderGlow>
        ))}
      </nav>
      <div className="workshop-gallery">
        <AccordionGallery key={activeTab} items={gallerySets[activeTab]} defaultIndex={0} expandRatio={0.8} trigger="hover" overlayColor="#383838" height={460} gap={10} radius={12} accentColor="#80adf9" showLabels={false} />
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
            <div className="city-slide__head"><i aria-hidden="true"><img src={cityFrame} alt="" /></i><div><h3>{city.venue ? `${city.city}｜${city.venue}` : city.city}</h3><p>{city.date}</p></div></div>
            {city.visitors && <div className="city-slide__metric"><span>参观人次</span><strong>{city.visitors}</strong></div>}
            <div className="city-slide__feature"><span>{city.visitors ? '活动亮点' : ''}</span><p>{city.feature}</p></div>
            {position === 'is-active' && city.visitors && <button type="button" onClick={() => document.querySelector('#highlights')?.scrollIntoView({ behavior: 'smooth' })}>查看详情</button>}
          </article>;
        })}
      </div>
      <div className="city-controls"><button type="button" onClick={() => shift(-1)} aria-label="上一站"><img src={citySwitchArrow} alt="" /></button><button type="button" onClick={() => shift(1)} aria-label="下一站"><img src={citySwitchArrow} alt="" /></button></div>
    </div>
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
        <div className="hero-rays" aria-hidden="true"><Prism animationType="rotate" timeScale={0.5} height={4.1} baseWidth={4.7} scale={3.6} hueShift={-0.1416} colorFrequency={0.7} noise={0} glow={0.5} /></div>
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

      <section className="content-section core" id="highlights"><div className="container"><SectionHeading title="一场嘉年华，四种沉浸体验" /><div className="four-grid">{highlights.map(([, title, text]) => <SpotlightCard className="feature-card" spotlightColor="rgba(0, 74, 145, 0.72)" key={title}><h3>{title}</h3><p>{text}</p></SpotlightCard>)}</div></div></section>

      <section className="content-section workshop" id="workshop"><div className="container"><SectionHeading title="亲手走进电影幕后">影视幕后工坊・影视手艺片场技艺秀</SectionHeading><WorkshopExperience /></div></section>

      <section className="content-section live"><div className="container"><SectionHeading title="身临其境，感受光影现场">每一帧都是沉浸式光影盛宴的精彩瞬间</SectionHeading><div className="live-media"><video src={liveVideo} controls playsInline preload="metadata" aria-label="银河光影嘉年华活动现场"/></div></div></section>

      <section className="content-section footprints" id="footprints"><div className="container"><SectionHeading title="下一站，与你的城市相见">足迹已至北京、上海，更多城市即将点亮</SectionHeading><CityShowcase /></div></section>

      <section className="content-section value"><div className="container"><SectionHeading title="让一场光影盛会，为城市持续创造价值">以影视工业体验为切入点，帮助地方文旅引流增收</SectionHeading><div className="four-grid value-grid">{values.map(([image,title,text]) => <article key={title}><img src={image} alt="" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <SiteFooter />
    </main>
  );
}
