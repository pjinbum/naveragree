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
});

//비밀번호 재확인
//'#userpw-chk input 에서 포커스 아웃 됬을때 value값의 length가 0이라면 (조건1)
//'#userpw-chk .warn에 빨간글씨로 필수정보 입니다. (실행문1)


//그렇지 않다면 그것의 값과 #userpw input 안에 들어있는 값이 같은가? (조건2)
//#userpw-chk .warn에 empty()로 비운다. (실행문1)
//#userpw-chk .inputbox img의 속성중 src값을 변경한다. .
// phoneveri 변수를 true로 변경 

//그렇지 않다면 else
//
//
$('#userpw-chk input').focusout(function(){
  let userpwchk = $(this).val();
  if(userpwchk.length==0){
    $('#userpw-chk .warn').html('<span class="text-red">필수 정보입니다.</span>')
    $('#userpw-chk .inputbox img').attr( 'src' , './image/m_icon_pw_step_02.png')


  } else if (userpwchk == $('#userpw input').val()) {
    pwchkveri = true;
    //remove / empty
    //remove 요소 자체를 지우고 empty 요소 안 내용을 지운다.
    $('#userpw-chk .warn').empty();
    $('#userpw-chk .inputbox img').attr('src' , './image/m_icon_pw_step_07.png');
    
  } else {
    $('#userpw-chk .warn').html('<span class="text-red">비밀번호가 일치하지 않습니다</span>');
    $('#userpw-chk .inputbox img').attr('src' , './image/m_icon_pw_step_02.png');
  }
});

//이름
//#username input 에서 focusout될때
$('#username input').focusout(function(){
  let username = $('#username input').val();
  nameveri = false;
  //js 정규 표현식 입력값을 체크
  //형식 : /정규식/
  //문자와 숫자가 아닌것을 걸러낼수 있음 ..여기서^표시는 부정의 표시
  let reg = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/g;
  if(username.length == 0){
    $('#username .warn').html('<span class="text-red">필수 정보 입니다.</span>');
  } else if(reg.test(username)){
    //정규식을 만족하면  true 만족하지 않으면 false 반환
    $('#username .warn').html('<span class="text-red">한글과 영문 대 소문자를 사용하세요(특수기호 사용 불가)</span>');
  } else {
    nameveri = true;
    $('#username .warn').html('<span class="text-green">잘하셨습니다(특수기호 사용 불가)</span>');
    // $('#username .warn').empty();

  }
});