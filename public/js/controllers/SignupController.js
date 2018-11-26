app.controller("SignupController", [
  "$scope",
  "SignupFactory",
  ($scope, SignupFactory) => {
    $scope.userDetails = {};
    $scope.createAccount = () => {
      let promise = SignupFactory.createAccount($scope.userDetails);
      promise.then(
        data => {
          $scope.userDetails = {};
          $scope.info = data.data;
        },
        err => {
          $scope.info = "Unable to create an account";
        }
      );
    };
  }
]);
