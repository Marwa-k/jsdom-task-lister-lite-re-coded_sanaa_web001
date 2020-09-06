document.addEventListener("DOMContentLoaded", function(event) => {
  // your code here
    let listOftasks = document.getElementById("tasks");
  document.addEventListener("submit", function(event) {
    event.preventDefault()
    let newTask = document.getElementById("new-task-description");
    let li = document.createElement("li");
    let text=document.createTextNode(newTask.value)
    li.appendChild(text);
    listOftasks.appendChild(li);
    event.target.reset();
});
