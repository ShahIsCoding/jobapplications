
import React,{useState, useEffect} from "react";
import Data from "../Data";
const JobModal = ({setToggleOn}) =>{

    const [companyName, setcompanyName] = useState(' ');
    const [jobid,setjobid] = useState(0);
    const [career_site,setcareer_site] = useState('');
    const [applied,setApplied] = useState(0);
    const [date,setDate] = useState('');
    const [email,setEmail] = useState('');

    useEffect(() => {
      setDate(new Date);
    }, [])
    
    function handleSubmit(){
        Data.push({
            id : Data.length + 1,
            date,
            company : companyName,
            emailid:email,
            jobid ,
            career_site,
            applied
        })
        setToggleOn(false);
    }

    return(
        <div className="zi border border-2 border-secondary w-50 text-center">
            <h3>Job Application Entry</h3>
            <div className="row mb-3">
                <h5 className="col-4">Company</h5>
                <input type="text" className="col-6" value={companyName} onChange={e =>setcompanyName(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <h5 className="col-4">Date</h5>
                <input type="date" className="col-6" value={date} onChange={e =>setDate(e.target.value)}/>
            </div>
            <div className="row mb-3">
                <h5 className="col-4">Email</h5>
                <input type="email" className="col-6"  value={email} onChange={e =>setEmail(e.target.value)}/>
            </div>      
            <div className="row mb-3">
                <h5 className="col-4">JobId</h5>
                <input type="text" className="col-6"  value={jobid} onChange={e =>setjobid(e.target.value)}/>
            </div>            
            <div className="row mb-3">
                <h5 className="col-4">Career_Site</h5>
                <input type="text" className="col-6" value={career_site} onChange={e =>setcareer_site(e.target.value)} />
            </div>            
            <div className="row mb-3">
                <h5 className="col-4">Applied</h5>
                <input type="number" className="col-6" min={-1} max={1} value={applied} onChange={e =>setApplied(e.target.value)}/>
            </div>
            <div className="row d-flex justify-content-around">
                <button className="col-4 btn btn-primary my-2" type="submit" onClick={handleSubmit}>Submit</button>
                <button className="col-4 btn btn-warning my-2" type="submit" onClick={() => setToggleOn(false)}>Cancel</button>
            </div>
        </div>  
    );
  }
  export default JobModal;