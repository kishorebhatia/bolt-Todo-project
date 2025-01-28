import React, { useState } from 'react'

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('work')
  const [priority, setPriority] = useState('normal')
  const [deadline, setDeadline] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) return

    onAdd({
      title,
      category,
      priority,
      deadline,
      completed: false
    })

    setTitle('')
    setCategory('work')
    setPriority('normal')
    setDeadline('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new task..."
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      >
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      >
        <option value="normal">Normal</option>
        <option value="high">High Priority</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button type="submit" className="btn">Add Task</button>
    </form>
  )
}

export default AddTask
