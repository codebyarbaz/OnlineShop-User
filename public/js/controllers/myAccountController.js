app.controller("myAccountController", [
  "$scope",
  "myAccountFactory",
  ($scope, myAccountFactory) => {
    $scope.addNewAddress = (userID, address) => {
      if ($scope.address) {
        let promise = myAccountFactory.addNewAddress(userID, address);
        promise.then(
          data => {
            $scope.address = "";
            $scope.titleInfo = data.data;
          },
          err => {
            $scope.titleAlert = "Unable to add new address.";
          }
        );
      } else {
        $scope.titleAlert = "Please fill the address details.";
      }
    };
    $scope.EditAddressWrapper = "true";
    $scope.UpdateAddress = false;
    $scope.userAddress = true;
    $scope.EditAddress = userID => {
      $scope.UpdateAddress = true;
      $scope.userAddress = false;
      $scope.EditAddressWrapper = "false";
    };
    $scope.cancelUpdation = () => {
      $scope.UpdateAddress = false;
      $scope.userAddress = true;
    };
    $scope.userMobile = true;
    $scope.updateMobile = false;
    $scope.EditMobile = userID => {
      $scope.userMobile = false;
      $scope.updateMobile = true;
    };
    $scope.UpdateMobile = (userID, Mobile) => {
      if ($scope.newMobile) {
        let details = { userID, Mobile };
        let promise = myAccountFactory.UpdateMobile(details);
        promise.then(
          data => {
            $scope.mobileInfo = data.data;
            $scope.newMobile = "";
            $scope.updateMobile = false;
          },
          err => {
            $scope.titleAlert = "Unable to update mobile.";
          }
        );
      } else {
        $scope.mobileAlert = "Please any enter mobile.";
      }
    };
    $scope.cancelMobileUpdation = () => {
      $scope.userMobile = true;
      $scope.updateMobile = false;
    };
    $scope.UpdatePassword = (userID, oldPassword, newPassword) => {
      if ($scope.oldPassword && $scope.newPassword) {
        let details = { userID, oldPassword, newPassword };
        let promise = myAccountFactory.UpdatePassword(details);
        promise.then(
          data => {
            if (data.data == "Wrong Password") {
              $scope.passwordAlert = "You have enterd Wrong Password.";
              $scope.oldPassword = "";
              $scope.newPassword = "";
            } else {
              $scope.passwordInfo = data.data;
              $scope.oldPassword = "";
              $scope.newPassword = "";
            }
          },
          err => {
            $scope.passwordAlert = "Unable to update password.";
          }
        );
      } else {
        $scope.passwordAlert = "Please fill the both password fields.";
      }
    };
  }
]);
