
// when the document (website) is ready run a unamed 
$(document).ready(function(){
    //when you click on IE_Close (The x) do the below
   $('#IE_Close').click(function(){
    closePopup();  
   })
   
    // this is the IE_Warning fade
    $('#IE_Waring').mouseenter(function(){
        $(this).fadeTo('fast' , 1);
    });
   
     $('#IE_Waring').mouseleave(function(){
        $(this).fadeTo('fast' , 0.7);
    });
    // end ie warning fade
    
    
     var closePopup = function(){
        $('#IE_Waring').remove(); 
     }
     
     
     var submitConfirm = function(){
       alert("Message was sucesfully sent!");
     }
     
});


