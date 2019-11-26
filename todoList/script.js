var input = document.querySelector("input");
var creationButton = document.querySelector("button");
var warning = document.querySelector(".warning");
var lis = [];

warning.style.display = "none";

creationButton.addEventListener("click", function(){
    generateToDo();
});

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        generateToDo();
    }
  });

function generateToDo(){
    if (input.value !==""){
        warning.style.display = "none";

        var li = document.querySelector("ul").appendChild(document.createElement("li"));
        li.classList.add("content");
        
        li.textContent = input.value;
        input.value = "";

        lis = document.querySelectorAll(".content");
    }
    else{
        warning.style.display = "block";
    }
    for(i=0;i<lis.length;i++){
        var text;
        lis[i].addEventListener("click",function(){
            this.remove();
    })
        lis[i].addEventListener("mouseenter",function(){
            this.classList.add("selected");
        })

        lis[i].addEventListener("mouseout", function(){
            this.classList.remove("selected");
        })
    }
}

