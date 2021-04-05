# 回退


第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；
第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。

## 回退到上一个版本
```sh
git reset --hard HEAD^
```
## 回退到指定版本
```sh
git reset --hard b9518799
```
## 工作区回退
丢弃工作区的修改
```sh
git checkout -- <file>
git restore <file>
```

## 暂存区回退
撤销暂存区修改，重新放回工作区
```sh
git checkout -- <file>
git restore --staged <file>
```

