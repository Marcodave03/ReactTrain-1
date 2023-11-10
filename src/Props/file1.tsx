import React from "react";
import './App.css';
// Ensure that IExampleClassProps and IExampleClassState are correctly defined and imported
import { IExampleClassProps, IExampleClassState } from "../Example_Class/ExampleClass.interface";

class file1 extends React.Component<IExampleClassProps, IExampleClassState> {
    constructor(props: IExampleClassProps) {
      super(props);
      this.state = {
        count: 0
      };
    }

    incrementCount = () => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    decrementCount = () => {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    };

    render() {
      return (
          <div className='simple-counter-box' style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                Simple Counter
              </div>
              <div>
                  <div>
                      {this.state.count}
                  </div>
                  <div>
                      <button onClick={this.incrementCount}>+</button>
                      <button onClick={this.decrementCount}>-</button>
                  </div>
              </div>
          </div>
      );
    }
}

export default file1;
