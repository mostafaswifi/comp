import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeadComp from './components/HeadComp/HeadComp';
import './App.css';
import TabMenue from './components/tabComponents/TabMenue';
import { useState } from 'react';



function App() {
  const [scoreSchool1,setScoreSchool1] = useState(0)
  const [scoreSchool2,setScoreSchool2] = useState(0)
  const [scoreSchool3,setScoreSchool3] = useState(0)
  const [scoreSchool4,setScoreSchool4] = useState(0)
  return (
    <div className="App">
{/* <FontAwesomeIcon className='fs-1 fw-bold' icon={faEnvelope} /> */}
<HeadComp />
<TabMenue scoreSchool1={scoreSchool1} setScoreSchool1={setScoreSchool1} scoreSchool2={scoreSchool2} setScoreSchool2={setScoreSchool2} scoreSchool3={scoreSchool3} setScoreSchool3={setScoreSchool3} scoreSchool4={scoreSchool4} setScoreSchool4={setScoreSchool4}/>
    </div>
  );
}

export default App;
