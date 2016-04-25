// jquery loading

$(document).ready(main());

// the holder of prople
function Section(name){
	this.name = name;
	this.createSection = function(){
		addSection(this.name);
	}
}

function Item(text,location){
	this.text = text;
	this.location = location;
	this.addItem = function(sectionName){
		addItem(sectionName,this.text,this.location);
	}
}

function main(){
	var sections = [];
}

function addSection(name){
	$('.section').append("<div id = \""+name+"-section\"></div>");
}

function addItem(sectionName,text,location){
	$("#"+sectionName+"-section").append("<p>"+text+" <a href = \""+location+"\">(Link)</a></p>");
}