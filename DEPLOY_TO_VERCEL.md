# 快速部署到 Vercel

## 方法1: 使用 Vercel CLI（最快）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录运行
cd /Users/mingjiehe/Desktop/development/AG_demo/yiqizhuang-website
vercel

# 按照提示操作：
# - 登录 Vercel 账号
# - 确认项目设置
# - 自动部署
```

## 方法2: 通过 Vercel 网站

1. 访问 https://vercel.com
2. 使用 GitHub 登录
3. 点击 "New Project"
4. 选择您的仓库：`maverikhe-cpu/1qizhuang`
5. Vercel 会自动检测为 Vite 项目
6. 点击 "Deploy"
7. 等待 1-2 分钟

## 为什么 Vercel 更好？

- ✅ 自动识别 Vite 项目
- ✅ 自动配置正确的 MIME 类型
- ✅ 自动配置 SPA 路由
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS
- ✅ 每次 git push 自动部署
- ✅ 免费额度充足

## 已准备好的配置

项目中已有 `vercel.json` 文件，包含正确的路由配置。

## 部署后

您会获得一个类似这样的 URL：
- https://1qizhuang.vercel.app
- 或自定义域名

## 如果您想继续使用 Zeabur

我可以继续调试，但 Vercel 通常能在 2 分钟内完成部署并正常工作。

---

**建议**: 先用 Vercel 快速部署，让网站上线。之后如果需要，我们可以慢慢调试 Zeabur。
