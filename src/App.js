import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import taskService from './services/task.service'
import { useState, useEffect } from "react"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    refreshTask()
  }, [])

// Refresh Task
const refreshTask = () => {
  taskService.getAll().then(res => setTasks(res.data))
}

// Add Task
const addTask = (task) => {
  taskService.create(task).then(res => refreshTask())
}

// Delete Task
const deleteTask = (id) => {
  taskService.delete(id).then(res => refreshTask())
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
          'No Tasks to Show'
        )}
    </div>
  );
}

export default App;
