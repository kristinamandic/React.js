import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const [user, setUser] = useState({
  //   name: "Kristina",
  //   age: 23,
  //   posts: ["my first post", "my lovely summer"]
  // });

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };

  //////////////////////////////////////////////
  const [users, setUsers] = useState([
    {name: "Kristina", message: "Hello there"},
    {name: "Ed", message: "Hi everybody"},
    {name: "John", message: "I am John Snow"},
    {name: "traversy", message: "I am awsome"},
  ])

  return(
    <div className="app">
      {/* <Tweet name="Dev Ed" message="This is a random message"/>
      <Tweet name="Kristina" message="I am the true queen"/>
      <Tweet name="John Snow" message="I am the true king"/>
      <Tweet name="Mosh" message="My new course is available"/> */}

      {/* <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;