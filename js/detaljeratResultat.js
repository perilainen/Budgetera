function ritaDetaljeradResultaträkning() {
	var element = document.getElementById("detaljeradResultaträkning");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	var header = document.createElement("h1");
	header.innerHTML = "Detaljerad Resultaträkning";
	element.appendChild(header);

	var detaljeradOmsättning = innerHTMLDetaljeradTyp("inkomst");
	element.appendChild(detaljeradOmsättning);

	var omsättningInner = innerHTMLOmsättning();
	element.appendChild(omsättningInner);

	var detaljeradKostnader = innerHTMLDetaljeradTyp("kostnad");
	element.appendChild(detaljeradKostnader);

	var kostnaderInner = innerHTMLKostnader();
	element.appendChild(kostnaderInner);
	
}

function innerHTMLDetaljeradTyp(typ) {
	var detaljerad = document.createElement("div");
	var kategorier = getKategorier(typ);
	for (var i = 0; i < kategorier.length; i++) {
		var kategori = kategorier[i];
		var varde = calculateTotalTypeKategori(typ, kategori);
		var paragraf = getInnerHTML(varde, kategori + " " + typ, "smallFont");
		detaljerad.appendChild(paragraf);
	}
	return detaljerad;
}

function init() {

	document.getElementById("tab-2").addEventListener("click", ritaDetaljeradResultaträkning, false);

}

window.addEventListener("load", init, false); 