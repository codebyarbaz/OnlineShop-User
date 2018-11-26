app.controller("viewProductController", [
  "$scope",
  "viewProductFactory",
  function($scope, viewProductFactory) {
    $scope.addtocart = true;
    $scope.addedtocart = false;
    $scope.changeActiveImage = (ImageUrl, ImageName) => {
      $scope.ActiveImageUrl = ImageUrl;
      $scope.ActiveImageName = ImageName;
    };
    $scope.AddToCart = (
      productID,
      menu,
      submenu,
      title,
      price,
      discount,
      image
    ) => {
      let productObject = {
        productID,
        menu,
        submenu,
        title,
        price,
        discount,
        image
      };
      let promise = viewProductFactory.AddToCart(productObject);
      promise.then(
        data => {
          if (data.data == "Product Added To Cart") {
            $scope.addtocart = false;
            $scope.addedtocart = true;
          }
          if (data.data == "Already Added") {
            $scope.addtocart = false;
            $scope.addedtocart = true;
          }
        },
        err => {}
      );
    };
    $scope.BuyNow = (
      productID,
      menu,
      submenu,
      title,
      price,
      discount,
      image
    ) => {
      let productObject = {
        productID,
        menu,
        submenu,
        title,
        price,
        discount,
        image
      };
      let promise = viewProductFactory.BuyNow(productObject);
      promise.then(
        data => {
          if (data.data == "Product Added To Cart") {
            window.location.assign("/viewCart");
          }
        },
        err => {}
      );
    };
    $scope.checkAvailability = (productID, menu) => {
      if ($scope.pinCode) {
        let detailObject = { productID, menu };
        let promise = viewProductFactory.checkAvailability(detailObject);
        promise.then(
          data => {
            const availability = data.data.availability;
            let ProductAvailable = Boolean;
            availability.forEach(pincode => {
              if (Number($scope.pinCode) == pincode.pincode) {
                ProductAvailable = true;
                return false;
              }
            });
            if (ProductAvailable == true) {
              $scope.pinCodeMsg = "Available: Free Delivery in 7-8 days.";
              $scope.color = "productAvailable";
            } else {
              $scope.pinCodeMsg = "Delivery not available.";
              $scope.color = "productNotAvailable";
            }
          },
          err => {
            $scope.pinCodeError = "Unable to fetch your pincode.";
            $scope.color = "productNotAvailable";
          }
        );
      } else {
        $scope.pinCodeMsg = "Please enter any pincode.";
        $scope.color = "productNotAvailable";
      }
    };
  }
]);
