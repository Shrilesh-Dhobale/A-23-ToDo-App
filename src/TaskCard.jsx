import React from 'react'
import './TaskCard.css'

function TaskCard({task}) {
  return (
    <div className='task-card'>
      {task}
    </div>
  )
}

export default TaskCard
