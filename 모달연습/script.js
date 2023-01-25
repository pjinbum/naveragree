$('.modal img').click(function(){
  let imageLo = $(this).attr("src");
  let nameDa = $(this).attr("alt");
  $('.blank img').attr({
    src : imageLo,
    alt : nameDa
  });
  // $('aside div').fadeIn();
  
})

$('.blank').click(function(){
  let lulu = $(this).find('img').attr('src' , './image/다운로드 (2).jpg'); 
})