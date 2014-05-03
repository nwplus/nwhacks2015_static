//#################################################
//Mobile Menu #####################################
//#################################################


var menuLeft = document.getElementById( 'cbp-spmenu' ),
            showLeft = document.getElementById( 'showLeft' ),
            body = document.body;

            showLeft.onclick = function() {
            classie.toggle( this, 'active' );
            classie.toggle( menuLeft, 'cbp-spmenu-open' );
            disableOther( 'showLeft' );
        };

        function disableOther( button ) {
            if( button !== 'showLeft' ) {
                classie.toggle( showLeft, 'disabled' );
            }
        }

//Hiding nav after clicking onto menu element
var menuItem = document.getElementById( 'cbp-spmenu' );
menuItem.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeft' );
};



 $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: false,
            slideshow: false,
            controlsContainer: ".flexslider-container"     
        });         
    });


 $(document).ready(function() {
     

     
//#################################################
//Navigation - Scrolling and Active States#########
//#################################################
     
     
        $('#sections, #sections_mobile').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 1000,
            scrollOffset: 0,
            scrollThreshold: 0.2,
            easing: 'easeInOutExpo',
            
        });
     
        $('#logo a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            }); 
         
         
        $('#btn-about').click(function () {
            $.scrollTo('#about',800,{easing:'easeInOutExpo',offset:0,'axis':'y'});
        });
        $('#btn-sponsor').click(function () {
            $.scrollTo('#sponsor',800,{easing:'easeInOutExpo',offset:0,'axis':'y'});
            
        }); 
     
//#################################################
//Elements fading in ##############################
//#################################################        

 
        setTimeout(function (){ $('.about.btn').addClass('anim'); }, 100); 
         
        $('#about').waypoint(function(direction) {
          $('#about').animate({ opacity: 1 }, 100);
          setTimeout(function (){ $('#clients').animate({ opacity: 1 }, 100); }, 50);  
        }, { offset: 1000}); 

        setTimeout(function (){ $('.sponsor.btn').addClass('anim'); }, 100); 
         
        $('#sponsor').waypoint(function(direction) {
          $('#sponsor').animate({ opacity: 1 }, 100);
          setTimeout(function (){ $('#clients').animate({ opacity: 1 }, 100); }, 50);  
        }, { offset: 1000}); 

        function sniffer() {
            var windowHeight=$(window).height();
     
            var modal=$(".md-content");
            modal.css("height",windowHeight+"px");
 
        };
        sniffer();

     
//#################################################
//Text animation on home ##########################
//#################################################          
     
        $('.tlt').textillate({
                selector: '.texts',
                loop: false,
                initialDelay: 0,
                'in': {
                    effect: 'fadeInDown',
                    delayScale: 1.3,
                    delay: 40,
                    sync: false,
                    shuffle: true,
                },
                'out': {
                    effect: 'fadeOutDown',
                    delayScale: 1.3,
                    delay: 40,
                    sync: false,
                    shuffle: true,
                }                              
              
        });
        
                   
        $('#home p').textillate({
                loop: false,
                'in': {
                    effect: 'fadeInUp',
                    delayScale: 0.5,
                    delay: 10,
                    sync: false,
                    shuffle: true,
                },
        
        });
     
//#################################################
//ContactForm #####################################
//#################################################       
     
     
        function contactform() {
        //contact form init
        var options = {target: "#alert"}
        $("#contact-form").ajaxForm(options);
        };
	    contactform();    
             
    


//#################################################
//Video for modal box #############################
//#################################################          

         
         $(".md-content").fitVids();

                   

    });



//#################################################
//#################################################
//#################################################


    $(document).ready(function(){
        navposition();
        $(window).on('resize', navposition);
    });



    function navposition() {
           var sliderHeight=$(".slides").height()/2;
           var sliders=$(".flex-direction-nav li a");
            sliders.css("margin-top", -sliderHeight+19+"px");
        };    
    navposition();

function reload() {
    $( '.md-content iframe' ).attr( 'src', function ( i, val ) { return val; }); };

    
