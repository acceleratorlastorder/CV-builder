var CVApp = angular.module('CVApp', []);

CVApp.controller('CVController', function CVController($scope, $http)
{
  $http(
  {
    method: 'GET',
    url: './data/okba-cv1-EN.json',
    headers : {'Accept' : 'application/json'}
  }).then(function successCallback(response)
  {
    console.error("success response : ", response);
    $scope.currentUser = response.data;
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response)
  {
    console.error("error response : ", response);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});
