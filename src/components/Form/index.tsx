import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../../types/Task'
import Button from '../Button'
import style from './Form.module.scss'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {

  const [task, setTask] = useState(
    {
      name: '',
      time: '00:00'
    }
  )

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTasks((tasks) =>
      [
        ...tasks,
        {
          ...task,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    )
    setTask({
      name: '',
      time: '00:00'
    })
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>
          Add new task
        </label>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='What do you want to study?'
          required
          value={task.name}
          onChange={e => setTask({ ...task, name: e.target.value })}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='time'>
          Time
        </label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='02:00:00'
          required
          value={task.time}
          onChange={e => setTask({ ...task, time: e.target.value })}
        />
      </div>
      <Button type='submit'>
        Add
      </Button>
    </form>
  )
}

export default Form