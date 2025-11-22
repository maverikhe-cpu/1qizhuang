#!/bin/bash

# 一起装网站 - GitHub & Zeabur 部署脚本

echo "🚀 开始部署一起装网站到 Zeabur..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 步骤1: 检查Git状态
echo -e "${BLUE}📋 步骤 1/5: 检查 Git 状态...${NC}"
if [ -d ".git" ]; then
    echo -e "${GREEN}✓ Git 仓库已初始化${NC}"
else
    echo -e "${YELLOW}⚠ Git 仓库未初始化，正在初始化...${NC}"
    git init
    echo -e "${GREEN}✓ Git 仓库初始化完成${NC}"
fi
echo ""

# 步骤2: 提交代码
echo -e "${BLUE}📋 步骤 2/5: 提交代码到本地仓库...${NC}"
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo -e "${YELLOW}⚠ 没有新的更改需要提交${NC}"
echo -e "${GREEN}✓ 代码已提交${NC}"
echo ""

# 步骤3: 检查远程仓库
echo -e "${BLUE}📋 步骤 3/5: 检查远程仓库配置...${NC}"
if git remote | grep -q "origin"; then
    echo -e "${GREEN}✓ 远程仓库已配置${NC}"
    echo "   远程地址: $(git remote get-url origin)"
else
    echo -e "${YELLOW}⚠ 未配置远程仓库${NC}"
    echo ""
    echo "请按照以下步骤配置 GitHub 远程仓库："
    echo "1. 访问 https://github.com/new 创建新仓库"
    echo "2. 仓库名称: yiqizhuang-website"
    echo "3. 创建后，运行以下命令（替换 YOUR_USERNAME）："
    echo ""
    echo -e "${YELLOW}   git remote add origin https://github.com/YOUR_USERNAME/yiqizhuang-website.git${NC}"
    echo ""
    exit 1
fi
echo ""

# 步骤4: 推送到GitHub
echo -e "${BLUE}📋 步骤 4/5: 推送代码到 GitHub...${NC}"
git branch -M main
if git push -u origin main; then
    echo -e "${GREEN}✓ 代码已成功推送到 GitHub${NC}"
else
    echo -e "${YELLOW}⚠ 推送失败，请检查网络连接和 GitHub 权限${NC}"
    exit 1
fi
echo ""

# 步骤5: Zeabur部署说明
echo -e "${BLUE}📋 步骤 5/5: Zeabur 部署${NC}"
echo ""
echo "代码已推送到 GitHub！现在请按照以下步骤在 Zeabur 上部署："
echo ""
echo "1. 访问 https://zeabur.com 并使用 GitHub 登录"
echo "2. 点击 'New Project'"
echo "3. 选择区域（建议: Hong Kong 或 Singapore）"
echo "4. 点击 'Add Service' → 选择 'Git'"
echo "5. 选择您的仓库: yiqizhuang-website"
echo "6. Zeabur 会自动检测并部署"
echo "7. 等待构建完成（约 2-5 分钟）"
echo "8. 获取分配的域名或配置自定义域名"
echo ""
echo -e "${GREEN}✨ 部署准备完成！${NC}"
echo ""
echo "📚 详细文档: ZEABUR_DEPLOYMENT.md"
echo "🌐 GitHub: $(git remote get-url origin)"
echo ""
