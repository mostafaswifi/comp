import Swal from "sweetalert2"
import { useEffect, useState,useRef } from "react";
import mix from "../../assets/sounds/mix.mp3"
import { schoolFicher } from "../../api/schoolFicher";
import TimerComp from "../TimerComp/TimerComp"
import theAnswerIs from '../../assets/imgs/theAnswerIs.jpg'
import next from '../../assets/imgs/next.gif'
import answer from '../../assets/imgs/answer.gif'
import timer from '../../assets/imgs/timer.gif'
import wrong from '../../assets/imgs/wrong.jpg'
import './style.css'


const QuestiosComponent = ({ schoolId,scoreSchool1,setScoreSchool1,scoreSchool2,setScoreSchool2,scoreSchool3,setScoreSchool3,scoreSchool4,setScoreSchool4 }) => {
  let mixRef = useRef(null)
 
  let[counter,setCounter] = useState(1)
  let [schoolOne, setSchoolOne] = useState([]);
  let [qId,setQId] = useState(0)
  let [choices,setChoices] = useState([])
  let [theAnswer,setTheAnswer] = useState("")
  let [counterFalg,setCounterFalg] = useState(true)
  let [timerShow,setTimerShow] = useState(false)
  let [rightAnserResult,setRightAnserResult] = useState(false)
  

useEffect(() => {
  schoolFicher().then((data) => setSchoolOne(data));


}, []);



   let flagState = (i,e) => {  

Swal.fire({icon: 'error', title: `${e.target.getAttribute("answer")}`, text: 'اجابة خطأ',imageUrl:wrong})



setCounterFalg(false)
schoolOne[schoolId]?.questions[qId]?.ansererIdx === i ? setRightAnserResult(true) : setRightAnserResult(false)
}

// console.log()

  let quesNext = () => {
  
    mixRef.current = new Audio(mix)
    mixRef.current.play()
    setQId(qId+1)
    setTheAnswer("")
    setCounterFalg(true)
   setCounter(counter+1)
   // eslint-disable-next-line no-unused-expressions
   counter === 9 ? Swal.fire({icon: 'warning', title: 'السؤال الأخير', text: 'السؤال الأخير',}) : null
   // eslint-disable-next-line no-unused-expressions
   counter === 10 ? Swal.fire({icon: 'info', title: 'إنتهت الأسئلة لهذه المدرسة', text: 'إنتهت الأسئلة',}) : null
  }
  

let rightAnswer = () => {
  
  let answer = schoolOne[schoolId]?.questions[qId]?.answer;
 setTheAnswer(answer)
 setTimerShow(false)

}

  useEffect(() => {
    let finalchoices =schoolOne[schoolId]?.questions[qId]?.choices;
   setChoices(finalchoices)
  }, [choices, qId, schoolId, schoolOne]);

 
     
      
  let question = () => {
    let theQues = schoolOne[schoolId]?.questions[qId];
   
    return (
      <div style={{height:"75vh"}} className="w-100 blink">
       <div className='fs-3 fw-bold mb-5 text-center bg-light mx-auto py-3 px-5 rounded w-100' style={{width:"fit-content"}}> <span className='text-success d-block h-100 w-100 '> السؤال رقم {counter} </span> <span className="fs-1 text-danger"> {theQues ? theQues[`q${qId + 1}`] : null} </span></div>
        <ol className="row w-50 justify-content-center mx-auto" style={{textAlign:"right"}}>{choices?.map((c, i) => <li  style={{listStyle:"none" , width:"300px",cursor:"pointer"}} className="col-6  fs-3 bg-light border border-dark rounded m-3 p-2" key={i}  onClick={(e) => flagState(i,e)}> <button type="button" answer={c} className='text-center btn btn-outline-light text-dark w-100 fs-3 picker'>{i+1}- {c} </button></li>)}</ol>
        {!timerShow && <button type="button" className='btn btn-light mx-3' onClick={() => quesNext()}>التالي <img src={next} alt="next" width={"40px"}/></button>}
        {timerShow &&<button type="button" className='btn btn-light mx-3' onClick={() => rightAnswer()}>الإجابة <img src={answer} alt="answer" width={"40px"}/></button>}

        {!timerShow && <button type="button" className='btn btn-light mx-3' onClick={() => setTimerShow(true)}>إبدأ الوقت <img src={timer} alt="timer" width={"40px"}/></button>}

     
        {theAnswer && <span className='d-flex justify-content-center align-items-center flex-column'>   <p className='blink text-success d-block mt-4 text-center bg-light p-3 rounded w-50 mx-auto border'> {theAnswer}  </p>
          <img src={theAnswerIs} alt={theAnswerIs} width={"200px"}/>
        </span>}

        {timerShow && <TimerComp className='blink' counterFalg={counterFalg} schoolId={schoolId} qId={qId} setRightAnserResult={setRightAnserResult} rightAnserResult={rightAnserResult} scoreSchool1={scoreSchool1} scoreSchool2={scoreSchool2} scoreSchool3={scoreSchool3} scoreSchool4={scoreSchool4} setScoreSchool1={setScoreSchool1} setScoreSchool2={setScoreSchool2} setScoreSchool3={setScoreSchool3} setScoreSchool4={setScoreSchool4}/>}
      </div>
    );
  };




  return (
    <div >
      
     <div className="text-center fs-1 fw-bold d-block"> {question()}</div>
      {/* {schoolOneQuestion} */}
    </div>
  );
};

export default QuestiosComponent;
