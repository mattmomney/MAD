// Author: Stickey Keys

$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
	
	// the function for running the slide show	
	var runSlideShow = function() {   
        $("#slide").fadeOut("slow",
        	function () {
       	     	if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}
				else {
					nextSlide = nextSlide.next();
				}
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt"); 
				$("#slide").attr("src", nextSlideSource).fadeIn(3500);
								
			}
			
			)
	}
	
	$("#slide").mouseover(function() {
  $("#slide").trigger('pause' ,true);
  });	
	
	// start slide show
    var timer1 = setInterval(runSlideShow, 3500);
	
	// here's one way to code this app without using the toggle event method
	$("#slide").click(function() {
		if (timer1 != null) {
	    	clearInterval(timer1);
	    	timer1 = null;
		}
		else {
			timer1 = setInterval(runSlideShow, 3000);
		}
	});
	
})
