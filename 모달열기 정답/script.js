//img modal에 관한 코드


$(".img-list img").click(function() {
  let 이미지경로 = $(this).attr("src");
  let 대체텍스트 = $(this).attr("alt");
  $("#img-modal-box img").attr({
    src : 이미지경로, 
    alt : 대체텍스트
  });
  $('#img-modal').fadeIn();
})

$("#img-modal-btn").click(function () {
  $("#img-modal").fadeOut();
});


//modal Code
$("#open-btn").click(function () {
  $('#modal').fadeIn();
  $('#modal-box').delay(400).animate({opacity:1});

  
});

$("#modal-close").click(function () {
  $('#modal').fadeOut();
  $('#modal-box').delay(400).animate({opacity:0});

})


