/*
ajax
*/

function xmlHttp(){
var xmlHttp=null
try{xmlHttp=new XMLHttpRequest()}
catch(e){
try{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP")}
catch (e){xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")}
}
return xmlHttp
}

function post(){
var ajax=xmlHttp()
var url="ajax.asp"
var post="ajax="+a+"&b="+b+"&num="+Math.random()
//ajax.timeout=30000
//ajax.ontimeout=function(){}
ajax.onreadystatechange=function(){
if(ajax.readyState==4){
document.getElementById().innerHTML=ajax.responseText
}
}
ajax.open("POST", url, true)
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
ajax.send(post)
}

function get(){
var ajax=xmlHttp()
var url="ajax.asp?ajax="+a+"&b="+b+"&num="+Math.random()
//ajax.timeout=30000
//ajax.ontimeout=function(){}
ajax.onreadystatechange = function(){
if(ajax.readyState == 4){
document.getElementById().innerHTML=ajax.responseText
}
}
ajax.open("GET",url, true)
ajax.send()
}