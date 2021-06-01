import React, { useState } from "react";

import { Header } from "../components/Header/Header";
import { MyTasksList } from "../components/MyTaskList/MyTasksList";
import { TodoInput } from "../components/TodoInput/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle !== "") {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };
      setTasks((oldTask) => [...oldTask, data]);
      console.log(data);
      return;
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const task = tasks.filter((item) => item.id === id)[0];

    task.done = !task.done;

    const doneTasks = [...new Set([task, ...tasks])];
    setTasks(doneTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldTask) => oldTask.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
