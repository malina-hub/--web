import MegaNav from '../components/mega-nav/MegaNav';
import SiteFooter from '../components/SiteFooter';
import logoTop from '../assets/figma/logo-top.svg';
import heroBackground from '../assets/figma-pages/smart-screen/smart-hero-bg.png';
import featureLauncher from '../assets/figma-pages/smart-screen/smart-feature-01.png';
import featureVOD from '../assets/figma-pages/smart-screen/smart-feature-02.png';
import featureLive from '../assets/figma-pages/smart-screen/smart-feature-03.png';
import featureSearch from '../assets/figma-pages/smart-screen/smart-feature-04.png';
import scenarioBackground from '../assets/figma-pages/smart-screen/smart-scenarios-bg.png';
import scenarioIcon from '../assets/figma-pages/smart-screen/smart-scenario-icon.svg';
import scenarioIconAlt from '../assets/figma-pages/smart-screen/smart-scenario-icon-alt.svg';
import './SmartScreenPage.css';

const features = [
  {
    title: 'Launcher首屏',
    description: '智能电视的第一入口，从开机首屏到内容导航，构建千人千面的大屏桌面体验。支持运营位灵活配置、多主题一键切换，冷启动不到2秒，开机即用。',
    image: featureLauncher,
  },
  {
    title: '海量点播',
    description: '覆盖影视、综艺、动漫、纪录片等全品类内容的智能点播引擎。AI智能推荐让用户在海量内容中精准发现所爱，毫秒级起播提供流畅观影体验。',
    image: featureVOD,
    reverse: true,
  },
  {
    title: '直播频道',
    description: '央视频道、地方卫视、特色频道全覆盖，毫秒级切台带来流畅直播体验。智能码率自适应技术，即使在弱网环境下也能保持稳定播放。',
    image: featureLive,
  },
  {
    title: '智能搜索',
    description: '智能电视的第一入口，从开机首屏到内容导航，构建千人千面的大屏桌面体验。支持运营位灵活配置、多主题一键切换，冷启动不到2秒，开机即用。',
    image: featureSearch,
    reverse: true,
  },
];

const scenarios = [
  ['广电运营商全业务平台', scenarioIcon],
  ['智能电视厂商内容生态', scenarioIconAlt],
  ['IPTV/OTT平台聚合入口', scenarioIcon],
  ['运营商定制桌面', scenarioIconAlt],
];

function FeatureRow({ feature }) {
  const copy = <div className="smart-screen-feature__copy">
    <div className="smart-screen-feature__intro">
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
    <div className="smart-screen-feature__details">
      <ul>
        <li>个性化 · 可运营</li>
        <li>用户画像 → 运营策略 → 内容编排</li>
      </ul>
      <a href="mailto:XXXX@gitv.cn">咨询产品</a>
    </div>
  </div>;
  const visual = <div className="smart-screen-feature__visual"><img src={feature.image} alt={`${feature.title}产品界面`} /></div>;
  return <article className={`smart-screen-feature${feature.reverse ? ' is-reverse' : ''}`}>{feature.reverse ? <>{visual}{copy}</> : <>{copy}{visual}</>}</article>;
}

export default function SmartScreenPage() {
  return <main className="smart-screen-page">
    <MegaNav logoSrc={logoTop} />
    <section className="smart-screen-hero" style={{ '--smart-screen-hero-image': `url(${heroBackground})` }}>
      <div className="smart-screen-hero__content">
        <div className="smart-screen-hero__heading"><h1>智慧大屏</h1><p>面向广电运营商与电视厂商打造的一站式大屏聚合平台，覆盖从内容聚合、智能分发到终端体验的完整链路，构建沉浸式大屏生态。</p></div>
        <div className="smart-screen-hero__actions"><a className="is-primary" href="#smart-screen-scenarios">查看解决方案</a><a href="mailto:XXXX@gitv.cn">咨询商务</a></div>
      </div>
    </section>
    <section className="smart-screen-capabilities">
      <header className="smart-screen-heading"><h2>四大核心能力</h2><p>天光引擎深度嵌入观影主链路，让每一次点击都更精准，每一段观看都更沉浸</p></header>
      <div className="smart-screen-feature-list">{features.map((feature) => <FeatureRow key={feature.title} feature={feature} />)}</div>
    </section>
    <section className="smart-screen-scenarios" id="smart-screen-scenarios" style={{ '--smart-screen-scenarios-image': `url(${scenarioBackground})` }}>
      <div className="smart-screen-scenarios__inner"><h2>典型应用场景</h2><div className="smart-screen-scenario-grid">{scenarios.map(([title, icon]) => <article key={title}><img src={icon} alt="" /><h3>{title}</h3></article>)}</div></div>
    </section>
    <SiteFooter />
  </main>;
}
