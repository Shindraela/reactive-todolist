import React, { Component } from "react";
import { Task } from "./models/task";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

// state handles tasks changes 
interface State {
  newTask: Task;
  tasks: Task[];
}

// empty object for Props, add State as a second argument
class App extends Component<{}, State> {
  // define newTask id by default and tasks array
  state = {
    newTask: {
      id: 1,
      name: "",
      isValidate: false
    },
    tasks: []
  };
  
  // making methods private since it shouldn't be accessed outside of the class
  // add task  written in input
  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // update state by adding new task 
    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: "",
        isValidate: false
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  // handle current task written in input
  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value,
        isValidate: false
      }
    });
  };

  // validate selecting task by finding it in tasks array with id
  private validateTask = (taskToValidate: Task) => {
    this.setState((previousState) => {
      previousState.tasks.map(task => task.id === taskToValidate.id ? taskToValidate.isValidate = true : taskToValidate.isValidate = false);

      // previousState.tasks.map(task => {
      //   let returnedTask;

      //   if(task.id === taskToValidate.id) {
      //     taskToValidate.isValidate = true;
      //   }
      //   else {
      //     taskToValidate.isValidate = false;
      //   }
      //   returnedTask = taskToValidate.isValidate;
      //   console.log("returnedTask :", returnedTask);
      //   return returnedTask;
      // });
    });
  };

  // delete selecting task by finding it in tasks array with id
  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="column column-50 column-offset-25 title-centered">My Reactive Todolist</h2>
        </div>

        <div className="row">
          <NewTask
            task={this.state.newTask}
            onAdd={this.addTask}
            onChange={this.handleTaskChange}
          />
        </div>

        <div className="row">
          <TasksList tasks={this.state.tasks} onValidation={this.validateTask} onDelete={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default App;