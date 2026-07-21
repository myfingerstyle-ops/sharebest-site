# ShareBest

一个基于 **Astro + Markdown + Cloudflare Pages 免费版** 的纯展示型英文测评网站 MVP。

## 一、项目定位
- 前台网站语言：**纯英文**
- 当前主题方向：**宠物用品测评 / 选购指南**
- 站点类型：**纯静态展示站**
- 部署方式：**Cloudflare Pages Free**
- 不需要：服务器、数据库、登录系统、评论系统

## 二、当前源码路径
本项目源码统一放在：
`C:\Users\myfin\Documents\Codex\docs\good-things-review-source-code`

开发文档统一放在：
`C:\Users\myfin\Documents\Codex\docs\good-things-review-site`

## 三、当前已完成内容
### 页面
- Home
- Reviews index
- Review detail
- Guides index
- Guide detail
- Category page
- About
- Contact
- Privacy Policy
- Disclaimer
- 404
- sitemap

### 内容源
- 2 篇 review 示例
- 2 篇 guide 示例

### 静态资源
- favicon
- 默认 OG 图
- review 占位图
- guide 占位图
- robots.txt

## 四、上线前必须修改的 4 个地方
### 1. 站点主域名
文件：
- `astro.config.mjs`
- `src\data\site.ts`
- `public\robots.txt`

当前占位值：
- `https://sharebest.site`

上线前请统一改成你的正式域名。

### 2. 联系邮箱
文件：
- `src\data\site.ts`

当前占位值：
- `service@sharebest.site`

### 3. 网站文案中的品牌信息
如果后续品牌名不是 **ShareBest**，需要同步修改：
- `src\data\site.ts`
- 页面文案
- OG 图 / favicon（如需）

### 4. 示例内容替换为真实内容
当前内容主要是演示结构，正式上线前建议至少补齐：
- 6～10 篇真实 review
- 4～6 篇真实 guide

## 五、本地开发命令
```bash
npm install
npm run dev
npm run build
```

## 六、Cloudflare Pages 推荐配置
- Framework preset：`Astro`
- Build command：`npm run build`
- Output directory：`dist`
- Node version：建议使用 Cloudflare 默认稳定版本，或与 Astro 兼容的 LTS 版本

## 七、推荐上线顺序
1. 修改正式域名和联系邮箱
2. 补齐真实英文内容
3. 替换占位图
4. 本地执行构建检查
5. 推送到 Git 仓库
6. 连接 Cloudflare Pages
7. 绑定自定义域名
8. 二次检查 sitemap / robots / 页面链接

## 八、当前注意事项
- 当前站点还没有完成真实域名替换
- 当前内容仍以示例稿为主
- 当前未完成本地依赖安装与最终构建验证
- Cloudflare 上线前，建议先做一次完整人工检查

