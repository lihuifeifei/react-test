/**
 * Created by ant on 2018/10/19.
 */
import React, { Component } from 'react';
class Input extends Component{
    constructor (){
        super()
        this.state={
            value:""
        }
    }
    hanleInput(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" onInput={(e)=>this.hanleInput(e)} value={this.state.value} ></input>
            </div>
        )
    }
}
export default Input;