function init(){
	document.getElementById("addKostnad").addEventListener("click",appendKostnad,false);
}
function appendKostnad(){
	var typ = document.getElementById("kostnadskategorilist").value;
	//var typ = elem.value;
	
	var kost = new transaktion("kostnad","namn",0,typ,1);
	Budgets.transaktioner.push(kost);
	ritaUppKostnader();
	addKostnadskategori(typ);
	ritaUppKostandskategorier();
}

function addKostnadskategori(kategori){
	// lägg till kategorin om den inte redan finns
	if(finnsItemILista(kategori,Budgets.Kostnadskategorier)==false){
		Budgets.Kostnadskategorier.push(kategori)
	}
}
function rensaKostnader(){
	
}

function ritaUppKostandskategorier(){
	var element = document.getElementById("kostnadskategori")
	rensaElement(element)
	for (var i=0;i<Budgets.Kostnadskategorier.length;i++){
		var newElem = document.createElement("option")
		newElem.setAttribute("value",Budgets.Kostnadskategorier[i])
		element.appendChild(newElem)
	}
}
function ritaUppKostnader(){
	var element = document.getElementById("SubKostnader");
	rensaElement(element);
	for (var i=0;i<Budgets.transaktioner.length;i++){
		
		if(Budgets.transaktioner[i].type=="kostnad"){
		var newElem = document.createElement("p");
		var varde = document.createElement("input")
		varde.setAttribute("type","number");
		varde.setAttribute("value",Budgets.transaktioner[i].value);
		varde.setAttribute("id",Budgets.transaktioner[i].id);
		varde.addEventListener("change",saveValues,false);
		
		var beskrivning = document.createElement("input");
		beskrivning.setAttribute("type","string");
		beskrivning.setAttribute("value",Budgets.transaktioner[i].namn);
		beskrivning.setAttribute("id","Beskrivning"+Budgets.transaktioner[i].id);
		beskrivning.addEventListener("change",updateDescriptions,false);
		
		var kategori = document.createElement("input")
		kategori.setAttribute("name","kostnadskategori")
		kategori.setAttribute("list","kostnadskategori")
		kategori.setAttribute("value",Budgets.transaktioner[i].kategori)
		kategori.setAttribute("id","Kategori"+Budgets.transaktioner[i].id);
		kategori.addEventListener("change",updateKategorier,false);
		
		
		var deleteButton = document.createElement("input");
		deleteButton.setAttribute("type","button");
		deleteButton.setAttribute("value","Ta bort");
		deleteButton.setAttribute("onclick","deleteTransaktion("+Budgets.transaktioner[i].id+")")
			
		newElem.appendChild(beskrivning);
		newElem.appendChild(varde);
		
		newElem.appendChild(deleteButton);
		newElem.appendChild(kategori);
		element.appendChild(newElem);
	}
}}

function updateDescriptionKostnad(){
	updateDescription(Budgets.kostnader,"kostnadBeskrivning");
}
window.addEventListener("load", init, false);
