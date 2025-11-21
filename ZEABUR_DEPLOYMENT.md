# Zeabur 部署指南

本指南将帮助您将一起装网站部署到 Zeabur 平台。

## 前置条件

- GitHub 账号
- Zeabur 账号（可以使用 GitHub 登录）
- Git 已安装在本地

## 部署步骤

### 1. 初始化 Git 仓库（如果还没有）

```bash
cd /Users/mingjiehe/Desktop/development/AG_demo/yiqizhuang-website
git init
git add .
git commit -m "Initial commit: 一起装官网"
```

### 2. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" → "New repository"
3. 填写仓库信息：
   - Repository name: `yiqizhuang-website`
   - Description: `一起装智能交付系统官方网站`
   - 选择 Public 或 Private
4. **不要**勾选 "Initialize this repository with a README"
5. 点击 "Create repository"

### 3. 推送代码到 GitHub

复制 GitHub 提供的命令，或使用以下命令：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/yiqizhuang-website.git

# 推送代码
git branch -M main
git push -u origin main
```

### 4. 在 Zeabur 上部署

#### 4.1 登录 Zeabur

1. 访问 [Zeabur](https://zeabur.com)
2. 点击 "Sign in with GitHub" 使用 GitHub 账号登录

#### 4.2 创建新项目

1. 点击 "New Project"
2. 选择一个区域（建议选择 "Hong Kong" 或 "Singapore" 以获得更好的中国大陆访问速度）
3. 输入项目名称：`yiqizhuang-website`

#### 4.3 添加服务

1. 在项目页面，点击 "Add Service"
2. 选择 "Git"
3. 选择您的 GitHub 仓库：`yiqizhuang-website`
4. Zeabur 会自动检测到这是一个 Vite 项目

#### 4.4 配置构建设置（通常自动检测）

Zeabur 应该会自动识别以下配置：
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

如果需要手动配置，可以在服务设置中修改。

#### 4.5 部署

1. 点击 "Deploy"
2. 等待构建完成（通常需要 2-5 分钟）
3. 构建成功后，Zeabur 会自动分配一个域名

### 5. 配置自定义域名（可选）

1. 在服务页面，找到 "Domains" 部分
2. 点击 "Add Domain"
3. 输入您的域名（例如：`www.yiqizhuang.com`）
4. 按照提示配置 DNS 记录：
   - 添加 CNAME 记录指向 Zeabur 提供的地址
   - 或添加 A 记录指向 Zeabur 的 IP 地址

### 6. 环境变量配置（如需要）

如果您的应用需要环境变量：

1. 在服务页面，找到 "Variables" 部分
2. 点击 "Add Variable"
3. 添加所需的环境变量

## 自动部署

Zeabur 已配置自动部署：
- 每次推送代码到 GitHub 的 `main` 分支
- Zeabur 会自动检测更改并重新部署
- 无需手动操作

## 更新网站

要更新网站内容：

```bash
# 1. 修改代码
# 2. 提交更改
git add .
git commit -m "更新描述"

# 3. 推送到 GitHub
git push origin main

# 4. Zeabur 会自动部署（约 2-5 分钟）
```

## 监控和日志

1. 在 Zeabur 项目页面，点击您的服务
2. 查看 "Logs" 标签页查看构建和运行日志
3. 查看 "Metrics" 标签页查看性能指标

## 常见问题

### Q1: 构建失败怎么办？

**A**: 
1. 检查 Zeabur 的构建日志
2. 确保本地 `npm run build` 能成功运行
3. 检查 `package.json` 中的依赖是否完整
4. 确认 Node.js 版本兼容（Zeabur 默认使用最新 LTS 版本）

### Q2: 部署后页面空白？

**A**:
1. 检查浏览器控制台的错误信息
2. 确认 `dist` 目录正确生成
3. 检查路由配置（React Router 需要配置 fallback）

### Q3: 如何回滚到之前的版本？

**A**:
1. 在 Zeabur 服务页面，找到 "Deployments"
2. 选择之前的部署版本
3. 点击 "Redeploy"

### Q4: 如何查看访问统计？

**A**:
Zeabur 提供基本的访问统计，在服务页面的 "Metrics" 标签页查看。

## 成本

Zeabur 提供免费套餐：
- ✅ 免费额度：每月 $5 USD 的资源
- ✅ 自动休眠：闲置时自动休眠节省资源
- ✅ 自定义域名：免费支持
- ✅ SSL 证书：自动配置

如需更多资源，可升级到付费计划。

## 性能优化建议

1. **启用 CDN**：在 Zeabur 设置中启用 CDN 加速
2. **压缩资源**：Vite 已自动处理
3. **图片优化**：使用 WebP 格式
4. **缓存策略**：配置适当的缓存头

## 安全建议

1. **环境变量**：敏感信息存储在 Zeabur 环境变量中
2. **HTTPS**：Zeabur 自动配置 SSL
3. **CORS**：如有 API 调用，配置正确的 CORS 策略

## 备份

建议定期备份：
1. GitHub 仓库已经是代码备份
2. 导出 Zeabur 配置（环境变量等）
3. 定期下载数据库备份（如有）

## 支持

- Zeabur 文档：https://zeabur.com/docs
- Zeabur Discord：https://discord.gg/zeabur
- GitHub Issues：在您的仓库中创建 issue

## 快速命令参考

```bash
# 查看当前分支
git branch

# 查看远程仓库
git remote -v

# 拉取最新代码
git pull origin main

# 推送代码
git push origin main

# 查看提交历史
git log --oneline

# 创建新分支
git checkout -b feature/new-feature

# 合并分支
git checkout main
git merge feature/new-feature
```

## 下一步

部署成功后：
1. ✅ 测试所有页面功能
2. ✅ 验证表单提交
3. ✅ 检查移动端适配
4. ✅ 配置自定义域名
5. ✅ 设置监控和告警
6. ✅ 优化 SEO 设置

祝部署顺利！🚀
