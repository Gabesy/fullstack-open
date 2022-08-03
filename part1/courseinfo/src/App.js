
const Header = (props) => {
  return (
    <div>
      Course name: {props.course.name}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      Content
      <Part name= {props.parts[0].name} exercises = {props.parts[0].exercises} />
      <Part name= {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part name= {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>Subject name: {props.name} </p>
      <p>Exercises: {props.exercises} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Exercise total: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

export default App