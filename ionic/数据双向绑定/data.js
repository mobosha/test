var app = angular.module('myApp', ['ionic']);
var s;
var a;
//alert(a);
app.controller('searchscanCtrl',function($scope,$timeout,$interval){
	$scope.datas = [{name:"测试ddd",sex:"1"},{name:"顶顶顶",sex:"2"},{name:"3",sex:"3"},{name:"顶顶顶",sex:"4"}];
	//var s = $scope.datas;
	
    /*$scope.ss = function(){
    	alert("ss");
    }*/
    
    
   /* var timer = $interval(
        function() {
        	
			$scope.datas = a;
			//alert(JSON.stringify(s));
			
		
		console.log(JSON.stringify($scope.datas));
        	
			
			
        },1000);*/
       
       
       var time = $interval(
 		function(){
 		  if(a != undefined){
 		  	$scope.datas = a;
 		  	console.log(JSON.stringify($scope.datas));
 		  }
 		}
 		,1000);
       
        
});

function cz1(v){
	a = v;
}




function ss(){
	datas = [{name:"werw",sex:"1"},{name:"fsfs",sex:"gb"},{name:"kiuyjhg",sex:"bgg"},{name:"fsfs",sex:"hh"}];
	cz1(datas);
	//alert(JSON.stringify(s));
	
}


/*window.setTimeout(ss,1000);*/







