import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import Timer from './components/Timer'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }])
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="container">
      <header className="header">
        <h1>TaskFlow</h1>
        <p>Manage your work and personal tasks efficiently</p>
      </header>
      
      <Timer />
      <AddTask onAdd={addTask} />
      
      <div className="task-container">
        <TaskList 
          title="Work Tasks"
          tasks={tasks.filter(task => task.category === 'work')}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
        <TaskList 
          title="Personal Tasks"
          tasks={tasks.filter(task => task.category === 'personal')}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  )
}

export default App
