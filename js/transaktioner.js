function transaktion(typ, namn , val, kategori, antal){
	this.namn = namn;
	this.value = val;
	this.type = typ;
	this.id = getNewId(Budgets.transaktioner);
	this.kategori = kategori
	this.antal = antal;
	this.totalBelopp = this.id*this.antal;
}


function ritaTransaktioner(){
	var inkomster = document.getElementById("SubInkomster");
	rensaElement(inkomster);
	
	var utgifter = document.getElementById("SubKostnader");
	rensaElement(element);
	
	for (var i=0;i<Budgets.transaktioner.length;i++){
		
	}
	
}

function getKategorier(type){
	var kategorier = [];
	for (var i=0;i<Budgets.transaktioner.length;i++){
		console.log((Budgets.transaktioner[i].type))
		if(Budgets.transaktioner[i].type==type){
		console.log((Budgets.transaktioner[i].kategori))
		if (kategorier.indexOf(Budgets.transaktioner[i].kategori)==-1){
			kategorier.push(Budgets.transaktioner[i].kategori)
		}
		
		
	}}
	return kategorier
}
function addKategori(typ,kategori){
	console.log(typ)
	console.log(kategori)
	if(typ=="inkomst"){
		addInkomstkategori(kategori)
	}
	if (typ=="kostnad"){
		addKostnadskategori(kategori)
	}
	
}


function rensaElement(elem){
	
	while (elem.firstChild) {
    	elem.removeChild(elem.firstChild);
	}
}
