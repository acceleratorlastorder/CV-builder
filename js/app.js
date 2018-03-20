var CVApp = angular.module('CVApp', ['ngMaterial']);

CVApp.controller('CVController', function CVController($scope, $http)
{
  //use it later
  //

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

  //$scope.currentUser = $http.get('./data/okba-cv1-EN.json');
  /*
    var user = {
      firstName: "Okba",
      lastName: "Hamidi",
      moreInformation:
      {
        summary:
        {
          title: "Développeur",
          text: "Développeur front et back end dans le développement web et développement logiciel, je suis actuellement à la recherche d'un emploi dans le domaine informatique afin de m'épanouir professionnellement et de prouver mes compétences au sein d'une équipe. ",
        },
        backgroundExperiences:
        {
          workExperiences:
          {
            title: "experiences proféssionnelles",
            style:
            {
              IdName: "experiences",
              classesName: "experience"
            },
            array: [
            {
              date: "06/2017",
              title: "Développeur",
              organizationName: "Calinda Software",
              description: "Développeur (web/applicatif), front-end/back-end, HTML,CSS, JS(AngularJS, JQuery), C#, SQL, JAVA."
            },
            {
              date: "02/2017 - 03/2017",
              title: "STAGE DÉVELOPPEUR WEB (BACK-END) / DÉVELOPPEUR C/C++ ARDUINO",
              organizationName: "Urban prod",
              description: "Stage dans le développement de site web principalement sous wordpress. Fusion de plusieurs site, intégration de carte Open street map, création du modèle relationnel pour la nouvelle base de donnée mysql, tests sous Arduino, médiation numérique."
            },
            {
              date: "05/2016 - 09/2016",
              title: "MAGASINIER",
              organizationName: "BHM DISTRIBUTION",
              description: "Gestion des stocks, magasinage: déchargement des palette,utilisation du transpalette manuel/électrique, aide client."
            },
            {
              date: "12/2011 - 01/2012",
              title: "MAINTENANCE EN INFORMATIQUE MÉDICALE",
              organizationName: "AMFI",
              description: "Stage dans la maintenance des équipement informatique des clients médecins et installation des logiciels de gestion médicale (axilog). "
            },
            {
              date: "04/2009 - 05/2009",
              title: "MAINTENANCE EN INFORMATIQUE",
              organizationName: "Cyber Kartié",
              description: "Stage dans un cybercafé, maintenance des ordinateurs, réparation et montage de nouveaux ordinateurs pour les revendre par la suite."
            }]
          },
          formations:
          {
            title: "formations",
            style:
            {
              IdName: "formations",
              classesName: "formation"
            },
            array: [
            {
              date: "2016",
              title: "SIMPLONMARS",
              organizationName: "SIMPLONMARS",
              description: "Formation intensive à centrale Marseille sur les langages de programmation web (front et back-end), médiation numérique, méthodes agiles."
            }]
          }
        }
      }
    }

    $scope.currentUser = user;
    console.error("test: ", JSON.stringify(user));
    */
});
