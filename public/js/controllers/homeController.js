app.controller("homeController", [
  "$scope",
  "$window",
  "$location",
  "homeFactory",
  function($scope, $window, $location, homeFactory) {
    let promise = homeFactory.getmenus();
    promise.then(
      data => {
        $scope.menusData = data;
      },
      err => {
        $scope.menusError = err;
      }
    );
    $scope.showSubMenus = menu => {
      let promise = homeFactory.showSubMenus(menu);
      promise.then(
        data => {
          $scope.MainMenu = menu.menu;
          $scope.submenus = data.data;
        },
        err => {
          $scope.submenus = err;
        }
      );
    };
    $scope.hideSubMenus = () => {
      $scope.submenus = "";
    };
    $scope.searchSubMenu = submenu => {
      homeFactory.searchSubMenu(submenu);
    };
    $scope.nextSlide = () => {
      if ($scope.slide <= $scope.carousel.length) {
        $scope.slide = 0;
      } else {
        $scope.slide += 1;
      }
    };
    $scope.searchProduct = searchQuery => {
      $location.path("/search");
      $location.search("q", searchQuery.toLowerCase());
      $window.location.reload();
    };
  }
]);
