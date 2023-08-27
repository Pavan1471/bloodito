import bloodlogo from "./asserts/blood-drop.png"
import { FcApproval } from "react-icons/fc";
const Dashboard = () => {
  return(
    <>
    <div  className="donars-container-stats">
    <div id="card-1" className="blooddonar-stats">
      <img className="blood-logo" src={bloodlogo} alt="" />
      <div>
        <div className="donars-number">27</div>
        <div className="donars-name">Donars</div>
      </div>
    </div>
    <div className="blooddonar-stats">
      <img className="blood-logo" src={bloodlogo} alt="" />
      <div>
        <div className="donars-number">24</div>
        <div className="donars-name">Requests</div>
      </div>
    </div>
    <div id="card-2" className="blooddonar-stats">
      <img className="blood-logo" src={bloodlogo} alt="" />

      <div>
        <div className="donars-number">7</div>
        <div className="donars-name">Approved</div>
      </div>
    </div>
    <div className="blooddonar-stats">
      <img className="blood-logo" src={bloodlogo} alt="" />
      <div>
        <div className="donars-number">0</div>
        <div className="donars-name">Donars</div>
      </div>
    </div>
    </div>
    </>
  )
};

export default Dashboard;
