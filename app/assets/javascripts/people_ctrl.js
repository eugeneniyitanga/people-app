(function(){
  "use strict";
  angular.module("app").controller("peopleCtrl", function($scope){
    $scope.people = [
    {
      name: "Arsene",  
      bio: "The youngest boy in 2015 cohort who is pursuing AA degree",
      biostatus: false
    },
    {
      name: "Vedaste",
      bio: "The house leader of Las Vegas group house",
      biostatus: false 
    },
    {
      name: "Sandrine", 
      bio: "A member of SGA committee at kepler who is pursuing bachelor of arts in Healthcare Management",
      biostatus: false 
    },
    {
      name: "Eugene",
      bio: "Student at Kepler who is pursuing bachelor of arts in Management with concentration in Logistics. Taking coding bootcamp at actualize", 
      biostatus: false 
    }
    ];  


    Window.$scope = $scope;
  });
})();
 
