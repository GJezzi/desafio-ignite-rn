import React, { useState } from "react";
import { Image, Platform, StyleSheet } from "react-native";

import checkIcon from "../../assets/icons/Check.png";

import { Container, TodoTextInput, TaskButton } from "./TodoInput.styles";

interface TodoInputProps {
  addTask: (task: string) => void;
  placeholderTextColor: string;
}

export function TodoInput({ addTask, placeholderTextColor }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value
    addTask(task);
    setTask("");
  }

  return (
    <Container
      style={
        Platform.OS === "ios"
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow
      }
    >
      <TodoTextInput
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        //TODO - use value, onChangeText and onSubmitEditing props
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={placeholderTextColor}
      />
      <TaskButton
        testID="add-new-task-button"
        activeOpacity={0.7}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TaskButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
});
