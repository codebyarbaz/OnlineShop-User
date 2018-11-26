app.factory("productFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      getMobileProducts() {
        let defer = $q.defer();
        $http.get("/pro/getMobileProducts").then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      getShoeProducts() {
        let defer = $q.defer();
        $http.get("/pro/getShoeProducts").then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      getWomensWearProducts() {
        let defer = $q.defer();
        $http.get("/pro/getWomensWearProducts").then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      getTVsProducts() {
        let defer = $q.defer();
        $http.get("/pro/getTVsProducts").then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      getToysProducts() {
        let defer = $q.defer();
        $http.get("/pro/getToysProducts").then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      getFurnituresProducts() {
        let defer = $q.defer();
        $http.get("/pro/getFurnituresProducts").then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      showProduct(product) {
        let defer = $q.defer();
        $http.get("/pro/showProduct/" + product._id).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      }
    };
    return object;
  }
]);
