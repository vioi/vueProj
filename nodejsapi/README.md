#vuecms3_nodejsapi
dtcmsdb4.sql ：是 mysql数据库的脚本
请在机器上安装好mysql数据库后，创建一个名字为“dtcmsdb4”的数据库后执行dtcmsdb4.sql即可创建数据库

#后台启动步骤
```
 npm install

 node app.js 启动express服务器 ，启动之前请先安装mysql数据服务和利用dtcmsdb4.sql 建立一个dtcmsdb4的数据库

  启动以后即可请求：http://127.0.0.1:8899/api/getlunbo 测试获取数据

其他api请参看《项目和api接口说明文档.docx》文档

 

```