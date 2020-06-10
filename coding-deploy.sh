#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
echo 'yanhaixiang.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@e.coding.net:hai_guai/hai_guai.coding.me.git master

cd -
