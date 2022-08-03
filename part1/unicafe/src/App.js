import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = props => <h1>{props.title}</h1>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  let positive,average = 0

  if(total === 0){
    positive = 0
    average = 0
  } else {
    positive = (good / total) * 100
    average = ((good*1) + (bad*-1)) / total
  }

  return (
    <div>
      <h1>
        statistics
      </h1>
      <table>
        <tbody>
          <StatisticLine text="good" value = {good} />
          <StatisticLine text="neutral" value = {neutral} />
          <StatisticLine text="bad" value = {bad} />
          <StatisticLine text="all" value = {total} />
          <StatisticLine text="average" value = {average} />
          <StatisticLine text="positive" value = {positive +  "%"} />
        </tbody>
      </table>
    </div>
  )

}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Display title = "give feedback" />

      <Button handleClick={handleGoodClick} text = "good" />
      <Button handleClick={handleNeutralClick} text ="neutral" />
      <Button handleClick={handleBadClick} text = "bad" />

      <Statistics good = {good} neutral = {neutral} bad = {bad} />

    </div>
  )
}

export default App