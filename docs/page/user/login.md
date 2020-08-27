

### 登录接口
[[toc]]

---
### URL
::: tip  请求URL  
api/login/logon
:::
---

### 请求方式
::: tip  请求方式
*POST*
:::



---
### 参数说明


| 请求参数	        |     数据类型      |  是否必传  | 说明  |
| :-------------: |:-------------:| -------------:| :-------------:|
| loginName     | string | yes | 用户名 |
| loginPwd     | string | yes | 密码 |


---


### 返回值  有效值
| 返回值	        |     数据类型      |  说明  |
| ------------- |:-------------:| -----:|
| allowLogin     | string | 1-允许登录 |
| userId     | string | 用户id |
| isSelf     | string | - |
| userType     | string | 用户类型 |

---



<!-- ### 返回结果   主要作用获取userid 
``` json
{
    "code": "",
    "msg": "",
    "data": {
        "allowLogin": "1表示允许登录",
        "isSelf": "",
        "userId": "76D2579A6DA83A37E05400144FFD1715",
        "userType" : "0  员工本身,1 亲友"   
    }
}
``` -->




