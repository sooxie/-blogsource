# 代码签名探析
https://objccn.io/issue-17-2/



Mach-O 文件都可以签名


#### 快捷查看系统中能用来对代码进行签名的证书

```sh
security find-identity -v -p codesigning
```


#### 查看指定app的签名信息
```
$ codesign -vv -d *.app
```


#### 对未签名app手动签名

```sh
$ codesign -s 'iPhone Developer:  (ABC)' *.app


```


#### 对已签名app重新签名
```sh
$ codesign -fs 'iPhone Developer:  (ABC)' *.app

```


#### 验证签名文件的完整性

```sh
$ codesign --verify Example.app
```