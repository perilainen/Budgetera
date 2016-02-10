var Budgets =[];

function initBudget(){
	document.getElementById("saveBudget").addEventListener("click",saveBudgetLocal,false);
	document.getElementById("clearBudget").addEventListener("click",clearBudgetLocal,false);
	
	var storedData = localStorage.getItem("budgets");
	
	if (storedData===null){
		
		Budgets = new Budget("Budget Name");
	}
	else{
		Budgets = JSON.parse(localStorage.getItem("budgets"));
		if (Budgets.Kostnadskategorier==null){
			initKostnadskategorier();
		}
		if (Budgets.Inkomstkategorier==null){
			initInkomstkategorier();
		}
		initTransaktioner();
		
	}
	reDrawAll();
}	
	//Budgets = new Budget("Budget Name");
function clearBudgetLocal(){
	localStorage.removeItem("budgets");
	initBudget();
	
}
function initKostnadskategorier () {
	Budgets.Kostnadskategorier=["Direkta","Övriga","Ränta"];
}

function initInkomstkategorier(){
	Budgets.Inkomstkategorier=["Daglig","Engångs","Månadsvis"];
}


function saveBudgetLocal(){
	localStorage.setItem("budgets",JSON.stringify(Budgets));
}

function Budget(name){
	this.name = "name";	
	this.transaktioner =[];
	this.investeringar = [];
	this.Kostnadskategorier= ["Direkta","Övriga","Ränta"];
	this.Inkomstkategorier=["Daglig","Engångs","Månadsvis"];
}
window.addEventListener("load", initBudget, false);