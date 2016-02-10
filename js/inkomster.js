function init(){
	document.getElementById("addInkomst").addEventListener("click",appendInkomst,false);
} 

function appendInkomst(){
	var typ = document.getElementById("inkomstkategorilist").value;
	var inkom = new transaktion("inkomst","namn",0,typ,hämtaDagarInmatning());
	Budgets.transaktioner.push(inkom);
	ritaUppInkomster();
	addInkomstkategori(typ);
	ritaUppInkomstkategorier();
}
function addInkomstkategori(kategori){
	if(!finnsItemILista(kategori,Budgets.Inkomstkategorier)){
		Budgets.Inkomstkategorier.push(kategori);
	}
}

function ritaUppInkomstkategorier(){
	var element = document.getElementById("inkomstkategori");
	rensaElement(element);
	for (var i=0;i<Budgets.Inkomstkategorier.length;i++){
		var newElem = document.createElement("option");
		newElem.setAttribute("value",Budgets.Inkomstkategorier[i]);
		element.appendChild(newElem);
	}
}
function ritaUppInkomster(){
	var element = document.getElementById("SubInkomster");
	rensaElement(element);
	
	
	for (var i=0;i<Budgets.transaktioner.length;i++){
		if (Budgets.transaktioner[i].type=="inkomst"){
			var newElem = document.createElement("p");
			var varde = document.createElement("input");
			varde.setAttribute("type","number");
			varde.setAttribute("value",Budgets.transaktioner[i].value);
			varde.setAttribute("id",Budgets.transaktioner[i].id);
			varde.addEventListener("change",saveValues,false);
			
			var beskrivning = document.createElement("input");
			beskrivning.setAttribute("type","string");
			beskrivning.setAttribute("value",Budgets.transaktioner[i].namn);
			beskrivning.setAttribute("id","Beskrivning"+Budgets.transaktioner[i].id);
			beskrivning.addEventListener("change",updateDescriptions,false);
			beskrivning.setAttribute("title",Budgets.transaktioner[i].id);
			
			var kategori = document.createElement("input");
			kategori.setAttribute("name","inkomstkategori");
			kategori.setAttribute("list","inkomstkategori");
			kategori.setAttribute("value",Budgets.transaktioner[i].kategori);
			kategori.setAttribute("id","Kategori"+Budgets.transaktioner[i].id);
			kategori.addEventListener("change",updateKategorier,false);
		
			var multiplier = document.createElement("input");
			multiplier.setAttribute("type","number");
			multiplier.setAttribute("value",Budgets.transaktioner[i].multiplier);
			multiplier.setAttribute("id","Multiplier"+Budgets.transaktioner[i].id);
			
			
			var deleteButton = document.createElement("input");
			deleteButton.setAttribute("type","button");
			deleteButton.setAttribute("value","Ta bort");
			deleteButton.setAttribute("onclick","deleteTransaktion("+Budgets.transaktioner[i].id+")");
			
			newElem.appendChild(beskrivning);
			newElem.appendChild(varde);
			
			newElem.appendChild(deleteButton);
			newElem.appendChild(kategori);
			newElem.appendChild(multiplier);
			element.appendChild(newElem);
			
		}
	}
}

function updateDescriptionInkomst(){
	updateDescription(Budgets.transaktioner,"namn");
}

function hämtaDagarInmatning(){
	var typ = document.getElementById("inkomstkategorilist").value;
	if (typ=="Daglig"){
		return parseInt(document.getElementById("daysPerYear").value);
	}
	if (typ=="Månadsvis"){
		return 12;
	}
	return 1;
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
