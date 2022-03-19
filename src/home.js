import React from "react";

import ScoreList from "./scoreList";

class home extends React.Component {

    constructor(props){
      super(props);
  
      this.state = {
        day: ['월','화','수','목','금','토','일'],
      };
    }
  
    render() {
        return (
        <div>
          <h1>내 일주일은?</h1>
          <ScoreList day={this.state.day}/>
        </div>
      );
    }
  }
  

export default home;