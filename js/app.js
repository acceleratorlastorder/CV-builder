var CVApp = angular.module('CVApp', ['ngMaterial']);

CVApp.controller('CVController', function($scope, $http) {

  var self = this;

  this.initData = function() {
    getJson();
  }

  function getJson() {
    if (false) {
      console.error("get parameter from query string");
    } else {
      getDefaultCv();
    }
  }

  function getDefaultCv() {
    $http({
      method: 'GET',
      url: './data/okba-cv1-EN.json',
      headers: {
        'Accept': 'application/json'
      }
    }).then(function successCallback(response) {
      console.error("success response : ", response);
      $scope.currentUser = response.data;
      // this callback will be called asynchronously
      // when the response is available
      CreatePdf();
    }, function errorCallback(response) {
      console.error("error response : ", response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  function CreatePdf() {
    // Default export is a4 paper, portrait, using milimeters for units
    var doc = new jsPDF()

    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
  }

  this.initData();
});
