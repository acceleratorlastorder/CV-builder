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
      setTimeout(function() {
        CreatePdfFromHTML(document.getElementsByTagName('cv-content')[0]);
      }, 1500);
    }, function errorCallback(response) {
      console.error("error response : ", response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  function CreatePdfFromHTML(htmlContainer) {
    var HtmlElementDoundary = htmlContainer.getBoundingClientRect();
    console.error("htmlContainer: ", htmlContainer);
    console.error("HtmlElementDoundary: ", HtmlElementDoundary);

    var pdf = new jsPDF('p', 'pt', 'letter');
     var canvas = pdf.canvas;
     //canvas.width = HtmlElementDoundary //= 8.5 * 72;
     html2canvas(document.body, {
         canvas:canvas,
         onrendered: function(canvas) {
             var iframe = document.createElement('iframe');
             iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
             document.body.appendChild(iframe);
             iframe.src = pdf.output('datauristring');
            //var div = document.createElement('pre');
            //div.innerText=pdf.output();
            //document.body.appendChild(div);
         }
     });
  }

  this.initData();
});
