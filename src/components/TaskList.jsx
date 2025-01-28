import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ title, tasks, onToggle, onDelete }) {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList
