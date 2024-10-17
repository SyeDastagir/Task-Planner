import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const TaskInputView = ({ onAddTask }) => {
    const [task, setTask] = useState('');
    const handleAddTask = (text) => { 
        if (text.trim()) {
            onAddTask(text);
            setTask('');
        } else {
            alert('Please enter a task');
        }
        };

    return (
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add task"
          value={task}
          onChangeText={setTask}
        />
        <Button
          title="Add"
          onPress={() => {
            handleAddTask(task)
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20
    },
    input: {
      flex: 1,
      height: 40,
      paddingStart: 10,
      paddingEnd: 10,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5
    }
  })

export default TaskInputView; 