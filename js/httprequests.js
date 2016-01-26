var xhr= new XMLHttpRequest();
function init(){
	xhr.open('GET', "http://127.0.0.1:8080/users/3", true);
	xhr.send();
	
	xhr.onreadystatechange = processRequest;
}
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = (xhr.responseText);
        console.log(response);
    }
}
window.addEventListener("load", init, false);