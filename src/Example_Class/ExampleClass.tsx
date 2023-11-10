import React, { Component } from "react";
import { IExampleClassProps, IExampleClassState } from "./ExampleClass.interface";

class ExampleClass extends Component<IExampleClassProps, IExampleClassState> {
    constructor(props: IExampleClassProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount(): void {
        // Component did mount logic here
    }

    addNumber = () =>{
        this.setState({
            count: this.state.count+1,
        })

    }

    minNumber = () =>{
        this.setState({
            count: this.state.count-1,
        })

    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>Class Component</h1>
                {count}
                <button onClick={this.minNumber}>-</button>
                <button onClick={this.addNumber}>+</button>
            </div>
        );
    }
}

export default ExampleClass;
