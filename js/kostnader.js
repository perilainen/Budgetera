var kostnader = [];

function kostnad(type){
	this.name="delkostnad";
	this.value=0;
	this.type=type;
	this.id = getNewId(kostnader);
}
function init(){
	document.getElementById("addKostnad").addEventListener("click",appendKostnad,false);
}
function appendKostnad(){
	var elem = document.getElementById("kostnadstyp");
	var typ = elem.options[elem.selectedIndex].value;
	var kost = new kostnad(typ);
	kostnader.push(kost);
	ritaUppKostnader();
}
function ritaUppKostnader(){
	var element = document.getElementById("SubKostnader");
	while (element.firstChild) {
    	element.removeChild(element.firstChild);
	}
	
	for (i=0;i<kostnader.length;i++){
		var newElem = document.createElement("p");
		var varde = document.createElement("input")
		varde.setAttribute("type","number");
		varde.setAttribute("value",kostnader[i].value);
		varde.setAttribute("id","kostnadVarde"+kostnader[i].id);
		varde.addEventListener("change",saveValuesKostnad,false);
		
		var beskrivning = document.createElement("input");
		beskrivning.setAttribute("type","string");
		beskrivning.setAttribute("value",kostnader[i].namn);
		beskrivning.setAttribute("id","kostnadBeskrivning"+kostnader[i].id);
		beskrivning.addEventListener("change",updateDescriptionKostnad,false);
		
		var typ = document.createElement("label");
		typ.innerHTML=kostnader[i].type;
		newElem.appendChild(beskrivning);
		newElem.appendChild(varde);
		newElem.appendChild(typ);
		
		element.appendChild(newElem);
	}
}
function saveValuesKostnad(){
	for (i=0; i<kostnader.length;i++){
		
		var elem = document.getElementById("kostnadVarde"+kostnader[i].id);
		kostnader[i].value = parseInt(elem.value);
	}
	calculateTotalKostnad();
	
}
function calculateTotalKostnad(){
	var totalKostnad = 0;
	var element = document.getElementById("totalKostnad");
	for (i=0;i<kostnader.length;i++){
		totalKostnad += kostnader[i].value;
	}
	element.innerHTML=totalKostnad;
}
function updateDescriptionKostnad(){
	updateDescription(kostnader,"kostnadBeskrivning");
}
window.addEventListener("load", init, false);
