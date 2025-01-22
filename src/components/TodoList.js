import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
    this.updateList = this.updateList.bind(this);
    this.props.todoContext.subscribe(this.updateList)
    this.todoListElement = null;
  }

  updateList(todos) {
    this.state.todos = todos;
    this.todoListElement.innerHTML = '';

    this.state.todos.forEach(item => {
      const newTodo = new TodoItem({
        item,
        todoContext: this.props.todoContext,
      })

      this.todoListElement.appendChild(newTodo.render())
    })
  }

  render() {
    const todoListElement = document.createElement('ul')
    todoListElement.className = "todo-list"

    this.todoListElement = todoListElement

    return todoListElement;
  }
}