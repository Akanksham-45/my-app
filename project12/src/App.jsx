import User from "./User";

function App(){
  return(
    <div style={{textAlign:"center"}}>
      <h1>User Details</h1>

      <User 
        data={{ name: "Akanksha", city: "Ghaziabad" }} 
        skills={["React", "JavaScript", "Node.js"]}
      />

    </div>
  )
}

export default App;