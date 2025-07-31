const todoReducer = (tasks, action) => {
    /*
    action.type  - add, remove, toggle
    action.payload - id, title
    */
    switch (action.type) {
        case 'addTask':
            return [
                ...tasks,
                { id: new Date().getTime(), title: action.payload.title, done: false, rating: 0 },
            ];
        case 'removeTask':
            return tasks.filter((task) => task.id !== action.payload.id);
        case 'toggleTask':
            return tasks.map((task) => task.id === action.payload.id ? { ...task, done: !task.done } : task);
        case 'ratingTask':
            return tasks.map((task) => task.id === action.payload.id ? { ...task, rating: action.payload.rating } : task);
        case 'changeTitleTask':
            return tasks.map((task) => task.id === action.payload.id ? { ...task, title: action.payload.title } : task);
        case 'setTasks':
            return action.payload
        default:
            return tasks
    }
}

export default todoReducer