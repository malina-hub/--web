import Aurora from './components/Aurora';
import ChromaGrid from './components/ChromaGrid';
import logoTop from './assets/figma/logo-top.svg';
import logoFooter from './assets/figma/logo-footer.svg';
import navArrow from './assets/figma/nav-arrow.svg';
import buttonArrow from './assets/figma/button-arrow.svg';
import contactLocation from './assets/figma/contact-location.svg';
import contactPhone from './assets/figma/contact-phone.svg';
import contactEmail from './assets/figma/contact-email.svg';
import policeIcon from './assets/figma/police.png';
import integrityMark from './assets/figma/integrity.png';
import productLicense from './assets/figma/product-license.png';
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

const story = '面向智慧家庭与泛大屏生态，构建集内容聚合、智能分发、终端适配与数据洞察于一体的全栈式产品矩阵。已覆盖超2亿家庭及千万终端，将智能科技深度融入家庭生活的每个角落。银河持续引领大屏生态创新，积极探索AI赋能商业与管理的新路径，致力为亿万家庭打造更智慧、更美好的大屏体验。';
const metricImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 380"/%3E';
const metricItems = [
  { image: metricImage, title: '2亿+', subtitle: '家庭终端覆盖', borderColor: '#88ADFF', gradient: 'linear-gradient(169deg, rgba(0,74,145,.5), rgba(19,54,81,.5) 39%, rgba(24,35,57,.5))', activeGradient: 'linear-gradient(156deg, #041329 3%, rgba(31,32,57,0) 35%), linear-gradient(39deg, #00a2ff 9%, rgba(0,0,0,0) 45%), linear-gradient(141deg, rgba(1,8,34,.9), #6c78e1 70%, #b899ff)' },
  { image: metricImage, title: '30+', subtitle: '省级广电合作', borderColor: '#88ADFF', gradient: 'linear-gradient(169deg, rgba(0,74,145,.5), rgba(19,54,81,.5) 39%, rgba(24,35,57,.5))', activeGradient: 'linear-gradient(156deg, #041329 3%, rgba(31,32,57,0) 35%), linear-gradient(39deg, #00a2ff 9%, rgba(0,0,0,0) 45%), linear-gradient(141deg, rgba(1,8,34,.9), #6c78e1 70%, #b899ff)' },
  { image: metricImage, title: '14年', subtitle: '大屏深耕经验', borderColor: '#88ADFF', gradient: 'linear-gradient(169deg, rgba(0,74,145,.5), rgba(19,54,81,.5) 39%, rgba(24,35,57,.5))', activeGradient: 'linear-gradient(156deg, #041329 3%, rgba(31,32,57,0) 35%), linear-gradient(39deg, #00a2ff 9%, rgba(0,0,0,0) 45%), linear-gradient(141deg, rgba(1,8,34,.9), #6c78e1 70%, #b899ff)' }
];
const ecoPartners = [ecoPartner1, ecoPartner2, ecoPartner3, ecoPartner4, ecoPartner5, ecoPartner6, ecoPartner7, ecoPartner8, ecoPartner9, ecoPartner10];
const carrierPartners = [carrierPartner1, carrierPartner2, carrierPartner3];

function PartnerTitle({ children }) {
  return <div className="partner-title"><i /><h3>{children}</h3><i /></div>;
}

export default function App() {
  return (
    <main>
      <header className="nav">
        <img className="nav-logo" src={logoTop} alt="GITV" />
        <nav>
          <a href="#top">首页</a>
          <a className="nav-drop" href="#metrics">银河+<img src={navArrow} alt="" /></a>
          <a className="nav-drop" href="#/products/carnival">产品矩阵<img src={navArrow} alt="" /></a>
          <a className="nav-drop" href="#partners">解决方案<img src={navArrow} alt="" /></a>
          <a href="#contact">关于银河</a>
        </nav>
        <a className="nav-cta" href="#contact">咨询商务</a>
      </header>

      <section className="hero" id="top">
        <div className="aurora-layer"><Aurora colorStops={['#171717', '#00b1fa', '#0054ff']} blend={0.5} amplitude={1} speed={0.5} /></div>
        <div className="hero-content">
          <h1><span>银河生态</span><em>融创未来</em></h1>
          <div className="hero-copy">
            <p><strong>银河互联网电视（GITV）</strong><span>，坐拥国家级媒体与产业资本双重背书，执掌中央银河集成平台及央广TV、江苏互联网电视内容高地。</span><strong>以海量正版内容为根基，全链路技术为引擎，AI智能体为大脑，为终端厂商提供“内容+桌面+数据+AI”的颠覆性全栈方案</strong><span>。覆盖超2亿家庭终端，稳居行业领军阵营，重塑大屏生态格局。我们以“全栈智联，慧启生活”为使命，引领AI赋能商业与管理变革，</span><strong>矢志为亿万家庭开启智慧、温暖、极致的数字生活新纪元。</strong></p>
            <div className="actions">
              <a href="#story">探索更多产品<img src={buttonArrow} alt="" /></a>
              <a href="#partners">查看解决方案</a>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics section" id="metrics">
        <h2>核心数据</h2>
        <div className="metric-chroma"><ChromaGrid items={metricItems} columns={2} rows={2} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" /></div>
      </section>

      <section className="story section" id="story">
        <div className="story-copy"><h2>全栈链接慧启生活</h2><p>{story}</p></div>
        <div className="media-placeholder">GITV 大屏界面</div>
      </section>

      <section className="partners section" id="partners">
        <h2>与行业合作伙伴共建智慧生态</h2>
        <div className="partner-groups">
          <div className="partner-group"><PartnerTitle>生态合作伙伴</PartnerTitle><div className="partner-grid eco-grid">{ecoPartners.map((src, i) => <img className="partner-card-image" src={src} alt={`生态合作伙伴 ${i + 1}`} key={src} />)}</div></div>
          <div className="partner-group"><PartnerTitle>运营商合作伙伴</PartnerTitle><div className="partner-grid carrier-grid">{carrierPartners.map((src, i) => <img className="partner-card-image" src={src} alt={`运营商合作伙伴 ${i + 1}`} key={src} />)}</div></div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-brand"><div><img src={logoFooter} alt="GITV" /><h2>银河互联网电视</h2></div><p>智慧大屏整体解决方案引领者，以「内容+技术+运营」三位一体能力，连接内容、设备与人。让我们共同巩固基础、主动突破、多元拓展、建立生态。</p></div>
          <div className="footer-contact-row">
            <div className="footer-contact"><h3>联系我们</h3><p><img src={contactLocation} alt="" />北京市丰台区南四环西路188号十八区7号楼</p><p><img src={contactPhone} alt="" />4006-597-010</p><p><img src={contactEmail} alt="" />XXXX@gitv.cn</p></div>
          </div>
          <div className="footer-legal">
            <div className="legal-copy">
              <p><span>银河互联网电视有限公司 版权所有</span><span>©gitv.cn 京ICP备14054596号-2</span><span className="police-record"><img src={policeIcon} alt="" />京公网安备 11010602005139号</span></p>
              <p><span>网络文化经营许可证：京网文（2024）1468-073号</span><span>增值电信业务经营许可证：京B2-20212732</span></p>
              <p><span>增值电信业务经营许可证：B2-20233776</span><span>互联网药品信息服务资格证书：(京)-经营性-2024-0502</span></p>
            </div>
            <div className="legal-marks"><img src={integrityMark} alt="诚信经营标识" /><img src={productLicense} alt="产品许可证标识" /></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
