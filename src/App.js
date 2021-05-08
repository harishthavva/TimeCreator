import React,{Component} from 'react';
import Particles from 'react-particles-js';
import tachyons from "tachyons";
import Input from "./Input";
import "./index.css";

class App extends Component{
   date= new Date(); 
render(){
  return(
    <div className="tc modify">
      <h2>{`Current Time ${this.date}`}</h2>
      <h4>Please Enter the date on which the Timer Ends !!!</h4>
      <Input />
      <span> </span>
      <button className="pa2 bg-light-grey pointer" type="submit">Submit</button>
    </div>
  )
  
}

}



export default App;