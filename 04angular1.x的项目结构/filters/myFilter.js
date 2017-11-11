angular.module('myFilterModule',['myServiceModule'])
.filter('myFilter',["myService",function(myService){
	
	return function(params){
		
		return "《" + params + "》"
	}
}])