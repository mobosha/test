var myApp = angular.module("myApp", ["ui.router"]);
 
myApp.config(function ($stateProvider, $urlRouterProvider) {
 
     $urlRouterProvider.when("", "/Page1");
 
     $stateProvider
        /*.state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })*/
        .state("Page1", {
            url:"/Page1",
            templateUrl: "Page1.html"
        })
        .state("Page2", {
            url:"/Page2",
            templateUrl: "Page2.html"
        })
        .state("Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        });
});