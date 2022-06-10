

(function ($) {
	"use strict";

// Preloader
$(window).on('load', function () {
	$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});

/*---------------------------------------------------
    Primary Menu
----------------------------------------------------- */

// Dropdown show on hover
$('.primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown').on("mouseover", function() {
	if ($(window).width() > 991) {
		$(this).find('> .dropdown-menu').stop().slideDown('fast');
		$(this).bind('mouseleave', function() {
		$(this).find('> .dropdown-menu').stop().css('display', 'none'); 
		});
		
	// When dropdown going off to the out of the screen.
	$('.primary-menu ul.navbar-nav > li.dropdown > .dropdown-menu').each(function() {
		var menu = $('#header .primary-menu > div').offset();
		var dropdown = $(this).parent().offset();
		if ($("html").attr("dir") == 'rtl') {
			var rd = ($(window).width() - (dropdown.left + $(this).parent().outerWidth()));
			var i = (rd + $(this).outerWidth()) - (menu.left + $('#header .primary-menu > div').outerWidth());
		}else{
			var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .primary-menu > div').outerWidth());
		}
		if (i > 0) {
			if ($("html").attr("dir") == 'rtl') {
				$(this).css('margin-right', '-' + (i) + 'px');
			}else{
				$(this).css('margin-left', '-' + (i) + 'px');
			}
		}
	});
		
	}
});

$(function () {
    $(".dropdown li").on('mouseenter mouseleave', function (e) {
		if ($(window).width() > 991) {
			if ($('.dropdown-menu', this).length) {
				var elm = $('.dropdown-menu', this);
				var off = elm.offset();
				var l = off.left;
				var w = elm.width();
				var docW = $(window).width();
				var lr = ($(window).width() - (off.left + elm.outerWidth())); //offset right
				if ($("html").attr("dir") == 'rtl') {
					var isEntirelyVisible = (lr + w + 30 <= docW);
				}else{
					var isEntirelyVisible = (l + w + 30 <= docW);
				}
				if (!isEntirelyVisible) {
					$(elm).addClass('dropdown-menu-end');
					$(elm).parents('.dropdown:first').find('> a.dropdown-toggle > .arrow').addClass('arrow-end');
				} else {
					$(elm).removeClass('dropdown-menu-end');
					$(elm).parents('.dropdown:first').find('> a.dropdown-toggle > .arrow').removeClass('arrow-end');
				}
			}
		}
    });
});

// Login-signup dropdown
$('.login-signup ul.navbar-nav > li.dropdown > .dropdown-menu').each(function() {
	var menu = $('#header .primary-menu > div').offset();
	var dropdown = $(this).parent().offset();
	if ($("html").attr("dir") == 'rtl') {
		var rd = ($(window).width() - (dropdown.left + $(this).parent().outerWidth()));
		var i = (rd + $(this).outerWidth()) - (menu.left + $('#header .primary-menu > div').outerWidth());
	}else{
		var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .primary-menu > div').outerWidth());
	}
	if (i > 0) {
		if ($("html").attr("dir") == 'rtl') {
			$(this).css('margin-right', '-' + (i) + 'px');
		}else{
			$(this).css('margin-left', '-' + (i) + 'px');
		}
	}
});

$(function () {
    $(".login-signup .dropdown li").on('click', function (e) {
			if ($('.dropdown-menu', this).length) {
				var elm = $('.dropdown-menu', this);
				var off = elm.offset();
				var l = off.left;
				var w = elm.width();
				var docW = $(window).width();
				var lr = ($(window).width() - (off.left + elm.outerWidth())); //offset right
				if ($("html").attr("dir") == 'rtl') {
					var isEntirelyVisible = (lr + w + 30 <= docW);
				}else{
					var isEntirelyVisible = (l + w + 30 <= docW);
				}
				if (!isEntirelyVisible) {
					$(elm).toggleClass('dropdown-menu-end');
					$(elm).parents('.dropdown:first').find('> a.dropdown-toggle > .arrow').toggleClass('arrow-end');
				}
			}
    });
});

// DropDown Arrow
$('.primary-menu, .login-signup').find('a.dropdown-toggle').append($('<i />').addClass('arrow'));

// Mobile Collapse Nav
$('.primary-menu .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow, .login-signup .dropdown-toggle[href="#"], .login-signup .dropdown-toggle[href!="#"] .arrow').on('click', function(e) {
	if ($(window).width() < 991) {
        e.preventDefault();
        var $parentli = $(this).closest('li');
        $parentli.siblings('li').find('.dropdown-menu:visible').slideUp();
        $parentli.find('> .dropdown-menu').stop().slideToggle();
        $parentli.siblings('li').find('a .arrow.open').toggleClass('open');
		$parentli.find('> a .arrow').toggleClass('open');
	}
});

// Mobile Menu Button Icon
$('.navbar-toggler').on('click', function() {
	$(this).toggleClass('open');
});


// Header Sticky
$(window).on('scroll',function() {
	var stickytop = $('#header.sticky-top,#header.sticky-sm-top,#header.sticky-md-top,#header.sticky-lg-top,#header.sticky-xl-top').find(".primary-menu.bg-transparent");
	if ($(this).scrollTop() > 1){
		stickytop.addClass("sticky-on");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('sticky-logo'));
	}
	else {
		stickytop.removeClass("sticky-on");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('default-logo'));
	}
});


