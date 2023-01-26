import {React,useState} from "react";
import Data from "./Data";
import Jobs from "./Components/HomeComponents";
import JobModal from "./Components/JobModal";

const Jobtable = () => {  
    const [toggleOn, setToggleOn] = useState(false);
    return (
        <div className="h-100 w-100">
            {toggleOn?<JobModal setToggleOn={setToggleOn } className="d-flex justify-content-center"/>:<></>}
            <button onClick={() => setToggleOn(true)} className="btn btn-primary my-1">Enter job</button>
            <Jobs data = {Data} />
        </div>
    );
};

export default Jobtable;