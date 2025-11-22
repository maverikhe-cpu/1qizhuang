# 部署指南 (Vercel)

您的网站已配置为通过 Vercel 自动部署。

## 🚀 如何部署

只需将代码推送到 GitHub 仓库的 `main` 分支，Vercel 会自动检测变更并重新部署。

```bash
git add .
git commit -m "描述您的更改"
git push origin main
```

## 🌐 访问网站

- **生产环境**: [https://1qizhuang.vercel.app](https://1qizhuang.vercel.app) (或您配置的自定义域名)
- **Vercel 控制台**: [https://vercel.com/dashboard](https://vercel.com/dashboard)

## 🛠 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📦 构建生产版本

```bash
npm run build
# 预览生产构建
npm run preview
```
