    import {React, useState} from "react";
    const JobtableRow = ({id, company,date, jobid,emailid, career_site, referral, applied}) => {
        return (
        <tr className="row d-flex align-items-center">
            <th className="col-1 border border-1">{id}</th>
            <td className="col-2 border border-1">{date}</td>
            <td className="col-2 border border-1">{company}</td>
            <td className="col-1 border border-1">{emailid}</td>
            <td className="col-1 border border-1">{jobid}</td>
            <td className="col-1 border border-1"><a href={career_site}>{company}</a></td>
            <td className="col-2 border border-1">{referral}</td>
            <td className="col-1 border border-1">
                {applied === 1 ? 
                    <button type= "button" className="btn btn-success"></button>: 
                    applied === 0 ? 
                    <button type= "button" className="btn btn-danger"></button>: 
                    <button type= "button" className="btn btn-warning"></button>
                }
            </td>
        </tr>
        );
    };
  const Jobs = ({data}) =>{
    return(
      <table className="text-center w-100">
        <thead>
            <tr className="row">
                <th className="col-1 border border-1">Id</th>
                <th className="col-2 border border-1">Date</th>
                <th className="col-2 border border-1">company</th>
                <th className="col-1 border border-1">Email</th>
                <th className="col-1 border border-1">JobId</th>
                <th className="col-1 border border-1">career_site</th>
                <th className="col-2 border border-1">referral</th>
                <th className="col-1 border border-1">Applied</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item) =>{
        return(
        <JobtableRow 
            key = {item.id}
            id = {item.id} 
            date = {item.date}
            company={item.company}
            emailid = {item.emailid} 
            jobid={item.jobid} 
            career_site={item.career_site}
            applied = {item.applied} 
        />);
        })}
        </tbody>
      </table>
    )
  };
  export  default Jobs;
  