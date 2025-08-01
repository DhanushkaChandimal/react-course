// import './App.css'
import Greeting from "./Greeting";
import ClassGreeting from "./ClassGreeting";

function App() {

  const name = "John"
  const greeting = <p>Hello, {name}</p>

  return(
    <div>
      <h1>Hello, World!</h1>
      <h2>{greeting}</h2>
      <Greeting />
      <ClassGreeting />
    </div>
  )
}

export default App
