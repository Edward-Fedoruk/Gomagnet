$(document).ready(function() {
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

	$('.popup__form__group input').on('keyup', function() {
		if ($(this).val() != '') {
			var nextChild = $(this).parent('.popup__form__group').siblings('.popup__form__submit');
			$(nextChild).find('.popup__form__next').fadeIn();
		} else {		
			$('.popup__form__next').fadeOut();
		}
	});

	$('.popup__form__next').on('click', function() {
		$(this).parents('.popup__input__wrapper').next().fadeIn();
		$(this).hide();
	});

	$('#popup__select__price').on('change', function() {
		$('#popup__form__submit').fadeIn();
	});

	$('[data-modal-open]').on('click', function() {
		var modalToOpen = $(this).attr('data-modal-open');
		$('[data-modal="'+ modalToOpen +'"]').addClass('popup__active');
	});

	$('[data-modal-close]').on('click', function() {
		var modalToClose = $(this).attr('data-modal-close');
		$('[data-modal="'+ modalToClose +'"]').removeClass('popup__active');
	});

	$(document).on('click', function(e) {
		if (!$('.popup__wrapper, [data-modal-open]').is(e.target) && $('.popup__wrapper, [data-modal-open]').has(e.target).length == 0) {
			$('.popup').removeClass('popup__active');
		}
	});

});

// function checkIfMail(email) {
// 	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 	return regex.test(email);
// }