import { TaskModule } from "@/app";
import React from "react";
import { View, Text, Button, Pressable, Platform } from "react-native";
import { StyleSheet } from "react-native";

const TaskItem = ({ task, isCompleted, onClickDone }) => {
  return (
    <Pressable 
    android_ripple={{ color: '#3700B3'}} 
    style = {({pressed}) => {
      return [
        styles.pressable,
        Platform.OS === 'ios' && {opacity: pressed ? 0.8 : 1}
      ]
    }}>
      
    <View style={styles.itemviewContainer}>
      <Text style={isCompleted ? styles.completedText : null} >{task}</Text>
      <View style={isCompleted ? styles.completedContainer : styles.pendingStatusContainer}>
        <Text style = {{
          color: isCompleted ? 'white' : 'black'
        }}>{isCompleted ? "Completed" : "Pending"}</Text>
      </View>
      {!isCompleted && (
        <Button
          title="Done"
          onPress={() => onClickDone(task)}
        />
      )}
    </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemviewContainer: {
    backgroundColor: '#C2C1A5',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
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
  },
  pressable: {
    backgroundColor: '#6200EE',
    margin: 10,
    cornerRadius: 5,
    borderRadius: 5,
  },
})