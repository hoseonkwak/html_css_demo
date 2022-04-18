function loadEnd2() {alert('loadEnd2() 실행');}

//window.onload = loadEnd1;

// 방법1 : 모던 브라우져
//window.addEventListener('load', loadEnd1);

// 방법2 : 구형 IE 대응 -> 조건문 이용
if(window.attachEvent){
  window.attachEvent('onload', loadEnd2); //구형에서 적용
}else {
  window.addEventListener('load', loadEnd2);
}