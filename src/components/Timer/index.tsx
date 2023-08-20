import { useEffect, useState } from 'react'
import { timeToSec } from '../../common/utils/time'
import { ITask } from '../../types/Task'
import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'

interface Props {
  selected: ITask | undefined,
  completeTask: () => void
}

export default function Timer({ selected, completeTask }: Props) {

  const [ time, setTime ] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSec(selected.time))
    }
  }, [selected])

  function startTimer(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1)
        return startTimer(time - 1)
      }
      completeTask()
    }, 1000)
  }

  return (
    <div className={style.timer}>
      <p>Choose a Card and Start the Timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => startTimer(time) }>
        Start
      </Button>
    </div>
  )
}
