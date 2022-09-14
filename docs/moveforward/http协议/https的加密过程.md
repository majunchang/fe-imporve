### 为什么说 https 加密是安全的

**ssl/tsl 通信过程**

![http://www.ruanyifeng.com/blogimg/asset/201402/bg2014020502.png](http://www.ruanyifeng.com/blogimg/asset/201402/bg2014020502.png)



**第一步 客户端向服务端发出加密通信的请求  提供**

- 加密协议版本
- 随机数
- 加密方法
- 支持的压缩方法

**第二步  服务端接受到请求  发出响应  响应包含以下内容**

- 确认的加密协议版本
- 确认的加密方法
- 随机数
- 服务端证书
  - 机构
  - 公钥
  - 过期时间

第三步 客户端收到响应  发出请求 请求中包含

- 新的随机数（由服务端公钥加密得出，也就是第三个随机数）
- 编码改变通知
- 三个随机数 生成本次会话的对话秘钥  
- 对话秘钥用于加密传输内容  



参考文献：
http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html
http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html