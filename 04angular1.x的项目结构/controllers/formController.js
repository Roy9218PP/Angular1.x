angular.module('formApp',['myServiceModule'])
.controller('formCtrl',['$scope','myService',function($scope,myService){
	
	alert('formController')
	
	myService.test()
}])