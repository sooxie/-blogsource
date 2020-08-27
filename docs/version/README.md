# 版本控制


##### 查看关联的远程仓库
```sh
git remote show origin
```

##### 移除关联的远程仓库
```sh
git remote rm origin
```

##### 本地仓库关联远程仓库

```sh
git remote add origin https://xxxxx.git
```


##### 第一次push到远程仓库
```sh
git push -u origin master
```

##### push到指定分支
```sh
git push -u origin dev
```


##### 添加单个文件
```sh
git add 文件名
```
##### 添加文件夹和文件夹下的文件
```sh
git add 文件夹名
```
##### 添加所有文件
```sh
git add .
```

##### git忽略已经被提交的文件
```sh
git rm --cached 文件
```




### 分支

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

