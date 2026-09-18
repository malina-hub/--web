import logoFooter from '../assets/figma/logo-footer.svg';
import buttonArrow from '../assets/figma/button-arrow.svg';
import contactLocation from '../assets/figma/contact-location.svg';
import contactPhone from '../assets/figma/contact-phone.svg';
import contactEmail from '../assets/figma/contact-email.svg';
import policeIcon from '../assets/figma/police.png';
import integrityMark from '../assets/figma/integrity.png';
import productLicense from '../assets/figma/product-license.png';

export default function SiteFooter({ id = 'contact', calloutTitle = '携手共建智慧大屏新生态', calloutSubtitle = '让好内容连接亿万家庭', calloutAction = '咨询商务' }) {
  return (
    <footer className="site-footer" id={id}>
      <div className="footer-callout"><h2>{calloutTitle}{calloutSubtitle && <><br/>{calloutSubtitle}</>}</h2><a href="mailto:XXXX@gitv.cn">{calloutAction}<img src={buttonArrow} alt=""/></a></div>
      <div className="footer-inner">
        <div className="footer-brand"><div><img src={logoFooter} alt="GITV" /><h2>银河互联网电视</h2></div></div>
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
  );
}
