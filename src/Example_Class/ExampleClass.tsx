import React, { Component } from "react";
import { IExampleClassProps, IExampleClassState } from "./ExampleClass.interface";
import { Console } from "console";
import Child from "./Child";

//Train 7 Context

export const ThemeContext = React.createContext(false)

class ExampleClass extends Component<IExampleClassProps, IExampleClassState> {
    constructor(props: IExampleClassProps) {
        super(props);
        this.state = {
            count: 0,
            darkTheme : false
        };
    }

    // Train 6 Mount
    componentDidMount(): void {
        console.log("Component did Mount");
        // Component did mount logic here
    }

    componentDidUpdate(prevProps: Readonly<IExampleClassProps>, prevState: Readonly<IExampleClassState>, snapshot?: any): void {
        //Component update
        console.log("Component did Update");
    }

    toggleDarkTheme = () =>{
        this.setState((prevState)=>({
            darkTheme:!prevState.darkTheme
        }))
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
        const { darkTheme } = this.state;
        return (
            <ThemeContext.Provider value={darkTheme}>
            <div>
                <h1>Class Component</h1>
                {count}
                <button onClick={this.minNumber}>-</button>
                <button onClick={this.addNumber}>+</button>
                <input type="text" onChange={()=>{console.log('test')}} />
                <button onClick={this.toggleDarkTheme}>Change Theme</button>
                <Child/>
                <Child/>
            </div> 
            </ThemeContext.Provider>
        );
    }
}

export default ExampleClass;
