
function investering(){
	this.namn="delinvestering";
	this.value=0;
	this.avskrTid=5;
	this.id=getNewId(Budgets.investeringar);
}

function init(){
	document.getElementById("addInvestering").addEventListener("click",appendInvestering,false);
	console.log("test");
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
	for (i=0; i < Budgets.investeringar.length; i++){
		
		var newElem = document.createElement("p");
		var box = document.createElement("input");
		box.setAttribute("type","number");
		box.setAttribute("value",Budgets.investeringar[i].value);
		box.setAttribute("id","InvesteringNo"+Budgets.investeringar[i].id);
		box.addEventListener("change",saveValues,false);
		boxDescription = document.createElement("input");
		boxDescription.setAttribute("type","string");
		boxDescription.setAttribute("value",Budgets.investeringar[i].namn);
		boxDescription.addEventListener("change",updateDescriptions,false);
		boxDescription.setAttribute("id","InvesteringDescriptionNo"+Budgets.investeringar[i].id);
		
		boxAvskrivningstid = document.createElement("input");
		boxAvskrivningstid.setAttribute("type","number");
		boxAvskrivningstid.setAttribute("value",Budgets.investeringar[i].avskrTid);
		boxAvskrivningstid.setAttribute("id","InvesteringAvskrivningsTidNo"+Budgets.investeringar[i].id);
		box.addEventListener("change",saveAvskrivningstid,false);
		
		newElem.appendChild(boxDescription);
		newElem.appendChild(box);
		newElem.appendChild(boxAvskrivningstid);
		element.appendChild(newElem);
	}
}
function updateDescriptions(){
	for (i=0; i<Budgets.investeringar.length;i++){
		var elem = document.getElementById("InvesteringDescriptionNo"+Budgets.investeringar[i].id);
		Budgets.investeringar[i].namn = elem.value;
		
	}
}
function saveValues(){
	console.log("Saving values")
	for (i=0; i<Budgets.investeringar.length;i++){
		var elem = document.getElementById("InvesteringNo"+Budgets.investeringar[i].id);
		Budgets.investeringar[i].value = parseInt(elem.value);
	}
	caculateTotalInvestering();
	ritaUppAvskrivningar();
}
function saveAvskrivningstid(){
	for (i=0; i<Budgets.investeringar.length;i++){
		var elem = document.getElementById("InvesteringAvskrivningsTidNo"+Budgets.investeringar[i].id);
		Budgets.investeringar[i].avskrTid = parseInt(elem.value);	
	}
	
	
}
function ritaUppAvskrivningar(){
	var element = document.getElementById("AvskrivningPerAr")
	var avskrivning = calculateAvskrivningPerAr();
	element.innerHTML=avskrivning;
}

function calculateAvskrivningPerAr(){
	
	var totalAvskrivning=0;
	
	for (i=0; i<Budgets.investeringar.length;i++){
		totalAvskrivning +=Budgets.investeringar[i].value/Budgets.investeringar[i].avskrTid;
	}
	return totalAvskrivning;
	
}

function caculateTotalInvestering(){
	console.log("calcuating total")
	var totalInvestering = 0;
	var element = document.getElementById("totalInvestering")
	for (i=0; i< Budgets.investeringar.length;i++){
		console.log	(Budgets.investeringar[i].value);
		totalInvestering +=Budgets.investeringar[i].value
	}
	//element.setUserData(totalInvestering);
	element.innerHTML = totalInvestering;
	calculateAvskrivningPerAr();
}

window.addEventListener("load", init, false);
