/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var footerList = [
    new ListItem("Home","http://infinitestrikeltd.github.io"), 
    new ListItem("Games","http://infinitestrikeltd.github.io/games"),
    new ListItem("Contact","http://infinitestrikeltd.github.io/contact"),
    new ListItem("About","http://infinitestrikeltd.github.io/about"),
];

$(document).ready(main);


function main(){
    // Initial values
    var openerActivated = false;
    
    $('.content').append("<div class = \"twitterHolder\"><a class=\"twitter-timeline\"href=\"https://twitter.com/Infinite_Strike/lists/infinite-strike-members\"data-widget-id=\"626597129545453568\">Twitter Was Unable to load! Check your internet or proxy settings or click this message to go to the feed</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\"); </script></div><div class = \"twitterOpener\"></div>");
    
    generateRandom();
    upDateGame();
    showNews();
    
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
        if(games[i] === null){
            $('.content').prepend("<div id = \"errorMessage\"><p>Cannot Find file at Index: "+i+"</p></div>");
        }else{
            $('.gamesContainer').prepend("<div class = \"listItemContainer\"><div class = \"containerImage\"><img src =\""+games[i].img+"\" width = \"50px\" height = \"50px\"/></div><div class = \"containerInfo\"><h4>"+games[i].name+"</h4><p>"+games[i].desc+"</p></div><div class = \"downloadInfo\"><a href = \""+games[i].link+"\">Download "+games[i].name+"</a></div></div>");
        }
    }
     if(games.length === 0){
            $('.gamesContainer').prepend("<h3 style = \"color: #999999;\">No Games to show at this time! :/</h3><br/><br/>");
     }
}
 


