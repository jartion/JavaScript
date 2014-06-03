/*
ie_version
*/
function ie_version(){
var isIE=!!window.ActiveXObject
var isIE6=isIE&&!window.XMLHttpRequest
var isIE8=isIE&&!!document.documentMode
var isIE7=isIE&&!isIE6&&!isIE8
if(document.documentMode>="9")return document.documentMode
else if (isIE){
if (isIE6) return 6
else if (isIE8) return 8
else if (isIE7) return 7
}
}