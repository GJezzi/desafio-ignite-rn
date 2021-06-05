import React, { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../components/Header/Header";
import { MyTasksList } from "../components/MyTaskList/MyTasksList";
import { TodoInput } from "../components/TodoInput/TodoInput";
import { SwitchMode } from "../components/SwitchMode/SwitchMode";

import light from "../themes/light";
import dark from "../themes/dark";
interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [theme, setTheme] = useState(light);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const toggleTheme = useCallback(() => {
    toggleSwitch();
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

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
      <ThemeProvider theme={theme}>
        <Header />
        <SwitchMode
          onValueChange={toggleTheme}
          value={isEnabled}
          trackColor={{
            false: theme.colors.secondary,
            true: theme.colors.secondary,
          }}
          thumbColor={theme.colors.text}
        />

        <TodoInput
          placeholderTextColor={theme.colors.inputPlaceholderTextColor}
          addTask={handleAddTask}
        />

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
        />
      </ThemeProvider>
    </>
  );
}
