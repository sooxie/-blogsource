# b

============  金辉start ==============
接口 我的考勤
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/getSysDate  服务端时间
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/selfAttendanceTypeNew 获取考勤信息*
* 

请假
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/startProcess /*发起流程请求*/
* 
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/queryAnnualRemainDaysByPersonId  剩余年假天数
* 
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/getVacnLeaves 获取请假类型
* 

我的信息
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/queryPersonInformation 获取用户信息
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/uploadFile 头像上传
*  
* 


* 

我的工资
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appSelf/verifyCode  薪资口令接口
* 
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appSelf/queryWageByMonthApp   薪资接口
* 

我的待办
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/taskDatas  获取我的待办列表
* 
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/toHandlePage 进入待办前调用的接口
*  
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/hisTaskList  获取历史审批数据

* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/actdata 获取待办业务数据
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/handleTask 审批接口



* 
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/selectAppPersonInfo  获取个人信息接口
* 


* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/downloadFile3
我的消息

* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/queryMessageList
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/messageRead 

密码修改
* Request URL: http://hr.radiance.com.cn:8080/insight/api/appInterface/update
============  金辉end==============

============ 东莞start==============
我的证照
证照领用http://182.150.56.14:8099/eHR/api/appLicense/getLicenseApply
证照归还http://182.150.56.14:8099/eHR/api/appLicense/returnLicenseApply
证照领用详情 http://182.150.56.14:8099/eHR/api/appLicense/queryApplyLicenseNotReceive
证照归还详情http://182.150.56.14:8099/eHR/api/appLicense/queryApplyLicenseNotReturn
证照遗失http://182.150.56.14:8099/eHR/api/appLicense/lossLicence
证照停用 http://182.150.56.14:8099/eHR/api/appLicense/stopUsingLicence
出国境申请记录 http://182.150.56.14:8099/eHR/api/appLicense/createApply
查询该人员所有证照出行记录 http://182.150.56.14:8099/eHR/api/appLicense/queryApplyLicenseAppByPersonListPage?perId=76D2579A6F153A37E05400144FFD1715
查询自己的所有证照 http://182.150.56.14:8099/eHR/api/appLicense/queryPerLicense?perId=76D2579A6F153A37E05400144FFD1715
查询该证件详情 http://182.150.56.14:8099/eHR/api/appLicense/queryLicenseInfoAndMoveData?id=dbe28937a5eb4ae08d1c8a4a86a54b08
查询该证照所有的出行记录 http://182.150.56.14:8099/eHR/api/appLicense/queryApplyLicenseAppByLicenseListPage?licenseId=a26f23cb430c4dd78075e2bda952db9c
查看审批申请详细信息  http://182.150.56.14:8099/eHR/api/appLicense/getApplyLicenseInfoInAudit?licenseId=a061462bd1a64f48bf3faa62366fac5b&applyId,
============ 东莞end==============

///
