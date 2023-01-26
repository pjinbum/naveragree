//label 태그를 클릭 했을때 실행할 함수
$('label').on('click' , function(e){
  //form태그 안에 있는 input을 전송하는 동작을  e.preventDefault();로 중단
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  if($(this).children('.checkbox-img').hasClass('checked')) {
    //.checkbox-img가 checked 클래스를 가지고 있을때 실행할 코드
    $(this).children('input[type="checkbox"]').attr('checked')
  } else {
    //.checkbox-img가 checked 클래스를 가지고 있지 않을때 실행할 코드
    $(this).children('input[type="checkbox"]').removeAttr('checked')

  }
})