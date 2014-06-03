/*
常用代码
*/
//判断变量是否存在
if(typeof($obj)=="undefined")
//释放变量
delete $obj
//插入层
var div = document.createElement("div")
div.innerHTML="插入"
document.body.appendChild(div)
//输出
document.write("")
//获取表单对象的值
document.form.name.value
//字符长度
obj.length
//编码转换
escape()
//DOM
document.getElementById().innerHTML
document.getElementsByName()[0]
document.getElementsByTagName()
//关闭当前页面
window.opener=null;
window.close();
//后退
history.go(-1)
//替换
content.replace(/\n/gi,"<br>")
//回车事件
onkeydown="if(event.keyCode==13)"
//询问事件
onclick="{if(confirm('询问？')){window.location.replace('url');return true;}return false;}"
//页面加载时间
var t=new Date().getTime()
var t=(new Date().getTime()-t)/1000
//图片预加载
var img=new Image()
img.src=""
//定时执行与取消归递
setTimeout()
setInterval()
//hash
window.location.hash
//置底
window.scrollTo(0,document.body.scrollHeight)
//当前时间
<div id="times"> 
<script>setInterval("times.innerHTML=new Date().toLocaleTimeString();",1000);</script> 
</div>
//刷新
window.location.reload()
//刷新父页面
opener.location.href=opener.location.href
//跳转页面
window.location.href='url'
//跳转父页面
window.parent.location.href='url'
//去除某个字符之前或者之后的字符
var a="123456789+abc"
alert(a.substring(0, a.indexOf('+')))
alert(a.substring(a.indexOf('+') + 1, a.length))