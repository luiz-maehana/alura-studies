import { useState } from 'react'
import { ITask } from '../types/Task';
import Form from '../components/Form'
import List from '../components/List'
import Timer from '../components/Timer';
import style from './App.module.scss'

function App() {

  const [ tasks, setTasks ] = useState<ITask[] | []>([])
  const [ selected, setSelected ] = useState<ITask>()

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected)
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: taskSelected.id === task.id ? true: false
    })))
  }

  function completeTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Timer
        selected={selected}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
