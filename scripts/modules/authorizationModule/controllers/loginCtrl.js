authorizationModule.controller('loginCtrl', ['$scope', 'authorizationFactory', '$location',
    function($scope, authorizationFactory, $location) {

        let loginJBox = new jBox('Modal', {
            width: 400,
            animation: 'pulse',
            content: $('#loginPopup')
        });

        $scope.loginClick = function() {

            console.log("ff", $scope.form_authorization);
            if (!$scope.form_authorization.$valid)
                return;

            if (authorizationFactory.login($scope.login, $scope.pass)) {
                loginJBox.close();
                $location.path('/reports');
            } else {
                alert('Access denied!');
            }
        };

        $scope.openLoginPopup = function () {
            loginJBox.open();
        };

        $scope.openAboutPopup = function () {

            let aboutJBox = new jBox('Modal', {
                width: 400,
                animation: 'pulse',
                content: $('#aboutPopup')
            });

            aboutJBox.open();
        };

}]);