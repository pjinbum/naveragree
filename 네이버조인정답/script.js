//input 에 fucus가 in 됬을때 그것의 부모 .inputbox에게 inputboxact 클래스를 준다 (border값)

$('input').focusin(function(){
  $(this).parent('.inputbox').addClass('inputboxact');
});


//input 에 fucus가 out 됬을때 그것의 부모 .inputbox에게 inputboxact 클래스를 없애준다 (border값)
$('input').focusout(function(){
  //inputboxact 클래스를 remove
  $(this).parent('.inputbox').removeClass('inputboxact');
});



let idveri , pwveri , pwchkveri , nameveri , birthveri , genderveri , phoneveri , addressveri = false;
let mailveri = true;

//아이디
//#userid input 에서 focusout 됬을때 만약에 그것의 글자수가 0이라면 (조건1)
//len이 5보다 작거나 20보다 클때 (조건2) - 논리연산자 사용 or ||
//#userid .warn dp '5~20자의 영소문자만 사용 가능합니다. 라고 쓴다 (실행문1)
$('#userid input').focusout(function(){
  let len = $(this).val().length;
  idveri = false
  if(len == 0){
    $('#userid .warn').html('<span class="text-red">필수 정보입니다.</span>');
  } else if(len < 5||len > 20) {
    $('#userid .warn').html('<span class="text-red">5~20자의 영소문자만 사용 가능합니다.</span>');
  } else {
    $('#userid .warn').html('<span class="text-green">멋진 아이디네요!</span>');
    idveri = true;
  }
});



// 비밀번호


//#userpw input 에서 focusout 됬을때 만약에 그것의 글자수가 0이라면 (조건1)
//#userpw .warn dp '필수정보입니다. 라고 쑨다 실행문 1 text-red 부여
$('#userpw input').focusout(function(){
  let len = $(this).val().length;
  pwveri = false;
  if(len==0){
    $('#userpw .warn').html('<span class="text-red">필수 정보입니다</span>');
    $('#userpw .inputbox img').attr('src' , './image/m_icon_pw_step_10.png');
    $('#userpw .inputbox img').empty();
    

   } else if(len < 8 || len >16){
    $('#userpw .warn').html('<span class="text-red">8~16자의 영문 대소문자, 숫자 , 특수문자만 사용 가능합니다.</span>');
    $('#userpw .inputbox p').html('<span class="text-red">사용 불가</span>');
    $('#userpw .inputbox img').attr('src' , './image/m_icon_pw_step_10.png' );
   } else {
    pwveri = true;
    // #userpw .warn 안에 내용을 비운다 -> empty ()사용
    // #userpw . inputbox p 한테 '안전'
    // #userpw . inputbox img src 경로 -> 바꾸기
    $('#userpw .warn').empty();
    $('#userpw .inputbox p').html('<span class="text-green">안전</span>');
    $('#userpw .inputbox img').attr('src' , './image/m_icon_pw_step_04.png' );
    
   }
})