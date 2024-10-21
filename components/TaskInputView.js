import React, { useState } from 'react';
import { View, TextInput, Button, Modal, Image } from 'react-native';
import { StyleSheet } from 'react-native';

const TaskInputView = ({ onAddTask, onCancel }) => {
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
            <Image source={require('../assets/images/goal.png')} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Add task"
                value={task}
                onChangeText={setTask}
            />
            <View style={styles.buttonContainer}>

                <Button
                    title="Cancel"
                    onPress={() => {
                        onCancel();
                    }}
                />
                <Button
                    title="Add"
                    onPress={() => {
                        handleAddTask(task)
                    }}
                />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#C2C1A5'
    },
    input: {
        height: 40,
        paddingStart: 10,
        paddingEnd: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    image: { 
        width: 200,
        height: 200, 
        alignSelf: 'center' 
    }
})

export default TaskInputView; 