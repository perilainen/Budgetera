var Budgets =[];
function init(){
	document.getElementById("saveBudget").addEventListener("click",saveBudgetLocal,false);
	
	console.log(localStorage.budgets);
	var storedData = localStorage.getItem("budgetsdd");
	if (storedData===null){
		console.log("Creating new budget")
		Budgets = new Budget("Budget Name");
	}
	else{
		Budgets = JSON.parse(localStorage.getItem("budgets"));
		reDrawAll();
	}
	
	//Budgets = new Budget("Budget Name");
}

function saveBudgetLocal(){
	localStorage.setItem("budgets",JSON.stringify(Budgets));
}
function Budget(name){
	this.name = "name";
	
	this.transaktioner =[];
	this.inkomster = [];
	this.investeringar = [];
	this.kostnader = [];
}
window.addEventListener("load", init, false);