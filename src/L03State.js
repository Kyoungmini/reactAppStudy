import React,{Component} from "react";

class InputText extends React.Component{
    constructor(props){
        super(props);
        this.state={ val: props.val }
        // React에서 권장하지 않는 형태
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate :",nextState);
        return true;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate :", prevState);
    }
    inputHandler(e){
        //this.state.val=e.target.value; //사용불가
        this.setState({val : e.target.value});
    }
    render(){
        console.log("render()");
        return(
            <p>
                <label>{this.props.label} : </label>
                <input type="text" value={this.state.val}
                    // onInput={(e)=>{this.inputHandler(e)}}
                    onInput={this.inputHandler.bind(this)}
                />
            </p>
        );
    }
}
export default class L03State extends React.Component{
    render(){
        return(
            <>
                <InputText  label="id" val="ckm"/>
                <InputText  label="pw" val="1234" />
                <InputText  label="age" val="36"/>
                <InputText  label="gender" val="남"/>
            </>
        )
    }
}