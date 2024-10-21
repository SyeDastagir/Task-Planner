import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import TaskItem from '.././components/TaskItem';
import TaskInputView from '.././components/TaskInputView';

function Home() {

  const [tasks, setTasks] = useState<TaskModule[]>([]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Button title="Add Task" onPress={() => setShowAddTaskModal(true)} />
      
      <Modal visible={showAddTaskModal} animationType="slide">
      <TaskInputView 
        onAddTask={(task: string) => {
        setTasks([...tasks, new TaskModule(task, false)]);
        setShowAddTaskModal(false);
        }} 
        onCancel={() => setShowAddTaskModal(false)} 
      />
      </Modal>

      <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem 
        task={item.task} 
        isCompleted={item.isCompleted} 
        onClickDone={() => {
          const index = tasks.indexOf(item);
          tasks[index].isCompleted = !tasks[index].isCompleted;
          setTasks([...tasks]);
        }} 
        />
      )}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9E9',
    padding: 20,
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
