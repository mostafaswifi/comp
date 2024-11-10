

import { schoolFicher } from '../../api/schoolFicher'
import TabButton from '../TabButton/TabButton'
import { useEffect,useState } from 'react'
const TabMenue = () => {

let [schoolData,setSchoolData] = useState([])




useEffect(()=>{
  schoolFicher().then(data => setSchoolData(data))
  // console.log(schoolData[0])
  
},[schoolData]);

// schoolData.map( data =>{
//   console.log(data)
// })


// console.log(schoolData[0].questions)
// let myDataSchool1 = schoolData[0].questions.map((q)=>{
//   return (
    
//   )
// })

  return (

    
    <div>
    
      <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
   
    <TabButton id={"home-tab"} dataBsTarget={"#home-tab-pane"} ariaControls={"home-tab-pane"} ariaSelected={"true"} text={schoolData[0]?.name}/>
  </li>
  <li className="nav-item" role="presentation">
  </li>
  <TabButton id={"profile-tab"} dataBsTarget={"#profile-tab-pane"} ariaControls={"profile-tab-pane"} ariaSelected={"false"} text={schoolData[1]?.name}/>
  <li className="nav-item" role="presentation">
    <TabButton id={"contact-tab"} dataBsTarget={"#contact-tab-pane"} ariaControls={"contact-tab-pane"} ariaSelected={"false"} text={schoolData[2]?.name}/>
  </li>
  <li className="nav-item" role="presentation">
    <TabButton id={"disabled-tab"} dataBsTarget={"#disabled-tab-pane"} ariaControls={"disabled-tab-pane"} ariaSelected={"false"} text={schoolData[3]?.name}/>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">{}</div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">2</div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">3</div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">4</div>
</div>


    </div>
  )
}

export default TabMenue
