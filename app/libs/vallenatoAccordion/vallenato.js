

$(document).ready(function()
{
	//Add Inactive Class To All Accordion Headers
	$('.accordion_header').toggleClass('inactive_header');

	
	//Set The Accordion Content Width
	var contentwidth = $('.accordion').width();
	$('.accordion_content').css({'width' : contentwidth });
	
	$('.accordion_header').last().toggleClass('active_header').toggleClass('inactive_header');
	$('.accordion_content').last().slideDown().toggleClass('open-content');
	
	// The Accordion Effect
	$('.accordion_header').click(function () {
		if($(this).is('.inactive_header')) {
			$('.active_header').toggleClass('active_header').toggleClass('inactive_header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active_header').toggleClass('inactive_header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active_header').toggleClass('inactive_header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	
	return false;
});