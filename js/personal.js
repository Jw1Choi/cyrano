$(function(){
    $(".privacyBtn").click(function(){
       $("#privacy").fadeIn(200);
       $("#privacy").addClass('blur');
       $("body").addClass('overflow');
   });

   // 팝업닫기
   $("#privacy .closeBtn").click(function(){
       $("#privacy").fadeOut(200);
       $("#privacy").removeClass('blur');
       $(".overflow").removeClass('overflow');

   });
})