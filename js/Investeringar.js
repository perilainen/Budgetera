
function investering(){
	this.namn="delinvestering";
	this.value=0;
	this.avskrTid=5;
	this.id=getNewId(Budgets.investeringar);
}

function init(){
	document.getElementById("addInvestering").addEventListener("click",appendInvestering,false);
	
}

function appendInvestering(){
	var invest = new investering();
	Budgets.investeringar.push(invest);
	ritaUppInvesteringar();
}
function ritaUppInvesteringar(){
	var element = document.getElementById("SubInvesteringar");
	while (element.firstChild) {
    	element.removeChild(element.firstChild);
	}
	for (var i=0; i < Budgets.investeringar.length; i++){
		
		var newElem = document.createElement("p");
		var box = document.createElement("input");
		box.setAttribute("type","number");
		box.setAttribute("value",Budgets.investeringar[i].value);
		box.setAttribute("id","InvesteringNo"+Budgets.investeringar[i].id);
		box.addEventListener("change",saveValuesAvskrivning,false);
		boxDescription = document.createElement("input");
		boxDescription.setAttribute("type","string");
		boxDescription.setAttribute("value",Budgets.investeringar[i].namn);
		boxDescription.addEventListener("change",updateDescriptions,false);
		boxDescription.setAttribute("id","InvesteringDescriptionNo"+Budgets.investeringar[i].id);
		boxDescription.setAttribute("title",Budgets.investeringar[i].id);
		
		boxAvskrivningstid = document.createElement("input");
		boxAvskrivningstid.setAttribute("type","number");
		boxAvskrivningstid.setAttribute("value",Budgets.investeringar[i].avskrTid);
		boxAvskrivningstid.setAttribute("id","InvesteringAvskrivningsTidNo"+Budgets.investeringar[i].id);
		boxAvskrivningstid.addEventListener("change",saveAvskrivningstid,false);
		
		newElem.appendChild(boxDescription);
		newElem.appendChild(box);
		newElem.appendChild(boxAvskrivningstid);
		element.appendChild(newElem);
	}
}
function updateDescriptions(){
	for (var i=0; i<Budgets.investeringar.length;i++){
		var elem = document.getElementById("InvesteringDescriptionNo"+Budgets.investeringar[i].id);
		Budgets.investeringar[i].namn = elem.value;
		
	}
}
function saveValuesAvskrivning(){
	
	for (var i=0; i<Budgets.investeringar.length;i++){
		var elem = document.getElementById("InvesteringNo"+Budgets.investeringar[i].id);
		Budgets.investeringar[i].value = parseInt(elem.value);
	}
	caculateTotalInvestering();
	ritaUppAvskrivningar();
}
function saveAvskrivningstid(){
	
	for (var i=0; i<Budgets.investeringar.length;i++){
		var elem = document.getElementById("InvesteringAvskrivningsTidNo"+Budgets.investeringar[i].id);
		Budgets.investeringar[i].avskrTid = parseInt(elem.value);	
	}
	caculateTotalInvestering();
	ritaUppAvskrivningar();
	
}
function ritaUppAvskrivningar(){
	var element = document.getElementById("AvskrivningPerAr");
	var avskrivning = calculateAvskrivningPerAr();
	element.innerHTML=avskrivning;
}

function calculateAvskrivningPerAr(){
	
	var totalAvskrivning=0;
	
	for (var i=0; i<Budgets.investeringar.length;i++){
		totalAvskrivning +=Budgets.investeringar[i].value/Budgets.investeringar[i].avskrTid;
	}
	return totalAvskrivning;
	
}

function caculateTotalInvestering(){
	
	var totalInvestering = 0;
	var element = document.getElementById("totalInvestering");
	for (var i=0; i< Budgets.investeringar.length;i++){
		
		totalInvestering +=Budgets.investeringar[i].value;
	}
	//element.setUserData(totalInvestering);
	element.innerHTML = totalInvestering;
	calculateAvskrivningPerAr();
}

window.addEventListener("load", init, false);
