app.controller('settingsCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.createGroup = function (groupNumber, groupFaculty) {

        if (!$scope.groupCreate.$valid)
            return;

        let req = {
            method: 'POST',
            url: 'https://teacher-journal2.herokuapp.com/groups.json',
            headers: {
                'Content-Type': 'application/json'
            },
            params: { group: {number: groupNumber, faculty: groupFaculty} }
        };

        $http(req).then(function(res) {console.log(res);}, function(res){console.log(res);});

    };

    $scope.createSubject = function (subjectName) {

        if (!$scope.subjectCreate.$valid)
            return;

        let req = {
            method: 'POST',
            url: 'https://teacher-journal2.herokuapp.com/subjects.json',
            headers: {
                'Content-Type': 'application/json, text/plain, */*'
            },
            params: { subject: {name: subjectName} }
        };

        $http(req).then(function(res) {console.log(res);}, function(res){console.log(res);});

        // let url = 'https://teacher-journal2.herokuapp.com/subjects.json';
        // let req = {subject: {name: subjectName}};
        // $http.post(url, req).then(function(res) {console.log(res);}, function(res){console.log(res);});

    };

}]);

class Group {

}