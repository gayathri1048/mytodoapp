const TaskCreateScreen = ({ navigation }) => {
    const [taskName, setTaskName] = useState('');
  
    const handleCreateTask = () => {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
        name: taskName,
        status: 'TO DO', // Assuming initial status is 'TO DO'
        subtasks: [], // Assuming there are subtasks associated with a task
      };
  
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasksToStorage(updatedTasks); // Assuming there's a function for saving tasks
  
      navigation.goBack(); // Navigate back after creating the task
    };
  
    return (
      <View>
        <Text>Create Task</Text>
        <TextInput
          placeholder="Task Name"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <Button title="Create Task" onPress={handleCreateTask} />
      </View>
    );
  };
  
  export default TaskCreateScreen;
  