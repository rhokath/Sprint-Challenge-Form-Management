import React from 'react';
import FormikRegForm from "./components/Form";
import DataObject from "./components/DataObjects";
import axios from "axios";

import './App.scss';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount(){
    this.getUsers()

  }
  getUsers = ()=> {
    axios.get("http://localhost:5000/api/restricted/data")
      .then(res => {
        console.log("response in app", res)
        this.setState({users: res.data})
      })
      .catch(err => {
        console.log("you got an error", err)
      })
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         hi
        </header>
        <FormikRegForm/>
        <br/>
        {this.state.users.map((user, index) =>{
          console.log(user, index)
          return <DataObject 
                    key={index}
                    recipe={user.name} 
                    course={user.course} 
                    technique={user.technique}
                    ingredients={user.ingredients}
                  />
        })}

      </div>
    );

  }
 
}

export default App;
