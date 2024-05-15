// Returns header
const Header = ({header}) => {
    return (
    <div>
      <h1>{header}</h1>
    </div>
    )
  }

// Returns content
// Changed to use collection
const Content = ({ content }) => {
    // Calculating sum of exercises with reduce
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const total = content.reduce((s, p) => s = s + p.exercises, 0)
  
    return (
      <div>
        {content.map((part)=><Part key={part.id} part = {part}/>)}
        <strong>total of {total} exercises</strong>
      </div>
      //<div>
      //  <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      //  <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      //  <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
      //</div>
    )
  }

  // Returns part's content
// Changed to use collection
const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }

// Course
// Returns header & content
const Course = ({ course }) => {
    return (
      <div>
        <Header header={course.name}/>
        <Content key={course.id} content={course.parts}/>
      </div>
    )
  }

// Exporting module
export default Course