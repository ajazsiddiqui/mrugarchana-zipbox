var $ = jQuery.noConflict();
$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('#output').html("<b>Loading response...</b>");
        $.ajax({
            type: 'POST',
            url: 'http://plinthstonerema.net/zipbox-mailer/send-anthea.php',
            dataType: 'json',
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                project: $('#project').val(),
                budget: $('#budget').val(),
                csrfmiddelwaretoken: $('input[name=csrfmiddelwaretoken]').val()
            },
            success: function(data) {
                $('#output').html('success');
				window.location.href = "https://www.plinthstonerema.com/zipbox/39-anthea/AntheaPlans.pdf";
            }

        });
    });
});
$('.lifestyle-holder .features li').on('click', function() {
    src = $(this).attr('data-src');
    $('#changing').attr('src', src);
})

$('.owl-carousel').owlCarousel({
    margin: 0,
    loop: 0,
    stagePadding: 30,
    merge: 0,
    startPosition: 0,
    rewind: 0,
    slideBy: 1,
    center: 0,
    lazyLoad: 1,
    nav: 0,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    autoplay: 0,
    autoplayTimeout: 0,
    autoplayHoverPause: true,
    dots: 0,
    smartSpeed: 250,
    fluidSpeed: 250,
    video: 0,
    animateIn: 0,
    animateOut: 0,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    },
    onInitialized: function() {}
});
$('[data-lightbox="iframe"]').magnificPopup({
    disableOn: 100,
    type: 'iframe',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
$('[data-lightbox="image"]').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-fade',
    image: {
        verticalFit: true
    }
});

$('.popup-modal').magnificPopup({
	type: 'inline',
	preloader: false,
	modal: true
});
$(document).on('click', '#disclaimer-modal', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});

$('.ng-container').scroll(function() {
  $(this).next('.mouse').hide();
});