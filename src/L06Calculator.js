import React,{Component} from "react";
import "./L06Calculator.scss"
class KeyBtn extends React.Component{
    render=()=>(
        //button className="num(0~9) or operator(+,*,-..) or result(=)" value, onClick, innerText
        <button {...this.props.attri}>{this.props.txt}</button>
    );
}
class KeyBtnObj{
    attri={className:"",value:"",onClick:""};
    txt="";
    constructor(className,value,onclick,txt=value){
        this.attri.className=className;
        this.attri.value=value;
        this.attri.onClick=onclick;
        this.txt=txt;
    }
}
class L06Calculator extends React.Component{
    KeyBtnObj_arr=
    [
        new KeyBtnObj("num","7",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("num","8",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("num","9",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("operator","*",(e)=>{this.btnOnclickHandler(e)},"X"),
        new KeyBtnObj("num","4",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("num","5",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("num","6",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("operator","-",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("num","1",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("num","2",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("num","3",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("operator","+",(e)=>{this.btnOnclickHandler(e)}),
     
        new KeyBtnObj("any","*(-1)",(e)=>{this.btnOnclickHandler(e)},"+/-"),
        new KeyBtnObj("num","0",(e)=>{this.btnOnclickHandler(e)}),
        new KeyBtnObj("any",".",(e)=>{this.btnOnclickHandler(e)}),

        new KeyBtnObj("result","=",(e)=>{this.btnOnclickHandler(e)}),

    ]
    constructor(props){
        super(props);
        this.state={process:"", result:0, operator:""}
        this.KeyBtnObj_arr=this.KeyBtnObj_arr.map((keyBtnObj,i)=>{
            return(
                <KeyBtn key={i} attri={keyBtnObj.attri} txt={keyBtnObj.txt}/>
            );
        });
        //proccess  "1"+"2"+"1"="121"=121
        //proccess   1+2+1=4
        //if(operator==="-"){result=result-Number(proccess)}
        //btn class=num value="9"       process=process+9
        //btn class=operator value="*"  operaotr="*",  result= result * Number(proccess);
    }
    btnOnclickHandler(e){
        let value=e.target.value;
        if(e.target.classList.contains("num")){
            this.setState(({process})=>({process: process+value}) );
        }else if(e.target.classList.contains("operator")){
            let result;
            let process_num=Number(this.state.process)
            if(this.state.operator==="+"){
                result=this.state.result + process_num;
            }else if(this.state.operator==="-"){
                result=this.state.result - process_num;
            }else if(this.state.operator==="*"){
                result=this.state.result * process_num;
            }else{//초기
                result=process_num
            }
            this.setState({process:"",operator:value,result:result})
        }
        //윈도우나 맥 계산기처럼 나머지 버튼 구현
    }
    render=()=>{
        //render에 Element를 생성하지마세요.     
        return(
        <>
            <div>
                {/* <textarea readOnly value={this.state.result} /> */}
                <textarea readOnly value={this.state.process||this.state.result} />
            </div>  
            <div className="btn_grid_container">
                {this.KeyBtnObj_arr}
            </div>
        </>
        );
    }
}
export default L06Calculator;