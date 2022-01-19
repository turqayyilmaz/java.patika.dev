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



/*







function newToDo() {
    let taskName = $("#task").val().trim();
    let isDone = false;
    if (localStorage.getItem('tasks'))
        tasks = JSON.parse(localStorage.getItem('tasks'));

    let task = { "taskName": taskName, "isDone": isDone };

    if (taskName == "") {
        console.log("boş veri girilemez");
    }
    else {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        $("#task").val("");
    }
    toDoList();
}

let list = document.getElementById("list");

list.addEventListener("click", function (e) {

});

$(function () {

    $("#list li").click(function (e) {
        index = e.currentTarget.id;
        let task = tasks[index];
        console.log(this)
        task.isDone = !task.isDone
        tasks[index] = task;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        task.isDone ? e.target.className = "isDone" : e.target.className = "";
    })

})

function toDoList() {

    tasks = JSON.parse(localStorage.getItem('tasks'));
    ul = $("#list");
    ul.empty();

    tasks.forEach((v, i) => {
        ul.append(`<li id=${i} class="${v.isDone ? "isDone" : "isNotDone"}"><span>${v.taskName}</span></li>`);
    });

}

toDoList();*/


load();