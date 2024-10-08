import { getTasks } from "./task";

export const renderTasks = () => {
    const tasklist = document.getElementById("task-list");
    tasklist.innerHTML = "";

    const tasks = getTasks();
    tasks.forEach((task) => {
        const li = document.createElement("li")
        li.setAttribute("data-id", task.id);
   
        // Añadir clase solo si la tarea está completada
        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${task.text}
            <button class="delete">Eliminar </button>
            <button class="toggle"> ${ task.completed === false ? "Completar" : "Deshacer"}</button>
        `;

        tasklist.appendChild(li);
    });
};
