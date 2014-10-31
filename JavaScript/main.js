
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
     
     
     
     
     
     
     
     
     
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56259696-1', 'auto');
  ga('send', 'pageview');


     
});


