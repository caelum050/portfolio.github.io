function activity() {
    var optionToCreate = document.getElementById("new-option").value;
    var optionToAdd = document.getElementById("choose-activity");
    var value = document.getElementById("value").value;
    var currentDiv = document.getElementById("activity-container");

    if(optionToCreate == "activity") {
        var checkDevExists = document.getElementById(value);
        if(!checkDevExists){
            var newDiv = document.createElement("DIV");
            var close = document.getElementsByClassName("closeAll");
            newDiv.setAttribute("id", value);
            newDiv.setAttribute("class", "box");
    
            var txt = document.createTextNode(value);
    
            var newH3 = document.createElement("H3");
            newH3.appendChild(txt);
            newH3.setAttribute("align", "center");
    
            newDiv.appendChild(newH3);
    
            var newUL = document.createElement("UL");
            newDiv.appendChild(newUL);
            newUL.setAttribute("id", value + "list");
    
            currentDiv.appendChild(newDiv);
            
    
            var option = document.createElement("OPTION");
            option.value = value;
            option.innerHTML = value;
            optionToAdd.appendChild(option); 

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "closeAll";
            span.appendChild(txt);
            newH3.appendChild(span);
    
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  var div = this.parentNode;
                  div.parentNode.remove();
                }
            }
        }
        else {
            alert("This activity already exist, use other name.");
        }
        
    }
    else if (optionToCreate == "task")
    {
        var activityToAdd = document.getElementById("choose-activity").value;
        var idToFind = activityToAdd + "list";
        var ulToAdd = document.getElementById(idToFind);
        var close = document.getElementsByClassName("close");
        var checkDevExists = document.getElementById(value);

        if(!checkDevExists){
            var newLI = document.createElement("LI");
            newLI.setAttribute("id", value);
            ulToAdd.appendChild(newLI);
            newLI.innerHTML = value;
    
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            newLI.appendChild(span);
    
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  var div = this.parentNode;
                  div.parentNode.removeChild(div);
                }
              }
        }
        else {
            alert("This task already exist, please use other name");
        }
        
        
    
    }
    
}