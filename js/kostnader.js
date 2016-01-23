

function kostnad(type){
	this.name="delkostnad";
	this.value=0;
	this.type=type;
	this.id = getNewId(Budgets.kostnader);
}
function init(){
	document.getElementById("addKostnad").addEventListener("click",appendKostnad,false);
}
function appendKostnad(){
	var elem = document.getElementById("kostnadstyp");
	var typ = elem.options[elem.selectedIndex].value;
	var kost = new kostnad(typ);
	Budgets.kostnader.push(kost);
	ritaUppKostnader();
}
function ritaUppKostnader(){
	var element = document.getElementById("SubKostnader");
	while (element.firstChild) {
    	element.removeChild(element.firstChild);
	}
	
	for (i=0;i<Budgets.kostnader.length;i++){
		var newElem = document.createElement("p");
		var varde = document.createElement("input")
		varde.setAttribute("type","number");
		varde.setAttribute("value",Budgets.kostnader[i].value);
		varde.setAttribute("id","kostnadVarde"+Budgets.kostnader[i].id);
		varde.addEventListener("change",saveValuesKostnad,false);
		
		var beskrivning = document.createElement("input");
		beskrivning.setAttribute("type","string");
		beskrivning.setAttribute("value",Budgets.kostnader[i].namn);
		beskrivning.setAttribute("id","kostnadBeskrivning"+Budgets.kostnader[i].id);
		beskrivning.addEventListener("change",updateDescriptionKostnad,false);
		
		var typ = document.createElement("label");
		typ.innerHTML=Budgets.kostnader[i].type;
		newElem.appendChild(beskrivning);
		newElem.appendChild(varde);
		newElem.appendChild(typ);
		
		element.appendChild(newElem);
	}
}
function saveValuesKostnad(){
	for (i=0; i<Budgets.kostnader.length;i++){
		
		var elem = document.getElementById("kostnadVarde"+Budgets.kostnader[i].id);
		Budgets.kostnader[i].value = parseInt(elem.value);
	}
	ritaTotalKostnad();
	
	
}
function ritaTotalKostnad(){
	totalKostnad = calculateTotalKostnad();
	var element = document.getElementById("totalKostnad");
	element.innerHTML=totalKostnad;
}
function calculateTotalKostnad(){
	var totalKostnad = 0;
	
	for (i=0;i<Budgets.kostnader.length;i++){
		totalKostnad += Budgets.kostnader[i].value;
	}
	return totalKostnad;
	
}
function updateDescriptionKostnad(){
	updateDescription(Budgets.kostnader,"kostnadBeskrivning");
}
window.addEventListener("load", init, false);
