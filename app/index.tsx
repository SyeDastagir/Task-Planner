import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import TaskItem from '.././components/TaskItem';
import TaskInputView from '.././components/TaskInputView';

function Home() {
  
  const [tasks, setTasks] = useState<TaskModule[]>([]);

  return (
    <View style={{ flex: 1 }}>
      
      <TaskInputView onAddTask 
       = {
        (task: string) => {
          setTasks([...tasks, new TaskModule(task, false)]);
        }
      }/>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item.task} isCompleted = {item.isCompleted} onClickDone={
            () => {
              const index = tasks.indexOf(item);
              tasks[index].isCompleted = !tasks[index].isCompleted;
              setTasks([...tasks]);
          } }/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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
