// window.onload= function() {
//     document.getElementById('toggler').onclick = function() {
//         openbox('box', this);
//         return false;
//     };
// };
// function openbox(id, toggler) {
//     var div = document.getElementById(id);
//     if(div.style.display == 'block') {
//         div.style.display = 'none';
//         toggler.innerHTML = '<img src="img/ar-circle-down.png" alt="circle">';
//     }
//     else {
//         div.style.display = 'block';
//         toggler.innerHTML = '<img src="img/ar-circle-up.png" alt="circle">';
//     }
// }

$(function(){
    $('.view-source .hide').hide();
    $a = $('.view-source a');
    $a.on('click', function(event) {
      event.preventDefault();
      $a.not(this).next().slideUp(700);
      $(this).next().slideToggle(700);
    });
});


// v1 our-team
$("#tabs>a").click( function () {
        
        $("#tabs>a").removeClass("current");
        $(this).addClass("current");
        
        $(".tabs_content>div").hide();
        t_content=$(this).attr("href");
        $(t_content).show();

        return false
    })
$("#tabs>a:first").trigger("click");

// v2 our-clients
$("#tabs1>a").click( function () {
        
        $("#tabs1>a").removeClass("current");
        $(this).addClass("current");
        
        $(".tabs_content1>div").hide();
        t_content1=$(this).attr("href");
        $(t_content1).show();

        return false
    })
$("#tabs1>a:first").trigger("click");

// v3 our-clients-testimonials
$("#tabs2>a").click( function () {
        
        $("#tabs2>a").removeClass("current");
        $(this).addClass("current");
        
        $(".tabs_content2>div").hide();
        t_content2=$(this).attr("href");
        $(t_content2).show();

        return false
    })
$("#tabs2>a:first").trigger("click");

// v3
$("#tabs3>a").click( function () {
        
        $("#tabs3>a").removeClass("current");
        $(this).addClass("current");
        
        $(".tabs_content3>div").hide();
        t_content3=$(this).attr("href");
        $(t_content3).show();

        return false
    })
$("#tabs3>a:first").trigger("click");