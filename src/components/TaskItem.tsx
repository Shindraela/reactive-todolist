import React, { FunctionComponent } from "react";
import { Task } from "../models/task";

interface Props {
  task: Task;
  bgColor: string;
  onValidation: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export const TaskItem: FunctionComponent<Props> = ({ task, bgColor, onValidation, onDelete }) => {
  // define onDeleteClick method for deleting task item
  const onDeleteClick = () => {
    onDelete(task);
  };

  const onValidationClick = () => {
    onValidation(task);
  };

  return (
    <li>
      <span>{task.name}</span>
      <button onClick={onValidationClick} className="button button-small" style={{backgroundColor: bgColor, borderColor: bgColor}}>&#10003;</button>
      <button onClick={onDeleteClick} className="button button-small">X</button>
    </li>
  );
};