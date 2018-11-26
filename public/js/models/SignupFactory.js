app.factory("SignupFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      createAccount(userDetails) {
        let defer = $q.defer();
        $http.post("/account/signup", userDetails).then(
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
