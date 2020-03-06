import React, { FunctionComponent } from "react";
import { Task } from "../models/task";
import { TaskItem } from "./TaskItem";

interface Props {
  tasks: Task[];
  bgColor: string;
  onValidation: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export const TasksList: FunctionComponent<Props> = ({ tasks, bgColor, onValidation, onDelete }) => (
  <ul className="column column-50 column-offset-25">
    {tasks.map((task, index) => (
      <TaskItem task={task} key={index} bgColor={bgColor} onValidation={onValidation} onDelete={onDelete} />
    ))}
  </ul>
);