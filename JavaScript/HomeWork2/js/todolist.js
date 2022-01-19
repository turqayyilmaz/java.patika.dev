let tasks = [];
let list = document.getElementById("list");

function changeStatus(e) {
        id = e.target.attributes["data-id"].value;
        tasks[id].isDone = tasks[id].isDone ? false : true;
        saveToDoList();
        e.target.classList.toggle("isDone");
}

function removeToDo(e) {
    e.stopPropagation();
    index=e.target.parentNode.attributes["data-id"].value;
    tasks.splice(index,1);
    saveToDoList();
    load();
}

function load() {
    getToDoList();
    list.innerHTML = "";
    console.log(tasks)
    tasks.forEach((v, i) => {
        addToDo(i, v.taskName, v.isDone);
    });
}

function addToDo(id, toDoName, isDone) {
    console.log("addToDo: ",id, toDoName, isDone);
    let liEl = document.createElement("li");
    liEl.textContent = toDoName;
    liEl.setAttribute("data-id", id);
    liEl.classList.add(isDone ? "isDone":"isNotDone");
    liEl.addEventListener("click", changeStatus);
    let button= document.createElement("button");
    button.className="btn btn-danger btnDelete";
    button.innerHTML="Sil";
    button.addEventListener("click", removeToDo);
    liEl.appendChild(button);    
    list.appendChild(liEl);
}

function newToDo() {
    let taskName = $("#task").val().trim();
    let isDone = false;

    if (taskName == "") {
        console.log("boş veri girilemez");
        $('#errorToast').toast('show');
    }
    else {
        let task = { "taskName": taskName, "isDone": isDone };
        tasks.push(task);
        addToDo(tasks.length - 1, task.taskName, task.isDone)
        document.getElementById("task").value="";
        saveToDoList();
        $('#successToast').toast('show');
    }
}

function saveToDoList() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getToDoList() {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
load();