/*--------------------------------
   Copy the text
---------------------------------- */
$('#wallet-id').on('click', function() {
  var a = $(this);
  var b = $(this).find('#wallet-id-inner');
  var c = $(b).text();
  navigator.clipboard.writeText(c).then(
	function () {
		b.html("Copied!");
		a.addClass("text-body bg-light-5");
		setTimeout(function () {
			b.html(c);
			a.removeClass("text-body bg-light-5");
		}, 1100);
	}
   );
});


/*--------------------------------
   Items Image Resize
---------------------------------- */
function call_portrait() {
$(".nft-item .nft-item-img").each(function () {
	var img = $(this);
	img.imagesLoaded(function () {
		var width = img.width();
		var height = img.height();
		if(width < height){
			img.addClass('portrait').parent().addClass('portrait');
		}
	});
});
}

function call_height() {
$(".nft-item .nft-item-wrap").each(function () {	
	var height = $(this).css("width");
	$(this).css("height", height);
	
});
}

/*--------------------------------
   Load More Items
---------------------------------- */
$("#nftload > .load-item").slice(0, 8).show();
  if($("#nftload > .load-item:hidden").length == 0) {
	  $("#loadmore").hide();
	}
  $("#loadmore").on("click", function(e){
	e.preventDefault();
	$("#nftload > .load-item:hidden").slice(0, 4).slideDown();
	if($("#nftload > .load-item:hidden").length == 0) {
	  $("#loadmore").hide();
	}
	call_portrait();
	call_height();
});

/*--------------------------------
   Load More Items In Tabs
---------------------------------- */
function call_loadMoreTabs() {
	var tabId = $('.tab-content').find('> .active').attr('id');
	var tabIdClass = "#" + tabId + " .load-item";
	var tabIdClassHidden = tabIdClass + ":hidden";
	var loadMoreBtn = "#" + tabId + " .loadmore";
	
	$(tabIdClass).slice(0, 8).show();
	  if($(tabIdClassHidden).length == 0) {
		  $(loadMoreBtn).hide();
		}
	  $(loadMoreBtn).on("click", function(e){
		e.preventDefault();
		$(tabIdClassHidden).slice(0, 4).slideDown();
		if($(tabIdClassHidden).length == 0) {
		  $(loadMoreBtn).hide();
		}
		call_height();
		call_portrait();
	});
	call_height();
	call_portrait();
}

/*--------------------
   Tabs
-------------------- */
var triggerTabList = [].slice.call(document.querySelectorAll('a[data-bs-toggle="tab"]'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)
  triggerEl.addEventListener('hidden.bs.tab', function (event) {
	call_loadMoreTabs();
	call_height();
	call_portrait();
	
  })
})


$(document).ready(function () {
	call_loadMoreTabs();
});
$(window).on("load",function(){
	call_height();
	call_portrait();
});

$(window).on("resize",function(){
	call_height();
});


/*--------------------------------
   File Upload
---------------------------------- */
$("#uploadFile").on("change",function(){
   var nameReplace = $(this).val().replace(/^.*\\/, "");
   $("#fileName").text(nameReplace);
});

