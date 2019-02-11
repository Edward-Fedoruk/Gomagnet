$(window).on('load', function() {
	$('#intro_name').on('keyup', function() {
		if ($(this).val() != '') {
			$('#next_btn1').fadeIn();
		} else {
			$('#next_btn1').fadeOut();
			$('#email_field_box').fadeOut();
		}
	});
	
	$('#next_btn1').on('click', function() {
		$(this).fadeOut();
		$('#email_field_box').fadeIn();
	});

	$('#email_add').on('keyup', function() {
		// alert(checkIfMail('#email_add'));
		if ($(this).val() != '') {
			$('#form_submit_btn').fadeIn();
		} else {		
			$('#form_submit_btn').fadeOut();
		}
	});

	$('[data-modal-open]').on('click', function() {
		var modalToOpen = $(this).attr('data-modal-open');
		$('[data-modal="'+ modalToOpen +'"]').addClass('popup__active');
	});
	
});

// function checkIfMail(email) {
// 	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 	return regex.test(email);
// }