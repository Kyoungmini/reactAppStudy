import React,{Component} from "react";

export default class L04LifeCycle extends React.Component{
    constructor(props){
        super(props);
        console.log("L04LifeCycle.constructor()");
        this.state={dateText: ""}
        //this.setState({}) 
        //constructor this.setState 필드가 정의되지 않는다.
        //this.intervalClock();
    }
    //this.setState() 정의하는 곳
    //static getDerivedStateFromProps(){}

    intervalClock(){
        window.setInterval(()=>{
            this.setState({
                dateText: new Date().toString()
            })
        },1000)
    }
    componentDidMount(prevProps,prevState,snapshot){
        console.log("L04LifeCycle.componentDidMount()");
        this.intervalClock();
    }
    render(){
        console.log("L04LifeCycle.render()");
        //this.intervalClock();
        //render(render(render(.....))) 
        //render 에서 setState를 호출하면 setState가 다시 render를 호출하면서 불필요하게 많이 render 호출
        return(
            <>
                <h1>L04LifeCycle 컴포넌트</h1>
                <p> <b>{this.state.dateText}</b></p>
            </>
        );
    }
}