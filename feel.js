// Copyright by Arnaud and Olivier 2013-1014
var objectdate= new Date();
var daydate= objectdate.getDate();
var monthdate= objectdate.getMonth();
var yeardate= objectdate.getFullYear();
var feeldate= daydate+"/"+monthdate
var namecode= localStorage.getItem('name');
function ddays(){
	if(feeldate=='1/03'){
		appearmsg("April's fool","Event")
	}
	if(feeldate=='1/01'){
		appearmsg('We wish you an happy new year :) '+yeardate,"Event")
	}
	if(feeldate=='14/02'){
		appearmsg("Happy Valentine's day","Event")
	}
}
function feelvisit(){
	if(localStorage.getItem('visit')==undefined){
		localStorage.setItem('visit',1+"_"+feeldate)
	}
	else if(localStorage.getItem('visit')!=undefined){
	var nbvisit= localStorage.getItem('visit');
	var limbvisit= nbvisit.split("_");
	var visite=  limbvisit[0]
	visite++
	 localStorage.setItem('visit',visite+"_"+feeldate);
	}
}
function checkitout(){
	var nbvisit= localStorage.getItem('visit');
	var limbvisit= nbvisit.split("_");
	var visite=  limbvisit[0];
	var date= limbvisit[1];
	alert("Hello "+namecode+". Numbert of visite: "+visite+". Last visite: "+date);
}