/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var footerList = [new ListItem("Home","infinitestrikeltd.github.io")];

function ListItem(name , link){
    this.name = name;
    this.link = link;
    this.list = function(){
        return "<a href = \""+link+"\">"+name+"</a>";
    };
}




