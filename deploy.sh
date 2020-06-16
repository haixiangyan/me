#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd dist

git init

# 部署到自定义域域名
echo 'yanhaixiang.com' > CNAME

git add -A
git commit -m 'deploy'

# 部署到 Github
git push -f git@github.com:Haixiang6123/Haixiang6123.github.io.git master

# 部署到自定义域域名
echo 'yanhaixiang.cn' > CNAME

git add -A
git commit -m 'deploy'

# 部署到 Coding
git push -f git@e.coding.net:hai_guai/hai_guai.coding.me.git master

cd -
