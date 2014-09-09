// On page load...
$(function() {
  //Initialize Parse
  Parse.initialize("dHa1lqKqjUFf48Iw5tc4puKB0kbv1ONnejI6q91o", "nEU6Qig9G0ldjBALkayRR5cMWQUc7qMXbjGjsGE0");
  $('form').hide();

  // should really disable the return key 
  $('form').bind("keyup keypress", function(e) {
    var code = e.keyCode || e.which; 
    if (code  == 13) {               
      e.preventDefault();
      return false;
    }
  });

  // handler for form submission
  $('form').submit(function(event) {
    $('#submit').button('loading');
    var $form = $(this);
    $(this).show();
    var $target = $($form.attr('data-target'));

    // Log the user out in case they're still logged in
    Parse.User.logOut();
    
    var data = convertFormToJSON($form);
    data.password = Math.random().toString(36).substring(2);
    data.username = data.email;
    var user = new Parse.User();
    user.signUp(data, {
      success: function(user) {
        window.alert("Thanks for your application! Please check your email to confirm your address.");
        $(this).hide();
        $('#submit').button('reset');
      },
      error: function(user, error) {
        window.alert("There was an error with your application: " + error.message);
        $('#submit').button('reset');
      }
    });

    event.preventDefault();
  });
});

function convertFormToJSON(form){
  var array = $(form).serializeArray();
  var json = {};
  
  jQuery.each(array, function() {
      json[this.name] = this.value || '';
  });
  
  return json;
}
