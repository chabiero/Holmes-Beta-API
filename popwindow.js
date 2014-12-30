// Copyright by Arnaud and Olivier 2013-1014
function appear(txt,title,close){
	document.getElementById("towel").style.visibility="visible"
    document.getElementById("title-pop").innerHTML=title
    document.getElementById("content").innerHTML=txt
    document.getElementById("add-content").style.marginTop="-90px"
    if(close=="n"){
	    document.getElementById("close-popwindow").style.visibility="hidden"
    }
    if(close=="y"){
	    document.getElementById("close-popwindow").style.visibility="visible"
    }
    closeslide()
}
function closetowel(){
	document.getElementById("content").innerHTML=""
	document.getElementById("towel").style.visibility="hidden"
	document.getElementById("close-popwindow").style.visibility="hidden"
}
function appearmsg(txt,title){
	document.getElementById("towel2").style.visibility="visible"
    document.getElementById("titlepopmsg").innerHTML=title
    document.getElementById("bodypopmsg").innerHTML=txt
    document.getElementById("add-content").style.marginTop="-90px"
    closeslide()
}
function closetowelmsg(){
	document.getElementById("towel2").style.visibility="hidden"
	document.getElementById("bodypopmsg").innerHTML=""
}