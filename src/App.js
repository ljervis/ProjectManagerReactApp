import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos.js'
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
      }
    })
  }

  // Lifecycle method 
  // Fetch data from outside api in this method
  componentWillMount(){
    this.getTodos();
    this.getProjects();
  }

  componentDidMount(){
    this.getTodos();
    this.getProjects();
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);   
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
      <AddProject addProject = {this.handleAddProject.bind(this)}/> 
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      <hr />
      <Todos todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
