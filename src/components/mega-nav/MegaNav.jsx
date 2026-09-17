import { useEffect, useRef, useState } from 'react';
import { megaNavItems } from './megaNavData';
import './MegaNav.css';
import smartScreenIcon from '../../assets/nav-smart-screen.svg';
import smartWideIcon from '../../assets/nav-smart-wide.svg';
import agentIcon from '../../assets/nav-agent.svg';
import tianguangIcon from '../../assets/nav-tianguang.svg';
import dataIcon from '../../assets/nav-data.svg';
import orbitAdIcon from '../../assets/nav-orbit-ad.svg';
import aiNewsIcon from '../../assets/nav-ai-news.svg';
import kidsIcon from '../../assets/nav-kids.svg';
import solutionSmartScreenIcon from '../../assets/nav-solution-smart-screen.svg';
import solutionHomeIcon from '../../assets/nav-solution-home.svg';
import solutionTabletIcon from '../../assets/nav-solution-tablet.svg';
import solutionCarIcon from '../../assets/nav-solution-car.svg';

const iconPaths = {
  film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4"/>',
  spark: '<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z"/><path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"/>',
  screen: '<rect x="3" y="5" width="18" height="13" rx="2"/><path d="m8 22 4-4 4 4"/>',
  play: '<path d="m9 7 8 5-8 5V7Z"/><rect x="3" y="4" width="18" height="16" rx="3"/>',
  bot: '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8"/>',
  news: '<path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
  orbit: '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(35 12 12)"/>',
  data: '<path d="M4 18V9M10 18V5M16 18v-7M22 18V3"/>',
  home: '<path d="m3 11 9-8 9 8v9H3v-9Z"/><path d="M9 20v-6h6v6"/>',
  tablet: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M10 18h4"/>',
  car: '<path d="m5 11 2-5h10l2 5M3 14h18v5H3zM7 19v2M17 19v2"/><circle cx="7" cy="15" r="1"/><circle cx="17" cy="15" r="1"/>',
};

function NavIcon({ name }) {
  if (name === 'kids-image') return <img className="mega-nav-kids-icon" src={kidsIcon} alt="" />;
  if (name === 'solution-smart-screen-image') return <img src={solutionSmartScreenIcon} alt="" />;
  if (name === 'solution-home-image') return <img src={solutionHomeIcon} alt="" />;
  if (name === 'solution-tablet-image') return <img src={solutionTabletIcon} alt="" />;
  if (name === 'solution-car-image') return <img src={solutionCarIcon} alt="" />;
  if (name === 'smart-screen') return <img src={smartScreenIcon} alt="" />;
  if (name === 'smart-wide') return <img src={smartWideIcon} alt="" />;
  if (name === 'agent-image') return <img src={agentIcon} alt="" />;
  if (name === 'tianguang-image') return <img src={tianguangIcon} alt="" />;
  if (name === 'data-image') return <img src={dataIcon} alt="" />;
  if (name === 'orbit-image') return <img src={orbitAdIcon} alt="" />;
  if (name === 'ai-news-image') return <img src={aiNewsIcon} alt="" />;
  return <svg aria-hidden="true" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: iconPaths[name] }} />;
}

