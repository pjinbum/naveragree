$('input').focus(function(){
  $(this).addClass('inputboxact')
});

// 

$('.namebox').on('focus' , function(){
  if($(this).val().length >= 5){
    $('.green-word').css('display' , 'block');
    $('.redred').css('display' , 'none');


  } else {
    $('.redred').css('display' , 'block');
    $('.green-word').css('display' , 'none');

  }
});


// 

$('button').focus(function(){
  $(this).addClass('inputboxact')
});

$('button').focusout(function(){
  $(this).removeClass('inputboxact')
});

// 






// 


$('.inputbox').focusin(function(){
  $('.red-word').css('visibility' , 'hidden')
});



$('.inputbox').focusout(function(){
  $('.red-word').css('visibility' , 'visible')
});

// 

$('.human button').on('click' , function(){
  $(this).toggleClass('radiochk');
});

// if(){

// } else {

// }

// $('.pic1').on('focus' , function(){

//   if($(this).value.length >= 5){
//      let 이미지경로 = $(this).find('img').attr("src");
//     $('.posion img').attr(이미지경로 , 'url(./image/m_icon_pw_step_04.png)' )

//   } else {

//     $('.posion img').attr(이미지경로 , 'url(./image/m_icon_pw_step_09.png)' )

//   }
// })

$('.pic1').on('focus' , function(){
  if($(this).val().length >= 5){
    $('.posion img').attr('src' , './image/m_icon_pw_step_04.png')
  } else {
    $('.posion img').attr('src' , './image/m_icon_pw_step_09.png')
  }
})



$('.pic2').on('focus' , function(){
  if($(this).val().length >= 5){
    $('.posion1 img').attr('src' , './image/m_icon_pw_step_07.png')
  } else {
    $('.posion1 img').attr('src' , './image/m_icon_pw_step_10.png')
  }
})


// if($('.yearlo').val().length != 4){
//   $('birth1-1').css({'display' : 'block'});
// } else if {
//   $('birth1-2').css({'display' : 'block'});
// } else if {
//   $('birth1-3').css({'display' : 'block'});
// }

// $('.yearlo').on('focus' , function(){
//   if($(this).val().length != 4){
//   $('birth1-1').css({'display' : 'block'});
//   }});

 $('.yearlo').on('focus' , function(){
  if($(this).val().length != 4){
    $('.birth1-1').css({'display' : 'block'})

  } else {
    $('.birth1-1').css({'display' : 'none'})
  }
 })

 $('.month').on('focus' , function(){
  if($(this).val() == '월' ){
    $('.birth1-2').css({'display' : 'block'})

  } else {
    $('.birth1-2').css({'display' : 'none'})
  }
 })

 $('.daylo').on('focusin' , function(){
  if($(this).val().length == 0 ){
    $('.birth1-3').css({'display' : 'block'})

  } else {
    $('.birth1-3').css({'display' : 'none'})
  }
 });

//  $('.daylo').on('focusout' , function(){
 
   
  
//  });

$('#jojoin').on('click' , function(e){
   if(
    $('.namebox').val().length >= 5 &&
    $('.pic1').val().length >= 5 &&
    $('.pic2').val().length >= 5
   
    ) { $(this).submit();

   } else {
     
    e.preventDefault();

   }   


})

