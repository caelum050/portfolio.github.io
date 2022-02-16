function activity() {

    var value = document.getElementById("value").value;
    var currentDiv = document.getElementById("activity-container");

 
        var checkDevExists = document.getElementById(value);
        if(!checkDevExists){
            var newDiv = document.createElement("DIV");
            var close = document.getElementsByClassName("closeAll");
            newDiv.setAttribute("id", value);
            newDiv.setAttribute("class", "board-list");
    
            var txt = document.createTextNode(value);
    
            var newH3 = document.createElement("H3");
            newH3.appendChild(txt);
            newH3.setAttribute("align", "center");
    
            newDiv.appendChild(newH3);

            var addNewCard = document.createElement("DIV");
            addNewCard.setAttribute("id", "add-new-card" + value);
            addNewCard.setAttribute("class", "add-card");
            addNewCard.innerHTML += '+ Add New Task';
            addNewCard.addEventListener("click", task);
            

            newDiv.appendChild(addNewCard);

            currentDiv.appendChild(newDiv);

        }
        else {
            alert("This activity already exist, use other name.");
        }
        
    }

    


function task(clicked_id) {
    var id = clicked_id.srcElement.attributes.id.value;
    var parentId = document.getElementById(id).parentElement.id;

    var close = document.getElementsByClassName("close");

    var parentDiv = document.getElementById(parentId);

    let text;
    let newTask = prompt("Please enter new task:", "");
    if(newTask == null || newTask == "") {
        alert("Invalid task");
    } else {
        text = newTask;
        var addCard = document.createElement("DIV");

        addCard.setAttribute("class", "card");

        var tag = document.createElement("p");
        
        var txtT = document.createTextNode(text);
        tag.appendChild(txtT);
        addCard.appendChild(tag);
        //addCard.innerHTML += newTask;

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        addCard.appendChild(span);

        parentDiv.appendChild(addCard);

        for(i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentNode;
                div.parentNode.removeChild(div);
            }
        }
    }
}