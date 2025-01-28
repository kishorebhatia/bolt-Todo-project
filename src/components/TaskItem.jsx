import React from 'react'
import { format } from 'date-fns'
import { FaTrash } from 'react-icons/fa'

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <div style={{ marginLeft: '1rem', flex: 1 }}>
        <h3 style={{ 
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.priority === 'high' ? 'var(--work-color)' : 'inherit'
        }}>
          {task.title}
        </h3>
        <p>{format(new Date(task.deadline), 'PPP')}</p>
      </div>
      <button 
        className="btn"
        onClick={() => onDelete(task.id)}
        style={{ background: 'transparent', color: 'var(--work-color)' }}
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default TaskItem
