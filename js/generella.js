function getNewId(Typ) {
	newId = 0;
	
	for ( var i = 0; i < Typ.length; i++) {
		newId = Math.max(newId, Typ[i].id);
	}
	return newId + 1;
}

function deleteTransaktion(id) {
	
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		if (Budgets.transaktioner[i].id == id) {
			Budgets.transaktioner.splice(i, 1);
		}
	}
	reDrawAll();
}

function updateDescriptions() {
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		var elem = document.getElementById("Beskrivning" + Budgets.transaktioner[i].id);
		Budgets.transaktioner[i].namn = elem.value;
	}
}

function updateKategorier() {
	
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		
		var elem = document.getElementById("Kategori" + Budgets.transaktioner[i].id);
		Budgets.transaktioner[i].kategori = elem.value;
		
		addKategori(Budgets.transaktioner[i].type,elem.value);
	}
	
	setDays();
	reDrawAll();
}

function populeraKategorierFranBudget(){
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		addKategori(Budgets.transaktioner[i].type,Budgets.transaktioner[i].kategori);
	}
}

function getDays(kategori) {
	if (kategori == "Daglig") {
		return parseInt(document.getElementById("daysPerYear").value);
	}
	if (kategori == "Månadsvis") {
		return 12;
	}
	return 1;
}

function setDays() {
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		
		Budgets.transaktioner[i].antal = getDays(Budgets.transaktioner[i].kategori);

	}
}

function updateDescription(typ, namn) {
	for ( var i = 0; i < typ.length; i++) {
		var elem = document.getElementById(namn + typ[i].id);
		typ[i].namn = elem.value;
	}
}

function finnsItemILista(item, lista) {
	for ( var i = 0; i < lista.length; i++) {
		if (item == lista[i]) {
			return true;
		}
	}
	return false;
}

function calculateTotalType(type) {
	var total = 0;
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {

		if (Budgets.transaktioner[i].type == type) {

			total += hämtaårlig(Budgets.transaktioner[i]);
			
		}
	}
	return total;
}

function calculateTotalTypeKategori(type, kategori) {
	var total = 0;
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		if (Budgets.transaktioner[i].kategori == kategori) {
			
			total += hämtaårlig(Budgets.transaktioner[i]);
		}
	}
	return total;
}

function hämtaårlig(index) {
	return index.antal * index.value;
}

function saveValues() {
	
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		var elem = document.getElementById(Budgets.transaktioner[i].id);
		Budgets.transaktioner[i].value = parseInt(elem.value);
	}
	ritaTotalTransaktioner();
}

function ritaTotalTransaktioner() {
	
	var element = document.getElementById("totalInkomst");
	totalInkomst = calculateTotalType("inkomst");
	element.innerHTML = totalInkomst;
	totalKostnad = calculateTotalType("kostnad");
	var element = document.getElementById("totalKostnad");
	element.innerHTML = totalKostnad;
}

function hämtaTyper(type) {
	var Typer = [];
	for ( var i = 0; i < Budgets.transaktioner.length; i++) {
		if (Budgets.transaktioner[i].type == type) {
			
			if (inkomstTyper.indexOf(Budgets.transaktioner[i].type) == -1) {
				inkomstTyper.push(Budgets.transaktioner[i].type);
			}
		}
	}
	
	return inkomstTyper;
}

function reDrawAll() {
	ritaDetaljeradResultaträkning();
	ritaResultaträkning();
	ritaTotalTransaktioner();
	ritaUppAvskrivningar();
	ritaUppInkomster();
	ritaUppInvesteringar();
	ritaUppKostnader();
	ritaUppKostandskategorier();
	ritaUppInkomstkategorier();
}
