// Copyright by Arnaud and Olivier 2013-1014
function launch(){
	setTimeout('document.getElementById("fuel4").style.visibility="visible"', 1000)
	setTimeout('script();document.getElementById("fuel2").style.visibility="visible"', 1300)
	setTimeout('document.getElementById("fuel1").style.visibility="visible"', 1600)
	setTimeout('document.getElementById("fuel3").style.visibility="visible"', 1900)
	setTimeout('document.getElementById("fuel5").style.visibility="visible"', 2200)
	setTimeout('linkerstyle();', 2000)
	if(navigator.onLine==true){
	setTimeout('document.getElementById("lapp-logo").style.marginTop="120px"', 2240)
	setTimeout('document.getElementById("lapp").style.opacity="0";selectlang()', 3700)
	setTimeout('document.getElementById("lapp").style.visibility="hidden";', 3700)
	setTimeout('document.getElementById("link-txt").style.opacity="1";ddays();feelvisit();', 3900)
	var visits= localStorage.getItem('visit').split("_")
	document.getElementById("using").innerHTML="It's your "+visits[0]+" visits on Holmes :)"
	}
	if(navigator.onLine==false){
	alert('No connection')
	}
	if(localStorage.getItem('casper')==undefined){
		}
		else{
			var data= localStorage.getItem('casper')
			var casp= localStorage.getItem('casper').split("+/")
			var l=casp.length
	  	var t=""
	  	var lo=2
         for (var i=0;i<l;i++){	
    	var t= t+"<li id="+i+" onClick='effect ("+i+")'>"+casp[i]+"</li>"
    }
document.getElementById("wordcasper").innerHTML='<ul id="wordli">'+t+'</ul>'
		}
	}
function launchname(){
	 if((localStorage.getItem('name')==undefined)&&(localStorage.getItem('language')=="fr")){
document.getElementById("nameuser").innerHTML="Votre nom?"
document.getElementById("name").innerHTML="Votre nom?"
}
	 else if((localStorage.getItem('name')==undefined)&&(localStorage.getItem('language')=="en")){
document.getElementById("nameuser").innerHTML="Your name?"
document.getElementById("name").innerHTML="Your name?"
}
	 else if(localStorage.getItem('name')!=undefined){
document.getElementById("nameuser").innerHTML=localStorage.getItem('name')
document.getElementById("name").innerHTML=localStorage.getItem('name')
}
}
function script(){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'linker.js';
    document.getElementsByTagName("head")[0].appendChild(script)
}
function errorcase(){
	appearmsg("We met a problem :(","Sorry...")
	localStorage.setItem("errorLinker", "infoerror");
}
function linkerstyle(){
	var widthwindow= document.body.clientWidth;
	if(widthwindow<=600){
		setTimeout('document.getElementById("popwindow").style.height="100%"', 0)
		setTimeout('document.getElementById("popwindow").style.width="100%"', 0)
		setTimeout('document.getElementById("popwindow").style.top="0"', 0)
		setTimeout('document.getElementById("popwindow").style.marginTop="0px"', 0)
		setTimeout('document.getElementById("popwindow").style.marginLeft="-50%"', 0)
	}
	if(widthwindow>600){
		setTimeout('document.getElementById("popwindow").style.height="400px"', 0)
		setTimeout('document.getElementById("popwindow").style.width="80%"', 0)
		setTimeout('document.getElementById("popwindow").style.top="50%"', 0)
		setTimeout('document.getElementById("popwindow").style.marginLeft="-40%"', 0)
		setTimeout('document.getElementById("popwindow").style.marginTop="-200px"', 0)
	}
}
function selectlang(){
	if(localStorage.getItem('language')==undefined){
		appear("","Language","n")
		document.getElementById("content").innerHTML="<p id='txtlg'>Merci de selectionner votre langue. | Please select your language.</p><ul id='lg'><li onclick='en()'>English</li><li onclick='fr()' style='border: none'>Francais</li></ul>";

	}
	  if(localStorage.getItem('language')=="fr"){
	   var input = document.getElementById ("link-txt");
            input.placeholder = "Quelle est votre recherche "+ localStorage.getItem('name')+"?";
            didactok()
            }
            if(localStorage.getItem('language')=="en"){
	   var input = document.getElementById ("link-txt");
            input.placeholder = "What are you looking for "+ localStorage.getItem('name')+"?";
             didactok()
            }
launchecreatename()
launchname()
}

