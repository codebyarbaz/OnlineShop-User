app.controller("searchProductsController", [
  "$scope",
  "$window",
  "$location",
  "searchProductsFactory",
  function($scope, $window, $location, searchProductsFactory) {
    $scope.sortByPopularity = () => {
      $location.search("sort", "Popularity");
      $window.location.reload();
    };
    $scope.sortByLowPrice = () => {
      $location.search("sort", "LowPrice");
      $window.location.reload();
    };
    $scope.sortByHighPrice = () => {
      $location.search("sort", "HighPrice");
      $window.location.reload();
    };
    $scope.sortByNew = () => {
      $location.search("sort", "New");
      $window.location.reload();
    };
    $scope.sortByDiscount = () => {
      $location.search("sort", "Discount");
      $window.location.reload();
    };
    $scope.filterPrice = (minPrice, maxPrice) => {
      if (minPrice == undefined && maxPrice == undefined) {
      } else {
        if (minPrice < 1 || maxPrice < 1) {
          $scope.priceInfo = "Please select valid price.";
        } else {
          $location.search("minPrice", minPrice);
          $location.search("maxPrice", maxPrice);
          $window.location.reload();
        }
      }
    };

    $scope.trustON = () => {
      let urlParams = $location.search();
      if (urlParams.trust == "on") {
        $location.search("trust", "off");
        $window.location.reload();
      } else {
        $location.search("trust", "on");
        $window.location.reload();
      }
    };

    $scope.NextPage = currentPage => {
      const urlParams = $location.search();
      if (urlParams.page) {
        $location.search("page", ++currentPage);
        $window.location.reload();
      } else {
        $location.search("page", "2");
        $window.location.reload();
      }
    };

    $scope.PreviousPage = currentPage => {
      const urlParams = $location.search();
      if (urlParams.page) {
        $location.search("page", --currentPage);
        $window.location.reload();
      }
    };
    // $scope.showTrustedProducts = showTrust => {
    //   if (showTrust) {
    //     $location.search("trust", "on");
    //     $window.location.reload();
    //   } else {
    //     $location.search("trust", "off");
    //     $window.location.reload();
    //   }
    // };
  }
]);
