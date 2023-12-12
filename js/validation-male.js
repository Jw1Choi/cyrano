$(document).ready(function(){
    $('#stb_form_submit_button').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex2 = /^[가-힣]+$/;
        const regex = /^[|0-9|]+$/;
        var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // var position = $('#position').val();
        // var license = $('#license').val();
        // var id = $('#id-number').val();
        // var name = $('#name').val();
        var email = $('#stb_email').val();
        // var ph = $('#phone').val();
        // var message = $('#message').val();
        var agree = $('#stb_policy').is(":checked");
        
        
        $('#stb_email,#stb_policy').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
        

        if (agree == false){
            var error = true;
            // $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#stb_subscribe_form').prop("action", "https://stibee.com/api/v1.0/lists/Cvq5Ijtfuxe1GpD2MnZAnn_5STm_bA==/public/subscribers");
           $('#stb_form_submit_button').text('전송 중입니다');
           
            
     $('#stb_form_submit_button').prop("disabled", false);
    $('#stb_form_submit_button').css({transition:"1s"});
    $('#stb_form_submit_button').css({background:"#222222"});
    $('#stb_form_submit_button').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "hoa();");

   
        }
    });    

   

});


function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();

}


 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 

 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }

   
function form_check(){

const regex2 = /^[가-힣]+$/;
const regex = /^[|0-9|]+$/;
var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// var position = $('#position').val();
// var license = $('#license').val();
// var id = $('#id-number').val();
// var name = $('#name').val();
var email = $('#stb_email').val();
// var ph = $('#phone').val();
// var message = $('#message').val();
var agree = $('#stb_policy').is(":checked");


    if(email.match(regExp) != null)
    {

          
                if (agree == true)
                {
                    $('#stb_form_submit_button').css({transition:"1s"});
                   $('#stb_form_submit_button').prop("disabled", false);
                   $('#stb_form_submit_button').text("지금 신청하기");
                   $('#stb_form_submit_button').css({background:"#ea907a"});
                   $('#stb_form_submit_button').css({cursor:"pointer"});
                }
                else
                {
                    $('#stb_form_submit_button').css({transition:"1s"});
                    $('#stb_form_submit_button').prop("disabled", true);
                    $('#stb_form_submit_button').text("개인정보 동의를 해주세요");
                    $('#stb_form_submit_button').css({background:"#595959"});
                    $('#stb_form_submit_button').css({cursor:"default"});     
                }
                
      
       
    }
    else if(email.length>0)
    {
        $('#stb_form_submit_button').css({transition:"1s"});
        $('#stb_form_submit_button').prop("disabled", true);
        $('#stb_form_submit_button').text("이메일 주소를 확인하세요.");
        $('#stb_form_submit_button').css({background:"#595959"});
        $('#stb_form_submit_button').css({cursor:"default"});     
    }
    else
    {
        $('#stb_form_submit_button').css({transition:"1s"});
        $('#stb_form_submit_button').prop("disabled", true);
        $('#stb_form_submit_button').text("이메일 주소를 확인하세요.");
        $('#stb_form_submit_button').css({background:"#595959"});
        $('#stb_form_submit_button').css({cursor:"default"});     
    }

}



$(function(){
    $('#stb_email, #stb_policy, #stb_form_submit_button').bind("keyup click",form_check);
   })