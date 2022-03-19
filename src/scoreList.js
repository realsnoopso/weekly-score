import React from "react";
import { Link } from "react-router-dom";
import Score from "./score";


const ScoreList = (props) => {
    const dayList = props.day

    return (
        <div>
            {dayList.map((day, index) => {
                return (
                    <div className="row">
                        <p>{day}</p>
                        <Score />
                        <Link to="/edit" name="{day}">편집하기</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ScoreList;