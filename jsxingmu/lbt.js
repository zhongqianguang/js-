var box3a=document.querySelector(".box3-a")
var li=document.querySelectorAll('.box3-a>li')
var but=document.querySelectorAll("#box3>div>p")
var img1=li[0].cloneNode(true)
box3a.appendChild(img1)
var img=document.querySelectorAll('.box3-a>li>a>img')
for(var i=0;i<img.length;i++){
	img[i].style.float="left";
}
box3a.style.width=img[0].offsetWidth*img.length+"px"
	
function toimg(){
	move(box3a,{"left":-s*img[0].offsetWidth})
	for(var i=0;i<but.length;i++){
		but[i].className=""
	}
	but[s==img.length-1?0:s].className="but"
}

var s=0;
var qq=null;


function autoplay(){
	clearInterval(qq)
	qq=setInterval(function(){	
	if(s==img.length-1){
		s=1
		box3a.style.left=0	
	}else{
			s++
	}

	toimg()
	},3000)
}
autoplay()


box3a.onmouseover = function(){
	clearInterval(qq)
}
box3a.onmouseout = function(){
	autoplay()
}
for(var i=0;i<but.length;i++){
	but[i].index=i;
	but[i].onmouseover = function(){
		for(var j=0;j<but.length;j++){
			but[j].className=""
		}
		this.className="but"
		s=this.index
		move(box3a,{"left":-s*img[0].offsetWidth})
	}
}

function getstyle(obj,arr){
	if(obj.currentStyle){
		return obj.currentStyle[arr]
	}else{
		return getComputedStyle(obj,false)[arr]
	}
}

function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var m=true;
		for(var arr in json){
			var a=0;
			if(arr=="opacity"){
				a=getstyle(obj,arr)*100;
			}else{
				a=parseInt(getstyle(obj,arr))
			}
			var speed=(json[arr]-a)/8;

			speed=speed>0?Math.ceil(speed):Math.floor(speed)
			if(json[i]!=a){
				m=false
			}
			if(arr=="opacity"){
				obj.style.opacity=(speed+a)/100
				obj.style.filter='alpha(opacity:'+(speed+a)+')'
			}else{
				obj.style[arr]=speed+a+'px'
			}
		}
		if(m){
			clearInterval(obj.timer)
			if(fn){
				fn()
			}
		}
	},50)
}