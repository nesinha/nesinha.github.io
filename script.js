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
  
  .when("/resume",{
    templateUrl:"resume.html",
    controller :"resumeController"
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
  
  


  $scope.aboutcontent=[{Intro:"I am a computer science graduate student living in San Diego, California, pursuing my Masters. I am actively looking for full time opportunity as Software Engineer. Previously I worked full time as software engineer for Microchip Technology.",Tech:"I have good understanding of data structures and algorithms. I can program in c++. I am specialized in Microsoft .Net web forms and MVC architecture. I am comfortable with javaScript, CSS, bootstrap. I can also talk to database(MYSQL) using ADO.NET and Entity Relationship. I am exploring angular javascript and have built this website using angular javascript.", Passtime:"My favourite passtime is to read a book (novel or inspirational) sipping a cup of coffee!"}];
  
 $scope.timelineEvents=[{Event:'Graduating soon',Desc:'I am planning to graduate by winter quarter(March end). My current GPA at UCSD is 3.75/4',On:'April-2017',Pic:'http://icons.iconarchive.com/icons/icons8/windows-8/256/Business-Graduation-Cap-icon.png'},
 {Event:'Teaching Assistant',Desc:'I assisted a class of 30 students under professor Issac Chu independently or in small groups in the development of project. Course: Enterprise-class Web Application. Technology used: MySQL, MVC architecture, API, ajax, knockout.js, MOQ framework',On:'August-2016',Pic:'http://www.sysnet.ucsd.edu/~voelker/pubcom/logo/CSELogo_RGB.gif'},
 {Event:'Joined UCSD',Desc:'I joined University of California, San Diego for my masters in Computer Science. Jacob\'s School of Engineering of UCSD is one of the top computer science colleges in world.Checkout wiki for more information',On:'Sept-2015',Pic:'http://www.universityreview.org/wp-content/uploads/2012/03/University-of-California-San-Diego-Seal.png'},
 {Event:'Software Engineer - 1',Desc:'Promoted to Software Engineer 1. Having moved to .Net MVC from web forms gave me an opprotunity to work on more challenging projects like creating API for the product and caching .',On:'July-1-2014',Pic:'http://www.dcdcselector.com/media/Microchipdirect-Logo-s_356_l.png'},
 {Event:'Trainee Software Engineer',Desc:'Cleared the on campus interview and accepted the offer from Microchip Technology in Bangalore as Trainee Software Engineer,Bangalore, India. I joined an amazing team at MCHP - internet and intranet application team. I was an integral part of microchip\'s e-commerce website microchipdirect.com.',On:'July-1-2013',Pic:'https://upload.wikimedia.org/wikipedia/en/9/92/MicrochipTechnology_Logo.png'},
 {Event:'Bachelors in Computer Science',Desc:'Graduated from MSRIT with the degree in Bachelors of Computer Science.My GPA was 9.54/10',On:'June-2013',Pic:'http://icons.iconarchive.com/icons/icons8/windows-8/256/Business-Graduation-Cap-icon.png'},
 {Event:'Joined MSRIT',Desc:'I joined M.S. Ramaiah Institute of Technology, Bangalore, India to pursue bachelors in Computer Science. MSRIT is one the top five college in the state of karnataka. Checkout wiki for more information.',On:'Sept-09-2009',Pic:'https://upload.wikimedia.org/wikipedia/en/b/b8/MSRIT_Golden_Jubilee_Logo.png'}
 ];
 
 $scope.showPopover = function(data) {
  $scope.popoverIsVisible = true; 
  $scope.description=data;
 
 };

$scope.hidePopover = function () {
  $scope.popoverIsVisible = false;
 
};
 
 
 $scope.yAxisLabel = ['0','less than 1','1-1.9','2-2.9','3-3.9','4 and above'];
 
 
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
           data: [5,5,4,4,1,1,5,4]
          }],
          
 yAxis: { 
         min: 0,
         max: 5,
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
  $scope.projects = [{Link:'http://codepen.io/nesinha/full/RRZEww/',Type:'Random Quotes',Src:'http://i.imgur.com/It04LL9.png',Desc:'Used an API from mashape that has mutiple quotes. The application genrates new quotes upon click of button and changes the background color on every click. You can also tweet the quote!'},
                     {Link:'https://github.com/nesinha/nesinha.github.io',Type:'My Portfolio',Src:'http://i.imgur.com/25dPNYL.png',Desc:'Used Angular JavaScript and HTML/CSS/Bootstrap to design and develop this website(The one you are looking at right now!). This website is built from scratch.'},
                     {Link:'http://codepen.io/nesinha/full/Gjxymo/',Type:'Wikipedia Viewer',Src:'http://i.imgur.com/UxC8aNm.png',Desc:'You can search wiki using keywords using this application. Display mutiple results based on search words. The result would direct to wikipedia page.'},
                     {Link:'http://codepen.io/nesinha/full/BLpvOR/',Type:'Weather Application',Src:'http://i.imgur.com/QO84elb.jpg',Desc:'Used an API from openweathermap to detect current location and project it on map. It displays the temperature in degree celsius and fahreheit along with weather description. The weather icon changes based on weather type. '},
                     {Link:'https://leetcode.com/28nehasinhagmailcom/',Type:'LeetCode Problems',Src:'http://i.imgur.com/2pPNkHr.png',Desc:'Search for keywords with autopopulate feature. Display mutiple results based on search words. The result would direct to wikipedia page.'}];
});

app.controller("resumeController",function($scope){
  $scope.pageClass = "page-resume";
  
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
            
