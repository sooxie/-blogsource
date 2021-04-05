# 分支

##### 创建分支
```sh
$ git branch dev
```
##### 创建分支并切换到分支
```sh
$ git checkout -b dev
```

##### 删除分支
```sh
$ git branch -d dev
```

##### 切换分支
```sh
$ git checkout dev
$ git switch dev

```

##### 合并分支
```sh
$ git merge dev
```



##### 查看远程分支
```sh
git branch -r
```

##### 本地分支推送到远程
```sh
git push --set-upstream origin 分支名
```

##### 拉取远程分支
```sh
git clone -b 分支名 仓库地址
```

##### 合并某次提交
```sh
git cherry-pick 6cae45a
```