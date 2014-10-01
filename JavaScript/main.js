
// when the document (website) is ready run a unamed 
$(document).ready(function(){
    //when you click on IE_Close (The x) do the below
   $('#IE_Close').click(function(){
    closePopup();  
   })
   
     var closePopup = function(){
        $('#IE_Waring').remove(); 
     }
});


