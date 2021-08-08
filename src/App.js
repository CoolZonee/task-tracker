import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import taskService from './services/task.service'
import DarkModeToggle from 'react-dark-mode-toggle'
import { Helmet } from 'react-helmet'
import { useState, useEffect } from "react"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false)

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
  const toggleReminder = (task) => {
    task.reminder = !task.reminder  
    taskService.update(task.id, task).then(res => refreshTask())
    setTasks(tasks.map((x) => x.id === task.id ? { ...x, reminder: !x.reminder } : x))
  }

  return (
    <>
      <Helmet>
        <style>{`body {background-color: ${darkMode ? '#141616' : 'white'};}`}</style>
      </Helmet>
      <div className="darkModeButton">
        <DarkModeToggle 
          onChange={setDarkMode}
          checked={darkMode}
          size={70}
          speed={2.0}
        />
      </div>
      <div className={`task-container ${darkMode ? 'dark' : ''}`}>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} darkMode={darkMode} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
          darkMode={darkMode}
          />
          ) : (
            'No Tasks to Show'
          )}
      </div>
    </>
  );
}

export default App;
