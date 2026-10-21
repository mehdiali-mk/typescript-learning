const button = document.getElementById("addButton");
const inputText = document.getElementById("todoInput");
const form = document.querySelector("form");
const todoList = document.getElementById("todoList");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
let todos = readTodo();
let currentFilter = "all";
// Initial render on page load
renderTodos();
function readTodo() {
    const todosJSON = localStorage.getItem("todo");
    if (todosJSON == null)
        return [];
    const parsed = JSON.parse(todosJSON);
    // Ensure older saved todos without an ID get a unique ID automatically
    return parsed.map((todo) => ({
        ...todo,
        id: todo.id || crypto.randomUUID(),
    }));
}
function saveTodos() {
    localStorage.setItem("todo", JSON.stringify(todos));
}
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const trimmedText = inputText.value.trim();
    if (!trimmedText)
        return;
    const newTodo = {
        id: crypto.randomUUID(),
        text: trimmedText,
        completed: false,
    };
    todos.push(newTodo);
    saveTodos();
    renderTodos();
    inputText.value = "";
}
function renderTodos() {
    todoList.innerHTML = "";
    const filteredTodos = todos.filter((todo) => {
        if (currentFilter === "active")
            return !todo.completed;
        if (currentFilter === "completed")
            return todo.completed;
        return true;
    });
    filteredTodos.forEach(createTodo);
    updateFooterStats();
}
function createTodo(todo) {
    const newTodoList = document.createElement("li");
    if (todo.completed) {
        newTodoList.classList.add("completed");
    }
    // Left section: Checkbox + Text (or Edit Input)
    const leftContent = document.createElement("div");
    leftContent.className = "todo-content";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
        renderTodos();
    });
    const textSpan = document.createElement("span");
    textSpan.className = "todo-text";
    textSpan.textContent = todo.text;
    // Double-clicking the text also triggers edit mode
    textSpan.addEventListener("dblclick", () => startEditing(todo, newTodoList, textSpan));
    leftContent.append(checkbox, textSpan);
    // Right section: Edit & Delete Action Buttons
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "todo-actions";
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "action-btn edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => startEditing(todo, newTodoList, textSpan));
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "action-btn delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));
    actionsDiv.append(editBtn, deleteBtn);
    newTodoList.append(leftContent, actionsDiv);
    todoList.append(newTodoList);
}
function startEditing(todo, liElement, textSpan) {
    // Prevent opening multiple edit inputs on the same item
    if (liElement.classList.contains("editing"))
        return;
    liElement.classList.add("editing");
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = todo.text;
    textSpan.replaceWith(editInput);
    editInput.focus();
    editInput.select();
    let isSaved = false;
    const finishEdit = () => {
        if (isSaved)
            return;
        isSaved = true;
        const updatedText = editInput.value.trim();
        if (updatedText) {
            todo.text = updatedText;
            saveTodos();
        }
        renderTodos();
    };
    editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            finishEdit();
        }
        else if (e.key === "Escape") {
            isSaved = true;
            renderTodos(); // Cancel changes and restore original text
        }
    });
    // Save automatically when clicking outside the input
    editInput.addEventListener("blur", finishEdit);
}
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    renderTodos();
}
function updateFooterStats() {
    const activeCount = todos.filter((todo) => !todo.completed).length;
    const hasCompleted = todos.some((todo) => todo.completed);
    taskCount.textContent = `${activeCount} ${activeCount === 1 ? "item" : "items"} left`;
    clearCompletedBtn.style.visibility = hasCompleted ? "visible" : "hidden";
}
// Filter Button Event Listeners
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter || "all";
        renderTodos();
    });
});
// Clear Completed Button Event Listener
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter((todo) => !todo.completed);
    saveTodos();
    renderTodos();
});
export {};
