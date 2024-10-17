import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<TaskModule[]>([]);

  return (
    <View style={{ flex: 1 }}>
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
            console.log(task);
            setTasks([...tasks, new TaskModule(task, false)]);
            setTask('');
          }}
        />
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.itemviewContainer}>
            <Text>{item.task}</Text>

            <View style={item.isCompleted ? styles.statusContainer : styles.pendingStatusContainer}>
              <Text>{item.isCompleted ? "Completed" : "Pending"}</Text>
            </View>

            {!item.isCompleted && (
              <Button
                title="Done"
                onPress={() => {
                  const updatedTasks = tasks.map(t =>
                    t.task === item.task ? { ...t, isCompleted: true } : t
                  );
                  setTasks(updatedTasks);
                }}
              />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
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
  },
  itemviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5
  },
  statusContainer: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5
  },
  pendingStatusContainer: {
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 5
  }
})

export default Home;


class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const students: Person[] = [
  new Person('Syed', 20, 'Male'),
  new Person('Jane', 21, 'Female'),
  new Person('Doe', 11, 'Male')
];


export class TaskModule {
  task: string;
  isCompleted: boolean;

  constructor(task: string, isCompleted: boolean) {
    this.task = task;
    this.isCompleted = isCompleted;
  }
}
