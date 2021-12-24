import React,{Component} from "react";

class KeyBtn extends React.Component{
    render=()=>(
        <button {...this.props}>{this.props.txt}</button>
    );
}
class L05Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={proccess:""}
    }
    btnOnclickHandler(e){
       this.setState(({proccess})=>({proccess: proccess+e.target.value}));
       if(e.target.classList.contains("result")){
           let result= eval(this.state.proccess);
           this.setState({proccess: result})
       }
    }
    render=()=>{
        return(
        <>
            <div> <textarea readOnly value={this.state.proccess} /></div>  
            <div className="btn_grid_container">
                {/* <KeyBtn>{txt=9}</KeyBtn> */}
                <KeyBtn txt={1} onClick={(e)=>{ this.setState({proccess: this.state.proccess+"1"})}}></KeyBtn>
                <KeyBtn value="2" className="num" txt={2}
                 onClick={(e)=>{this.btnOnclickHandler(e)}}></KeyBtn>
                <KeyBtn value="3" className="num" txt={3}
                onClick={(e)=>{this.btnOnclickHandler(e)}}></KeyBtn>
                <KeyBtn value="+" className="operator" txt={"+"}
                onClick={(e)=>{this.btnOnclickHandler(e)}}></KeyBtn>
                <KeyBtn value="=" className="result"  txt={"="}
                onClick={(e)=>{this.btnOnclickHandler(e)}}></KeyBtn>
            </div>
        </>
        );
    }
}
export default L05Calculator;