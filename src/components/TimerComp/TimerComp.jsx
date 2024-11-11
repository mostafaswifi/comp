import Swal from 'sweetalert2';
import cup from '../../assets/imgs/cup.png'
import addPic from "../../assets/imgs/add.gif"
import sound from "../../assets/sounds/videoplayback_m4a_V2.mp3";
import ticks from "../../assets/sounds/5ticks.mp3";
import timeOut from "../../assets/sounds/timeout.mp3";
import waiting from "../../assets/sounds/waiting.mp3";
import clapping from "../../assets/sounds/clapping.wav";
import { schoolFicher } from "../../api/schoolFicher";

import { useEffect, useState, useRef } from "react";
import "../../assets/sounds/right.m4a";
import "./style.css";


const TimerComp = ({ counterFalg, schoolId, qId, rightAnserResult,setRightAnserResult,scoreSchool1,setScoreSchool1,scoreSchool2,setScoreSchool2,scoreSchool3,setScoreSchool3,scoreSchool4,setScoreSchool4 }) => {

// console.log(rightAnserResult)
// useEffect(() => {


// }
// }, [rightAnserResult])
let scoreSchool1Ref = useRef(scoreSchool1)
let scoreSchool2Ref = useRef(scoreSchool2)
let scoreSchool3Ref = useRef(scoreSchool3)
let scoreSchool4Ref = useRef(scoreSchool4)


let [schoolOne, setSchoolOne] = useState([]);
let [counter, setCounter] = useState(60);
let [isPlaying, setIsPlaying] = useState(false);
let [grad, setGrad] = useState(0);

useEffect(() => {
  schoolFicher().then((data) => setSchoolOne(data));
}, [schoolOne]);


  const audioref = useRef(null);
  const myTicksref = useRef(null);
  const myTimeOutref = useRef(null);
  const myWaitingref = useRef(null);
  const myClappingref = useRef(null);

  useEffect(() => {
    if (counter === 0) {
      return;
    }
    if (counterFalg === false) {
      return;
    }
    let time = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(time);
  }, [counter, counterFalg]);

  useEffect(() => {
    if (!audioref.current) {
      audioref.current = new Audio(sound);
    }
    if (!myTicksref.current) {
      myTicksref.current = new Audio(ticks);
    }
    if (!myWaitingref.current) {
      myWaitingref.current = new Audio(waiting);
    }
    if (!myTimeOutref.current) {
      myTimeOutref.current = new Audio(timeOut);
    }
    if (!myClappingref.current) {
      myClappingref.current = new Audio(clapping);
    }


    if (counter === 60) {
      setIsPlaying(true);
      audioref.current?.play();
    } else if (counter === 5) {
      setIsPlaying(true);
      myTicksref.current?.play();
    } else if (counter === 0) {
      setIsPlaying(true);
      myTimeOutref.current?.play();
    }
    if (counterFalg === false) {
      setIsPlaying(true);
      audioref.current?.pause();
      myTicksref.current?.pause();
      myTimeOutref.current?.pause();
      myWaitingref.current?.play();
    }
  }, [counter, counterFalg,isPlaying]);

  useEffect(() => {
    if (rightAnserResult) {
      setGrad(counter >= 50 ? 5 : counter >= 40 ? 4 : counter >= 30 ? 3 : counter >= 20 ? 2 : 1);
      Swal.fire({
        title: 'إجابة صحيحة',
        icon: 'success',
        confirmButtonText: 'أحسنتم',
        imageUrl: cup,
        imageHeight: 500,
        imageAlt: "A tall image"
      }) 
      myClappingref.current?.play();
       setRightAnserResult(false)
    }
   
  }, [counter, grad, rightAnserResult, schoolId, scoreSchool1, setRightAnserResult, setScoreSchool1]);

let add = (e) => {
  e.target.disabled = true
 if (schoolId === 0 ){
   scoreSchool1Ref.current = scoreSchool1Ref.current + grad
  setScoreSchool1(scoreSchool1Ref.current)
}

if (schoolId === 1 ){
  scoreSchool2Ref.current = scoreSchool2Ref.current + grad
 setScoreSchool2(scoreSchool2Ref.current)
}

if (schoolId === 2 ){
  scoreSchool3Ref.current = scoreSchool3Ref.current + grad
 setScoreSchool3(scoreSchool3Ref.current)
}
 
if (schoolId === 3 ){
  scoreSchool4Ref.current = scoreSchool4Ref.current + grad
 setScoreSchool4(scoreSchool4Ref.current)
}
}

  let degree = (time) => {
    return time >= 50 ? 5 : time >= 40 ? 4 : time >= 30 ? 3 : time >= 20 ? 2 : time >= 1 ? 1 : 0;
  };

  return (
    <div>
      <button className="btn btn-light w-25" onClick={(e)=>add(e)}>إضافة إلي مجموع الفريق <img src={addPic} alt="add" width={"40px"}/></button>
      <div
        className="timer d-flex justify-content-center align-items-center fs-1 text-muted bg-info mx-auto rounded-circle my-3"
        id="timer"
        style={{ width: "100px", height: "100px" }}
      >
        <i name="fa-solid fa-clock"></i>
        <div className="blink"> {counter} </div>
      </div>
      {counter > 0 ? (
        <div className="d-flex justify-content-center align-items-center mb-4 fs-5 text-info">
          قيمة السؤال حالياً &nbsp;<span> {degree(`${counter}`)}</span> &nbsp; {counter >= 20 ? ` نقاط ` : ` نقطة `}
        </div>
      ) : (
        <span className="text-danger blink">الوقت إنتهي!!</span>
      )}
      <div
       
        style={{ height: "50px" }}
        className="progress rounded-0 container w-50 p-0"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
       
          style={{
            height: "50px",
backgroundColor: `${counter >= 50 ? "#48a700" : counter >= 40 ? "#FFDE4D" : counter >= 30 ? "#FFB22C" : counter >= 20 ? "#FF4C4C" : "red"}`,
            width: `${counter / 60 * 100}%`
          }}
        >

        </div>
      </div>
      {/* <button onClick={() => setCounter(60)}>stop sound</button> */}
      {/* <button >add</button> */}

    </div>
  );
};

export default TimerComp;