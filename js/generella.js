function getNewId(Typ){
	newId = 0;
	console.log("hämtar id"+Typ.length)
	
	for (i=0; i < Typ.length; i++){
		newId = Math.max(newId,Typ[i].id)
	}
	return newId+1;
}

function updateDescription(typ,namn){
	for (i=0; i<typ.length;i++){
		var elem = document.getElementById(namn+typ[i].id);
		typ[i].namn = elem.value;
		
	}
}
