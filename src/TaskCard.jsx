import React from 'react'
import './TaskCard.css'
import { Trash2 } from 'lucide-react'

function TaskCard({task, deleteTask}) {
  
  return (
    <div className='task-card'>
      {task}
      <Trash2 className="icon-delete" onClick={()=>{
        deleteTask(task);
      }
      }/>
    </div>
  )
}

export default TaskCard
