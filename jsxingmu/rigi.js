var input=document.querySelectorAll("#box4-c>div>input")
var span=document.querySelector("#box4-c>.box4-c3>span")
span.innerHTML=sj()
input[0].onfocus = function(){
input[0].value=""
input[0].style.color=""
input[0].style.border=""
}
input[0].onblur = function(){
	var str=input[0].value;
	if(str){
		if (/\d{11,11}/.test(str)) {
			input[0].value=str
		}else{
			input[0].value="您输入的号码有误"
			input[0].style.color="red"
		}
	}else{
		input[0].value="请输入手机号码"
		input[0].style.color="red"
	}
}
input[1].onfocus = function(){
input[1].value=""
input[1].style.color=""
input[1].style.border=""
}
input[1].onblur = function(){
	var str=input[1].value;
	if(str){
		if (/\w{6,20}/.test(str)) {
			input[1].value=str
		}else{
			input[1].value="您输入的密码有误"
			input[1].style.color="red"
		}
	}else{
		input[1].value="请输入密码"
		input[1].style.color="red"
	}
}
input[2].onfocus = function(){
input[2].value=""
input[2].style.color=""
input[2].style.border=""
}
input[2].onblur = function(){
	var str1=input[1].value
	var str=input[2].value;
	if(str1){
	if(str){
		if (str==str1) {
			input[2].value=str
		}else{
			input[2].value="您重新确认密码"
			input[2].style.color="red"
		}
	}else{
		input[2].value="请再次输入密码"
		input[2].style.color="red"
	}
	}else{
		input[2].value="请输入密码"
		input[2].style.color="red"
	}

}
input[3].onfocus = function(){
input[3].value=""
input[3].style.color=""
input[3].style.border=""
}
input[3].onblur = function(){
	var str=input[3].value
	if(str){
		if(span.innerHTML==str){
			input[3].value=str
		}else{
			span.innerHTML=sj()
			input[3].value="请重新输入验证码"
			input[3].style.color="red"
		}
	}else{
		input[3].value="请输入验证码"
		input[3].style.color="red"
	}	
}
var sux=input[3].previousSibling.previousSibling
sux.onclick = function(){
	span.innerHTML=sj()
}
input[4].onfocus = function(){
var str1=input[0].value
input[4].style.border=""
	if(str1){
		input[4].value=""
		input[4].style.color=""
	}else{
		input[4].value="请先输入手机号码"
		input[4].style.color="red"
	}
}
input[4].onblur = function(){
	var str=input[4].value

		if(str){
		
		}else{
			input[4].value="请输入手机验证码"
			input[4].style.color="red"
		}
		
}
var A=document.querySelectorAll("#box4-c>.box4-c2>a")
A[0].onclick = function(){
	for(var i=0;i<input.length;i++){
		if((input[i].value=="")||(input[i].style.color=="red")){
			input[i].style.border="1px solid red"
		}
	}
}





function sj(){
	var str=""
	for(var i=0;i<4;i++){
		var a=parseInt(48+Math.random()*(122-47))
		if(a>=58&&a<=64||a>=91&&a<=96){
			i--;
		}else{
			str+=String.fromCharCode(a)
		}
	}
	return str
}