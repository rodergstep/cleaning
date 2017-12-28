jQuery(document).ready(function($) {

  slickSlider();
  navMenu();
  new WOW().init();

  $.ajax("/interface/dashboard/response", {})
    .done(function(data) {
      var user = JSON.parse(data);

      if (user.email) {
        var email = (user.email) ? user.email : "";
        var phone = (user.phone) ? user.phone : "";
        var address = (user.address) ? user.address : "";
        var username = (user.username) ? user.username : "";


        $(".get_a_free_queote input[name='name']").val(username);
        $(".get_a_free_queote input[name='email']").val(email);
        $(".get_a_free_queote input[name='phone']").val(phone);
        $(".get_a_free_queote textarea[name='address']").val(address);


        text = "Welcome";
        $('.login-block').append('<form action="http://cleaning-master.com/interface/site/logout" method="post"><input type="hidden" name="_csrf-frontend" value="' + username + '"><button type="submit" class="">Logout (' + username + ')</button></form>');
      } else
        text = "Login";
      $(".login-block a").text(text);
      $(".login-block").show();
    }).fail(function(data) {
      $(".login-block a").text("Login");
      $('.login-block').append('<a href="/interface/signup">Sign Up</a>');
      $(".login-block").show();
    });


  function navMenu() {
    $('.mobile_nav_button .burger').click(function(event) {
      $('.mobile_menu').slideToggle(300)
    });
    $('.mobile_menu').each(function() {
      $(this).find('.sub_menu').hide();
      if ($(this).find('.mobile_dropdown_button').hasClass('mobile_dropdown_active')) {
        $(this).find('.sub_menu').show();
      }
      $(this).find('.mobile_dropdown_button').click(function() {
        if (!$(this).hasClass('mobile_dropdown_active')) {
          $(this).parent().parent().parent().find('.mobile_dropdown_active').removeClass('mobile_dropdown_active').parent().find('.sub_menu').slideUp(300);
          $(this).addClass('mobile_dropdown_active');
          $(this).parent().find('.sub_menu').slideDown(300);
        } else {
          $(this).removeClass('mobile_dropdown_active');
          $(this).parent().find('.sub_menu').slideUp(300);
        }
      });
    });
  }


  function slickSlider() {
    $('#main_slider .slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      adaptiveHeight: false
    });

    $('#all_revies .revies .slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      nextArrow: '<div class="arrow-right "></div>',
      prevArrow: '<div class="arrow-left "></div>',
      adaptiveHeight: true

    });


    $('#client_say .slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      nextArrow: '<div class="arrow-right "></div>',
      prevArrow: '<div class="arrow-left "></div>',
    });

  }
  $('.datepicker').periodpicker({
    likeXDSoftDateTimePicker: true,
    norange: true,
    cells: [1, 1],
    withoutBottomPanel: true,
    yearsLine: false,
    title: false,
    fullsizeButton: false,
    hideAfterSelect: true,
    hideOnBlur: true,
    clearButtonInButton: true,
    formatDate: 'MM/DD/YYYY',
    minDate: moment().format("MM/DD/YYYY")
  });

  $('.datetimer').TimePickerAlone({
    inputFormat: 'h:m A',
    steps: [1, 5],
    seconds: false,
    defaultTime: ''
  });

  $("#img-captcha").click(function() {
    $('#img-captcha').attr('src', '/includes/captcha.php?id=' + Math.random() + '');
  });

  $('a.js-show-popup').magnificPopup({
    mainClass: 'mfp-3d-unfold',
    removalDelay: 300,
    midClick: true
  });

  // Faq

  $('.block-faq--nav').on('click', function(ev) {
    var target = ev.target;

    if ($(target).is('.faq-nav-item--title')) {
      $(target).siblings('.faq-nav--hidden').stop(true, false).slideToggle();
      $(target).parent('.faq-nav--item').toggleClass('is-open');
    }
  });

  $('div#rating').rating({
    fx: 'full',
    width: 24
  });

  $('.showDesc').click(function() {
    $('.serviceDetails').slideUp();
    $(this).parent().parent().find('.serviceDetails').slideDown();
  });

  $('.hideDesc').click(function() {
    $(this).parent().slideUp();
  });

  $('#pricing_tables .button a').click(function() {
    var name = $(this).attr('data-name'),
      type = $(this).attr('data-type');
    $('#getQuote select option[value="' + name + ' cleaning"]').prop('selected', 'selected');
    if (type != "") {
      $('#getQuote h2').html("Reserve Now");
      $('#getQuote input[type="submit"]').val("Submit");
    }
  });

  $('.reserve a').click(function() {
    var name = $(this).attr('data-name'),
      type = $(this).attr('data-type');
    $('#getQuote select option[value="' + name + ' cleaning"]').prop('selected', 'selected');
    if (type != "") {
      $('#getQuote h2').html("Reserve Now");
      $('#getQuote input[type="submit"]').val("Submit");
    }
  });

  $('.service_box_wrapper .js-show-popup').click(function() {
    $('#getQuote h2').html("Get a Quote");
    $('#getQuote input[type="submit"]').val("Get a Quote");
  });



  $('.tab_nav').click(function() {
    if (!$(this).hasClass('active')) {
      $('.tab_content').hide();
      $('.tab_nav.active').toggleClass('active');
      var id = $(this).find('input').val();
      $('[data-id="ttab' + id + '"]').show();
      $(this).toggleClass('active');
    }
  });

  $('#getQuote .closePopup').click(function() {
    $('#getQuote > button').click();
  });

  $('.get_a_free_queote i').click(function() {
    $(this).parent().find('input').focus();
  });

  $('.promo_link').click(function() {
    $('.cart_promo').toggle();
  });

  $('.cart_promo input').keyup(function() {
    if ($(this).val() != '') {
      $(this).next().addClass('active');
    } else {
      $(this).next().removeClass('active');
    }
    $(this).change();
  });

  $(".cart_promo input").bind("paste", function(e) {
    // access the clipboard using the api
    var pastedData = e.originalEvent.clipboardData.getData('text');
    if (pastedData != '') {
      $(this).next().addClass('active');
    } else {
      $(this).next().removeClass('active');
    }
  });

  $('.cart_promo span').click(function() {
    if ($(this).prev().val() != '') {
      var promo_code = $(this).prev().val();

      var flag = jQuery.ajax({
        type: 'GET',
        url: '/ajax/checkPromo/',
        data: { promo: promo_code },
        async: false
      }).responseText;

      if (flag && flag > 0) {
        now_price = $('#full_price_field').val();
        discounted = (now_price - (now_price * flag / 100)).toFixed(2);
        $('.final_price').find('i').html(discounted);
        $('.payment_form_container').find('input[name*="price"]').val(discounted);
        $('.cart_promo').hide();
        $('.promo_link').hide();
      }
    }
  });
});

