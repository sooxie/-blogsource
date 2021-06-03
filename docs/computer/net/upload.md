



#### form-data 上传png

回车换行  CRLF

POST /uploadFile1 HTTP/1.1
Host: localhost:8080
Content-Type: multipart/form-data; boundary=Boundary+000B5852A60BF122
Accept: */*
User-Agent: AwesomeIOS/1.0 (iPhone; iOS 14.4; Scale/3.00)
Accept-Language: en;q=1
Content-Length: 6329
Accept-Encoding: gzip, deflate
Connection: keep-alive

--Boundary+000B5852A60BF122
Content-Disposition: form-data; name="id"

30011001
--Boundary+000B5852A60BF122
Content-Disposition: form-data; name="name"

123123
--Boundary+000B5852A60BF122
Content-Disposition: form-data; name="file1"; filename="shen.png"
Content-Type: image/png

89 50 4e 47 0d 0a 1a 0a  ... png二进制
...
--Boundary+000B5852A60BF122
Content-Disposition: form-data; name="files"; filename="jia.png"
Content-Type: image/jegp+

89 50 4e 47 0d 0a 1a 0a  ... png二进制
--Boundary+000B5852A60BF122







