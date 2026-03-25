function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleTask(span) {
  span.classList.toggle("completed");
}
