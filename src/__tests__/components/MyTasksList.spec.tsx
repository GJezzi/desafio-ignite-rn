import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { MyTasksList } from "../../components/MyTaskList/MyTasksList";

let tasks: {
  id: number;
  title: string;
  done: boolean;
}[] = [];

let mockedOnLongPress: jest.Mock;
let mockedOnPress: jest.Mock;

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

describe("MyTasksList", () => {
  beforeAll(() => {
    tasks = [
      {
        id: new Date().getTime(),
        title: "Primeiro todo",
        done: false,
      },
      {
        id: new Date().getTime() + 1,
        title: "Segundo todo",
        done: false,
      },
      {
        id: new Date().getTime() + 2,
        title: "Terceiro todo",
        done: true,
      },
    ];

    mockedOnLongPress = jest.fn();
    mockedOnPress = jest.fn();
  });

  it("should be able to render all tasks", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MyTasksList
          tasks={tasks}
          onLongPress={mockedOnLongPress}
          onPress={mockedOnPress}
        />
      </ThemeProvider>
    );

    getByText("Primeiro todo");
    getByText("Segundo todo");
    getByText("Terceiro todo");
  });

  it('should be able to handle "longPress" event', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MyTasksList
          tasks={tasks}
          onLongPress={mockedOnLongPress}
          onPress={mockedOnPress}
        />
      </ThemeProvider>
    );
    const firstTask = getByText("Primeiro todo");

    fireEvent(firstTask, "longPress");

    expect(mockedOnLongPress).toHaveBeenCalledWith(tasks[0].id);
  });

  it('should be able to handle "press" event', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MyTasksList
          tasks={tasks}
          onLongPress={mockedOnLongPress}
          onPress={mockedOnPress}
        />
      </ThemeProvider>
    );
    const secondTask = getByText("Segundo todo");

    fireEvent.press(secondTask);

    expect(mockedOnPress).toHaveBeenCalledWith(tasks[1].id);
  });
});
