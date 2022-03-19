import React from "react";
import { Link } from "react-router-dom";

const submit = () => {
    console.log('hi')
}

const edit = (props) => {
    const day = '금'
    return (
        <div className='edit'>
            <h1>{day}요일 평점 남기기</h1>
            <div className='row'>
                <div className='score'></div>
                <div className='score'></div>
                <div className='score'></div>
                <div className='score'></div>
                <div className='score'></div>
            </div>
            <Link to="/"><button onClick={submit}>평점 남기기</button></Link>
            
        </div>
    )
}

export default edit;