app.controller("productController", [
  "$scope",
  "$location",
  "productFactory",
  function($scope, $location, productFactory) {
    let promise = productFactory.getMobileProducts();
    promise.then(
      data => {
        $scope.MobileProducts = data.data;
        let promise = productFactory.getShoeProducts();
        promise.then(
          data => {
            $scope.ShoeProducts = data.data;
            let promise = productFactory.getWomensWearProducts();
            promise.then(
              data => {
                $scope.WomensWear = data.data;
                let promise = productFactory.getTVsProducts();
                promise.then(
                  data => {
                    $scope.Television = data.data;
                    let promise = productFactory.getToysProducts();
                    promise.then(
                      data => {
                        $scope.Toys = data.data;
                        let promise = productFactory.getFurnituresProducts();
                        promise.then(
                          data => {
                            $scope.Furnitures = data.data;
                          },
                          err => {
                            $scope.Furnitures = err;
                          }
                        );
                      },
                      err => {
                        $scope.Toys = err;
                      }
                    );
                  },
                  err => {
                    $scope.Television = err;
                  }
                );
              },
              err => {
                $scope.WomensWear = err;
              }
            );
          },
          err => {
            $scope.ShoeProducts = err;
          }
        );
      },
      err => {
        $scope.MobileProducts = err;
      }
    );
    $scope.showProduct = product => {
      let promise = productFactory.showProduct(product);
      promise.then(
        data => {
          $scope.show = data.data;
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    };
  }
]);
