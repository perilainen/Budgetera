function add(type) {
 
    //Create an input type dynamically.
    var element = document.getElementById(type);
    
    var box = document.createElement("type")
 
    //Assign different attributes to the element.
    element.setAttribute("type", type);
    element.setAttribute("value", type);
    element.setAttribute("name", type);
 
 
    
 
}