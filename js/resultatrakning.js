function ritaResultaträkning() {
	var element = document.getElementById("resultatrakning")
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	var header = document.createElement("h1")
	header.innerHTML = "Resultaträkning"
	element.appendChild(header);
	
	var omsättningInner = innerHTMLOmsättning();
	element.appendChild(omsättningInner);
	
	var kostnaderInner = innerHTMLKostnader();
	element.appendChild(kostnaderInner)
	
	var resultat1 = innerHTMLResultatFöreAvskrivningar();
	element.appendChild(resultat1)
	
	var avskrivningarInner = innerHTMLAvskrivningar()
	element.appendChild(avskrivningarInner)
	
	var resultat2 = innerHTMLResultatEfterAvskrivningar();
	element.appendChild(resultat2)
	
	

}
function innerHTMLResultatFöreAvskrivningar(){
	var resultat1 = calculateTotalInkomst()-calculateTotalKostnad();
	return getInnerHTML(resultat1,"Resultat Före Avskrivningar")
}

function innerHTMLResultatEfterAvskrivningar(){
	var resultat2 = calculateTotalInkomst()-calculateTotalKostnad()-calculateAvskrivningPerAr()
	return getInnerHTML(resultat2,"Resultat Efter Avskrivningar")
}


function innerHTMLKostnader(){
	var kostnader = calculateTotalKostnad();
	return getInnerHTML(kostnader,"Kostnader:")
}

function innerHTMLAvskrivningar(){
	var avskrivningar = calculateAvskrivningPerAr();
	return getInnerHTML(avskrivningar,"Avskrivningar:")
}

function innerHTMLOmsättning(){
	var omsättning = calculateTotalInkomst();
	return getInnerHTML(omsättning,"Omsättning:")
	
}

function getInnerHTML(belopp,namn,layClass="normalFont"){
	var paragraf = document.createElement("p");
	paragraf.setAttribute("class",layClass);
	var beskrivning = document.createElement("output");
	beskrivning.setAttribute("type","string");
	beskrivning.innerHTML=namn
	var varde = document.createElement("output");
	varde.setAttribute("type", "number");
	varde.setAttribute("class","resultaträkning")
	varde.innerHTML = belopp;
	paragraf.appendChild(beskrivning)
	paragraf.appendChild(varde);
	return paragraf
}
function init () {
	//document.getElementById("görRäkning").addEventListener("click",ritaResultaträkning,false);
	document.getElementById("tab-1").addEventListener("click",ritaResultaträkning,false);
	document.getElementById("tab-2").addEventListener("click",ritaResultaträkning,false);
	document.getElementById("tab-3").addEventListener("click",ritaResultaträkning,false);
  
}
window.addEventListener("load", init, false);
