$(function() {
  $("#faq nav a").click(function(e) {
    e.preventDefault();
    $("#faq article").removeClass( "active" );
    $("#faq nav a").removeClass( "activetab" );
    $($(this).attr("href")).addClass("active");
    $(this).addClass("activetab");
  });
  
  // disable parralax if mobile device
  if (Modernizr.touch){
    
    } else { 
  
  var s = skrollr.init();
  
  }
});
