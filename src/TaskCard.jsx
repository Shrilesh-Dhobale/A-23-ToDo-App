import React from 'react'
import './TaskCard.css'
import { Trash2 } from 'lucide-react'

function TaskCard({task}) {
  return (
    <div className='task-card'>
      {task}
      <Trash2/>
    </div>
  )
}

export default TaskCard
