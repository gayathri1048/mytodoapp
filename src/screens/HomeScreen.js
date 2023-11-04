import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { getTasksFromStorage, saveTasksToStorage } from './utils/api';

const HomeScreen = ({ navigation, access_token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasksFromStorage();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    navigation.navigate('TaskDetails', { taskId });
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: true } : task
    );

    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  return (
    <ScrollView>
      <Text>Home Page</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.name}</Text>
          {task.isCompleted && <Text>Task is Completed</Text>}
          <Button title="Edit" onPress={() => handleTaskClick(task.id)} />
          <Button title="Delete" onPress={() => handleDeleteTask(task.id)} />
          {!task.isCompleted && (
            <Button title="Complete Task" onPress={() => handleCompleteTask(task.id)} />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
