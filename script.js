var app=angular.module("myPortfolio",["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  
  
  .when("/about",{
    templateUrl:"about.html",
    controller :"aboutController"
  })
  
  .when("/portfolio",{
    templateUrl:"portfolio.html",
    controller :"portfolioController"
  })
  
  .when("/contact",{
    templateUrl:"contact.html",
    controller :"contactController"
  })
  
  .otherwise({redirectTo:"/about"})
});


app.controller("aboutController",['$scope','$location', '$anchorScroll', 
function($scope,$location, $anchorScroll){
  
  $scope.pageClass = "page-about";
  $scope.gotoMytimeline = function()
  {
     $location.hash('mytimeline');
      $anchorScroll();
  };
  $scope.gotoMyskills = function()
  {
     $location.hash('myskills');
      $anchorScroll();
  };
  
  $scope.gotoAbout = function()
  {
    $location.hash('aboutme');
      $anchorScroll();
  }
  
 $scope.timelineEvents=[{Event:'Graduating soon',Desc:'bah bah',On:'April-2017',Pic:'http://icons.iconarchive.com/icons/icons8/windows-8/256/Business-Graduation-Cap-icon.png'},
 {Event:'Teaching Assistant',Desc:'bah bah',On:'August-2016',Pic:'http://www.sysnet.ucsd.edu/~voelker/pubcom/logo/CSELogo_RGB.gif'},
 {Event:'Joined UCSD',Desc:'ehi',On:'Sept-2015',Pic:'http://www.universityreview.org/wp-content/uploads/2012/03/University-of-California-San-Diego-Seal.png'},
 {Event:'Software Engineer - 1',Desc:'Promoted to Software Engineer 1. We moved to .Net MVC and got opprotunity to work on more challenging projects.',On:'July-1-2014',Pic:'http://www.dcdcselector.com/media/Microchipdirect-Logo-s_356_l.png'},
 {Event:'Trainee Software Engineer',Desc:'Joined Microchip Technology in Bangalore as Trainee Software Engineer. I joined an amazing team at MCHP - internet and intranet application team. We used .Net framework 3.5 c# webform application, Sql mainly. I was an integral part of microchips e-commerce website microchipdirect.com.',On:'July-1-2013',Pic:'https://upload.wikimedia.org/wikipedia/en/9/92/MicrochipTechnology_Logo.png'},
 {Event:'Bachelors in Computer Science',Desc:'Graduated from MSRIT with the degree in Bachelors of Computer Science.',On:'June-2013',Pic:'http://icons.iconarchive.com/icons/icons8/windows-8/256/Business-Graduation-Cap-icon.png'},
 {Event:'Joined MSRIT',Desc:'I joined M.S. Ramaiah Institute of Technology, Bangalore, India to pursue bachelors in Computer Science. MSRIT is one the top five college in the state of karnataka. Checkout wiki for more information.',On:'Sept-09-2009',Pic:'https://upload.wikimedia.org/wikipedia/en/b/b8/MSRIT_Golden_Jubilee_Logo.png'}
 ];
 
 $scope.yAxisLabels = ['Uh? Next Question','Basic','Medium','Pretty Good','Master'];
 $scope.yAxisLabel = ['Basic','Medium','Pretty Good','Master'];
 
  $scope.chartOptions = {
    chart: {
         type: 'column'
            },
  
   title: {
         text: 'My skills'
          },
  xAxis: {
           //categories: ['HTML & CSS', 'Javascript & Jquery', 'C# .net webforms', '.net MVC']
           categories: ['Excel','Sql','R','Python','Power BI','Tableau','Apache Pig','Hive QL','Google Analytics','Html & CSS']
         },

  series: [{
           data: [3,2,2,1,2,2,1,1,0.5,0.5]
          }],
          
 yAxis: { 
         min: 0,
         max: 3,
        labels: {
            formatter: function() {
                return $scope.yAxisLabel[this.value];
            }
        }
    }
       
  
  };
  
}]);

app.controller("portfolioController",function($scope){
  $scope.pageClass = "page-portfolio";
});


app.controller("contactController",['$scope','$http', function($scope,$http){
  $scope.pageClass = "page-contact";
  $scope.user = {};
  $scope.send = function(){
 $http({
    url: "//formspree.io/28neha@gmail.com", 
    method: "POST",
    data:$scope.user,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  
});
alert('Thanks for the email.');
}

}]);


app.directive('myPortfolioHeader', function() {
  return {
    templateUrl: 'header.html'
  };
});




// Directive for generic chart, pass in chart options

app.directive('hcChart', function () {
                return {
                    restrict: 'E',
                    template: '<div></div>',
                    scope: {
                        options: '='
                    },
                    link: function (scope, element) {
                        Highcharts.chart(element[0], scope.options);
                    }
                };
            });



app.directive('myPortfolioFooter', function() {
  return {
    templateUrl: 'footer.html'
  };
});
            