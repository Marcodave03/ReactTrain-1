import React from "react";
import { ICounterProps } from "./ICounter.interface";

class Counter extends React.Component<ICounterProps,any>{
    constructor(props:any){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
                {this.props.number}
            </>
        )
    }
}

export default Counter