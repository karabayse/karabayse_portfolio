/*---- Portfolio Service ----*/

myApp.service('PortfolioService', function($http) {

  var sv = this;

  // POST call for submitEmail
  sv.submitEmail = function(email) {
    return $http({
      method: 'POST',
      url: '/email',
      data: emailObject
    }).then(function(response){
      console.log('back from submitEmail post:', response);
    });
  }; // end sv.submitEmail

}); // end myApp.service
