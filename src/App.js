import React,{Component} from 'react';
import './App.css';
import Header from './L01Component';
import Form from './L03State';
import Clock from "./L04LifeCycle";
import Calc from "./L05Calculator";
import Calc2 from "./L06Calculator";

class App extends React.Component {
  render(){
    console.log("App.render() 호출");
    return (
      <div className="App">
        <Clock></Clock>
        <Header msg="안녕 리액트 컴포넌트!!!" msgColor="#999"/>
        <h1>안녕 리액트 앱아!</h1>
        <br />
        <Form></Form>
      
        <br/>
        <h2>계산기 만들기 숙제</h2>
        <Calc2/>

        <br/>
        <h2>계산기 앱 만들기</h2>
        <Calc></Calc>
      </div>
    );
  }
}

export default App;
