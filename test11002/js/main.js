$(document).ready(function(){

  //Slick slider  
  $('.slick').slick({
        prevArrow: '.arows__prev',
        nextArrow: '.arows__next'
    });   
  //Slick slider 

  //adaptiv header
    $('.menu__trigger').click(function(event){
      event.preventDefault();
      $('.menu__list').stop().slideToggle(200);
    });
    $(window).resize(function(){
      if ($(window).width()>800){
        $('.menu__list').removeAttr('style');
      }
    });
  //adaptiv header

  //sticky header
    $(function(){
      $(window).scroll(function(){
        var top = $(document).scrollTop();
        if (top < 80) {
          $('.header').css({top:'0', position: 'relative', background: 'transparent',height:'160px','border-bottom': 'none'});
          $('.logo__link').removeClass("logo__link--miniScroll");    
          $('.header-help').css({display:'none'});
            
            
        }else {
          $('.header').css({top: '0', position: 'fixed', width: '100%', background:'rgb(145, 145, 145)',height:'40px', 'border-bottom': '1px solid #3598bf'});
          $('.logo__link').addClass("logo__link--miniScroll");
          $('.header__logo').css({'margin-top': "0px"});
          $('.header-help').css({display:'block'});
        }
      });
    });
  //sticky header
    
  //script button top
    $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
        
    $(function() {
     $.fn.scrollToTop = function() {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() >= "200") $(this).fadeIn("slow");
      var scrollDiv = $(this);
      $(window).scroll(function() {
       if ($(window).scrollTop() <= "200") $(scrollDiv).fadeOut("slow");
       else $(scrollDiv).fadeIn("slow");
      });
      $(this).click(function() {
       $("html, body").animate({scrollTop: 0}, "slow");
      });
     };
    });
    
    $(function() {
     $("#go-top").scrollToTop();
    });
  //script button top

  //tabs content
    $(".content__item").not(":first").hide();
    $(".main .tabs__link").click(function() {
    $(".main .tabs__link").removeClass("active").eq($(this).index()).addClass("active");
    $(".content__item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
  //tabs content

  //Hamburger Icons Animations
  const menuFive = document.querySelector('.menuFive');    
  function addClassFunFive() {
      this.classList.toggle("clickMenuFive");
  }  
  menuFive.addEventListener('click', addClassFunFive);
  //Hamburger Icons Animations



  });


