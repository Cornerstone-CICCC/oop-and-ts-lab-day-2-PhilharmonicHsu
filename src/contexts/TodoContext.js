export class TodoContext {
  constructor() {
    this.todos = [];
    this.listeners = [] // array of functions
  }

  addTodo(todo) {
    this.todos.push({
      id: Math.random() * (9000 - 1000) + 1000,
      description: todo,
      completed: false,
    })

    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener) // add function to the listeners array
  }

  notifyListeners() {
    // Iterate and trigger the functions stored inside the listeners array
    this.listeners.forEach(listener => {
      listener(this.todos)
    })
  }
}