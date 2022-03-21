import React from "react";
import { Link } from "react-router-dom";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const ScoreList = () => {
  const arr = [
    {'day': '월', 'score': Math.floor(Math.random() * 6)}, 
    {'day': '화', 'score':Math.floor(Math.random() * 6)}, 
    {'day': '수', 'score':Math.floor(Math.random() * 6)}, 
    {'day': '목', 'score':Math.floor(Math.random() * 6)}, 
    {'day': '금', 'score':Math.floor(Math.random() * 6)}, 
    {'day': '토', 'score':Math.floor(Math.random() * 6)}, 
    {'day': '일', 'score':Math.floor(Math.random() * 6)}]  
  return (
    <>
        {arr.map((value, index) => {
            return (
                <div className="row" key={index}>
                    <p>{value['day']}</p>
                    <>
                      {
                          (value['score'] === 1)? 
                          <div className="scoreList">
                              <div className="score active"></div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                          </div>
                          : (value['score'] === 2)?
                          <div className="scoreList">
                              <div className="score active"></div>
                              <div className="score active"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                          </div> 
                          : (value['score'] === 3)?
                          <div className="scoreList">
                              <div className="score active"></div>
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                          </div> 
                          : (value['score'] === 4)?
                          <div className="scoreList">
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                              <div className="score"> </div>
                          </div> 
                          : (value['score'] === 5)?
                          <div className="scoreList">
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                              <div className="score active"> </div>
                          </div>
                          : 
                          <div className="scoreList">
                              <div className="score"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                              <div className="score"> </div>
                          </div>
                      }
                    </>
                    <Link to={`edit/${value['day']}`}>
                      <div className="editBtn"></div>
                    </Link>
                </div>
            )
        })}
    </>
  )
}

export default ScoreList;