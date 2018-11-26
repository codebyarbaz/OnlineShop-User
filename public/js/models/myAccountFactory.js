app.factory("myAccountFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      addNewAddress(userID, address) {
        let addressDetails = { userID, address };
        let defer = $q.defer();
        $http.post("/account/myaccount/addNewAddress", addressDetails).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      UpdateMobile(details) {
        let defer = $q.defer();
        $http.post("/account/myaccount/updateMobile", details).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      UpdatePassword(details) {
        let defer = $q.defer();
        $http.post("/account/myaccount/updatePassword", details).then(
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
