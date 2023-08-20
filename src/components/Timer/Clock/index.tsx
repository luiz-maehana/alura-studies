import style from './Clock.module.scss'

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [ minutesD, minutesU ] = String(minutes).padStart(2, '0')
  const [ secondsD, secondsU ] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.clockNumber}>{minutesD}</span>
      <span className={style.clockNumber}>{minutesU}</span>
      <span className={style.clockDiv}>:</span>
      <span className={style.clockNumber}>{secondsD}</span>
      <span className={style.clockNumber}>{secondsU}</span>
    </>
  )
}
