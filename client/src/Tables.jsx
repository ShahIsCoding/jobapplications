import React from "react";
const data = [
    {
    id : 0,
    company : "A",
    jobid : "B",
    career_site : "C"
    },
    {
        id : 1,
        company : "D",
        jobid : "E",
        career_site : "F"
    }
];
const Jobtable = () => {
    const JobtableRow = (id, company, jobid, career_site) => {
        console.log(id, company, jobid, career_site);
        return (
          <div className="row d-flex justify-content-between">
            <h5 className="col-3 border border-1 text-center">{id}</h5>
            <h5 className="col-3 border border-1 text-center">{company}</h5>
            <h5 className="col-3 border border-1 text-center">{jobid}</h5>
            <h5 className="col-3 border border-1 text-center">{career_site}</h5>
          </div>
        );
      };
      const Jobs = (data) =>{
        // for(let i = 0;i<data.length;i++){
        //     console.log(new Date(),data[i].id,data[i].company,data[i].jobid,data[i].career_site);
        // }
        return data.map((item) =>{
            console.log(item.id,item.company,item.jobid,item.career_site);
            return <JobtableRow 
                        id = {item.id} 
                        company={item.company} 
                        jobid={item.jobid} 
                        career_site={item.career_site} 
                    />;
        })
      }
      
    return (
        <div className="container">
            <h6>Table</h6>
            <Jobs data = {data} />
        </div>
    );
};

export default Jobtable;