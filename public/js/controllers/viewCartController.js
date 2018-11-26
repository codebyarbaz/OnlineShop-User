app.controller("viewCartController", [
  "$scope",
  "viewCartFactory",
  ($scope, viewCartFactory) => {
    $scope.removeProduct = productID => {
      let details = { productID };
      let promise = viewCartFactory.removeProduct(details);
      promise.then(
        data => {
          window.location.reload();
        },
        err => {}
      );
    };
    $scope.continueShoping = () => {
      window.location.assign("/");
    };
    $scope.IncreaseQuantity = productID => {
      let details = { productID };
      let promise = viewCartFactory.IncreaseQuantity(details);
      promise.then(
        data => {
          if (data.data == "Increased") {
            window.location.assign("/viewCart");
          }
        },
        err => {}
      );
    };
    $scope.DecreaseQuantity = productID => {
      let details = { productID };
      let promise = viewCartFactory.DecreaseQuantity(details);
      promise.then(
        data => {
          if (data.data == "Decreased") {
            window.location.assign("/viewCart");
          }
        },
        err => {}
      );
    };
    $scope.fillAddress = false;
    $scope.placeOrder = () => {
      let orderDate = new Date().toDateString();
      let promise = viewCartFactory.placeOrder(orderDate);
      promise.then(
        data => {
          if (data.data == "DoLogin") {
            window.location.assign("/account/login");
          }
          if (data.data == "Please fill the address details.") {
            $scope.fillAddress = true;
          }
          if (data.data == "Order Successfull") {
            window.alert("Order Successfully Placed.");
            window.location.assign("/account/myorders");
          }
        },
        err => {}
      );
    };
  }
]);
