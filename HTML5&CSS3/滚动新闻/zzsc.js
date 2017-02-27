// JavaScript Document
function b(){
	t = parseInt(x.style.top);
	//t = parseInt(x.css('top'));
	y.style.top = '19px';
	//y.css('top','19px');
	
	//x.animate({top: t - 19 + 'px'},'slow');	//19为每个li的高度
	startrun(x,"top","t - 19");
	
	if(Math.abs(t) == h-19){ //19为每个li的高度
		//y.animate({top:'0px'},'slow');
		startrun(y,"top","0");
		
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
}
/*$(document).ready(function(){
	
	
})*/

window.onload =function(){
	
	//$('.swap').html($('.news_li').html());
	x = document.getElementsByClassName('news_li')[0];
	
	//x = $('.news_li');
	y = document.getElementsByClassName('swap')[0];
	
	//y = $('.swap');
	h = document.getElementsByClassName('news_li')[0].getElementsByTagName('li').length * 19;
	//alert(document.getElementsByClassName('news_li')[0].childNodes.length)
	//h = $('.news_li li').length * 19; //19为每个li的高度
	document.getElementsByClassName('swap')[0].innerHTML = document.getElementsByClassName('news_li')[0].innerHTML;
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
}






function getstyle(obj,name){
  if(obj.currentStyle){
      return obj.currentStyle[name];
    }else{
      return getComputedStyle(obj,false)[name];
    }
}


function startrun(obj,attr,target,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
      var cur = 0;
        if(attr == "opacity"){
          cur = Math.round(parseFloat(getstyle(obj,attr))*100);
        }else{
          cur = parseInt(getstyle(obj,attr));
        }
      var speed = (target-cur)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        
        if(cur == target){
          clearInterval(obj.timer);
            if(fn){
              fn();
            }
        }else{
          if(attr == "opacity"){
                obj.style.filter = "alpha(opacity="+(cur+speed)+")";
              obj.style.opacity = (cur+speed)/100;
            }else{
            obj.style[attr] = cur + speed + "px";
            }
        }
        
    },30)
}















