# 多阶段构建 - 第一阶段：构建应用
FROM node:16-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖（使用 legacy-peer-deps 解决版本冲突）
RUN npm install --legacy-peer-deps

# 复制项目文件
COPY . .

# 构建应用
RUN npm run build

# 多阶段构建 - 第二阶段：生产环境
FROM nginx:alpine

# 从构建阶段复制构建结果
COPY --from=builder /app/build /usr/share/nginx/html

# 复制 nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]

