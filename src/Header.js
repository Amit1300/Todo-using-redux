
import { render } from '@testing-library/react';
import React from 'react';
import "./header.css"

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            click:false,
            name:"",
            email:""
        }
    }

handle=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}


    render(){
      return(
        <div>
          <button onClick={()=>{this.setState({click:true})}}>click to login </button>
            <button onClick={()=>{this.setState({click:false})}}>click to back </button>
            {
                this.state.click && (
            <form>
            <label>Name</label>
            <input type="text"  name="name" onChange={this.handle}/>
            <label>Email</label>
            <input type="Email" required name="email"  onChange={this.handle}/>
            <input type="submit" value="login" />
        </form>
                   
                )
            }
           
        
            
        </div>
    )
    
}
}