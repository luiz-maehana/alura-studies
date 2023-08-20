import style from './List.module.scss'
import Item from './Item'
import { ITask } from '../../types/Task'

interface Props {
  tasks: ITask[],
  selectTask: (taskSelected: ITask) => void
}

export default function List({ tasks, selectTask }: Props) {

  return (
    <aside className={style.listTasks}>
      <h2>Daily Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Item
            key={task.id}
            {...task}
            selectTask={selectTask}
          />
        ))}
      </ul>
    </aside>
  )
}