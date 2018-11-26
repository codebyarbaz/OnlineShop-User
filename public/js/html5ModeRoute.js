app.config([
  "$locationProvider",
  function($locationProvider) {
    // $locationProvider.hashPrefix("");
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: false
    });
  }
]);
