import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { Home } from "../../pages/Home";

const theme = {
  title: "light",
  colors: {
    primary: "#273fad",
    secondary: "#3fad27",
    inputBackgroundColor: "#f5f4f8",
    text: "#fff",
    inputText: "#A09CB1",
    headerTextColor: "#3D3D4D",
    doneMarkerColor: "#273FAD",
    doneText: "#A09CB1",
    markerBorder: "#3d3d4d",
    taskText: "#3D3D4D",
    doneButtonColor: "rgba(25, 61, 223, 0.1)",
  },
};

describe("Home", () => {
  it("should be able to render new added tasks", () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const inputElement = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputElement, "Primeira tarefa");
    fireEvent(inputElement, "submitEditing");

    fireEvent.changeText(inputElement, "Segunda tarefa");
    fireEvent(inputElement, "submitEditing");

    getByText("Primeira tarefa");
    getByText("Segunda tarefa");
  });

  it("should not be able to add an empty task", () => {
    const { getByPlaceholderText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const inputElement = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputElement, "");
    fireEvent(inputElement, "submitEditing");

    expect(queryByText("")).toBeNull();
  });

  it("should be able to render tasks as done and undone", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const inputElement = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputElement, "Primeira tarefa");
    fireEvent(inputElement, "submitEditing");

    const buttonElement = getByTestId("button-0");
    const markerElement = getByTestId("marker-0");

    const taskElement = getByText("Primeira tarefa");

    fireEvent.press(taskElement);
  });

  it('should be able to remove tasks by "longPress" event', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const inputElement = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputElement, "Primeira tarefa");
    fireEvent(inputElement, "submitEditing");

    fireEvent.changeText(inputElement, "Segunda tarefa");
    fireEvent(inputElement, "submitEditing");

    const firstTask = getByText("Primeira tarefa");

    fireEvent(firstTask, "longPress");

    expect(queryByText("Primeira tarefa")).toBeNull();
    getByText("Segunda tarefa");
  });
});
