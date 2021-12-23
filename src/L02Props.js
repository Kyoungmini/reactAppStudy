import React,{Component} from "react";
import propTypes from "prop-types";
class L02Props extends React.Component{
    constructor(props){
        //const aStyle={border: "1px solid", margin: "0 10px",padding:"0px 10px"};
        //props.aStyle=(props.aStyle)?props.aStyle:aStyle;
        super(props);
        // this.a_list=[];

        // props.aList.forEach((item,i)=>{
        //     this.a_list.push(
        //     <li>
        //         <a style={this.props.aStyle} href={item.href}>
        //             {item.inText}
        //         </a>
        //     </li>)
        // });
        this.a_list= props.aList.map((item,i)=>{
            return(
            <li key={i}>
                <a style={this.props.aStyle} href={item.href}>
                    {item.inText}
                </a>
            </li>);
        });
        console.log(this.a_list);
    }
    render(){
        return(
            <nav>
                {/*aList=[{href:"./a.html",inTxt:"a.html 입니다."}},{...},{...}] */}
                <ul>
                    {this.a_list}
                </ul>
            </nav>
        );
    }
    static defaultProps={
        aStyle:{border: "1px solid", margin: "0 10px"}
    }
    static propTypes={
        aStyle: propTypes.object
    }
    
}
// L02Props.defaultProps={
//     aStyle:{border: "1px solid", margin: "0 10px",padding:"0px 10px"}
// }
// L02Props.propTypes={
//     aStyle: propTypes.object
// }
//prop type: Invalid prop `aStyle` of type `number` supplied to `L02Navigation`, expected `object`.
export default L02Props;