// when the document (website) is ready run a unamed 
$(document).ready(function () {
    //when you click on IE_Close (The x) do the below
    $('#IE_Close').click(function () {
        closePopup();
    })
    
  
   
   

    
      $('.downloader').click(function(){
        $(this).css("background" , "#3498db");
    });
    
    
  function getInternetExplorerVersion(){
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

if(getInternetExplorerVersion() !== -1){
   window.location = "http://infinitestrikeltd.github.io/unsupported.html";
   
}


    
    // this is the IE_Warning fade
    $('#IE_Waring').mouseenter(function () {
        $(this).fadeTo('fast', 1);
    });

    $('#IE_Waring').mouseleave(function () {
        $(this).fadeTo('fast', 0.7);
    });
    
    
    
   
    // end ie warning fade

    
    
    
    $('.toggleableSelection').toggle();

    var closePopup = function () {
        $('#IE_Waring').remove();
    }

   


    var submitConfirm = function () {
        alert("Message was sucesfully sent!");
    }

    // ------------------------------------------------
    
   

    $('#toggleButton').click( function() {
        $('.toggleableSelection').slideToggle();
         
    });
    
    
    //------------------------------------------
    
    var time = Date();

    $("#date_holder").prepend("Last Updated - " + time);

    // Initial Comment : hey hackers try to breach my encryption methods 
    //
    // (C) 2014 Infinite Strike - Ashli Artimis
    //
    // Hash Encryption Method Generated by usr_INFINITESTRIKEASHLI_vBot_2180 at
    // Thursday 11/9/14 2:25:35 AM (CST) 
    // MD5: 5d41402abc4b2a76b9719d911017c592
    
    
    var encrypt =(function(){function e(e,t){var o=e[0],u=e[1],a=e[2],f=e[3];o=n(o,u,a,f,t[0],7,-680876936);f=n(f,o,u,a,t[1],
12,-389564586);a=n(a,f,o,u,t[2],17,606105819);u=n(u,a,f,o,t[3],22,-1044525330);o=n(o,u,a,f,t[4],7,-176418897);f=n(f,o,u,a,t[5],
12,1200080426);a=n(a,f,o,u,t[6],17,-1473231341);u=n(u,a,f,o,t[7],22,-45705983);o=n(o,u,a,f,t[8],7,1770035416);f=n(f,o,u,a,t[9],
12,-1958414417);a=n(a,f,o,u,t[10],17,-42063);u=n(u,a,f,o,t[11],22,-1990404162);o=n(o,u,a,f,t[12],7,1804603682);f=n(f,o,u,a,t[13],
12,-40341101);a=n(a,f,o,u,t[14],17,-1502002290);u=n(u,a,f,o,t[15],22,1236535329);o=r(o,u,a,f,t[1],5,-165796510);f=r(f,o,u,a,t[6],
9,-1069501632);a=r(a,f,o,u,t[11],14,643717713);u=r(u,a,f,o,t[0],20,-373897302);o=r(o,u,a,f,t[5],5,-701558691);f=r(f,o,u,a,t[10],
9,38016083);a=r(a,f,o,u,t[15],14,-660478335);u=r(u,a,f,o,t[4],20,-405537848);o=r(o,u,a,f,t[9],5,568446438);f=r(f,o,u,a,t[14],
9,-1019803690);a=r(a,f,o,u,t[3],14,-187363961);u=r(u,a,f,o,t[8],20,1163531501);o=r(o,u,a,f,t[13],5,-1444681467);f=r(f,o,u,a,t[2],
9,-51403784);a=r(a,f,o,u,t[7],14,1735328473);u=r(u,a,f,o,t[12],20,-1926607734);o=i(o,u,a,f,t[5],4,-378558);f=i(f,o,u,a,t[8],
11,-2022574463);a=i(a,f,o,u,t[11],16,1839030562);u=i(u,a,f,o,t[14],23,-35309556);o=i(o,u,a,f,t[1],4,-1530992060);f=i(f,o,u,a,t[4],
11,1272893353);a=i(a,f,o,u,t[7],16,-155497632);u=i(u,a,f,o,t[10],23,-1094730640);o=i(o,u,a,f,t[13],4,681279174);f=i(f,o,u,a,t[0],
11,-358537222);a=i(a,f,o,u,t[3],16,-722521979);u=i(u,a,f,o,t[6],23,76029189);o=i(o,u,a,f,t[9],4,-640364487);f=i(f,o,u,a,t[12],
11,-421815835);a=i(a,f,o,u,t[15],16,530742520);u=i(u,a,f,o,t[2],23,-995338651);o=s(o,u,a,f,t[0],6,-198630844);f=s(f,o,u,a,t[7],
10,1126891415);a=s(a,f,o,u,t[14],15,-1416354905);u=s(u,a,f,o,t[5],21,-57434055);o=s(o,u,a,f,t[12],6,1700485571);f=s(f,o,u,a,t[3],
10,-1894986606);a=s(a,f,o,u,t[10],15,-1051523);u=s(u,a,f,o,t[1],21,-2054922799);o=s(o,u,a,f,t[8],6,1873313359);f=s(f,o,u,a,t[15],
10,-30611744);a=s(a,f,o,u,t[6],15,-1560198380);u=s(u,a,f,o,t[13],21,1309151649);o=s(o,u,a,f,t[4],6,-145523070);f=s(f,o,u,a,t[11],
10,-1120210379);a=s(a,f,o,u,t[2],15,718787259);u=s(u,a,f,o,t[9],21,-343485551);e[0]=m(o,e[0]);e[1]=m(u,e[1]);e[2]=m(a,e[2]);e[3]=m(f,e[3])}
function t(e,t,n,r,i,s){t=m(m(t,e),m(r,s));return m(t<<i|t>>>32-i,n)}function n(e,n,r,i,s,o,u){return t(n&r|~n&i,e,n,s,o,u)}
function r(e,n,r,i,s,o,u){return t(n&i|r&~i,e,n,s,o,u)}function i(e,n,r,i,s,o,u){return t(n^r^i,e,n,s,o,u)}
function s(e,n,r,i,s,o,u){return t(r^(n|~i),e,n,s,o,u)}function o(t){var n=t.length,r=[1732584193,-271733879,-1732584194,271733878],i;
for(i=64;i<=t.length;i+=64){e(r,u(t.substring(i-64,i)))}t=t.substring(i-64);var s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(i=0;i<t.length;i++)s[i>>2]|=t.charCodeAt(i)<<(i%4<<3);s[i>>2]|=128<<(i%4<<3);if(i>55){e(r,s);for(i=0;i<16;i++)s[i]=0}s[14]=n*8;e(r,s);return r}
function u(e){var t=[],n;for(n=0;n<64;n+=4){t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24)}return t}
function c(e){var t="",n=0;for(;n<4;n++)t+=a[e>>n*8+4&15]+a[e>>n*8&15];return t}
function h(e){for(var t=0;t<e.length;t++)e[t]=c(e[t]);return e.join("")}
function d(e){return h(o(unescape(encodeURIComponent(e))))}
function m(e,t){return e+t&4294967295}var a="0123456789abcdef".split("");return d})();

// sxperimental layout functions that can help in overall edits.
    
 
 var setNewIntro = function(){
    var messages = ["This is a Buffer and will never be shown",
                    "<h1>Social Media Person Needed! <a href = 'http://infinitestrikeltd.github.io/Contact.html'>Sign Up!</a></h1>", //0
                    "<h1>Welcome to Infinite Strike, this is the new home! we are now on git hub!</h1>",       //1
                    "<h1>Follow us on social media!</h1>",
                    "<h1 style = 'color:yellow;font-family:Minecraft;text-shadow:rgba(0,0,0,0.5) 0px 0px 7px;'>This is not Minecraft!!</h1>"];       //2
                                               // So on and so forth
     
    var setRandomness = messages.length-1;
    var randomChoice = Math.floor(Math.random() * setRandomness) + 1
    //alert(randomChoice);
     
     
    $('#message_holder').prepend(messages[randomChoice])
    
 
 }   
    
  
 
 
 setNewIntro();
    
    
$(window).bind("resize", resizeWindow);
		function resizeWindow(e){
			var newWindowWidth = $(window).width();
            // If width width is below 600px, switch to the mobile stylesheet
			 if(newWindowWidth < 600){ 				
                $("link[rel=stylesheet]").attr({href : "http://infinitestrikeltd.github.io/mobile.css"});
                 closePopup();
                } 			
                // Else if width is above 600px, switch to the large stylesheet 
                else if(newWindowWidth > 600){
				$("link[rel=stylesheet]").attr({href : "http://infinitestrikeltd.github.io/style.css"});
			}
		}    
    
    
});
