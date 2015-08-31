/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ArticleObject(Name,SName,Content,Date,Author){
    this.articleName = Name;
    this.articleSName = SName;
    this.articleContent = Content;
    this.articleDate = Date;
    this.articleAuthor = Author;
    this.init = function(element){
        $(element).append("<div id = \"article-"+element+"\"></div>");
            $("article-"+element).append("<h1>"+this.articleName+"</h1>");
            $("article-"+element).append("<h2>"+this.articleSName+"</h2>");
            $("article-"+element).append("<span><h6>"+this.articleDate+"</h6><h6>"+this.articleDate+"</h6>><span>");
            $("article-"+element).append("<p>"+this.articleContent+"</p>");
            $("article-"+element).append("<br/>");
    };
}


