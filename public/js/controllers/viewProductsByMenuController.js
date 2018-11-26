app.controller("viewProductsByMenuController", [
  "$scope",
  "$location",
  "$window",
  "viewProductsByMenuFactory",
  function($scope, $location, $window, viewProductsByMenuFactory) {
    $scope.sortByPopularity = () => {
      $window.location.assign("?sort=Popularity");
    };
    $scope.sortByLowPrice = () => {
      $window.location.assign("?sort=LowPrice");
    };
    $scope.sortByHighPrice = () => {
      $window.location.assign("?sort=HighPrice");
    };
    $scope.sortByNew = () => {
      $window.location.assign("?sort=New");
    };
    $scope.sortByDiscount = () => {
      $window.location.assign("?sort=Discount");
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
  }
]);
