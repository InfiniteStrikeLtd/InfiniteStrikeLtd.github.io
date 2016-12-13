/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var footerList = [
    new ListItem("Home","http://infinitestrikeltd.github.io"), 
    new ListItem("Games","http://infinitestrikeltd.github.io/games"),
    new ListItem("Contact","http://infinitestrikeltd.github.io/Contact"),
    new ListItem("About","http://infinitestrikeltd.github.io/About")
];

$(document).ready(main);

function showSurvey(){
	var code = "<div><style>body{margin:0px;padding:0px:}.survey{z-index:999;width:100%;height:64px;background:rgba(55,55,55,0.7);position:fixed;top:90.9%;"+
"left:0px;color:#CCCCCC;font-family:Arial;display:inline;}.survey p{margin-top:25px;margin-left:20px;}.close-survey{position:relative;"+
"left:98%;top:-70px;}.take-survey{width:100px;height:32px;position:relative;top:-42px;left:74%;}</style><script>$('.close-survey').click(function(){"+
"$('.survey').hide();});</script><div class = \"survey\"><p>Welcome to Infinite Strike! We would like to ask you some questions based on your experence" +
" if that is ok.</p><button class = \"take-survey\" onClick = \"navigate('https://www.surveymonkey.com/r/26BQFRT')\">Take Survey</button><div class = \"close-survey\">X</div></div></div>"

	$('.content').append(code);
}

function navigate(loc){
	window.location = loc;
}

function main(){
    // Initial values
    var openerActivated = false;
    
    $('.content').append("<div class = \"twitterHolder\"><a class=\"twitter-timeline\"href=\"https://twitter.com/Infinite_Strike/lists/infinite-strike-members\"data-widget-id=\"626597129545453568\">Twitter Was Unable to load! Check your internet or proxy settings or click this message to go to the feed</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\"); </script></div><div class = \"twitterOpener\"></div>");
	
	
    generateRandom();
    upDateGame();
    showNews(); 
}    
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
   window.location = "http://infinitestrikeltd.github.io/Error.html?errType=IEError";
   
}
 
     
    // Set up the footer
    $('.footer').append('<div class = "linkContainer"></div>');
    for(i = 0; i < footerList.length; i++){
        $('.linkContainer').append(footerList[i].list());
    }
   $('.footer').append('<div class = "footerLogo"></div>');
    // end set up the footer
    $('.twitterOpener').click(function(){
        switch(openerActivated){
            case true:
                $('.twitterOpener').animate({"left" : 0},1);
                $('.twitterOpener').animate({"opacity" : 0.3},1);
                $('.twitterHolder').animate({"left" : -300},1);
                openerActivated = false;
                break;
            case false:
                $('.twitterOpener').animate({"left" : 300},1);
                $('.twitterOpener').animate({"opacity" : 1},1);
                $('.twitterHolder').animate({"left" : 0},1);
                openerActivated = true;
                break;
        }
    });
}

function generateRandom(){
    var randomMessages = ["MissingNO.",
                          "<p> Han shot first! </p>"];
    
    var setRandomness = randomMessages.length-1;
    var randomChoice = Math.floor(Math.random() * setRandomness) + 1;
    //alert(randomChoice);
    $('.messageHolder').prepend(randomMessages[randomChoice]);
}

function showNews(){
    $('#articleHeader').prepend(newsContext.title);
    //alert(newsContext.title);
    $('#articleInfo').prepend("By " + newsContext.author + " on " + newsContext.date);
    //alert("By " + newsContext.author + " on " + newsContext.date);
    $('#articleSubHeader').prepend(newsContext.subtitle);
    //alert(newsContext.subtitle);
    $('#articleContent').prepend(newsContext.content);
    //alert(newsContext.content);
}

function ListItem(name , link){
    this.name = name;
    this.link = link;
    this.list = function(){
        return "<a href = \""+link+"\">"+name+"</a>";
    };
}


function upDateGame(){
    for(i = 0; i < games.length; i++){
		
		if(games[i].img == null){
			$('.content').prepend("<div id = \"errorMessage\"><p>Image property for item at index "+i+" does not exist.</p></div>");
		}
		if(games[i].marquee == null){
			$('.content').prepend("<div id = \"errorMessage\"><p>Marguee property for item at index "+i+" does not exist.</p></div>");
		}
		if(games[i].name == null){
			$('.content').prepend("<div id = \"errorMessage\"><p>Name property for item at index "+i+" does not exist.</p></div>");
		}
		if(games[i].desc == null){
			$('.content').prepend("<div id = \"errorMessage\"><p>Description property for item at index "+i+" does not exist.</p></div>");
		}
		if(games[i].link == null){
			$('.content').prepend("<div id = \"errorMessage\"><p>Link property for item at index "+i+" does not exist.</p></div>");
		}
		
        if(games[i] === null){
            $('.content').prepend("<div id = \"errorMessage\"><p>Cannot Find file at Index: "+i+"</p></div>");
        }else{
            $('.gamesContainer').prepend("<div class = \"listItemContainer\"><div class = \"containerImage\">"+
			                             "<img src =\""+games[i].img+"\" width = \"50px\" height = \"50px\"/>"+
										 "</div><div class = \"containerInfo\"><h4>"+games[i].name+"</h4><hr/>"+
										 "<img id = \"gameMarquee\"src =\""+games[i].marquee+"\" width = \"200\" />"+
										 "<p>"+games[i].desc+"</p></div>"+
										 "<div class = \"downloadInfo\"><a href = \""+
										 games[i].link+"\">Download "+
										 games[i].name+"</a></div></div>");
        }
    }
     if(games.length === 0){
            $('.gamesContainer').prepend("<h3 style = \"color: #999999;\">No Games to show at this time! :/</h3><br/><br/>");
     }
}

