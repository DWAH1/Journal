'use strict';

app.controller('reportStudyLoadCtrl', ['$scope', '$state', '$routeParams',
    '$stateParams', '$http', 'reportsFactory', '$userProvider',
    function ($scope, $state, $routeParams, $stateParams, $http, reportsFactory, $userProvider) {

    console.log($userProvider.getUserRole());
    // console.log($userProvider.getUserRole().indexOf(0) != -1 ? true : false);


    $scope.isReadOnly = $userProvider.getUserRole().indexOf(0) != -1 ? false : true;
    $scope.isLoading = true;

    // retrieve name of report
    let title = _.find(reportsFactory, {id: $state.current.name}).name;
    // create and init report
    (new StudyLoad(title)).init($http, $scope);

    $scope.printReport = function () {
        window.print();
    };

    $scope.changeSubject = function (id) {
        $scope.isLoading = true;
        $scope.report.changeSubject($http, $scope, id);
    };

    $scope.range = function(min, max, step) {
        step = step || 1;
        let input = [];
        for (let i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    $scope.downloadReport = function () {
        // alert("!");
        $scope.report.download("study-load");
    };

}]);


app.factory('reportStudyLoadFactory', function ($http) {

   //  // let report = {name: "dd", id: 21};
   //
   //  console.log("in factory", $http);
   //  // let report = ;
   // let report = new ControlProgress("1", "2", "33", $http);
   //
   //  return report;
});



