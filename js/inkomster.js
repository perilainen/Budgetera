
function inkomst(type){
	this.namn = "inkomst";
	this.value = 0;
	this.type = type;
	console.log(Budgets.inkomster)
	this.id = getNewId(Budgets.inkomster);
	this.antal=1;	
}

function init(){
	document.getElementById("addInkomst").addEventListener("click",appendInkomst,false);
} 

function appendInkomst(){
	var elem = document.getElementById("inkomsttyp");
	var typ = elem.options[ elem.selectedIndex ].value;
	var inkom = new inkomst(typ);
	Budgets.inkomster.push(inkom);
	ritaUppInkomster();
}
function ritaUppInkomster(){
	var element = document.getElementById("SubInkomster");
	while (element.firstChild) {
    	element.removeChild(element.firstChild);
	}
	for (i=0;i<Budgets.inkomster.length;i++){
		var newElem = document.createElement("p");
		var varde = document.createElement("input");
		varde.setAttribute("type","number");
		varde.setAttribute("value",Budgets.inkomster[i].value);
		varde.setAttribute("id","inkomstVarde"+Budgets.inkomster[i].id);
		varde.addEventListener("change",saveValuesInkomst,false);
		
		var beskrivning = document.createElement("input");
		beskrivning.setAttribute("type","string");
		beskrivning.setAttribute("value",Budgets.inkomster[i].namn);
		beskrivning.setAttribute("id","inkomstBeskrivning"+Budgets.inkomster[i].id);
		beskrivning.addEventListener("change",updateDescriptionInkomst,false);
		
		var typ = document.createElement("label");
		typ.innerHTML=Budgets.inkomster[i].type;
		newElem.appendChild(beskrivning);
		newElem.appendChild(varde);
		newElem.appendChild(typ);	
		element.appendChild(newElem);
	}
}

function updateDescriptionInkomst(){
	updateDescription(Budgets.inkomster,"inkomstBeskrivning")
}
function saveValuesInkomst(){	
	for (i=0; i<Budgets.inkomster.length;i++){
		var elem = document.getElementById("inkomstVarde"+Budgets.inkomster[i].id);
		Budgets.inkomster[i].value = parseInt(elem.value);
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
	for (i=0;i<Budgets.inkomster.length;i++){
		//console.log(inkomstTyper.indexOf(Budgets.inkomster[i].type))
		if (inkomstTyper.indexOf(Budgets.inkomster[i].type)==-1){
			inkomstTyper.push(Budgets.inkomster[i].type)
		}
		
		
	}
	//console.log(inkomstTyper);
	return inkomstTyper
}

function calculateInkomsttyp(typ){
	var inkomst = 0;
	for (i=0;i<Budgets.inkomster.length;i++){
		if (Budgets.inkomster[i].type==typ){
			inkomst += hämtaÅrligInkomst(Budgets.inkomster[i]);
		}
	}
	return inkomst
}

function calculateTotalInkomst(){
	var totalInkomst = 0;
	
	for (i=0;i<Budgets.inkomster.length;i++){
		console.log("Inkomst nummer "+i+1+" är: "+Budgets.inkomster[i].value)	
		totalInkomst += hämtaÅrligInkomst(Budgets.inkomster[i]);
	}
	return totalInkomst;
}
function hämtaÅrligInkomst(ink){
	var days = 1;
	if (ink.type=="Daglig"){
		days = parseInt(document.getElementById("daysPerYear").value);
	}
	if (ink.type=="Månadsvis"){
		days = 12;
	}
	return days*ink.value; 
}
window.addEventListener("load", init, false);
