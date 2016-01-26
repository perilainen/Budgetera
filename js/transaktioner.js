function transaktion(typ, namn , val, kategori, antal){
	this.namn = namn;
	this.value = val;
	this.type = typ;
	this.id = getNewId(Budgets.transaktioner);
	this.kategori = 
	this.antal = 1;
	this.totalBelopp = this.id*this.antal;
	
}
