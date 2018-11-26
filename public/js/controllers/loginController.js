app.controller("loginController", [
  "$scope",
  "loginFactory",
  ($scope, loginFactory) => {
    $scope.userDetails = {};
    $scope.loginAccount = () => {
      loginFactory.loginAccount($scope.userDetails);
    };
  }
]);
