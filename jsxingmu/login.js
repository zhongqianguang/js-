var input=document.querySelectorAll(".box4-c>.box4-c1>input")
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