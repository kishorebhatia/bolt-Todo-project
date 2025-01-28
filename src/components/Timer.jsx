import React, { useState, useEffect } from 'react'

function Timer() {
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if (time === 0) {
      setIsActive(false)
    }

    return () => clearInterval(interval)
  }, [isActive, time])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setTime(25 * 60)
    setIsActive(false)
  }

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <div className="timer">
      <h2>Focus Timer</h2>
      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <button onClick={toggleTimer} className="btn" style={{ marginRight: '1rem' }}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} className="btn">Reset</button>
    </div>
  )
}

export default Timer
