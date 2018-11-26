app.factory("viewCartFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      removeProduct(details) {
        let defer = $q.defer();
        $http.get("/viewCart/removeProduct/" + details.productID).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      IncreaseQuantity(details) {
        let defer = $q.defer();
        $http.post("/viewCart/IncreaseQuantity", details).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      DecreaseQuantity(details) {
        let defer = $q.defer();
        $http.post("/viewCart/DecreaseQuantity", details).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      placeOrder(orderDate) {
        let defer = $q.defer();
        $http.post("/placeOrder", { orderDate }).then(
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
