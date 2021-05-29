 var btn = $('#back-to-top');
 $(document).ready(function(){
            $(window).scroll(function(){
                  var scroll = $(window).scrollTop();
                    if (scroll > 300) {
                       
                      $("#back-to-top").css("display", "flex");
                    }
                    else{
                    	$("#back-to-top").css("display", "none");
                    }
                    })
          });
          	
btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '500');
          });