/*
function validate_captcha(obj){
    var captcha = obj.captcha.value;
    var flag = jQuery.ajax({
        type: 'GET',
        url: '/ajax/checkCaptcha/',
        data: {captcha:captcha},
        async: false
    }).responseText;
  
    if(flag==1)
    {
        $('#mess > div').html('Incorrect code. Please try again');
        centrate_mess();
        $('#mess').fadeIn('slow');
        setTimeout(togg,2000);
        return false;
    }else{
        return true;
    }
}
*/

function validate_captcha(obj) {
  var response = grecaptcha.getResponse(recaptcha2);
  //recaptcha failed validation
  if (response.length == 0) {
    //$('#recaptcha-error').show();
    return false;
  }
  //recaptcha passed validation
  else {
    //$('#recaptcha-error').hide();
    return true;
  }
}

function validate_captcha_main(obj) {
  var response = grecaptcha.getResponse(recaptcha1);
  //recaptcha failed validation
  if (response.length == 0) {
    //$('#recaptcha-error').show();
    return false;
  }
  //recaptcha passed validation
  else {
    //$('#recaptcha-error').hide();
    return true;
  }
}



function togg() {
  jQuery('#mess').fadeOut('slow');
}

function centrate_mess() {
  var WH = jQuery(window).height();
  var WW = jQuery(window).width();

  var BH = jQuery('#mess > div').height();
  var BW = jQuery('#mess  > div').width();

  var topP = (WH - BH + 20) / 2;
  var leftP = (WW - BW - 4) / 2;
  jQuery('#mess > div').css({ top: topP + "px", left: leftP + "px" })
}