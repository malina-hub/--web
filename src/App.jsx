import ColorBends from './components/ColorBends';
import ChromaGrid from './components/ChromaGrid';
import MegaNav from './components/mega-nav/MegaNav';
import SiteFooter from './components/SiteFooter';
import ScrollRevealTitle from './components/ScrollRevealTitle';
import logoTop from './assets/figma/logo-top.svg';
import buttonArrow from './assets/figma/button-arrow.svg';
import ecoPartner1 from './assets/partners/1.png';
import ecoPartner2 from './assets/partners/2.png';
import ecoPartner3 from './assets/partners/3.png';
import ecoPartner4 from './assets/partners/4.png';
import ecoPartner5 from './assets/partners/5.png';
import ecoPartner6 from './assets/partners/6.png';
import ecoPartner7 from './assets/partners/7.png';
import ecoPartner8 from './assets/partners/8.png';
import ecoPartner9 from './assets/partners/9.png';
import ecoPartner10 from './assets/partners/10.png';
import carrierPartner1 from './assets/carrier-partners/1.png';
import carrierPartner2 from './assets/carrier-partners/2.png';
import carrierPartner3 from './assets/carrier-partners/3.png';
import homeScreenImage from './assets/figma-pages/home-screen.png';

const story = '面向智慧家庭与泛大屏生态，银河构建集内容、技术与运营于一体的产品矩阵，服务超2亿家庭与千万终端。';
const metricImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 380"/%3E';
const metricItems = [
  { image: metricImage, title: '2亿+', subtitle: '家庭终端覆盖', borderColor: '#88ADFF', gradient: 'linear-gradient(169deg, rgba(0,74,145,.5), rgba(19,54,81,.5) 39%, rgba(24,35,57,.5))', activeGradient: 'linear-gradient(156deg, #041329 3%, rgba(31,32,57,0) 35%), linear-gradient(39deg, #00a2ff 9%, rgba(0,0,0,0) 45%), linear-gradient(141deg, rgba(1,8,34,.9), #6c78e1 70%, #b899ff)' },
  { image: metricImage, title: '30+', subtitle: '省级广电合作', borderColor: '#88ADFF', gradient: 'linear-gradient(169deg, rgba(0,74,145,.5), rgba(19,54,81,.5) 39%, rgba(24,35,57,.5))', activeGradient: 'linear-gradient(156deg, #041329 3%, rgba(31,32,57,0) 35%), linear-gradient(39deg, #00a2ff 9%, rgba(0,0,0,0) 45%), linear-gradient(141deg, rgba(1,8,34,.9), #6c78e1 70%, #b899ff)' },
  { image: metricImage, title: '14年', subtitle: '大屏深耕经验', borderColor: '#88ADFF', gradient: 'linear-gradient(169deg, rgba(0,74,145,.5), rgba(19,54,81,.5) 39%, rgba(24,35,57,.5))', activeGradient: 'linear-gradient(156deg, #041329 3%, rgba(31,32,57,0) 35%), linear-gradient(39deg, #00a2ff 9%, rgba(0,0,0,0) 45%), linear-gradient(141deg, rgba(1,8,34,.9), #6c78e1 70%, #b899ff)' }
];
const ecoPartners = [ecoPartner1, ecoPartner2, ecoPartner3, ecoPartner4, ecoPartner5, ecoPartner6, ecoPartner7, ecoPartner8, ecoPartner9, ecoPartner10];
const carrierPartners = [carrierPartner1, carrierPartner2, carrierPartner3];

function PartnerTitle({ children }) {
  return <div className="partner-title"><i /><ScrollRevealTitle as="h3">{children}</ScrollRevealTitle><i /></div>;
}

export default function App() {
  return (
    <main>
      <MegaNav logoSrc={logoTop} />

      <section className="hero" id="top">
        <div className="aurora-layer"><ColorBends colors={['#3270fd']} rotation={90} speed={0.47} scale={1} frequency={1} warpStrength={1} mouseInfluence={1} noise={0.15} parallax={0.5} iterations={1} intensity={1.5} bandWidth={6} transparent />
        </div>
        <div className="hero-content">
          <h1><span>银河生态</span><em>融创未来</em></h1>
          <div className="hero-copy">
            <p><strong>银河互联网电视（GITV）</strong><span>，坐拥国家级媒体与产业资本双重背书，执掌中央银河集成平台及央广TV、江苏互联网电视内容高地。</span><strong>以海量正版内容为根基，全链路技术为引擎，AI智能体为大脑，为终端厂商提供“内容+桌面+数据+AI”的颠覆性全栈方案</strong><span>。覆盖超2亿家庭终端，稳居行业领军阵营，重塑大屏生态格局。我们以“全栈智联，慧启生活”为使命，引领AI赋能商业与管理变革，</span><strong>矢志为亿万家庭开启智慧、温暖、极致的数字生活新纪元。</strong></p>
            <div className="actions">
              <a href="#/products">探索更多产品<img src={buttonArrow} alt="" /></a>
              <a href="#/solutions">查看解决方案</a>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics section" id="metrics">
        <ScrollRevealTitle>亿万家庭的共同选择</ScrollRevealTitle>
        <div className="metric-chroma"><ChromaGrid items={metricItems} columns={2} rows={2} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" /></div>
      </section>

      <section className="story section" id="story">
        <div className="story-copy"><ScrollRevealTitle>让智慧融入每一种家庭生活</ScrollRevealTitle><p>{story}</p></div>
        <div className="media-placeholder"><img src={homeScreenImage} alt="GITV 大屏界面" /></div>
      </section>

      <section className="partners section" id="partners">
        <ScrollRevealTitle>与你熟悉的品牌，共创更好的大屏体验</ScrollRevealTitle>
        <div className="partner-groups">
          <div className="partner-group"><PartnerTitle>生态合作伙伴</PartnerTitle><div className="partner-grid eco-grid">{ecoPartners.map((src, i) => <img className="partner-card-image" src={src} alt={`生态合作伙伴 ${i + 1}`} key={src} />)}</div></div>
          <div className="partner-group"><PartnerTitle>运营商合作伙伴</PartnerTitle><div className="partner-grid carrier-grid">{carrierPartners.map((src, i) => <img className="partner-card-image" src={src} alt={`运营商合作伙伴 ${i + 1}`} key={src} />)}</div></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
