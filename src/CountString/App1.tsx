import React from "react";
import { IAppProps, IAppState } from "./IApp.interface";
import Counter from "../Components/Counter";

class App1 extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
      super(props);
      this.state = {
        number: 0,
        listString: [],
      };
    }

    incrementCount = () => {
      this.setState(prevState => ({ number: prevState.number + 1 }));
    };

    decrementCount = () => {
      this.setState(prevState => ({ number: prevState.number - 1 }));
    };

    render() {
      return (
          <div className='simple-counter-box' style={{ textAlign: "center" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                Simple Counter
              </div>
              <div>
                  <div>
                      <Counter number={this.state.number}/>
                      {this.state.listString.map((item:any)=>{
                        return(
                          <>
                            {item}
                          </>
                        )
                      })}
                  </div>
                  <div>
                      <button onClick={()=>this.setState({number: this.state.number+1})}>+</button>
                      <button onClick={()=>this.setState({number: this.state.number-1})}>-</button>
                      <button onClick={()=>this.setState({listString: [...this.state.listString, "Semangka"]})}>Semangka</button>
                  </div>
              </div>
          </div>
      );
    }
}

export default App1;
