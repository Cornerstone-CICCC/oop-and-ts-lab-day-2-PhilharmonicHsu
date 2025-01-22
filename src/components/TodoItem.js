import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    const selectedTodo = this.props.todoContext.todos.find(todo => {
      return todo.id === this.props.item.id
    })

    selectedTodo.completed = !selectedTodo.completed

    this.props.todoContext.notifyListeners()
  }

  handleDelete() {
    this.props.todoContext.todos = this.props.todoContext.todos.filter(todo => {
      return todo.id !== this.props.item.id
    })

    this.props.todoContext.notifyListeners()
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    let completedBtnText = "Mark Complete"

    if (this.props.item.completed) {
      todoElement.className += ' completed'
      completedBtnText = "Mark Incomplete" // Mark Incomplete
    }

    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = this.props.item.description;
    todoElement.append(todoSpan)

    const completedBtn = document.createElement("button");
    completedBtn.className = 'completed-btn'
    completedBtn.innerText = completedBtnText;
    completedBtn.addEventListener('click', () => this.handleComplete())

    const deleteBtn = document.createElement("button");
    deleteBtn.className = 'delete-btn'
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click', () => this.handleDelete())

    const btnArea = document.createElement("div");
    btnArea.append(completedBtn)
    btnArea.append(deleteBtn)

    todoElement.append(btnArea);

    return todoElement;
  }
}