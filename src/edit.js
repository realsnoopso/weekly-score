import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = (props) => {
    const day = useParams()["day"]

    const score1 = React.useRef(null);
    const score2 = React.useRef(null);
    const score3 = React.useRef(null);
    const score4 = React.useRef(null);
    const score5 = React.useRef(null);

    const SwitchEvent1 = () => {
        score1.current.classList.add('active');
        score2.current.classList.remove('active');
        score3.current.classList.remove('active');
        score4.current.classList.remove('active');
        score5.current.classList.remove('active');
    }
    const SwitchEvent2 = () => {
        score1.current.classList.add('active');
        score2.current.classList.add('active');
        score3.current.classList.remove('active');
        score4.current.classList.remove('active');
        score5.current.classList.remove('active');    }
    const SwitchEvent3 = () => {
        score1.current.classList.add('active');
        score2.current.classList.add('active');
        score3.current.classList.add('active');
        score4.current.classList.remove('active');
        score5.current.classList.remove('active');    }
    const SwitchEvent4 = () => {
        score1.current.classList.add('active');
        score2.current.classList.add('active');
        score3.current.classList.add('active');
        score4.current.classList.add('active');
        score5.current.classList.remove('active');    }
    const SwitchEvent5 = () => {
        score1.current.classList.add('active');
        score2.current.classList.add('active');
        score3.current.classList.add('active');
        score4.current.classList.add('active');
        score5.current.classList.add('active');    }

    useEffect(() => {
        score1.current.addEventListener("click", SwitchEvent1)
        score2.current.addEventListener("click", SwitchEvent2)
        score3.current.addEventListener("click", SwitchEvent3)
        score4.current.addEventListener("click", SwitchEvent4)
        score5.current.addEventListener("click", SwitchEvent5)
    })



    return (
        <div className='edit'>
            <h1>{day}요일 평점 남기기</h1>
            <div className='row'>
                <div className='score' ref={score1}></div>
                <div className='score' ref={score2}></div>
                <div className='score' ref={score3}></div>
                <div className='score' ref={score4}></div>
                <div className='score' ref={score5}></div>
            </div>
            <Link to="/">
                <button>평점 남기기</button>
            </Link>
            
        </div>
    )
}

export default Edit;