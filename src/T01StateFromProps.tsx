import React,{Component} from "react";
import "./T01StateFromProps.css";
type MyProps = {
    // using `interface` is also ok
    attri:{val:any,className:string,intext:string};
    intext: string;
    key:number;
};
type MyState = {
    count: number; // like this
  }; 

class KeyBtn extends React.Component<MyProps,MyState>{
    constructor(props){
        super(props);
        // React에서 권장하지 않는 형태
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("KeyButton.shouldComponentUpdate()");
        return true;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("KeyButton.componentDidUpdate()");
    }
    render(){
        console.log("KeyButton.render()");
        return(
            <label>
                <button {...this.props.attri}>{this.props.intext}</button> 
            </label>
        );
    }
}
type MyProps2 = {
    // using `interface` is also ok
    attri:{val:any,className:string,intext:string};
};
type MyState2 = {
    result: any|number|bigint;
    process: any|number|bigint;
    operator:any;
  }; 

export default class T01StateFromProps extends React.Component<MyProps2,MyState2>{
    constructor(props){
        super(props)
        this.state={result: "",process: "", operator:""}

        this.keys=this.keys.map((item,i)=>{
            return (<KeyBtn  attri={undefined} intext={undefined} key={i} {...item} />);
        });
    }
    BtnObj(val:any,className:string,intext:string =val,onClick= this.KeyBtnClickHandler.bind(this)){
           return {attri:{value:val,className:className, onClick: onClick},intext:intext }
   }
    keys:Array<object>=[
        this.BtnObj(7,"num"),this.BtnObj(8,"num"),this.BtnObj(9,"num"),this.BtnObj("*","operator","x"),
        this.BtnObj(4,"num"),this.BtnObj(5,"num"),this.BtnObj(6,"num"),this.BtnObj("-","operator"), 
        this.BtnObj(1,"num"),this.BtnObj(2,"num"),this.BtnObj(3,"num"),this.BtnObj("+","operator"),
        this.BtnObj("-","m","+/-"),this.BtnObj(0,"num"),this.BtnObj(".","float"),this.BtnObj("=","result")
    ];
    
    KeyBtnClickHandler(e){
        if(e.target.classList.contains("num")){
            let process=this.state.process+e.target.value;
            this.setState( {process: process } );
            console.log(process);
            // this.setState({
            //     number: this.state.number + 1
            //   });
            //   큰 문제는 아니지만, 굳이 또 this.state 를 조회해야 하는데요, 이렇게 하면 조금 더 멋진 문법으로 작성 할 수 있습니다.
              
            //   this.setState(
            //     (state) => ({
            //       number: state.number
            //     })
            //   );
            //   setState 에 updater 함수를 만들어서 전달해 주었습니다. 여기서 조금 더 나아가면 이렇게 작성 할 수 있습니다.
              
            //   this.setState(
            //     ({ number }) => ({
            //       number: number + 1
            //     })
            //   );
            //   보면 (state) 가 ({ number }) 가 됐죠? 이건 비구조화 할당 이라는 문법
            // const { number } = this.state;
            // this.setState({
            //   number: number + 1
            // })
            //https://create-react-app.dev/docs/getting-started
            //https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

        } else if(e.target.classList.contains("operator")){
            console.log("bbb");
            
            let result= this.operator(this.state.process,this.state.result,this.state.operator,)
            this.setState( {process:"", operator: e.target.value, result: result} );
            
        } else if(e.target.classList.contains("result")){
            
            let result= eval(this.state.result+this.state.operator+this.state.process);
            this.setState( {process:"", operator: "" , result: result} );
        }
        
    }
    operator(process,result,operator){
        console.log("result: ",result," process: ",process,"operator: "+operator,"result+process: "+result+process);
        result=(result)?Number(result):0;
        process=(process)?Number(process):0;
        
        console.log(result+process);

        switch(operator){
            case "+" : 
                result+=process; 
                break;
            case "-" : 
                result-=process; 
                break;
            default:
                result+=process; 
                break;     

        }
        return result;
    }

    render(){
        console.log(this.state);
        return(
            <div className="Calc">
                <div className="screenContainer">
                    <textarea rows={1} cols={30} value={this.state.process||this.state.result} readOnly/>
                </div>

                <div className="KeyBtnContainer">
                    {this.keys}
                </div>
            </div>

        )
    }
}