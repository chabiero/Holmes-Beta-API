// Copyright by Arnaud and Olivier 2013-1014
var version="Holmes 1.0 <sup>beta</sup>"
function linker(){
	analysticsthings()
	document.getElementById("wordcasper").style.marginTop="505px"
	var lg=navigator.language;
	var adress="http://"+lg+".wikipedia.org/wiki/";
	var linkword=document.getElementById("link-txt").value.toLowerCase();
	var link= linkword.split(" ");
	var linklink= link.join("%20")
	var wiki="http://fr.wikipedia.org/wiki/"+linklink
	var wolf= "http://www.wolframalpha.com/input/?i="+linklink
	var lint= "http://www.linternaute.com/dictionnaire/fr/definition/"+linklink+"/"
	var pint= "http://pinterest.com/search/pins/?q="+linklink
	var goog="https://www.google.com/search?q="+linklink
	var yout="http://www.youtube.com/results?search_query="+linklink
	var title= "Holmes - "+linkword
	var linkadress= linkword.split(".");
	document.getElementById("erase-button").style.visibility="visible";
	document.title=title
    if(linkadress[0]=="www"){
    setTimeout('document.getElementById("linker").style.height="181px"', 50)
    setTimeout('document.getElementById("url-linker").style.opacity="1"', 150)
	setTimeout('document.getElementById("url-linker").style.visibility="visible"', 160)
	document.getElementById("url-linker").innerHTML="<a href=http://"+linkword+" target='_blank'>URL - "+linkword+"</a>"

	}
    if(linkadress[0]!="www"){
    setTimeout('document.getElementById("url-linker").style.opacity="0"', 50)
    setTimeout('document.getElementById("linker").style.height="156px"', 60)
	setTimeout('document.getElementById("url-linker").style.visibility="hidden"', 156)
	}
	  if((link.length>2)&&(link[0]=="remind")&&(link[1]=="me")&&(link[2]=="to")){
  
    }
     if((link.length<2)&&(link[0]!="remind")&&(link[1]!="me")&&(link[2]!="to")){
  
    }
	if(linkword.length=="0"){
document.getElementById("erase-button").style.visibility="hidden";
document.getElementById("wordcasper").style.marginTop="355px"
	setTimeout('document.getElementById("wiki-linker").style.opacity="0";document.getElementById("goog-linker").style.opacity="0";document.getElementById("yout-linker").style.opacity="0";document.getElementById("pint-linker").style.opacity="0";document.getElementById("lint-linker").style.opacity="0";document.getElementById("wolf-linker").style.opacity="0"', 0)
	setTimeout('document.getElementById("linker").style.opacity="0"', 10)
	setTimeout('document.getElementById("linker").style.visibility="hidden"', 20)
	document.title="Holmes - Search anything, find everything."
	}
	if(linkword.length>="1"){
	setTimeout('document.getElementById("wiki-linker").style.opacity="1"', 100)
	setTimeout('document.getElementById("wolf-linker").style.opacity="1"', 200)
	setTimeout('document.getElementById("lint-linker").style.opacity="1"', 300)
	setTimeout('document.getElementById("pint-linker").style.opacity="1"', 400)
	setTimeout('document.getElementById("yout-linker").style.opacity="1"', 500)
	setTimeout('document.getElementById("goog-linker").style.opacity="1"', 600)
	document.getElementById("linker").style.opacity="1"
	document.getElementById("linker").style.visibility="visible"
	document.getElementById("wiki-linker").innerHTML="<a href="+wiki+" target='_blank' onclick='savehistory();wordcasper()'>Wikipedia - "+linkword+"</a>"
		document.getElementById("wolf-linker").innerHTML="<a href="+wolf+" target='_blank' onclick='savehistory();wordcasper()'>Wolframalpha - "+linkword+"</a>"
	document.getElementById("lint-linker").innerHTML="<a href="+lint+" target='_blank' onclick='savehistory();wordcasper()'>Linternaute - "+linkword+"</a>"
	document.getElementById("pint-linker").innerHTML="<a href="+pint+" target='_blank' onclick='savehistory();wordcasper()'>Pinterest - "+linkword+"</a>"
	document.getElementById("yout-linker").innerHTML="<a href="+yout+" target='_blank' onclick='savehistory();wordcasper()'>Youtube - "+linkword+"</a>"
	document.getElementById("goog-linker").innerHTML="<a href="+goog+" target='_blank' onclick='savehistory();wordcasper()'>Google - "+linkword+"</a>"
	}
	if((link[0]=="qui")&&(link[1]=="est")&&(link.length==3)){
		document.getElementById("wiki-linker").innerHTML="<a href='http://fr.wikipedia.org/wiki/"+link[2]+"' target='_blank' onclick='savehistory();wordcasper()'>Wikipedia - "+link[2]+"</a>"
	}
	if((link[0]=="who")&&(link[1]=="is")&&(link.length==3)){
		document.getElementById("wiki-linker").innerHTML="<a href='http://fr.wikipedia.org/wiki/"+link[2]+"' target='_blank' onclick='savehistory();wordcasper()'>Wikipedia - "+link[2]+"</a>"
	}
	if((link[0]=="ou")&&(link[1]=="est")&&(link.length==3)){
		document.getElementById("wiki-linker").innerHTML="<a href='http://fr.wikipedia.org/wiki/"+link[2]+"' target='_blank' onclick='savehistory();wordcasper()'>Wikipedia Localisation - "+link[2]+"</a>"
	}
	if((link[0]=="where")&&(link[1]=="is")&&(link.length==3)){
		document.getElementById("wiki-linker").innerHTML="<a href='http://fr.wikipedia.org/wiki/"+link[2]+"' target='_blank' onclick='savehistory();wordcasper()'>Wikipedia Location - "+link[2]+"</a>"
	}
	if((link[0]==":historique")||(link[0]==":historic")){
	historic()
}
}
function entercode(){
	var linkword=document.getElementById("link-txt").value.toLowerCase();
	var link= linkword.split(" ");
	var linkadress= linkword.split(".");
	var linklink= link.join("%20")
	var lo=1
	if(linkadress[0]=="www"){
	var urllink="http://"+linkword
	window.open(urllink, "google")
	}
	if((link[0]=="remind")&&(link[1]=="me")&&(link[2]=="to")){
	  	var l=link.length
	  	var t=""
	  	var lo=2
    for (var i=3;i<l;i++){
    	var t= t +link[i]+" "
  
    }
    appearmsg(t,"Reminder <sup>beta</sup>")
    if(localStorage.getItem('reminder')==undefined){
    var local= localStorage.getItem("reminder");
localStorage.setItem("reminder", "<li>"+t+"</li>");
}
else{
			var data= localStorage.getItem('reminder')
			localStorage.setItem("reminder","<li>"+t+"</li>"+data)
		}
}
	else{
    var goog="https://www.google.com/search?q="+linklink
    window.open(goog, "google")
    savehistory();
    wordcasper();
    }
}
function displayreminder(){
	appear('<div id="li"></div>',"Reminder","y")
	document.getElementById("li").innerHTML="<ul id='hist'>"+localStorage.getItem('reminder')+"</ul>"
}
function langu(){
	document.getElementById("more").innerHTML="<ul id='lg'><li onclick='en()'>English</li><li onclick='fr();'>Francais</li><li style='border: none'>Italiano</li></ul>";
}
function en(){
	localStorage.setItem("language", "en");
	closetowel()
	selectlang()
}
function fr(){
	localStorage.setItem("language", "fr");
	closetowel()
	selectlang()
}
function ext(){
	appear('<div id="textwrite" onkeyup="save()" contenteditable="true"></div><div id="number"></div>',"Writer","y")
	restore();
	save();
}
function think(){
	appear('<iframe src="https://docs.google.com/forms/d/1GkxxMTgn_J2sYvZWov2x0DQhmYiJHZnE7SY3GUisyks/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',"What do you think?","y")
}
function firstname(){
	var names=document.getElementById("createname").value;
	localStorage.setItem("name", names);
		selectlang()
		closetowel()
		didactok()
}
function savehistory(){
	if(localStorage.getItem('historic')==undefined){
		localStorage.setItem("historic", "<li>"+document.getElementById("link-txt").value+"</li>");
		}
		else{
			var data= localStorage.getItem('historic')
			localStorage.setItem("historic","<li>"+document.getElementById("link-txt").value+"</li>"+data)
		}
}
function wordcasper(){
	if(localStorage.getItem('casper')==undefined){
		localStorage.setItem("casper", document.getElementById("link-txt").value);
		}
		else{
			var data= localStorage.getItem('casper')
			localStorage.setItem("casper",document.getElementById("link-txt").value+"+/"+data)
			var casp= localStorage.getItem('casper').split("+/")
			var l=casp.length
	  	var t=""
	  	var lo=2
         for (var i=0;i<l;i++){
    		var t= t+"<li id="+i+" onClick='effect("+i+")'>"+casp[i]+"</li>"
    }
document.getElementById("wordcasper").innerHTML='<ul id="wordli">'+t+'</ul>'
		}
		if(localStorage.getItem('casper').split("+/").length>10){
			alert(localStorage.getItem('casper').split("+/").length)
			localStorage.removeItem('casper')
		}
}

