//使用angular的依赖注入设置模块之间的相互依赖
angular.module('app',['ui.router','ngAnimate','formApp','profileApp','interestApp','paymentApp'])

//config配置路由
.config(['$stateProvider','$locationProvider','$urlRouterProvider',function($stateProvider,$locationProvider,$urlRouterProvider){
	
	$locationProvider.hashPrefix('')
	
	$stateProvider
	.state("form",{
		url:'/form',
		templateUrl:"tepls/form.html",
		controller:"formCtrl"
		
	})
	.state('form.profile',{
		url:'/profile',
		templateUrl:"tepls/form-profile.html",
		controller:"profileCtrl"
		
	})
	.state('form.interest',{
		url:'/interest',
		templateUrl:"tepls/form-interests.html",
		controller:"interestCtrl"
		
	})
	.state('form.payment',{
		url:'/payment',
		templateUrl:"tepls/form-payment.html",
		controller:"paymentCtrl"
		
	})
	
	$urlRouterProvider.otherwise('/form/profile')
}])

//run一般用来配置一些监听的操作，比如路由跳转的事件监听
.run(['$rootScope',function($rootScope){
	
	$rootScope.$on('$stateChangeStart',function(){
		
		alert('路由将要变化了')
	})
	$rootScope.$on('$stateChangeSuccess',function(){
		
		alert('路由切换完成')
	})
}])
.controller('ctrl',['$scope',function($scope){
	
}])
