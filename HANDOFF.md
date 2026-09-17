# 银河官网项目交接说明

## 项目概况

这是一个 React + Vite 单页官网原型，使用 hash 路由承载首页、产品矩阵、银河品牌、解决方案、关于银河和天光引擎等页面。当前首页与“银河光影嘉年华”页面的视觉效果和交互已完成第一阶段，后续主要是补齐其他页面的内容、细节样式和真实素材。

## 本地启动

```bash
pnpm install
pnpm dev
```

默认地址为 `http://127.0.0.1:5173/`。如果需要固定端口：

```bash
pnpm exec vite --host 127.0.0.1 --port 5174
```

生产构建：

```bash
pnpm build
```

## 路由入口

- `#/`：首页（ColorBends 动态背景、核心指标、产品故事、合作伙伴）
- `#/products`：产品矩阵总览
- `#/products/aggregation`：智慧大屏
- `#/products/galaxytv`：智慧泛屏
- `#/products/agent`：小可影音智能体
- `#/products/ainews`：AI 资讯
- `#/products/advertising`：猎户座广告
- `#/products/data`：数据平台
- `#/products/tianguang`：天光引擎
- `#/products/carnival`：银河光影嘉年华（已完成重点视觉与交互）
- `#/products/kids`：银河少儿
- `#/solutions`：解决方案总览
- `#/solutions/smarttv`、`homeaudio`、`midscreen`、`autoscreen`：解决方案详情
- `#/about`：关于银河

路由集中在 `src/main.jsx`，通用产品/解决方案页面主要在 `src/pages/FrameworkPage.jsx` 和 `FrameworkPage.css`。

## 已完成内容

### 首页

- 使用 `src/components/ColorBends.jsx` 实现 React Bits ColorBends 动态背景。
- 当前首页背景参数使用银河蓝 `#3270fd`，限制在 Banner 区域内。
- 首页模块标题、副标题已统一规范，副文本高度随文字行高自适应并居中。
- 首页导航、指标卡、产品故事、合作伙伴和页脚已有基础视觉实现。

### 银河光影嘉年华

- 页面文件：`src/pages/CarnivalPage.jsx`、`src/pages/CarnivalPage.css`
- 已完成 Banner、四种沉浸体验、城市卡片、工作坊、价值模块、合作伙伴等主要结构。
- 城市卡片已统一城市/场地格式、参观人数、活动亮点和按钮样式。
- 本地视频资源位于 `src/assets/carnival/`，文件较大且已在 `.gitignore` 中排除，不会上传 GitHub。

### 二级导航

- 组件：`src/components/mega-nav/MegaNav.jsx`、`MegaNav.css`
- 数据：`src/components/mega-nav/megaNavData.js`
- 导航图标统一使用 20×20px；银河少儿图标单独放大为 24px。
- 已替换用户提供的银河少儿、智慧大屏解决方案、智能家居影音、中屏场景、车载屏图标。
- 相关资源：`src/assets/nav-*.svg`

## 主要技术约定

- 全局样式在 `src/index.css`，页面级样式按页面文件拆分。
- 动态背景组件位于 `src/components/`，组件通常同时配有对应 CSS 文件。
- 不要把 `dist/`、`node_modules/`、`.tools/` 或本地 MP4 提交到 GitHub。
- 本地视频需要在同一份项目目录中存在，才能在本地预览中播放；同事拿到完整项目压缩包时需一并保留 `src/assets/carnival/*.MP4`。
- 修改 SVG 导航图标时，优先替换 `src/assets/nav-*.svg`，不要改动导航布局尺寸。

## 后续建议

1. 逐页补齐产品矩阵和解决方案详情页的真实文案、图片及业务数据。
2. 对 `FrameworkPage.jsx` 中目前复用的占位内容进行页面级拆分，避免所有详情页共用同一套列表文案。
3. 用真实视频封面、产品截图和品牌素材替换 `src/assets/figma-pages/` 中的占位资源。
4. 继续做响应式和移动端验收，重点检查二级导航、Banner 动态背景和视频加载性能。
5. Three.js/ColorBends 会产生较大的 JS chunk，后续可考虑动态加载或拆分以优化首屏性能。

## Git 协作

- 当前主分支：`main`
- 远端：`https://github.com/malina-hub/--web.git`
- 继续工作前先执行：

```bash
git pull --ff-only origin main
```

- 完成一组修改后执行 `pnpm build`，确认通过后再提交。

