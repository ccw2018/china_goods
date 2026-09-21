# Source China

纯静态商品英文名称目录。30 项常见中国制造商品，5 个类别，支持中英文搜索及分类筛选。名称链接默认打开 Alibaba 英文商品搜索，不代表供应商认证或实时热销排名。

## 本地查看

双击 `index.html` 即可，无需安装依赖或构建。

## GitHub Pages 发布

1. 在 GitHub 创建公开仓库。
2. 上传 `index.html`、`style.css`、`product-details.js`、`script.js` 和 `.nojekyll` 到仓库根目录。
3. 在 Settings → Pages 中选择 Deploy from a branch，选择 main 和 / (root)，点击 Save。
4. 等待 Actions 部署完成，访问 Pages 页面提供的网址。

普通项目仓库网址为 `https://用户名.github.io/仓库名/`。本项目使用相对资源路径，支持该形式。

## 修改内容

在 `script.js` 的 items 中修改英文名称、中文名称及类别。修改 `link.href` 可更换搜索平台或接入自己的产品详情地址。

## 访问次数

底部使用不蒜子的 `busuanzi_value_page_pv` 显示当前页面累计浏览量（PV），刷新可能重复计数，并非独立访客数。真实跨用户统计依赖第三方服务，发布后的页面会向它发送请求。本地文件及 localhost 预览不请求统计；加载失败显示“暂不可用”，不模拟数字。上线后需检查服务可达性和实际计数，页面地址改变可能影响统计连续性。

官方接入说明：https://ibruce.info/2015/04/04/busuanzi/

字体使用 Google Fonts，无法连接时回退至系统字体。不影响内容和搜索。
## 访问者统计（Google Analytics）

GA4 已启用，Measurement ID 为 G-QBJ14C4KWS；2026-09-21 已核对原线上首页含该代码。数据是否入库需在 GA4 实时报表确认。GA4 用于流量与事件分析，不保证识别每一位真实访客，也不提供访客完整 IP。

## 产品内容增强

30 个商品包含专业英文名称、中文名称、完整英文用途描述、4 条参考选型参数及性价比分析。正文及参数在 product-details.js 中，按 script.js 商品类别顺序关联，增删时应同步更新。搜索覆盖名称、描述、参数及性价比正文。

数值是编辑选型示例，不是特定在售型号的已验证参数；没有实际报价，不宣称最低价或具体节省比例。页面强调使用成本、维护、能耗和适配性。三项官方技术参考位于对应参数展开区，其他参数为建议询价条件。

本轮新版尚未发布。发布时必须同时上传 product-details.js、index.html、script.js、style.css，避免新首页缺少内容文件。
