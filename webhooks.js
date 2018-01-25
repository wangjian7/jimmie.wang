/**
 * Created by jianwang on 17/5/14.
 */
// test url - http://localhost:4002/webhooks/hexo/jimmie.wang
var http = require('http')
var exec = require('child_process').exec

http.createServer(function (req, res) {
    // 该路径与WebHooks中的路径部分需要完全匹配，实现简易的授权认证。
    if(req.url === '/webhooks/hexo/jimmie.wang'){
        // 如果url匹配，表示认证通过，则执行 sh ./deploy.sh
        exec('sh ./deploy.sh')
    }
    res.end()
}).listen(4002)
