$(document).ready(function() {
	// the toggle event method has been removed from jQuery 1.9
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().show();
	    },
	    function() {
	        $(this).toggleClass("minus");
	        $(this).next().hide();
	    }
    ); // end toggle
}); // end ready
