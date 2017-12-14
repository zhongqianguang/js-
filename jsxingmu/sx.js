ajax("get","strd.json","",function(obj){
	var box6=document.getElementById("box6")
	var str=""
	for(var i=0;i<obj.length;i++){
		str+='<div data-id='+obj[i].id+'><a href="##"><img src='+obj[i].img+' alt=""></a><p>'+obj[i].name+'</p><span>￥'+obj[i].money+'</span><span>/'+obj[i].num+'</span><i><a href="##"></a></i></div>'
	}
	box6.innerHTML=str
	var n=1;
	var obj1={};
	var init="init";
		box6.onclick = function(e){
			var e=e||event;
			var target=e.target||e.srcElement;
			if(target.tagName=="IMG"){
				var num=target.parentNode.parentNode.getAttribute("data-id")
				location.href="delate.html?"+num+"?"+obj[0].img
			}
				if(target.tagName=="A"){
				ts.style.display="block"
				var klil=target.parentNode.parentNode.getAttribute("data-id")
				var slec=target.parentNode.parentNode.firstElementChild.firstElementChild.src
				var slect=slec.split("/")[slec.split("/").length-1].split(".")[0][0]
				if(!obj1[slect]){
					obj1[slect]=n;
					setCookie(klil+"g",JSON.stringify(obj1),7)
				}else{
					var n2 = obj1[slect];
					n2++;
					obj1[slect] = n2;
					setCookie(klil+"g",JSON.stringify(obj1),7)
				}
			}
	}
	var div=document.querySelectorAll("#box6>div")
	for(var i=0;i<div.length;i++){
		div[i].onmouseover = function(){
			
			for(var i=0;i<div.length;i++){
				div[i].style.boxShadow=""
			}
			this.style.boxShadow="0 0 10px 5px #ccc";
			this.style.transition="0.5s"
			this.onmouseout = function(){
							this.style.boxShadow=""
									}
								}
		}
})
var ts=document.getElementById("ts")
var msn=ts.firstElementChild.lastElementChild.previousElementSibling
var mss=ts.firstElementChild.firstElementChild.firstElementChild
mss.onclick = function(){
			ts.style.display="none"
		}

window.onscroll = function(){
	var scrolltop=document.body.scrollTop||document.documentElement.scrollTop
	ts.style.top=scrolltop+"px"
}
msn.onclick = function(){
	ts.style.display="none"
}
function setCookie(_name,_val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);
	document.cookie = _name+'='+_val+';path=/;expires='+d;
}
