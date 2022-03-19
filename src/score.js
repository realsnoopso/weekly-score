import React, {useEffect, useState} from "react";

const Score = (props) => {
    const [scores, setScore] = React.useState(0);

    useEffect(() => {
        const newArray = Math.floor(Math.random() * 6);
        setScore(newArray)
    })

    return (
        <div className="scoreList">
            <div className="score active">{scores}</div>
        </div>
    )

}

export default Score;