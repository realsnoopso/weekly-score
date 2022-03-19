import React from "react";
import { Link } from "react-router-dom";
import Score from "./score";


class ScoreList extends React.Component {
    
    
    constructor(props){
      const array = [0, 0, 0, 0, 0]
      const newArray = array.map((array_item) => {
        return array_item + Math.floor(Math.random() * 6);
      });
      super(props);
  
      this.state = {
        day: ['월','화','수','목','금','토','일'],
        score: newArray,
      };
    }
  
    render() {
        return (
        <div>
            {this.state.day.map((day, index) => {
                return (
                    <div className="row">
                        <p>{day}</p>
                        <Score />
                        <Link to="/edit" name="{day}">편집하기</Link>
                    </div>
                )
            })}
        </div>
      );
    }
  }



export default ScoreList;