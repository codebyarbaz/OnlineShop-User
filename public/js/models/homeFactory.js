app.factory("homeFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      getmenus() {
        let defer = $q.defer();
        $http.get("/menu/getmenus").then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      showSubMenus(menu) {
        let defer = $q.defer();
        $http.post("/menu/getsubmenus", menu).then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      searchSubMenu(submenu) {
        console.log("submenu: ", submenu);
        $http.post("/search", submenu).then(
          response => {
            console.log(response);
          },
          err => {
            console.log(err);
          }
        );
      },
      getCarouselImages() {
        let defer = $q.defer();
        $http.get("/caro/getCarouselImages").then(
          res => {
            defer.resolve(res);
            console.log(res);
          },
          err => {
            defer.reject(err);
            console.log(err);
          }
        );
        return defer.promise;
      }
    };
    return object;
  }
]);
