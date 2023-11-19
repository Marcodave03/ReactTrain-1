import React, {Component} from "react";
import { ThemeContext } from "./ExampleClass";

class Child extends Component<any,any>{
    constructor(props:any){
        super(props)
        this.state={

        }
    }

    themeStyle(dark:boolean){
        return{
            backgroundColor:dark?"#333":"#CCC",
            color:dark?"#ccc":"#333",
            padding:"3rem",
            margin:"3rem"
        }
    }

    render(){
        return (
            <ThemeContext.Consumer>
                {
                    darkTheme=>{
                        return(
                        <div style={this.themeStyle(darkTheme)}>
                            Child Theme
                        </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }

}

export default Child