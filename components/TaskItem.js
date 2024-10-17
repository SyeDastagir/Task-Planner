import { TaskModule } from "@/app";
import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

const TaskItem = ({ task, isCompleted, onClickDone }) => {
  return (
    <View style={styles.itemviewContainer}>
      <Text style={isCompleted ? styles.completedText : null} >{task}</Text>
      <View style={isCompleted ? styles.completedContainer : styles.pendingStatusContainer}>
        <Text >{isCompleted ? "Completed" : "Pending"}</Text>
      </View>
      {!isCompleted && (
        <Button
          title="Done"
          onPress={() => onClickDone(task)}
        />
      )}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemviewContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  completedContainer: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
  },
  completedText: {
    color: 'black',
    textDecorationLine: 'line-through'
  },
  pendingStatusContainer: {
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 5
  }
})