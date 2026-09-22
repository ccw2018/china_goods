# Source China

纯静态商品英文名称目录。30 项常见中国制造商品，5 个类别，支持中英文搜索及分类筛选。名称链接默认打开 Alibaba 英文商品搜索，不代表供应商认证或实时热销排名。

## 本地查看

双击 `index.html` 即可，无需安装依赖或构建。

## GitHub Pages 发布

1. 在 GitHub 创建公开仓库。
2. 上传 `index.html`、`style.css`、`product-details.js`、`script.js`、`robots.txt`、`sitemap.xml` 和 `.nojekyll` 到仓库根目录。
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
## SEO

`<head>` 内提供 canonical、Open Graph、Twitter Card、favicon，并以 JSON-LD 输出 `WebSite`（含 SearchAction）与 `ItemList`（30 项商品的中英文名称与跳转链接）。商品正文由 JS 动态渲染，JSON-LD 让不执行 JavaScript 的爬虫也能读取商品清单。`robots.txt` 与 `sitemap.xml` 辅助搜索引擎索引。

注意：JSON-LD 与 product-details.js 是两份数据，增删商品或改名称时需同步更新，否则结构化数据与实际内容不一致。
## 语言（i18n）

页面支持四种语言切换：英文（默认）、简体中文、葡萄牙语（巴西葡语 pt-BR）、西班牙语（拉美西语）。右上角提供下拉选择器，选择会写入 localStorage（key `source-china-lang`），下次访问自动沿用，并同步 `<html lang>` 属性。

语言资源分三处：

- `i18n.js`：界面文案字典（`UI`，4 语言）、类别名（`CATEGORIES`）、语言状态管理（`LANGS`、`currentLang`、`t()`、`categoryName()`、`setLang()`）。
- `product-details.js`：30 个商品的名称、描述、参数、性价比均按 `{ en, zh, pt, es }` 组织；商品跳转仍使用英文名搜索 Alibaba（英文关键词与货源匹配度最高）。
- `script.js`：按 `currentLang` 渲染，搜索覆盖全部 4 种语言。

维护提示：新增商品需同时补全 4 种语言文案；葡萄牙语与西班牙语的技术参数译文建议由专业人员审校。

## 咨询表单（Formspree）

- 新增 inquiry-config.js、inquiry.js；必须与 index.html、script.js、style.css 一同发布，并保留 i18n.js、product-details.js 等现有文件。
- 在 inquiry-config.js 填写公开地址：window.INQUIRY_ENDPOINT = 'https://formspree.io/f/你的表单ID'。不要填写 API key、密码或邮箱管理凭据。当前为空，发送按钮禁用，明确提示尚未开通。
- 姓名、邮箱、留言必填；公司、商品、数量可选。商品采用英文名称提交，界面跟随四种语言。字段长度分别限制为 100、254、5000、150、80 字符（商品使用目录选项）。
- 私密留言交由 Formspree 保存并通知邮箱，不写 GitHub、localStorage 或 GA4。前端只处理发送状态，不建立公开留言列表。
- Formspree 后台：验证接收邮箱，启用通知，检查垃圾过滤和允许域名（如套餐支持）。_gotcha 已接入。若后台要求验证码，需在真实地址接入阶段配置并验证，不能仅凭前端测试认定已经可收件。
- GA4 后台：在 Web 数据流的增强型衡量中关闭“表单互动”，不要配置读取表单内容的标签或自定义事件。本站代码不向 GA4 传递留言数据。
- 免费版后台历史保存 30 天，额度以账号显示为准；在邮箱中建立长期归档，检查垃圾邮件和邮箱容量。
- 20 秒超时或网络错误时保留内容，不自动重发；服务可能已经接收超时请求，重试前应确认，以免生成重复咨询。
- 本地逻辑验证：node test-inquiry.cjs。模拟请求不会提交任何真实咨询。真实验收需在正式表单提交标有 TEST ONLY 的内容，确认后台记录及邮箱收件。
- 当前状态：无真实 Formspree 地址，未配置服务端、未做真实收件验收、未发布本轮修改。
`n接入状态：已配置 https://formspree.io/f/mbglokdq，真实测试返回 HTTP 200 / ok:true。后台记录、邮箱通知和浏览器跨域提交仍待验收；GitHub 登录失效，尚未发布。此前地址为空的描述为历史状态。

咨询表单已发布至 https://ccw2018.github.io/china_goods/#inquiry 。线上表单、产品选择和四语言切换已检查；邮件尚未收到，需在 Formspree 后台检查提交记录、垃圾信息、通知邮箱验证和通知开关。

## 当前语言版本

网站已在本地改为纯英文，旧语言偏好不再生效。商品、搜索及咨询功能保留，咨询 language 固定 en。此前多语言说明为历史记录。
发布需上传 index.html、i18n.js、product-details.js、script.js、inquiry.js；本次浏览器上传权限被拒绝，尚未上线。
