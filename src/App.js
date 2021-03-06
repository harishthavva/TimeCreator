import React,{Component} from 'react';
import tachyons from "tachyons";
import "./index.css"
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class App extends Component{
  x;
  date= new Date()
  constructor(){
    super()
    this.state={
      searchFiled:"",
      days: 0,
      hours: 0,
      minutes: 0, 
      seconds: 0,
      ResetClick: false,
      Starts:""
    }
  }
  

  onChange=(e)=>{
    //console.log(e.target.value)
    this.setState({searchFiled: e.target.value,field:""})
  }

 
    
   x= setInterval(()=>{
      var now = new Date().getTime();
      if(this.state.searchFiled!==""){
        var countTime=new Date(this.state.searchFiled).getTime()
        if(now>countTime){
          this.setState({Starts:"Timer not starts because of the past date !!!",days:0,hours:0,minutes:0,seconds:0})
          return ;
        }
        var distance=countTime-now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        console.log(hours)
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //document.getElementById("timer").innerHTML=`${hours}Hours ${minutes}Minutes ${seconds}Seconds`
        this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds})
        console.log(`Timer Ends in this time period :- ${days}Days ${hours}Hours ${minutes}Minutes ${seconds}Seconds`)
        if (distance < 0) {
         // clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
        }

      }
     ,1000)

  Reset=()=>{
    this.setState({
      searchFiled:"",
      days: 0,
      hours: 0,
      minutes: 0, 
      seconds: 0,
      ResetClick: true
    })
    if(this.state.ResetClick){
      clearInterval(this.x);
    }
    
  }
  render(){
    return(
      <div className="tc modify ">
      <h1>{`Current Time in INDIA ${this.date}`}</h1>
      <h4>Please Enter the date on which the Timer Ends !!!</h4>
      <input className="pa2 bg-light-green" type="datetime-local" placeholder="Enter date in MM-DD-YEAR Formate" onChange={this.onChange}/>
        {this.state.searchFiled===""? <h2>Remaining Time Period :- 0Days 0Hours 0Minutes 0Seconds</h2> : <div>
        <h1>{this.state.Starts}</h1>
        <h2>{`Remaining Time Period :- ${this.state.days}Days ${this.state.hours}Hours ${this.state.minutes}Minutes ${this.state.seconds}Seconds`}</h2>
          </div>}
        <span> </span>
      </div>
    )
    
  }

  }



export default App;