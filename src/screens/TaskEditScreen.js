const TaskEditScreen = ({ navigation, route }) => {
    const { taskId } = route.params;
    const [taskName, setTaskName] = useState('');
  
    const handleEditTask = () => {
      const updatedTasks = tasks.map(task => 
        task.id === taskId ? { ...task, name: taskName } : task
      );
  
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks); // Assuming there's a function for saving tasks
  
      navigation.goBack(); // Navigate back after editing the task
    };
  
    return (
      <View>
        <Text>Edit Task</Text>
        <TextInput
          placeholder="Task Name"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <Button title="Save Task" onPress={handleEditTask} />
      </View>
    );
  };
  
  export default TaskEditScreen;
  