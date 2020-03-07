import React, { FunctionComponent } from "react";
import { Task } from "../models/task";

interface Props {
  // expects to get a function with one event argument
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  // define task value
  task: Task;
}

// <> for generic interface - type checking inside component
export const NewTask: FunctionComponent<Props> = ({ task, onChange, onAdd }) => (
  <div className="column column-50 column-offset-25">
    <form onSubmit={onAdd} className="form-margin">
      <input placeholder="write a new task..." onChange={onChange} value={task.name} />
      <button type="submit" className="button button-small">Add</button>
    </form>
  </div>
);