/*-------------------------------------------
   Select Method Option (create single page)
------------------------------------------- */
function methodOption() {
	var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".box").hide();
    $(targetBox).show();
}
$('#selectMethod input[type="radio"]:checked').each(methodOption);
$('#selectMethod input[type="radio"]').on("change",methodOption);


/*---------------------------------
   Carousel (Owl Carousel)
----------------------------------- */
$(".owl-carousel").each(function (index) {
    var a = $(this);
	
	if ($("html").attr("dir") == 'rtl') {
		var rtlVal = true
	}else{
		var rtlVal = false
    }
	$(this).owlCarousel({
		rtl: rtlVal,
		autoplay: a.data('autoplay'),
		center: a.data('center'),
		autoplayTimeout: a.data('autoplaytimeout'),
		autoplayHoverPause: a.data('autoplayhoverpause'),
		loop: a.data('loop'),
		speed: a.data('speed'),
		nav: a.data('nav'),
		dots: a.data('dots'),
		autoHeight: a.data('autoheight'),
		autoWidth: a.data('autowidth'),
		margin: a.data('margin'),
		stagePadding: a.data('stagepadding'),
		slideBy: a.data('slideby'),
		lazyLoad: a.data('lazyload'),
		navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		animateOut: a.data('animateout'),
		animateIn: a.data('animatein'),
		video: a.data('video'),
		items: a.data('items'),
		responsive:{
        0:{items: a.data('items-xs'),},
        576:{items: a.data('items-sm'),},
		768:{items: a.data('items-md'),},
        992:{items: a.data('items-lg'),}
        },
		onResize : callback
    });
	function callback(event) {
        $(".owl-carousel .nft-item .nft-item-wrap").each(function () {
            var height = $(this).css("width");
            $(this).css("height", height);
        });
	}
	//dropdown move
	a.on('show.bs.dropdown', '[data-bs-toggle=dropdown]', function() {
      var dropdown = bootstrap.Dropdown.getInstance(this);
      //$(dropdown._menu).insertAfter(a);
	  $(this).next('.dropdown-menu').insertAfter(a);
    });
});

/*---------------------------------------------------
    YouTube video to autoplay in modal
----------------------------------------------------- */
// Gets the video src from the data-src on each button
var $videoSrc;
$('.video-btn').on('click', function() {
    $videoSrc = $(this).data( "src" );
});
// when the modal is opened autoplay it
$('#videoModal').on('shown.bs.modal', function (e) {
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates...you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0" ); 
})
// stop playing the youtube video when I close the modal
$('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
}) 

/*------------------------
   tooltips
-------------------------- */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
			
/*------------------------
   Countdown
-------------------------- */
var countdown = $('.countdown[data-countdown-end]');

if (countdown.length > 0) {
countdown.each(function() {
		var $countdown = $(this),
			finalDate = $countdown.data('countdown-end');
		$countdown.countdown(finalDate)
			.on('update.countdown', function(event) {
			  var format = 
				  '<span>%-D</span>d'
				  + '<span class="blink_me">:</span>'
				  + '<span>%H</span>h'
				  + '<span class="blink_me">:</span>'
				  + '<span>%M</span>m'
				  + '<span class="blink_me">:</span>'
				  + '<span>%S</span>s';
			  if(event.offset.totalDays === 0) {
				  format = '<span>%H</span>h'
				  + '<span class="blink_me">:</span>'
				  + '<span>%M</span>m'
				  + '<span class="blink_me">:</span>'
				  + '<span>%S</span>s';
			  } 
			  if(event.offset.totalHours === 0) {
				  format = 
				  '<span>%M</span>m'
				  + '<span class="blink_me">:</span>'
				  + '<span>%S</span>s';
			  }
			  if(event.offset.totalMinutes === 0) {
				  format = '<span>%S</span>s';
			  }
			$countdown.html(event.strftime(format));
	})	
	.on('finish.countdown', function(event) {
		$countdown.addClass('d-none');
	});
});
}


/*------------------------
   Scroll to top
------------------------ */
$(function () {
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 150) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
});
$('#back-to-top').on("click", function() {
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});


$('.smooth-scroll a').on("click", function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 50}, 600);
});


})(jQuery);