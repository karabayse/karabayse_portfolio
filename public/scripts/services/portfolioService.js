/*---- Portfolio Service ----*/

myApp.service('PortfolioService', function($http) {

  var sv = this;

  // POST call for submitEmail
  sv.submitEmail = function(email) {
    return $http({
      method: 'POST',
      url: '/portfolio',
      data: emailObject
    }).then(function(response){
      console.log('back from submitEmail post:', response);
    });
  }; // end postLocation

}); // end myApp.service
