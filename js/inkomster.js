var inkomster =[];

function inkomst(type){
	this.namn = "inkomst";
	this.value = 0;
	this.type = type;
	this.id = getNewId(inkomster);
	this.antal=1;
	
}

function init(){
	document.getElementById("addInkomst").addEventListener("click",appendInkomst,false);
} 

function appendInkomst(){
	var elem = document.getElementById("inkomsttyp");
	var typ = elem.options[ elem.selectedIndex ].value;
	
	var inkom = new inkomst(typ);
	inkomster.push(inkom);
	ritaUppInkomster();
	
	
}
function ritaUppInkomster(){
	var element = document.getElementById("SubInkomster");
	while (element.firstChild) {
    	element.removeChild(element.firstChild);
	}
	for (i=0;i<inkomster.length;i++){
		var newElem = document.createElement("p");
		var varde = document.createElement("input");
		varde.setAttribute("type","number");
		varde.setAttribute("value",inkomster[i].value);
		varde.setAttribute("id","inkomstVarde"+inkomster[i].id);
		varde.addEventListener("change",saveValuesInkomst,false);
		
		var beskrivning = document.createElement("input");
		beskrivning.setAttribute("type","string");
		beskrivning.setAttribute("value",inkomster[i].namn);
		beskrivning.setAttribute("id","inkomstBeskrivning"+inkomster[i].id);
		beskrivning.addEventListener("change",updateDescriptionInkomst,false);
		
		
		
		var typ = document.createElement("label");
		typ.innerHTML=inkomster[i].type;
		newElem.appendChild(beskrivning);
		newElem.appendChild(varde);
		newElem.appendChild(typ);
		
		element.appendChild(newElem);
	}
	
	

}

function updateDescriptionInkomst(){
	updateDescription(inkomster,"inkomstBeskrivning")
}
function saveValuesInkomst(){	
	for (i=0; i<inkomster.length;i++){
		console.log(inkomster[i].id);
		var elem = document.getElementById("inkomstVarde"+inkomster[i].id);
		inkomster[i].value = parseInt(elem.value);
	}
	ritaTotalInkomst();
	
}
function ritaTotalInkomst(){
	var element = document.getElementById("totalInkomst");
	totalInkomst = calculateTotalInkomst();
	element.innerHTML = totalInkomst;
}

function getInkomstTyper(){
	var inkomstTyper=[];
	for (i=0;i<inkomster.length;i++){
		console.log(inkomstTyper.indexOf(inkomster[i].type))
		if (inkomstTyper.indexOf(inkomster[i].type)==-1){
			inkomstTyper.push(inkomster[i].type)
		}
		
		
	}
	console.log(inkomstTyper);
	return inkomstTyper
}

function calculateInkomsttyp(typ){
	var inkomst = 0;
	for (i=0;i<inkomster.length;i++){
		if (inkomster[i].type==typ){
			inkomst += hämtaÅrligInkomst(inkomster[i]);
		}
		
	}
	return inkomst
	
}

function calculateTotalInkomst(){
	var totalInkomst = 0;
	
	for (i=0;i<inkomster.length;i++){
		
		totalInkomst += hämtaÅrligInkomst(inkomster[i]);
	}
	return totalInkomst;
}
function hämtaÅrligInkomst(ink){
	var days = 1;
	console.log(ink.value)
	if (ink.type=="Daglig"){
		days = parseInt(document.getElementById("daysPerYear").value);
	}
	if (ink.type=="Månadsvis"){
		days = 12;
	}
	return days*ink.value; 
}



window.addEventListener("load", init, false);
