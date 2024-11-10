import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import TabMenue from './components/tabComponents/TabMenue';



function App() {
  return (
    <div className="App">
{/* <FontAwesomeIcon className='fs-1 fw-bold' icon={faEnvelope} /> */}
<TabMenue />
    </div>
  );
}

export default App;
