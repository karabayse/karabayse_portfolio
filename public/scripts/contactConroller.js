/*--- Contact Controller ----*/

myApp.controller('ContactController', function(PortfolioService) {
  console.log('in contactController');

  var vm = this;


// function to submit email
vm.submitEmail = function() {
   var emailObject = {
     name: vm.name,
     email: vm.email,
     comments: vm.message
   }; // end emailObject
   console.log('emailObject: ', emailObject);
   PortfolioService.submitEmail(emailObject).then(function() {
        sweetAlert("Email Sent!");
        vm.nameInput = '';
        vm.emailInput = '';
        vm.messageInput = '';
      }); // end EntryService.journalEntry
 }; // end submitEmail

}); // end controller
