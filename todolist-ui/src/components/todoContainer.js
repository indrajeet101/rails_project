import React, { Component } from "react";
import axios from "axios";
import update from 'immutability-helper'

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tdlists: [],
      inputValue: ''
    };
  }

  loadTdlists() {
    axios
      .get("/todolist")
      .then((res) => {
        this.setState({ tdlists: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadTdlists();
  }

  render() {
    return (
      <div>
        <div className="taskContainer">
          <input
            className="newTask"
            type="text"
            placeholder="Input a New Task and Press Enter"
            maxLength="75"
            onKeyPress={this.createTodo}
            value={this.state.inputValue} onChange={this.handleChange}
          />
        </div>
        <div className="wrapItems">
          <ul className="listItems">
            {this.state.tdlists.map((tdlist) => {
              return (
                <li className="item" tdlist={tdlist} key={tdlist.id}>
                  <input className="itemCheckbox" type="checkbox" />
                  <label className="itemDisplay">{tdlist.title}</label>
                  <span className="removeItemButton">x</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  createTodo = (e) => {
    if (e.key === 'Enter') {
      axios.post('/todos', {todo: {title: e.target.value}})
      .then(response => {
        const todos = update(this.state.todos, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          todos: todos,
          inputValue: ''
        })
      })
      .catch(error => console.log(error))      
    }    
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }
}

export default TodoContainer;