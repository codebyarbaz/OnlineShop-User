app.factory("loginFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      loginAccount(userDetails) {
        $http.post("/account/login", userDetails).then(
          res => {
            console.log("res", res);
          },
          err => {
            console.log("err", err);
          }
        );
      }
    };
    return object;
  }
]);