function name(){
	var names=document.getElementById("nameuser").innerHTML;
	localStorage.setItem("name", names);
	document.getElementById("name").innerHTML=localStorage.getItem('name')
	selectlang()
}
function about(){
	if(localStorage.getItem('language')=="fr"){
    appear('<div id="abouttxt">Bonjour '+localStorage.getItem("name")+', bienvenue dans Holmes. Holmes est une <b>web-app</b> intelligente qui va vous permettre de faire des recherches rapidement sur de multiples plateformes. Bienvenue dans votre Holmes. Holmes est developpe par Arnaud, et administre Olivier.</div><div id="agree" onclick="closetowel()">Fermer</div>',"A propos de "+version+"","y")
	}
	if(localStorage.getItem('language')=="en"){
    appear('<div id="abouttxt">Hello '+localStorage.getItem("name")+', welcome to Holmes. Holmes is a smart <b>web-app</b> that search on the web easily. Welcome to your Holmes. Holmes was created by Arnaud and hosted by Olivier.</div><div id="agree" onclick="closetowel()">Close</div>',"About "+version+"","y")
	}
	}
function historic(){
	 if((localStorage.getItem('historic')==undefined)&&(localStorage.getItem('language')=="fr")){
	appearmsg(" Aucun historique :(","Pardon mais...")
}

    if((localStorage.getItem('historic')==undefined)&&(localStorage.getItem('language')=="en")){
    appearmsg(" No internet history :(","Sorry but...")
}
 
	 if((localStorage.getItem('historic')!=undefined)&&(localStorage.getItem('language')=="fr")){
	 appear('<div id="li"></div>',"Historique internet","y")
	document.getElementById("li").innerHTML="<ul id='hist'>"+localStorage.getItem('historic')+"</ul></div><div id='erasehist' onclick='erasehist()'>Effacer!</div><div id='erasedata' onclick='forgetme()'>Oublie moi :(</div>";
}
 if((localStorage.getItem('historic')!=undefined)&&(localStorage.getItem('language')=="en")){
	 appear('<div id="li"></div>',"Internet history","y")
	document.getElementById("li").innerHTML="<ul id='hist'>"+localStorage.getItem('historic')+"</ul></div><div id='erasehist' onclick='erasehist()'>Erase!</div><div id='erasedata' onclick='forgetme()'>Forget me :(</div>";
}
}
function erasehist(){
	localStorage.removeItem('historic');
	closetowel()
}
function forgetme(){
	if(localStorage.getItem('language')=="en"){
	appear('<div id="forgetmetxt">Hello '+localStorage.getItem("name")+', we can erase all your data of Holmes. After these changes, all the data will be <b>erased</b> (name, history, text document...). When you use Holmes, Holmes learn about you to create your own Holmes. Do you want to remove it?</div><div id="agree" onclick="erasedata()">I agree</div>',"Forget me :(","y")
}
if(localStorage.getItem('language')=="fr"){
	appear('<div id="forgetmetxt">Bonjour '+localStorage.getItem("name")+', nous pouvons effacer toutes vos informations presentes sur Holmes, toutes les informations seront <b>effacees</b> (nom, historique, document texte...). Quand vous utilisez Holmes, Holmes apprend sur vous. Voulez vous effacez les informations?</div><div id="agree" onclick="erasedata()">Oui</div>',"Oublie moi :(","y")
}
}
function erasedata(){
	if(localStorage.getItem('language')=="en"){
	appear('<p>To erase your datas, please fill this form, with the same word.</p><input type="password" id="w1" placeholder="Tape a word." autofocus ><input type="password" id="w2" placeholder="Tape again."><div id="goerase" onclick="goerase()">Forget me :(</div>','Security.','n')
}
if(localStorage.getItem('language')=="fr"){
	appear('<p>Pou effacer vos informations, remplissez le formulaire avec deux mots similaires.</p><input type="password" id="w1" placeholder="Tape un mot." autofocus ><input type="password" id="w2" placeholder="Tape encore."><div id="goerase" onclick="goerase()">Forget me :(</div>','Security.','n')
}
}
function goerase(){
	if((document.getElementById('w1').value==document.getElementById('w2').value)&&(document.getElementById('w1').value!="")){
		localStorage.removeItem('historic');
		localStorage.removeItem('name');
		localStorage.removeItem('text');
		localStorage.removeItem('didact');
		localStorage.removeItem('language');
		localStorage.removeItem('visit');
		localStorage.removeItem('casper');
		appearmsg('All the data has been erased...','Forget me :(')
			setTimeout('window;location.reload()', 2500)
	}
	if(document.getElementById('w1').value!=document.getElementById('w2').value){
		appearmsg('It is not the same word.','Done')
	}
	if(document.getElementById('w1').value==""){
		appearmsg('You have to fill the form.','Done')
	}
}
function erasein(){
	document.getElementById("link-txt").value=""
	document.getElementById("erase-button").style.visibility="hidden";
	setTimeout('document.getElementById("wiki-linker").style.opacity="0";document.getElementById("goog-linker").style.opacity="0";document.getElementById("yout-linker").style.opacity="0";document.getElementById("pint-linker").style.opacity="0";document.getElementById("lint-linker").style.opacity="0";document.getElementById("wolf-linker").style.opacity="0"', 0)
	setTimeout('document.getElementById("linker").style.opacity="0"', 10)
	setTimeout('document.getElementById("linker").style.visibility="hidden"', 20)
	document.title="Holmes - Search anything, find everything."
	document.getElementById("wordcasper").style.marginTop="355px"

}
 function effect(i) {
           document.getElementById("link-txt").value=localStorage.getItem('casper').split("+/")[i]
           linker()
                   }