export default function MegaNav({ logoSrc, onNavigate }) {
  const [openId, setOpenId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const headerRef = useRef(null);

  const open = (id) => { window.clearTimeout(closeTimer.current); setOpenId(id); };
  const delayedClose = () => { closeTimer.current = window.setTimeout(() => setOpenId(null), 140); };
  const closeAll = () => { setOpenId(null); setMobileOpen(false); };
  const path = (window.location.hash.replace(/^#/, '').split('?')[0] || '/').replace(/\/$/, '') || '/';
  const isCurrent = (menu) => {
    if (menu.id === 'galaxy') return path === '/galaxy' || path === '/products/carnival' || path === '/products/kids';
    if (menu.id === 'products') return path === '/products' || (path.startsWith('/products/') && !['/products/carnival','/products/kids'].includes(path));
    return path === '/solutions' || path.startsWith('/solutions/');
  };

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && closeAll();
    const onPointerDown = (event) => !headerRef.current?.contains(event.target) && closeAll();
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => { document.removeEventListener('keydown', onKeyDown); document.removeEventListener('pointerdown', onPointerDown); window.clearTimeout(closeTimer.current); };
  }, []);

  const navigate = (event, href) => {
    onNavigate?.(href, event);
    closeAll();
  };

  return (
    <header className={`mega-nav ${openId ? 'is-open' : ''}`} ref={headerRef} onMouseLeave={delayedClose}>
      <div className="mega-nav__bar">
        <a className="mega-nav__brand" href="#/" onClick={(e) => navigate(e, '#/')} aria-label="银河互联网电视首页">
          {logoSrc ? <img src={logoSrc} alt="GITV" /> : <strong>GITV</strong>}
          <span>银河互联网电视<small>GALAXY · INTERNET TV</small></span>
        </a>
        <nav className="mega-nav__desktop" aria-label="主导航">
          <a className={path === '/' ? 'is-current' : ''} aria-current={path === '/' ? 'page' : undefined} href="#/" onMouseEnter={closeAll} onFocus={closeAll} onClick={(e) => navigate(e, '#/')}>首页</a>
          {megaNavItems.map((menu) => menu.href ? (
            <a className={isCurrent(menu) ? 'is-current' : ''} aria-current={isCurrent(menu) ? 'page' : undefined} key={menu.id} href={menu.href} aria-expanded={openId === menu.id} aria-controls={`mega-panel-${menu.id}`} onMouseEnter={() => open(menu.id)} onFocus={() => open(menu.id)} onClick={(e) => navigate(e, menu.href)}>
              {menu.label}<span className="mega-nav__chevron" aria-hidden="true" />
            </a>
          ) : (
            <button className={isCurrent(menu) ? 'is-current' : ''} type="button" key={menu.id} aria-expanded={openId === menu.id} aria-controls={`mega-panel-${menu.id}`} onMouseEnter={() => open(menu.id)} onFocus={() => open(menu.id)} onClick={() => open(openId === menu.id ? null : menu.id)}>
              {menu.label}<span className="mega-nav__chevron" aria-hidden="true" />
            </button>
          ))}
          <a className={path === '/about' ? 'is-current' : ''} aria-current={path === '/about' ? 'page' : undefined} href="#/about" onMouseEnter={closeAll} onFocus={closeAll} onClick={(e) => navigate(e, '#/about')}>关于银河</a>
        </nav>
        <a className="mega-nav__cta" href="mailto:XXXX@gitv.cn">咨询商务</a>
        <button className="mega-nav__mobile-toggle" type="button" aria-expanded={mobileOpen} aria-label={mobileOpen ? '关闭导航' : '打开导航'} onClick={() => setMobileOpen(!mobileOpen)}><span /><span /></button>
      </div>

      <div className="mega-nav__panel-shell" aria-hidden={!openId} onMouseEnter={() => window.clearTimeout(closeTimer.current)}>
        {megaNavItems.map((menu) => (
          <section id={`mega-panel-${menu.id}`} className={`mega-panel ${openId === menu.id ? 'is-active' : ''}`} key={menu.id} aria-label={`${menu.label}二级导航`} aria-hidden={openId !== menu.id}>
            <div className={`mega-panel__inner mega-panel__inner--${menu.id}`}>
              {menu.groups.map((group, index) => <div className="mega-panel__group" key={group.title || index}>
                {menu.showGroupTitles && <header><span>{group.title}</span><i /></header>}
                <div className="mega-panel__items">{group.items.map((item) => <a href={item.href} key={item.href} onClick={(e) => navigate(e, item.href)} style={{ '--item-accent': item.accent }}><i><NavIcon name={item.icon} /></i><span><strong>{item.title}</strong>{item.description && <small>{item.description}</small>}</span></a>)}</div>
              </div>)}
            </div>
          </section>
        ))}
      </div>

      <nav className={`mega-nav__mobile ${mobileOpen ? 'is-active' : ''}`} aria-label="移动端导航" aria-hidden={!mobileOpen}>
        <a href="#/" onClick={(e) => navigate(e, '#/')}>首页</a>
        {megaNavItems.map((menu) => <div className="mobile-group" key={menu.id}><div className="mobile-group__head">{menu.href ? <a href={menu.href} onClick={(e) => navigate(e, menu.href)}>{menu.label}</a> : <span>{menu.label}</span>}<button type="button" aria-expanded={openId === menu.id} aria-label={`展开${menu.label}菜单`} onClick={() => setOpenId(openId === menu.id ? null : menu.id)}><span className="mega-nav__chevron" /></button></div><div className="mobile-group__items" aria-hidden={openId !== menu.id}>{menu.groups.flatMap(group => group.items).map(item => <a href={item.href} key={item.href} onClick={(e) => navigate(e, item.href)}>{item.title}<span>↗</span></a>)}</div></div>)}
        <a href="#/about" onClick={(e) => navigate(e, '#/about')}>关于银河</a>
      </nav>
    </header>
  );
}
