
import QuestiosComponent from '../Question/QuestiosComponent'
import { schoolFicher } from '../../api/schoolFicher'
import TabButton from '../TabButton/TabButton'
import { useEffect,useState,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import Swal from 'sweetalert2';
import medal from '../../assets/imgs/medal.png'
import draw from '../../assets/imgs/draw.png'
import win from "../../assets/sounds/winning.mp3"
import equal from "../../assets/sounds/equal.mp3"
const TabMenue = ({scoreSchool1,setScoreSchool1,scoreSchool2,setScoreSchool2,scoreSchool3,setScoreSchool3,scoreSchool4,setScoreSchool4}) => {

let [schoolData,setSchoolData] = useState([])
let winRef = useRef(null)
let equalRef = useRef(null)


let winner = () => {
  if(scoreSchool1 > scoreSchool2 && scoreSchool1 > scoreSchool3 && scoreSchool1 > scoreSchool4){
    Swal.fire({title: `الفائز هو ${schoolData[0].name}`, text: 'المركز الأول',imageUrl:medal})
    if (!winRef.current) {
      winRef.current = new Audio(win)
      winRef.current.play()
    }
    
  }else if(scoreSchool2 > scoreSchool1 && scoreSchool2 > scoreSchool3 && scoreSchool2 > scoreSchool4){
    Swal.fire({title:  `الفائز هو ${schoolData[1].name}`, text: 'المركز الأول',imageUrl:medal})
    if (!winRef.current) {
      winRef.current = new Audio(win)
      winRef.current.play()
    }
  }else if(scoreSchool3 > scoreSchool1 && scoreSchool3 > scoreSchool2 && scoreSchool3 > scoreSchool4){
    Swal.fire({title:  `الفائز هو ${schoolData[2].name}`, text: 'المركز الأول',imageUrl:medal})
    if (!winRef.current) {
      winRef.current = new Audio(win)
      winRef.current.play()
    }
  }else if(scoreSchool4 > scoreSchool1 && scoreSchool4 > scoreSchool2 && scoreSchool4 > scoreSchool3){
    Swal.fire({title:  `الفائز هو ${schoolData[3].name}`, text:'المركز الأول',imageUrl:medal})
    if (!winRef.current) {
      winRef.current = new Audio(win)
      winRef.current.play()
    }
  }else{
    Swal.fire( {title: 'تعادل', text: 'سؤال فيصل ... نعود بعد الفاصل',imageUrl:draw})
    if (!equalRef.current) {
      equalRef.current = new Audio(equal)
      equalRef.current.play()
    }
  }
  }



useEffect(()=>{
  schoolFicher().then(data => setSchoolData(data))

  
},[schoolData]);


  return (

    
    <div className='container-fluid mx-auto mt-1 blink p-0 border'>
    
    
  <ul  className="nav nav-tabs justify-content-center align-items-center d-flex p-0 w-100" id="myTab" role="tablist">

    <li className="nav-item  w-25 d-flex flex-column justify-content-center align-items-center g-0 mx-0 px-0 blink" role="presentation">
    <TabButton   id={"home-tab"} dataBsTarget={"#home-tab-pane"} ariaControls={"home-tab-pane"} ariaSelected={"false"} text={schoolData[0]?.name}/>
    <FontAwesomeIcon className='fs-1 fw-bold text-success' icon={faUserGraduate} />
    {scoreSchool1? <p className="fs-5 fw-bold text-info text-center">مجموع النقاط : {scoreSchool1}</p> : <p className="fs-5 fw-bold text-info text-center">لم يحدد النقاط بعد</p>}
    </li>
 

  <li className="nav-item  w-25 d-flex flex-column justify-content-center align-items-center g-0 mx-0 px-0 blink" role="presentation">
  <TabButton   id={"profile-tab"} dataBsTarget={"#profile-tab-pane"} ariaControls={"profile-tab-pane"} ariaSelected={"false"} text={schoolData[1]?.name}/>
  <FontAwesomeIcon className='fs-1 fw-bold text-danger' icon={faUserGraduate} />
  {scoreSchool2? <p className="fs-5 fw-bold text-info text-center">مجموع النقاط : {scoreSchool2}</p> : <p className="fs-5 fw-bold text-info text-center">لم يحدد النقاط بعد</p>}
  </li>

  <li className="nav-item  w-25 d-flex flex-column justify-content-center align-items-center g-0 mx-0 px-0 blink" role="presentation">
    <TabButton   id={"contact-tab"} dataBsTarget={"#contact-tab-pane"} ariaControls={"contact-tab-pane"} ariaSelected={"false"} text={schoolData[2]?.name}/>
    <FontAwesomeIcon className='fs-1 fw-bold text-warning' icon={faUserGraduate} />
    {scoreSchool3? <p className="fs-5 fw-bold text-info text-center">مجموع النقاط : {scoreSchool3}</p> : <p className="fs-5 fw-bold text-info text-center">لم يحدد النقاط بعد</p>}  </li>

  <li className="nav-item  w-25 d-flex flex-column justify-content-center align-items-center g-0 mx-0 px-0 blink" role="presentation">
    <TabButton   id={"disabled-tab"} dataBsTarget={"#disabled-tab-pane"} ariaControls={"disabled-tab-pane"} ariaSelected={"false"} text={schoolData[3]?.name}/>
    <FontAwesomeIcon className='fs-1 fw-bold text-primary' icon={faUserGraduate} />
    {scoreSchool4? <p className="fs-5 fw-bold text-info text-center">مجموع النقاط : {scoreSchool4}</p> : <p className="fs-5 fw-bold text-info text-center">لم يحدد النقاط بعد</p>}  </li>

</ul>


<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
  <QuestiosComponent scoreSchool1 = {scoreSchool1} setScoreSchool1={setScoreSchool1} schoolId={0} />
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="1">
    <QuestiosComponent scoreSchool2 = {scoreSchool2} setScoreSchool2={setScoreSchool2} schoolId={1}/>
    </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="2">
  <QuestiosComponent scoreSchool3 = {scoreSchool3} setScoreSchool3={setScoreSchool3} schoolId={2}/>
  </div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="3">
  <QuestiosComponent scoreSchool4 = {scoreSchool4} setScoreSchool4={setScoreSchool4} schoolId={3}/>
  </div>
</div>
{ scoreSchool1 && scoreSchool2 && scoreSchool3 && scoreSchool4  ? <button className='btn btn-success' onClick={()=>{winner()}}>الفائز هو !؟</button>: null}
    </div>
  )
}

export default TabMenue
