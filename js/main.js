// First character is shown??
$('.hero').first().addClass('shown');


var doname = function()
 {
//Store the name
var name = $('.shown').attr('title');

//Print the name
$('.name').text(name);

};

//Show the next character
$('.next').on('click', function() {

	//if im at the last sibling, then go back to the first
	if (  $('.shown').is(':last-child') ) {

		$('.shown')
			.removeClass('shown')
			.siblings()
			.first()
			.addClass('shown');
	}

	else {
		// Find the hsown character, remove the shown
		//class, move to the next hero, add the shown class
		$('.shown')
			.removeClass('shown')
			.next()
			.addClass('shown');
	}

	//Update name with every click
	doname();

});