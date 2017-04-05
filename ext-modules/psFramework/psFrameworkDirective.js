"user strict";

angular.module("psFramework").directive("psFramework", function(){
    return {
        tranculde: true,
        scope: {

        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    }

});