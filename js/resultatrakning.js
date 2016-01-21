function ritaResultaträkning() {
	var omsättning = calculateTotalInkomst();
	var kostnader = calculateTotalKostnad;
	var avskrivningÅr = calculateAvskrivningPerAr;

	var element = document.getElementById("resultatrakning")
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
	var header = document.createElement("h1")
	header.innerHTML = "Resultaträkning"

	var omsättningsparagraf = document.createElement("p");
	var beskrivning = document.createElement("output");
	beskrivning.setAttribute("type","string");
	beskrivning.innerHTML="Omsättning: "
	var varde = document.createElement("output");
	varde.setAttribute("type", "number");
	varde.setAttribute("class","resultaträkning")
	varde.innerHTML = omsättning;
	omsättningsparagraf.appendChild(varde);
	element.appendChild(header);
	element.appendChild(beskrivning)
	element.appendChild(varde);

}
function init () {
	document.getElementById("görRäkning").addEventListener("click",ritaResultaträkning,false);
  
}
window.addEventListener("load", init, false);
