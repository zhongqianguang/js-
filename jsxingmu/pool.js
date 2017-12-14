//冒泡排序
function bubblingSort(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp
			}
		}
	}
	return arr;
}

//选择排序
function selectSort(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp = arr[i];
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
	}
	return arr;
}
//获取最大值
function getMax(arr){
	var max = arr[0];
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max = arr[i]
		}
	}
	return max;
}
//获取最小值
function getMin(arr){
	var min = arr[0];
	for(var i=0;i<arr.length;i++){
		if(min>arr[i]){
			min = arr[i]
		}
	}
	return min;
}
//判断某个值是否在数组中
function has(arr,n){
	for(var i in arr){
		if(arr[i]==n){
			return true;
		}
	}
	return false;
}

//数组去重
function norepeat(arr){
	var newArr = [];
	for(var i in arr){
		if(!has(newArr,arr[i])){
			newArr.push(arr[i])
		}
	}
	return newArr;
}
//随机数
function randomNum(n,m){
	return parseInt(n+Math.random()*(m-n+1))
}

//随机颜色 rgb
function randomColor(){
 	var R = parseInt(Math.random()*(255+1));
 	var G = parseInt(Math.random()*(255+1));
 	var B = parseInt(Math.random()*(255+1));
 	return 'rgb('+R+','+G+','+B+')';
 }

 //随机颜色2 16进制
 function random1Color(){
 	var R = parseInt(Math.random()*(255+1));
 	var G = parseInt(Math.random()*(255+1));
 	var B = parseInt(Math.random()*(255+1));
 	return '#'+String2num(R,G,B)
 }
function String2num(r,g,b){
	r = r.toString(16).length<2?'0'+r.toString(16):r.toString(16);
	g = g.toString(16).length<2?'0'+g.toString(16):g.toString(16);
	b = b.toString(16).length<2?'0'+b.toString(16):b.toString(16);

	return r+g+b;
}

//将时间对象转换为字符串
function StringTime(sign){
	var d = new Date();

	if(!sign){
		sign = '/'
	}

	return d.getFullYear()+sign+String3num((d.getMonth()+1))+sign+String3num(d.getDate())+' '+String3num(d.getHours())+':'+String3num(d.getMinutes())+':'+String3num(d.getSeconds());
}
//不足2位补0
function String3num(num){
	if(num<10){
		num = '0'+num
	}
	return num;
}

//验证码
function auth1Code(){
	var str = '';
	for(var i=0;i<4;i++){
		var num = parseInt(48+Math.random()*(122-47));

		if(num>=58&&num<=64||num>=91&&num<=96){
			i--;
		}else{
			str+=String.fromCharCode(num)
		}
	}
	return str;
}


function authCode(){
	var str = '';
	for(var i=0;i<4;i++){
		var num = parseInt(48+Math.random()*(122-47));

		while(num>=58&&num<=64||num>=91&&num<=96){
			num = parseInt(48+Math.random()*(122-47))
		}
		str+=String.fromCharCode(num)
		
	}
	return str;
}
//获取非行间样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,false)[attr]
	}
}
//隐藏
function hide(obj){
	obj.style.display = 'none';
}
//显示
function show(obj){
	obj.style.display = 'block';
}
//设置获取自定义属性
function attr(obj,attr,val){
	if(arguments.length==2){
		return obj.getAttribute(attr)
	}
	if(arguments.length==3){
		return obj.setAttribute(attr,val)
	}
	if(arguments.length==1||arguments.length>3)return;
}
//获取当前元素距离页面的偏移量
function offset(ele){
	var obj = {};
	obj.l = ele.offsetLeft;
	obj.t = ele.offsetTop;
	while(ele.offsetParent){
		obj.l+=ele.offsetParent.offsetLeft;
		obj.t+=ele.offsetParent.offsetTop;
		ele = ele.offsetParent;
	}
	return obj;
}
//阻止默认事件
function prevent(e){
	return e.preventDefault?e.preventDefault():e.returnValue = false;
}
//删除cookie
function removeCookie(_name,_val){
	setCookie(_name,_val,-1)
}
//获取cookie
function getCookie(_name){
	var cookie = document.cookie;
	var arr = cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split('=');
		if(newArr[0]==_name){
			return newArr[1]
		}
	}
}
//设置cookie
function setCookie(_name,_val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);
	document.cookie = _name+'='+_val+';path=/;expires='+d;
}
//陈氏cookie删除法
function removeCookie(_name){
	setCookie(_name,getCookie(_name),-1)
}