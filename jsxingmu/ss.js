ajax("get","stra.json","",function(obj){
		var box6=document.getElementById("box6")
		var sq="";
		for(var i=0;i<obj.length;i++){
			sq+='<div data-id='+obj[i].id+'><a href="##"><img src='+obj[i].img+' alt=""></a><p>'+obj[i].name+'</p><span>￥'+obj[i].money+'</span><span>/'+obj[i].num+'</span><i><a href="##"></a></i></div>'
		}
		box6.innerHTML=sq
		var n=1;
		var obj1={}
		box6.onclick = function(e){
			var e=e||event;
			var target=e.target||e.srcElement;
			if(target.tagName=="IMG"){
				var num=target.parentNode.parentNode.getAttribute("data-id")
				location.href="delate.html?"+num+"?"+obj[0].img;
			}
			if(target.tagName=="A"){
				ts.style.display="block"
				var klil=target.parentNode.parentNode.getAttribute("data-id")
				var slec=target.parentNode.parentNode.firstElementChild.firstElementChild.src
				var slect=slec.split("/")[slec.split("/").length-1].split(".")[0][0]
				console.log(slect)
				if(!obj1[slect]){
					obj1[slect]=n;
					setCookie(klil+"d",JSON.stringify(obj1),7)
				}else{
					var n2 = obj1[slect];
					n2++;
					obj1[slect] = n2;
					setCookie(klil+"d",JSON.stringify(obj1),7)
				}
			}


		}


	var img2=document.querySelectorAll("#box6>div>a>img")
	for(var i=0;i<img2.length;i++){
	img2[i].onmouseover = function(){
		for(var j=0;j<img2.length;j++){
		img2[j].style.transform="scale(1)"
		}
		this.style.transform="scale(1.1)"
		this.style.transition='0.5s'
	}
}

})



ajax("get","strb.json","",function(obj){
		var box7=document.getElementById("box7")
		var sw="";
		for(var i=0;i<obj.length;i++){
			sw+='<div data-id='+obj[i].id+'><a href="##"><img src='+obj[i].img+' alt=""></a><p>'+obj[i].name+'</p><span>￥'+obj[i].money+'</span><span>/'+obj[i].num+'</span><i><a href="##"></a></i></div>'
		}
		box7.innerHTML=sw
		var n=1;
		var obj1={}
		box7.onclick = function(e){
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
					setCookie(klil+"e",JSON.stringify(obj1),7)
				}else{
					var n2 = obj1[slect];
					n2++;
					obj1[slect] = n2;
					setCookie(klil+"e",JSON.stringify(obj1),7)
				}
			}
		}

	var img3=document.querySelectorAll("#box7>div>a>img")
	for(var i=0;i<img3.length;i++){
	img3[i].onmouseover = function(){
		for(var j=0;j<img3.length;j++){
		img3[j].style.transform="scale(1)"
		}
		this.style.transform="scale(1.1)"
		this.style.transition='0.5s'
	}
}
})


ajax("get","strc.json","",function(obj){
		var box8=document.getElementById("box8")
		var sq="";
		for(var i=0;i<obj.length;i++){
			sq+='<div data-id='+obj[i].id+'><a href="##"><img src='+obj[i].img+' alt=""></a><p>'+obj[i].name+'</p><span>￥'+obj[i].money+'</span><span>/'+obj[i].num+'</span><i><a href="##"></a></i></div>'
		}
		box8.innerHTML=sq
		var n=1;
		var obj1={}
		box8.onclick = function(e){
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
					setCookie(klil+"f",JSON.stringify(obj1),7)
				}else{
					var n2 = obj1[slect];
					n2++;
					obj1[slect] = n2;
					setCookie(klil+"f",JSON.stringify(obj1),7)
				}
			}
		}

	var img4=document.querySelectorAll("#box8>div>a>img")
	for(var i=0;i<img4.length;i++){
	img4[i].onmouseover = function(){
		for(var j=0;j<img4.length;j++){
		img4[j].style.transform="scale(1)"
		}
		this.style.transform="scale(1.1)"
		this.style.transition='0.5s'
	}
}
})


ajax("get","strd.json","",function(obj){
		var box9=document.getElementById("box9")
		var sq="";
		for(var i=0;i<obj.length;i++){
			sq+='<div data-id='+obj[i].id+'><a href="##"><img src='+obj[i].img+' alt=""></a><p>'+obj[i].name+'</p><span>￥'+obj[i].money+'</span><span>/'+obj[i].num+'</span><i><a href="##"></a></i></div>'
		}
		box9.innerHTML=sq
		var n=1;
		var obj1={}
		box9.onclick = function(e){
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
	var img5=document.querySelectorAll("#box9>div>a>img")
	for(var i=0;i<img5.length;i++){
	img5[i].onmouseover = function(){
		for(var j=0;j<img5.length;j++){
		img5[j].style.transform="scale(1)"
		}
		this.style.transform="scale(1.1)"
		this.style.transition='0.5s'
		this.onmouseout = function(){this.style.transform="scale(1)"}
	}
}
})

//input搜索项目
var aa=document.querySelector(".box2-b>a")
var inp=document.querySelector(".box2-b>input")
aa.onclick = function(){
	var connt=document.getElementById("connt")
	var val=inp.value
	var num=[]
	ajax("get","ste.json","",function(obj){
		var str=[]
		var a=0
		for(var i=0;i<obj.length;i++){
			if((obj[i].name.indexOf(val)!=-1)||(obj[i].cli.indexOf(val)!=-1)||(obj[i].cd.indexOf(val)!=-1)||(obj[i].lei.indexOf(val)!=-1)){
				num.push(obj[i].id)
				location.href="sou.html?"+num
			
			}else{
				a++
				if(a==obj.length){
					location.href="sou.html?"
				}
			}
		}
	})

}
	function setCookie(_name,_val,expires){
		var d = new Date();
		d.setDate(d.getDate()+expires);
		document.cookie = _name+'='+_val+';path=/;expires='+d;
	}
		var ts=document.getElementById("ts")
		var msn=ts.firstElementChild.lastElementChild.previousElementSibling
		var mss=ts.firstElementChild.firstElementChild.firstElementChild
		window.onscroll = function(){
			var scrolltop=document.body.scrollTop||document.documentElement.scrollTop
			ts.style.top=scrolltop+"px"
		}
		msn.onclick = function(){
			ts.style.display="none"
		}
		mss.onclick = function(){
			ts.style.display="none"
		}