function launchecreatename(){
	if((localStorage.getItem('name')==undefined)&&(localStorage.getItem('language')=="fr")){
	appear("","A propos de vous...","y")
		document.getElementById("content").innerHTML="<div id='whatis'>Bienvenue dans Holmes! Quel est votre nom?</div><input type='text' id='createname' placeholder='Votre nom?'><div id='createnamebutton' onclick='firstname()'></div>";
}
if((localStorage.getItem('name')==undefined)&&(localStorage.getItem('language')=="en")){
	appear("","About you...","y")
		document.getElementById("content").innerHTML="<div id='whatis'>Welcome to Holmes! What is your name?</div><input type='text' id='createname' placeholder='Your name is...?'><div id='createnamebutton' onclick='firstname()'></div>";
}
}
function didactok(){
	if(localStorage.getItem('didact')==undefined){
		didact()
	}
}
function didact(){
if(localStorage.getItem('language')=="fr"){
	appear("<div id='walldidact'></div><div onclick='nextfr(1)' id='next'>Bienvenue dans Holmes. Le meilleur moyen de réaliser des recherches. (suivant)</div>","Holmes","y")
}
if(localStorage.getItem('language')=="en"){
	appear("<div id='walldidact'></div><div onclick='next(1)' id='next'>Welcome in Holmes. The best way to search. (next)</div>","Holmes","y")
	}
}
function next(x){
localStorage.setItem("didact", "ok");
	if(x==1){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='next(2)' id='next'>Thanks to Holmes, you can search easily on many websites. (next)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en2.jpg')";
	}
		if(x==2){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='next(3)' id='next'>Holmes is clever, if you search for Who is obama, it understands that you search for Obama. (next)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en3.jpg')";
	}
	if(x==3){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='next(4)' id='next'>Click on + to show up the menu. (next)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en4.jpg')";
	}
	if(x==4){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='next(5)' id='next'>Moreover, you can browse your internet history. (next)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en5.jpg')";
	}
	if(x==5){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='closetowel()' id='next'>Holmes is able to understand URL. (End)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en6.jpg')";
	}
}
function nextfr(x){
localStorage.setItem("didact", "ok");
	if(x==1){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='nextfr(2)' id='next'>Avec Holmes, effectuez des recherches sur plusieurs sites, facilement. (suivant)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en2.jpg')";
	}
		if(x==2){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='nextfr(3)' id='next'>Holmes est intelligent, si vous tapez qui est obama, il va rechercher obama. (suivant)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en3.jpg')";
	}
	if(x==3){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='nextfr(4)' id='next'>Cliques sur + pour faire apparaitre le menu. (suivant)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en4.jpg')";
	}
	if(x==4){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='nextfr(5)' id='next'>De plus, vous pouvez voir l'historique de vos recherches. (suivant)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en5.jpg')";
	}
	if(x==5){
		document.getElementById("content").innerHTML="<div id='walldidact'></div><div onclick='closetowel()' id='next'>Enfin, Holmes comprend les URL. (Fin)</div>"
		document.getElementById("walldidact").style.backgroundImage="URL('img/didact/en6.jpg')";
	}
}
function settingsslide(){
	if(localStorage.getItem('language')=="en"){
		document.getElementById('slidebar').innerHTML='<div id="title-slidebar">Settings</div><ul id="settingsul1"><span id="language-title">Language</span><li onclick="en()">English</li><li onclick="fr()">French</li></ul><ul id="settingsul2"><span id="theme-title">Theme</span><li onclick="light()">Light</li><li onclick="dark()">Dark</li></ul><ul id="settingsul3"><span id="app-title">Apps</span><li onclick="historic()">History</li><li onclick="displayreminder()">Reminders</li><li onclick="about()">About</li></ul><div id="close-slidebar" onclick="closeslide()">x</div>'
}
if(localStorage.getItem('language')=="fr"){
		document.getElementById('slidebar').innerHTML='<div id="title-slidebar">Préférence</div><ul id="settingsul1"><span id="language-title">Language</span><li onclick="en()">English</li><li onclick="fr()">French</li></ul><ul id="settingsul2"><span id="theme-title">Theme</span><li onclick="light()">Light</li><li onclick="dark()">Dark</li></ul><ul id="settingsul3"><span id="app-title">Apps</span><li onclick="historic()">Historique</li><li onclick="displayreminder()">Rappels</li><li onclick="about()">A propos</li></ul><div id="close-slidebar" onclick="closeslide()">x</div>'
}
	document.getElementById('slidebar').style.marginLeft="0px"
}
function closeslide(){
	document.getElementById('slidebar').style.marginLeft="-300px"
}
function dark(){
	localStorage.setItem("darkmode", "ok");
	document.getElementById('slidebar').style.backgroundColor="#242424"
	document.body.style.backgroundColor="#292929"
}
function light(){
	localStorage.setItem("darkmode", "ok");
	document.getElementById('slidebar').style.backgroundColor="white"
	document.body.style.backgroundColor="#f5f5f5"
}
function applyext(){
	var exturl= document.getElementById("urlext").value
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = exturl;
    document.getElementsByTagName("head")[0].appendChild(script)
   setTimeout('extension();', 2000)
}
function apname(){
	document.getElementById("aboutuser").style.visibility="visible"
}