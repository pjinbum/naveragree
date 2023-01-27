//var , let & const 차이점
//변수에 어떤 값을 넣기 위해서 확보한 공간
// = 이라는 연산자로 변수 값을 할당

//var , let은 변수 선언 후 값 재할당 가능
let a = 123;
console.log(a);
a = 456;
console.log(a);

// const는 변수 선언후 값 재할당 불가능
// const b = 123;
// b = 456;
// console.log(b);

// 콘스탄트의 약자 
//유저정보나 절대 변해서는 안되는 값에 사용

//let, var 는 먼저 변수 선언 후 값 할당 가능 
//const는 변수 선언과 동시에 값이 할당 되어야 한다
let c;
//undefined = 변수는 존재하나 값이 할당되지 않아서 자료형이 정해지지 않았을뿐
c = '집에 가고싶다'
console.log(c);

let num;
//++: 증감연산자
//초기값 : 1 / num이 100과 같아질때 까지 
//자바 스크립트 사칙 연산
//+ : 더하기
//- : 빼기
// /: 나누기
// *: 곱하기
// %: 나머지값
// for(num=1; num<=100; num++){
//   console.log(num);
//   //1부터 100까지 숫자중에 짝수만 출력
//   if(num % 2 == 0){
//     document.write(num, '<br>', '<hr>');
//   }
  
// }

for(num=1; num<=100; num++){
  console.log(num);
  //1부터 100까지 숫자중에 짝수만 출력
  if(num % 2 !== 0){
    document.write(num, '<br>', '<hr>');    
    // document.write(num+1, '<br>', '<hr>');   
  }
  
}
