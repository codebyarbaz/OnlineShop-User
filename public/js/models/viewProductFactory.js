app.factory("viewProductFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      checkAvailability(detailObject) {
        let defer = $q.defer();
        $http.post("/checkAvailability", detailObject).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      AddToCart(productObject) {
        let defer = $q.defer();
        $http.post("/addToCart", productObject).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      BuyNow(productObject) {
        let defer = $q.defer();
        $http.post("/addToCart", productObject).then(
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
