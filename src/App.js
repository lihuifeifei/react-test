import React, { Component } from 'react';
import './App.css';
// import Button from './Button';
import Input from './Input';
class Nav extends Component{
    constructor (){
        super()
    }
    render(){
        return(
            <div style={{color:"white",backgroundColor:"black"}}>skipper</div>
        )
    }
}

class App extends React.Component {
    constructor (){
        super()
        this.state={
            like:false
        }
    }
    handleClick(){
        this.setState(
            {
                like:!this.state.like
            }
        )
    }
    
  render() {
      
    return (
        <div>
            <Nav/>
            {/*<Button/>*/}
           <button type="button" style={this.state.like?{color:'red'}:{color:'black'}}
           onClick={()=>this.handleClick()}>
               {
                   this.state.like?"已赞":"喜欢"
               }
           </button>
            <Input/>
        </div>
      
    );
  }
}

export default App;
