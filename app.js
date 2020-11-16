(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',['$scope', LunchCheckController]);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunch = "hi test";
    $scope.checkString = "";

    $scope.Check = function () {
        var lunchString = $scope.lunch;

        if (lunchString == "") {
            $scope.checkString = "Please enter data first"; 
        } else {
            var lunchCount = lunchString.split(",").length;
            if (lunchCount <= 3) {
                $scope.checkString = "Enjoy!"
            } else {
                $scope.checkString = "Too Much!"
            }
           
        
        }


        


        // $scope.checkString = lunchItems;
    };

}
    
})();