
window.onload=function()
{
	var oBox=document.getElementById('box');
	var oLi=oBox.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var bg=[
	'images/01.jpg',
	'images/02.jpg',
	'images/03.jpg',
	'images/04.jpg',
	'images/05.jpg'
	];
	for (var i=0; i<oLi.length; i++)
	{
		oLi[i].style.background='url('+bg[i]+')';
		oLi[i].onmouseover=function()
		{
			for (var i=0; i<oLi.length; i++)
			{
				oLi[i].className='';
			}
			this.className='active';
		}
	}
	info();
}