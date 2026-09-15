import { useState } from 'react';
import MegaNav from '../components/mega-nav/MegaNav';
import logo from '../assets/figma/logo-top.svg';
import buttonArrow from '../assets/figma/button-arrow.svg';
const flow='flow', highlight='highlight', recognize='recognize';
import './LightProductPage.css';
import './LightProductCapture.css';

const features = [
  {name:'自动化内容编排', title:'让每一次浏览，都遇见感兴趣的内容', description:'根据实时用户画像与运营策略，动态生成内容序列。', points:['个性化 · 可运营','用户画像 → 运营策略 → 内容编排'], image:flow},
  {name:'高光片段吸睛', title:'把精彩前置，让好内容更快被发现', description:'解析内容库中的精彩片段，将吸引人的内容前置展示。', points:['前置展示 · 提转化','内容解析 → 精彩片段 → 观看兴趣'], image:highlight},
  {name:'播放中智能识别', title:'从正在看的内容，发现更多精彩', description:'识别影人、场景与片段，支持内容引流与交叉推荐。', points:['非阻断 · 强沉浸','播放识别 → 背景信息 → 关联内容'], image:recognize},
];

export default function LightProductPage({ capabilityOnly = false }){
  const [active,setActive]=useState(0);
  const feature=features[active];
  const go=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
  function tabKey(event,index){let next;if(event.key==='ArrowRight')next=(index+1)%3;else if(event.key==='ArrowLeft')next=(index+2)%3;else if(event.key==='Home')next=0;else if(event.key==='End')next=2;else return;event.preventDefault();setActive(next);document.getElementById(`engine-tab-${next}`)?.focus();}
  if (capabilityOnly) return <main className="light-product lp-capture">
    <section className="lp-section" id="lp-capabilities"><header><h2>一次观影，三段引擎之力</h2><p>从浏览内容到沉浸观看，贯穿用户的内容消费旅程。</p></header>
      <div className="lp-tabs" role="tablist" aria-label="天光引擎核心能力">{features.map((item,index)=><button key={item.name} id={`capture-engine-tab-${index}`} role="tab" aria-selected={active===index} aria-controls="capture-engine-panel" tabIndex={active===index?0:-1} onClick={()=>setActive(index)}>{item.name}</button>)}</div>
      <div className="lp-feature" id="capture-engine-panel" role="tabpanel"><div className="lp-feature-copy"><span className="lp-feature-number">0{active+1}</span><h3>{feature.title}</h3><p>{feature.description}</p><ul>{feature.points.map(x=><li key={x}>{x}</li>)}</ul><button className="lp-primary">咨询产品能力 ↗</button></div><div className="lp-feature-image"><div className="lp-mock" aria-label={feature.name+'能力示意'}><div className="lp-mock-bar"><b>GITV</b><span>{feature.name}</span><small>能力示意</small></div><div className={`lp-mock-stage lp-mock-${active}`}><div className="lp-mock-mountain"/><span className="lp-mock-tag">{['为你推荐','精彩片段','智能识别'][active]}</span><strong>{['发现你的下一部精彩','精彩，现在开始','发现画面中的更多故事'][active]}</strong>{active===1&&<i className="lp-play">▷</i>}{active===2&&<div className="lp-recognition">◎ 场景识别 <span>探索关联内容 →</span></div>}</div><div className="lp-mock-row">{['内容推荐','精彩片段','关联内容'].map((x,i)=><div key={x}><i style={{background:['#c7d5fa','#ddd1f8','#bce4e4'][i]}}/><span>{x}</span></div>)}</div></div></div></div>
    </section>
  </main>;
  return <main className="light-product">
    <MegaNav logoSrc={logo}/>
    <section className="lp-hero">
      <div className="lp-hero-layout"><div className="lp-hero-copy">
      <div className="lp-eyebrow">天光引擎 · 银河自研智能内容引擎</div>
      <h1>智赋大屏，<br/><span>价值深耕</span></h1>
      <p className="lp-lead">以数据为中枢，连接自动化编排、高光片段与智能识别，<br className="lp-desktop"/>通过用户反馈优化内容分发，赋能大屏前后端业务。</p>
      <div className="lp-actions"><button className="lp-primary" onClick={()=>go('lp-contact')}>咨询商务<img src={buttonArrow} alt=""/></button><button className="lp-secondary" onClick={()=>go('lp-capabilities')}>探索产品能力</button></div>
      </div>
      <div className="lp-engine-visual" aria-label="天光引擎连接内容编排、高光片段与智能识别">
        <div className="lp-orbit lp-orbit-one"/><div className="lp-orbit lp-orbit-two"/>
        <div className="lp-satellite one"><i>▦</i><span>自动化内容编排<small>个性化 · 可运营</small></span></div>
        <div className="lp-engine-core"><span>✦</span><strong>天光引擎</strong><small>数据反哺 · 正向循环</small></div>
        <div className="lp-satellite two"><i>▷</i><span>高光片段吸睛<small>前置展示 · 提转化</small></span></div>
        <div className="lp-satellite three"><i>◎</i><span>播放中智能识别<small>非阻断 · 强沉浸</small></span></div>
      </div>
      </div>
      <div className="lp-summary"><div><strong>内容编排</strong><span>动态生成内容序列</span></div><div><strong>高光前置</strong><span>激发内容观看兴趣</span></div><div><strong>智能识别</strong><span>连接更多关联内容</span></div></div>
    </section>
    <section className="lp-section" id="lp-capabilities"><header><h2>一次观影，三段引擎之力</h2><p>从浏览内容到沉浸观看，贯穿用户的内容消费旅程。</p></header>
      <div className="lp-tabs" role="tablist" aria-label="天光引擎核心能力">{features.map((item,index)=><button key={item.name} id={`engine-tab-${index}`} role="tab" aria-selected={active===index} aria-controls="engine-panel" tabIndex={active===index?0:-1} onKeyDown={e=>tabKey(e,index)} onClick={()=>setActive(index)}>{item.name}</button>)}</div>
      <div className="lp-feature" id="engine-panel" role="tabpanel" aria-labelledby={`engine-tab-${active}`} tabIndex={0}><div className="lp-feature-copy"><span className="lp-feature-number">0{active+1}</span><h3>{feature.title}</h3><p>{feature.description}</p><ul>{feature.points.map(x=><li key={x}>{x}</li>)}</ul><button className="lp-primary" onClick={()=>go('lp-contact')}>咨询产品能力 ↗</button></div><div className="lp-feature-image"><div className="lp-mock" aria-label={feature.name+'能力示意'}><div className="lp-mock-bar"><b>GITV</b><span>{feature.name}</span><small>能力示意</small></div><div className={`lp-mock-stage lp-mock-${active}`}><div className="lp-mock-mountain"/><span className="lp-mock-tag">{['为你推荐','精彩片段','智能识别'][active]}</span><strong>{['发现你的下一部精彩','精彩，现在开始','发现画面中的更多故事'][active]}</strong>{active===1&&<i className="lp-play">▷</i>}{active===2&&<div className="lp-recognition">◎ 场景识别 <span>探索关联内容 →</span></div>}</div><div className="lp-mock-row">{['内容推荐','精彩片段','关联内容'].map((x,i)=><div key={x}><i style={{background:['#c7d5fa','#ddd1f8','#bce4e4'][i]}}/><span>{x}</span></div>)}</div></div></div></div>
    </section>
    <section className="lp-section lp-scenes"><header><span className="lp-eyebrow">赋能场景</span><h2>连接内容分发与业务运营</h2><p>将用户交互转化为策略依据，持续优化内容体验。</p></header><div className="lp-scene-grid">{[['01','浏览内容','根据实时用户画像与运营策略，动态生成内容序列。'],['02','播放之前','解析内容库中的精彩片段，将吸引人的内容前置展示。'],['03','沉浸观看','识别影人、场景与片段，支持内容引流与交叉推荐。']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><div className="lp-scene-lines"><i/><i/><i/></div></article>)}</div></section>
    <section className="lp-section lp-technology"><header><span className="lp-eyebrow">技术支撑</span><h2>数据驱动决策，持续优化体验</h2><p>银河自研智能内容引擎，以数据反哺前后端业务。</p></header><div className="lp-flow">{[['采集','点击、停留、快进、退出'],['洞察','分析行为与内容偏好'],['决策','调整编排与推荐策略'],['增长','观察时长与转化效率']].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="lp-cta"><span className="lp-eyebrow">天光引擎</span><h2>智赋大屏，价值深耕</h2><button className="lp-primary" onClick={()=>go('lp-contact')}>咨询商务 ↗</button></section>
    <footer className="lp-footer" id="lp-contact"><div className="lp-footer-top"><div><img src={logo} alt="GITV"/><strong>银河互联网电视</strong><p>以「内容+技术+运营」三位一体能力，连接内容、设备与人。</p></div><div><h3>联系我们</h3><a href="tel:4006597010">4006-597-010 ↗</a><p>北京市丰台区南四环西路188号十八区7号楼</p></div></div><div className="lp-legal">银河互联网电视有限公司 版权所有　©gitv.cn　京ICP备14054596号-2</div></footer>
  </main>;
}
