import "./L01Component.css"
import React,{Component} from "react";
import Navigation from "./L02Props"

//export default class L01Component extends React.Component{
class L01Component extends React.Component{
    a_list=[{href:"./a.html",inText:"a.html입니다."},
            {href:"./b.html",inText:"c.html입니다."},
            {href:"./c.html",inText:"b.html입니다."} ];
    render(){
        //const a_list=[];
        return (
        <header>
            <Navigation aList={this.a_list}></Navigation>
        {/* <h1 style=`color:${this.props.msgColor}`> */}
            <h1 style={{color: this.props.msgColor, 
            backgroundColor: (this.props.msgBgColor)?this.props.msgBgColor:"lightblue" }}>{this.props.msg}</h1>
            <p>React.Element는 style의 값으로 Object type을 사용한다 </p>
        </header>
        );
    }
}

export default L01Component;
