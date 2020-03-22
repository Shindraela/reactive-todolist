import React, { FunctionComponent, MouseEvent } from "react";
import { Task } from "../models/task";

interface Props {
  task: Task;
  // onValidation: (event: MouseEvent) => void;
  onValidation: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export const TaskItem: FunctionComponent<Props> = ({ task, onValidation, onDelete }) => {
  // define onDeleteClick method for deleting task item
  const onDeleteClick = () => {
    onDelete(task);
  };

  const onValidationClick = () => {
    // console.log("task :", task);
    onValidation(task);
  };

  return (
    <li>
      <span>{task.name}</span>
      <button onClick={onValidationClick} className={"button button-small " + (task.isValidate ? "task-done" : "task-undone")}>&#10003;</button>
      <button onClick={onDeleteClick} className="button button-small">X</button>
    </li>
  );
};