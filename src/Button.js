/**
 * Created by ant on 2018/10/19.
 */
import React, { Component } from 'react';
class Button extends Component{
    constructor (){
        super()
    }
    hanleClick(){
        console.log('你在调用点击事件')
    }
    render(){
        return(<button onClick={()=>this.hanleClick()}>这是一个button</button>)
    }
}
export default Button;