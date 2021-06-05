import React from "react";
import { FlatList, View } from "react-native";

import {
  Header,
  TaskButton,
  TaskButtonDone,
  TaskMarker,
  TaskMarkerDone,
  TaskText,
  TaskTextDone,
} from "./MyTaskList.styles";

function FlatListHeaderComponent() {
  return (
    <View>
      <Header>Minhas tasks</Header>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <>
            {item.done === false ? (
              <TaskButton
                testID={`button-${index}`}
                activeOpacity={0.7}
                onPress={() => onPress(item.id)}
                onLongPress={() => onLongPress(item.id)}
              >
                <TaskMarker testID={`marker-${index}`} />
                <TaskText>{item.title}</TaskText>
              </TaskButton>
            ) : (
              <TaskButtonDone
                testID={`button-${index}`}
                activeOpacity={0.7}
                onPress={() => onPress(item.id)}
                onLongPress={() => onLongPress(item.id)}
              >
                <TaskMarkerDone testID={`marker-${index}`} />
                <TaskTextDone>{item.title}</TaskTextDone>
              </TaskButtonDone>
            )}
          </>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}
