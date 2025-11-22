# 一起装智能交付系统官网 🏠

一起装是专为装修企业打造的智能交付与数字化营销解决方案。本项目是其官方网站，采用现代化的技术栈构建。

## ✨ 主要功能

- 🎨 **深色主题设计** - 现代化的深色UI，支持暗黑模式
- 🗺️ **3D地图可视化** - 北京市工地实时监控3D地图
- 📱 **完全响应式** - 适配桌面、平板和移动设备
- 📧 **表单提交** - 集成FormSubmit.co，自动发送邮件
- 🎭 **流畅动画** - 使用Framer Motion实现丰富的交互动画
- 🚀 **性能优化** - Vite构建，快速加载

## 🛠️ 技术栈

- **框架**: Vite + React 18
- **路由**: React Router DOM v6
- **样式**: Vanilla CSS (CSS Variables + Flexbox/Grid)
- **图标**: Lucide React
- **动画**: Framer Motion
- **表单**: FormSubmit.co
- **部署**: Zeabur

## 📁 项目结构

```
yiqizhuang-website/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Navbar.jsx      # 导航栏（含暗黑模式切换）
│   │   ├── Footer.jsx      # 页脚
│   │   └── home/           # 首页组件
│   │       ├── Hero.jsx    # Hero区域（含3D地图）
│   │       ├── PainPoints.jsx
│   │       ├── Solutions.jsx
│   │       ├── FeaturesPreview.jsx
│   │       └── SocialProof.jsx
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx        # 首页
│   │   ├── Features.jsx    # 产品功能
│   │   ├── Solutions.jsx   # 解决方案
│   │   ├── Marketing.jsx   # 营销获客
│   │   ├── Success.jsx     # 成功案例
│   │   ├── Partners.jsx    # 合作生态
│   │   ├── About.jsx       # 关于我们
│   │   └── Demo.jsx        # 预约演示
│   ├── index.css           # 全局样式
│   ├── App.jsx             # 应用入口
│   └── main.jsx            # React入口
├── public/                 # 静态资源
├── ZEABUR_DEPLOYMENT.md   # Zeabur部署指南
├── FORM_SUBMIT_GUIDE.md   # 表单配置指南
├── deploy.sh              # 自动部署脚本
└── package.json

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站

### 3. 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist/` 目录

### 4. 预览生产构建

```bash
npm run preview
```

## 📦 部署到 Zeabur

### 方式一：使用自动部署脚本

```bash
./deploy.sh
```

### 方式二：手动部署

1. **创建 GitHub 仓库**
   ```bash
   # 如果还没有远程仓库
   git remote add origin https://github.com/YOUR_USERNAME/yiqizhuang-website.git
   ```

2. **推送代码**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

3. **在 Zeabur 上部署**
   - 访问 [Zeabur](https://zeabur.com)
   - 使用 GitHub 登录
   - 创建新项目
   - 选择您的仓库
   - 自动部署完成

📚 **详细部署指南**: 查看 [ZEABUR_DEPLOYMENT.md](./ZEABUR_DEPLOYMENT.md)

## 📧 表单配置

网站使用 FormSubmit.co 处理表单提交。

**首次使用需要激活**:
1. 提交一次测试表单
2. 检查邮箱 `mingjie.he@timontech.cn`
3. 点击激活链接
4. 后续提交将自动发送

📚 **详细配置**: 查看 [FORM_SUBMIT_GUIDE.md](./FORM_SUBMIT_GUIDE.md)

## 🎨 设计规范

- **主色调**: 深蓝 (#1A3250) + 科技蓝 (#4A90E2)
- **强调色**: 橙色 (#FF7A00)
- **字体**: 
  - 标题: Montserrat / 思源黑体
  - 正文: Inter / 思源黑体
- **动画**: 流畅的过渡效果，微交互动画

## 🌟 主要特性

### 1. 3D北京地图可视化
- 简化的北京市SVG轮廓
- 6个区域的工地标记点
- 交互式工具提示
- 实时数据流线动画

### 2. 深色主题
- 全站深色设计
- 玻璃态（Glassmorphism）效果
- 渐变和光晕效果
- 优雅的配色方案

### 3. 响应式设计
- 移动优先设计
- 断点: 768px, 1024px, 1400px
- 自适应布局
- 触摸友好

### 4. 性能优化
- Vite 快速构建
- 代码分割
- 懒加载
- 资源压缩

## 📱 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

Copyright © 2025 一起装

## 📞 联系方式

- 邮箱: mingjie.he@timontech.cn
- 网站: [即将上线]

---

**开发者**: Mingjie He  
**最后更新**: 2025-11-21
