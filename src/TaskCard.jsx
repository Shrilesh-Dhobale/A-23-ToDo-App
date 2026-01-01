import React from 'react'
import './TaskCard.css'
import { Trash2 } from 'lucide-react'

function TaskCard({task,tasks,seTasks}) {
  const deleteCurrentTask=()=>{
    const newTasks=tasks.filter((t)=>task!=tasks);
    seTasks(newTasks);
  };
  return (
    <div className='task-card'>
      {task}
      <Trash2 className="icon-delete" onClick={deleteCurrentTask}/>
    </div>
  )
}

export default TaskCard
