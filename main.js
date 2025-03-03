let task = [];

function Add() {
    let temp = {};
    temp.name = document.getElementById("textInput").value;
    temp.priority = document.getElementById("priorityInput").value;

    task.push(temp);

    task.sort(function (a, b) { return a.priority - b.priority; });
    
    // Clear input fields
    document.getElementById('textInput').value = "";
    document.getElementById('priorityInput').value = "";
    
    // Display tasks
    document.getElementById("output").innerHTML = ""; // Clear previous list
    for (let i = 0; i < task.length; i++) {
        let newtask = document.createElement('li');
        newtask.innerText = task[i].name;
        document.getElementById("output").appendChild(newtask);
    }
}

