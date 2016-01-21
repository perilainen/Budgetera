function getWorkingDays(startDate, endDate){
     var result = 0;
    var currentDate = startDate;
    while (currentDate <= endDate)  {  
		
        var weekDay = currentDate.getDay();
        if(weekDay != 0 && weekDay != 6)
            result++;

         currentDate.setDate(currentDate.getDate()+1); 
    }

    return result;
 }
function init(){
	var begin = new Date(2016, 01, 1);
 	var end = new Date(2016, 12, 31);
 	elem = document.getElementById("daysPerYear")
 	var days = getWorkingDays(begin, end); // result = 12 days
 	elem.value=days	
}
window.addEventListener("load", init, false);
 