//not for apache servers (\n should be replaced by \r\n\r?)
void net.connect(80, '77.234.202.142').on('data', x => console.log(String(x))).write('POST /g/post.php HTTP/1.1\nHost:node-server.online\nContent-Type:application/x-www-form-urlencoded\nContent-Length:9\n\nname=Kirill');
