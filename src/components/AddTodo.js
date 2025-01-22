import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleAddToList = this.handleAddToList.bind(this);
  }

  handleAddToList(description) {

    this.props.todoContext.addTodo(description)
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    addElement.querySelector('#todo-add-btn')
      .addEventListener('click', (e) => {
        const input = addElement.querySelector('#todo-input');
        this.handleAddToList(input.value)
        input.value = null;
      })

    return addElement;
  }
}