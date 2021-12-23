import React,{Component} from 'react';
import './App.css';
import Header from './L01Component';
import Form from './L03State';
import Clock from "./L04LifeCycle";

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
        
      </div>
    );
  }
}

export default App;
