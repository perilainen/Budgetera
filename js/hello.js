var BudgetList = [];

$(document).ready(function() {
	console.log("TEst");
    $.ajax({
        url: "http://127.0.0.1:5000/users"
        
    }).then(function(data) {
    	BudgetList=data;
       //$('.greeting-id').append(data);
       //$('.greeting-content').append(data.content);
       console.log(BudgetList);
    });
    
});
$(document).ready(function() {
$("#laddaOm").click(function() {
	console.log("TEst");
    $.ajax({
        url: "http://127.0.0.1:5000/users"
        
    }).then(function(data) {
    	BudgetList=data;
       //$('.greeting-id').append(data);
       //$('.greeting-content').append(data.content);
       console.log(BudgetList);
       //$('.greeting-id').append(data);
       //$('.greeting-content').append(data.content);
    });
    
});});
