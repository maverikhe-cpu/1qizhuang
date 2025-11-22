# Zeabur 部署故障排查

## 已修复的问题

### 1. 简化 zeabur.json 配置
**问题**: 之前的配置过于复杂，可能导致 Zeabur 无法正确识别
**解决方案**: 简化为仅指定框架类型，让 Zeabur 自动检测其他配置

```json
{
  "framework": "vite"
}
```

### 2. 添加 Node.js 版本规范
**问题**: 未指定 Node.js 版本可能导致版本不兼容
**解决方案**: 
- 在 `package.json` 中添加 `engines` 字段
- 创建 `.node-version` 文件指定 Node 20

### 3. 更新部署文档
**问题**: 部署文档可能不够详细
**解决方案**: 创建完整的部署指南和故障排查文档

## 当前部署状态

✅ 代码已推送到 GitHub: https://github.com/maverikhe-cpu/1qizhuang.git
✅ 配置文件已优化
✅ Node.js 版本已指定

## 下一步操作

### 在 Zeabur 上重新部署

1. **访问 Zeabur 项目**
   - 登录 https://zeabur.com
   - 找到您的项目

2. **触发重新部署**
   - 方式1: Zeabur 会自动检测到 GitHub 的新提交并重新部署
   - 方式2: 在服务页面点击 "Redeploy" 按钮

3. **查看构建日志**
   - 点击部署记录
   - 查看 "Logs" 标签页
   - 检查是否有错误信息

## 常见构建错误及解决方案

### 错误1: "npm install failed"
**原因**: 依赖安装失败
**解决方案**:
```bash
# 本地清理并重新安装
rm -rf node_modules package-lock.json
npm install
npm run build  # 确保本地能构建成功
git add .
git commit -m "Fix: Update dependencies"
git push origin main
```

### 错误2: "Build command failed"
**原因**: 构建脚本执行失败
**解决方案**:
1. 检查 `package.json` 中的 `build` 脚本
2. 本地运行 `npm run build` 确保成功
3. 查看 Zeabur 日志中的具体错误信息

### 错误3: "Module not found"
**原因**: 缺少依赖或路径错误
**解决方案**:
```bash
# 检查所有依赖是否在 package.json 中
npm install --save [missing-package]
git add package.json package-lock.json
git commit -m "Fix: Add missing dependency"
git push origin main
```

### 错误4: "Out of memory"
**原因**: 构建过程内存不足
**解决方案**:
1. 在 Zeabur 项目设置中增加内存限制
2. 或优化构建配置减少内存使用

## 验证部署成功

部署成功后，请验证以下功能：

- [ ] 网站可以正常访问
- [ ] 所有页面路由正常工作
- [ ] 3D 地图正确显示
- [ ] 表单可以提交
- [ ] 深色主题正常切换
- [ ] 移动端适配正常
- [ ] 图片和资源加载正常

## 查看部署日志

如果部署仍然失败，请：

1. 在 Zeabur 服务页面点击失败的部署
2. 查看完整的构建日志
3. 找到错误信息（通常在日志末尾）
4. 根据错误信息进行针对性修复

## 常用调试命令

```bash
# 本地测试构建
npm run build

# 本地预览构建结果
npm run preview

# 检查依赖
npm list

# 清理缓存
npm cache clean --force

# 重新安装依赖
rm -rf node_modules package-lock.json
npm install
```

## Zeabur 特定配置

### 推荐设置

1. **区域选择**: Hong Kong 或 Singapore（中国大陆访问更快）
2. **自动部署**: 启用（推送到 main 分支自动部署）
3. **环境变量**: 如有需要，在 Variables 中添加

### 性能优化

1. **启用 CDN**: 在设置中启用 CDN 加速
2. **配置缓存**: 设置适当的缓存策略
3. **压缩资源**: Vite 已自动处理

## 获取帮助

如果问题仍未解决：

1. **Zeabur 文档**: https://zeabur.com/docs
2. **Zeabur Discord**: https://discord.gg/zeabur
3. **GitHub Issues**: 在仓库中创建 issue
4. **查看日志**: 复制完整的构建日志以便诊断

## 备选部署方案

如果 Zeabur 持续出现问题，可以考虑：

1. **Vercel**: https://vercel.com（推荐）
2. **Netlify**: https://netlify.com
3. **Cloudflare Pages**: https://pages.cloudflare.com
4. **GitHub Pages**: 免费但功能有限

## 最新更新

- **2025-11-22**: 优化 Zeabur 配置，添加 Node 版本规范
- **2025-11-21**: 初始部署配置

---

**提示**: 保持 GitHub 仓库和 Zeabur 同步，每次推送都会触发自动部署。
