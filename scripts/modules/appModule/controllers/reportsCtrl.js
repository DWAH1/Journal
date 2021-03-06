app.controller('reportsCtrl', ['$scope', '$location', '$userProvider', 'authorizationFactory', 'reportsFactory',
    function($scope, $location, $userProvider, authorizationFactory, reportsFactory) {

        $scope.reports = reportsFactory;

        $scope.logOutClick = function () {
            authorizationFactory.logOut();
            $scope.goTo('/login');
        };

}]);

app.factory('reportsFactory', function () {

    let typeReportEnum = {
        TrainingLoad: 0,
        AccountingStudentWork: 1,
        Other: 2
    };

    return [
        {
            id: "studyLoad",
            imageUrl: "res/img/sl.png",
            type: typeReportEnum.TrainingLoad,
            name: "Учебная нагрузка"
        },
        {
            id: "controlProgress",
            imageUrl: "res/img/cp.png",
            type: typeReportEnum.AccountingStudentWork,
            name: "Учет работы студентов"
        },
        {
            id: "report3",
            imageUrl: "res/img/cp.png",
            type: typeReportEnum.Other,
            name: "Другой отчет"
        }
    ]
});