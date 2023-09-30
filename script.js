// Add new todo task to todoList
function addTask() {
    // TODO: Get the value from todoInput element
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // TODO: Check that input value was provided
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // TODO: Get todoList element from html and assign it to variable
    const todoList = document.getElementById("todoList");

    // TODO: Create new li element and assign it to variable
    const li = document.createElement("li");

    // TODO: Assing the todoInput value to the textContent
    li.textContent = taskText  

    // TODO: Create completed button to set the task to done, createElement
    const completedButton = document.createElement("button");

    // TODO: Add text to the completed button using textContent
    completedButton.textContent = "Mark as complete"

    // TODO: Add onclick method to the completed button, that changes the background color of the todo item
    // Below is one way to change the background color using ternary logic
    // todoListItem.style.backgroundColor = todoListItem.style.backgroundColor == "green" ? "" : "green";
    completedButton.onclick = function() {
      li.style.backgroundColor = li.style.backgroundColor === "green" ? "" : "green"
      
      completedButton.textContent = completedButton.textContent === "Mark as complete" ? "Completed" : "Mark as complete"

      li.classList.toggle("completed")  
    } 

    // TODO: Add created done button to new todo list item
    li.appendChild(completedButton)

    // TODO: Add new todo list item to todoList
    todoList.appendChild(li)

    // TODO: Set todoInput value to empty string
    taskInput.value = ""
  }
  
// Extra assingment -> try to find a way to remove all completed todo items
// hint -> you might need to use additional list variable
function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll(".completed")

  if (completedTasks.length === 0) return

  console.log(completedTasks)

  for (const task of completedTasks) {
    task.remove()
  }
}