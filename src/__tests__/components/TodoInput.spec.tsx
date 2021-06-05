import React from "react";
import { TodoInput } from "../../components/TodoInput/TodoInput";
import { fireEvent, render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

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

describe("TodoInput", () => {
  it('should be able to submit the input text by "submitEditing" event', async () => {
    const mockTodoTask = jest.fn();

    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <TodoInput addTask={mockTodoTask} />
      </ThemeProvider>
    );
    const inputText = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputText, "Primeira task");
    fireEvent(inputText, "submitEditing");

    expect(mockTodoTask).toHaveBeenCalledWith("Primeira task");
    expect(inputText).toHaveProp("value", "");
  });
  it("should be able to submit the input text by addButton", () => {
    const mockTodoTask = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TodoInput addTask={mockTodoTask} />
      </ThemeProvider>
    );
    const inputText = getByPlaceholderText("Adicionar novo todo...");
    const addButton = getByTestId("add-new-task-button");

    fireEvent.changeText(inputText, "Primeira task");
    fireEvent.press(addButton);

    expect(mockTodoTask).toHaveBeenCalledWith("Primeira task");
    expect(inputText).toHaveProp("value", "");
  });
});
