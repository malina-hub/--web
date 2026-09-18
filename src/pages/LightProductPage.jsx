import { useState } from 'react';
import MegaNav from '../components/mega-nav/MegaNav';
import SiteFooter from '../components/SiteFooter';
import logoTop from '../assets/figma/logo-top.svg';
import heroBackground from '../assets/figma-pages/engine-hero.png';
import metricIconOne from '../assets/figma-pages/engine-metric-1.svg';
import metricIconTwo from '../assets/figma-pages/engine-metric-2.svg';
import metricIconThree from '../assets/figma-pages/engine-metric-3.svg';
import dataCardOne from '../assets/figma-pages/engine-data-1.svg';
import dataCardTwo from '../assets/figma-pages/engine-data-2.svg';
import dataCardThree from '../assets/figma-pages/engine-data-3.svg';
import engineFlow from '../assets/figma-pages/engine-flow.png';
import engineHighlight from '../assets/figma-pages/engine-highlight.png';
import engineRecognize from '../assets/figma-pages/engine-recognize.png';
import unionLogo from '../assets/figma-pages/Union.svg';
import './LightProductPage.css';

const features = [
  { name: '自动化内容编排', title: <>让每一次浏览，<br />都遇见感兴趣的内容</>, description: '根据实时用户画像与运营策略，动态生成内容序列', points: ['个性化 · 可运营', '用户画像 → 运营策略 → 内容编排'], image: engineFlow },
  { name: '高光片段吸睛', title: <>把精彩前置，<br />让好内容更快被发现</>, description: '解析内容库中的精彩片段，将吸引人的内容前置展示', points: ['前置展示 · 提转化', '内容解析 → 精彩片段 → 观看兴趣'], image: engineHighlight },
  { name: '播放中智能识别', title: <>从正在看的内容，<br />发现更多精彩</>, description: '识别影人、场景与片段，支持内容引流与交叉推荐', points: ['非阻断 · 强沉浸', '播放识别 → 背景信息 → 关联内容'], image: engineRecognize },
];

const metrics = [
  ['数十亿级', '日均处理请求', metricIconOne],
  ['90%+', '推荐准确率', metricIconTwo],
  ['显著跃升', '观看时长与点击转化', metricIconThree],
];

function CapabilityMock({ feature, active }) {
  const labels = ['为你推荐', '精彩片段', '智能识别'];
  const headlines = ['发现你的下一部精彩', '精彩，现在开始', '发现画面中的更多故事'];
  return <div className={`tianguang-mock tianguang-mock--${active}`}><div className="tianguang-mock__bar"><img src={unionLogo} alt="GITV" /><span>{feature.name}</span></div><div className="tianguang-mock__stage"><div className="tianguang-mock__shape" /><span>{labels[active]}</span><strong>{headlines[active]}</strong>{active === 1 && <i>▷</i>}{active === 2 && <em>◎ 场景识别 <small>探索关联内容 →</small></em>}</div><div className="tianguang-mock__row"><div><i /><span>内容推荐</span></div><div><i /><span>精彩片段</span></div><div><i /><span>关联内容</span></div></div></div>;
}

export default function LightProductPage({ capabilityOnly = false }) {
  const [active, setActive] = useState(0);
  const feature = features[active];
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const handleTabKey = (event, index) => {
    const next = event.key === 'ArrowRight' ? (index + 1) % features.length : event.key === 'ArrowLeft' ? (index + features.length - 1) % features.length : event.key === 'Home' ? 0 : event.key === 'End' ? features.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`engine-tab-${next}`)?.focus();
  };

  return <main className={`light-product tianguang-page ${capabilityOnly ? 'tianguang-page--capture' : ''}`}>
    {!capabilityOnly && <MegaNav logoSrc={logoTop} />}
    {!capabilityOnly && <section className="tianguang-hero" style={{ '--tianguang-hero-image': `url(${heroBackground})` }}><div className="tianguang-hero__content"><div className="tianguang-hero__heading"><h1>智赋大屏，<span>价值深耕</span></h1><p>以数据为中枢，深度赋能大屏端前后端全业务场景。是一套能够驱动业务持续增长的决策系统，让大屏内容的<br className="desktop-only" />分发与消费实现真正的降本增效。</p></div><div className="tianguang-hero__actions"><button className="is-primary" onClick={() => scrollTo('lp-capabilities')}>查看解决方案</button><button onClick={() => scrollTo('lp-contact')}>咨询商务</button></div></div></section>}
    {!capabilityOnly && <section className="tianguang-metrics"><div className="tianguang-heading"><h2>为什么选择天光引擎</h2><p>天光引擎深度嵌入观影主链路，让每一次点击都更精准，每一段观看都更沉浸</p></div><div className="tianguang-metrics__card">{metrics.map(([title, text, icon]) => <article key={title}><img src={icon} alt="" /><strong>{title}</strong><span>{text}</span></article>)}</div></section>}
    <section className="tianguang-capabilities" id="lp-capabilities"><div className="tianguang-heading"><h2>三大核心能力</h2><p>天光引擎深度嵌入观影主链路，让每一次点击都更精准，每一段观看都更沉浸</p></div><div className="tianguang-capabilities__body"><div className="tianguang-tabs" role="tablist" aria-label="天光引擎核心能力">{features.map((item, index) => <button key={item.name} id={`engine-tab-${index}`} role="tab" aria-selected={active === index} aria-controls="engine-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => handleTabKey(event, index)}>{item.name}</button>)}</div><div className="tianguang-feature" id="engine-panel" role="tabpanel" aria-labelledby={`engine-tab-${active}`}><div className="tianguang-feature__copy"><h3>{feature.title}</h3><p>{feature.description}</p><ul>{feature.points.map((point) => <li key={point}>{point}</li>)}</ul><button className="tianguang-small-button" onClick={() => scrollTo('lp-contact')}>咨询产品</button></div><div className="tianguang-feature__visual"><CapabilityMock feature={feature} active={active} /></div></div></div></section>
    {!capabilityOnly && <section className="tianguang-data"><div className="tianguang-heading"><h2>数据驱动决策，提质增效创价值</h2><p>天光引擎将每一次用户交互都视为珍贵的数据资产。通过实时的数据回传与深度分析，我们构建了“采集—洞察—决策—增长”的完整正向循环，让业务指标随着每一次模型迭代而持续跃升。</p></div><div className="tianguang-data__cards">{[[dataCardOne, '用户行为', '实时行为分析'], [dataCardTwo, '模型', '自迭代进化'], [dataCardThree, '业务价值', '全面增长']].map(([image, title, text]) => <article key={title}><img src={image} alt="" /><div><strong>{title}</strong><span>{text}</span></div></article>)}</div></section>}
    {!capabilityOnly && <SiteFooter id="lp-contact" />}
  </main>;
}
