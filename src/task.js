// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agragar tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para poder llevar la traer la lista de tareas
export const getTasks = () => tasks;

// Función para eliminar una tarea de la lista
export const deleteTasks = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para actualizar una tarea
export const updateTasks = (id) => {
    tasks = tasks.map((task) => {
if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('task', JSON.stringify(tasks));
};
