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
  $scope.ddesc= "Default";
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
  
  


  $scope.aboutcontent=[{Intro:"I am an India-native now living in San Diego, California, pursuing my Masters in Computer Science. I am interested in creating scalable web apps with amazingly great UI/UX. Previously I worked full time on e-commerce website of Microchip Technology.",Tech:"I am specialized in Microsoft .Net web forms and MVC architecture. I am conformtable with javaScript, CSS, bootstrap. I can also talk to database(MYSQL) using ADO.NET and Entity Relationship. I am exploring angular javascript and have built this website using angular javascript. I like working on scalability, performance, design, and great user experiences. ", Passtime:"My favourite passtime is to read a book (novel or inspirational) sipping a cup of coffee!"}];
  
 $scope.timelineEvents=[{Event:'Graduating soon',Desc:'bah bah',On:'April-2017',Pic:'http://icons.iconarchive.com/icons/icons8/windows-8/256/Business-Graduation-Cap-icon.png'},
 {Event:'Teaching Assistant',Desc:'bah bah',On:'August-2016',Pic:'http://www.sysnet.ucsd.edu/~voelker/pubcom/logo/CSELogo_RGB.gif'},
 {Event:'Joined UCSD',Desc:'ehi',On:'Sept-2015',Pic:'http://www.universityreview.org/wp-content/uploads/2012/03/University-of-California-San-Diego-Seal.png'},
 {Event:'Software Engineer - 1',Desc:'Promoted to Software Engineer 1. We moved to .Net MVC and got opprotunity to work on more challenging projects.',On:'July-1-2014',Pic:'http://www.dcdcselector.com/media/Microchipdirect-Logo-s_356_l.png'},
 {Event:'Trainee Software Engineer',Desc:'Joined Microchip Technology in Bangalore as Trainee Software Engineer. I joined an amazing team at MCHP - internet and intranet application team. We used .Net framework 3.5 c# webform application, Sql mainly. I was an integral part of microchips e-commerce website microchipdirect.com.',On:'July-1-2013',Pic:'https://upload.wikimedia.org/wikipedia/en/9/92/MicrochipTechnology_Logo.png'},
 {Event:'Bachelors in Computer Science',Desc:'Graduated from MSRIT with the degree in Bachelors of Computer Science.',On:'June-2013',Pic:'http://icons.iconarchive.com/icons/icons8/windows-8/256/Business-Graduation-Cap-icon.png'},
 {Event:'Joined MSRIT',Desc:'I joined M.S. Ramaiah Institute of Technology, Bangalore, India to pursue bachelors in Computer Science. MSRIT is one the top five college in the state of karnataka. Checkout wiki for more information.',On:'Sept-09-2009',Pic:'https://upload.wikimedia.org/wikipedia/en/b/b8/MSRIT_Golden_Jubilee_Logo.png'}
 ];
 
 $scope.showPopover = function(data) {
  $scope.popoverIsVisible = true; 
  $scope.description=data;
 
 };

$scope.hidePopover = function () {
  $scope.popoverIsVisible = false;
 
};
 
 
 $scope.yAxisLabel = ['less than 1','1-2','2-3','3-4','4 and above'];
 
 
  $scope.chartOptions = {
    chart: {
         type: 'column',
          height: 450,
          width: 850,
          marginLeft:150
            },
  
   title: {
         text: 'My skills'
          },
  xAxis: {
           categories: ['HTML & CSS', 'Javascript & Jquery', 'C# .net webforms', '.net MVC','Angular','Bootstrap','C++','SQL']
           
         },

  series: [{
           data: [3,2,2,1,2,5,1,4]
          }],
          
 yAxis: { 
         min: 0,
         max: 4,
         title: {
                text: 'Years of Experience'
            },
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
  $scope.projects = [{Link:'http://codepen.io/nesinha/full/RRZEww/',Type:'Random Quotes',Src:'http://i.imgur.com/It04LL9.png',Desc:'Used an API from mashape that has mutiple quotes. The application genrates new quotes upon click of button and changes the background color on every click. '},
                     {Link:'http://codepen.io/nesinha/full/BLpvOR/',Type:'Weather Application',Src:'http://i.imgur.com/qnni1mY.png',Desc:'Used an API from openweathermap to detect current location and project it on map. It displays the temperature in degree celsius and fahreheit along with weather description. The weather icon changes based on weather type. '},
                     {Link:'',Type:'Wikipedia Viewer',Src:'http://i.imgur.com/QO84elb.jpg',Desc:'Search for keywords with autopopulate feature. Display mutiple results based on search words. The result would direct to wikipedia page.'}];
});


app.controller("contactController",['$scope','$http', function($scope,$http){
  $scope.pageClass = "page-contact";
  $scope.user = {};
  $scope.send = function(){
 $http({
    url: "//formspree.io/28neha@gmail.com", 
    method: "POST",
    data:JSON.stringify($scope.user),
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

app.directive('toolTip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
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
            