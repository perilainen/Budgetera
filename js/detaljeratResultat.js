function ritaDetaljeradResultaträkning(){
	var element = document.getElementById("detaljeradResultaträkning");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	var header = document.createElement("h1")
	header.innerHTML = "Detaljerad Resultaträkning"
	element.appendChild(header);
	
	var detaljeradOmsättning = innerHTMLDetaljeradOmsättning();
	element.appendChild(detaljeradOmsättning);
	
	var omsättningInner = innerHTMLOmsättning();
	element.appendChild(omsättningInner);
	
	getInkomstTyper();
}

function innerHTMLDetaljeradOmsättning(){
	var detaljeradOmsättning = document.createElement("div")
	var typer = getInkomstTyper();
	
	console.log(typer.length);
	for (var i=0;i<typer.length;i++){
		console.log(i)
		var typ = typer[i];
		var varde = calculateInkomsttyp(typ);
		var paragraf = getInnerHTML(varde,typ)
		detaljeradOmsättning.appendChild(paragraf)
	}
	console.log(i)
	return detaljeradOmsättning;
}





function init () {
	
	document.getElementById("tab-2").addEventListener("click",ritaDetaljeradResultaträkning,false);
	
  
}
window.addEventListener("load", init, false);