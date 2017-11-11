angular.module('myServiceModule',[])
.service('myService',function(){
	
	this.test = function(){
		
		alert('这是自定义服务')
	}
})
//更多自定义服务
//.service()