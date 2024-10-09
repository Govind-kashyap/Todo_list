let task = document.getElementById('input-box');
let container = document.getElementById('list-container');
let button = document.getElementById('button');
let checked = document.querySelector(".checked");
function addTask(){
    if(task.value === "")
        {
            alert("Please Enter the task");
        }
        else {
            const li = document.createElement("li");
            li.innerHTML = task.value;
            
            let a = document.createElement("span");
            a.innerHTML = "x";

            li.appendChild(a);
        container.appendChild(li);
        }
        task.value = "";
    saveData();
};

console.log("Govind");

container.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        
    }
},false);

console.log("kashayp");

function saveData(){
    localStorage.setItem("data", container.innerHTML);
}

function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
showTask();

console.log("BCA");