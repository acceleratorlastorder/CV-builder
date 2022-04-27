var CVApp = angular.module("CVApp", ["ngMaterial"]);

CVApp.controller("CVController", function($scope, $http) {

  var self = this;

  this.defaultLang = "EN";
  this.currentLang = "";
  this.searchParam = {};

  this.initData = function() {
    this.searchParam = getSearchQueryParam();
    this.getLang();
    this.getJson();
  }

  this.getLang = function() {
    this.currentLang = this.searchParam["lang"];
    if (!this.currentLang) {
      this.currentLang = this.defaultLang;
    }
  }

  this.getJson = function() {
    if (this.currentLang) {
      var url = "./data/okba-cv1-" + this.currentLang.toUpperCase() + ".json";
      $http({
        method: "GET",
        url: url,
        headers: {
          "Accept": "application/json"
        }
      }).then(function successCallback(response) {
        console.error("success response : ", response);
        $scope.currentUser = response.data;
      }, function errorCallback(response) {
        console.error("error response : ", response);
        getDefaultCv();
      });
    } else {
      console.log("get parameter from query string gathering default version !");
      getDefaultCv();
    }
  }


  function getSearchQueryParam() {
    var queryString = window.location.search;
    var arrayOfParam = queryString.slice(1, queryString.length).split("&");
    var result = {};
    var tempArray = null;
    for (var i = 0; i < arrayOfParam.length; i++) {
      tempArray = arrayOfParam[i].split("=");
      result[tempArray[0]] = tempArray[1];
    }
    return result;
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
    }, function errorCallback(response) {
      console.error("error response : ", response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  this.initData();
});
