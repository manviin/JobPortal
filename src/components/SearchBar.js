import { useState } from "react";
import jobs from "../dummyData";
import JobCard from "./JobCard";
import React from "react";
  
    function SearchBar(){

        
        
        const [filters, setFilters] = useState({
            experience: "",
            company: "",
            numberOfEmployees: "",
            remote: "",
            minSalary:"",
            role:"",
           
          });

          function handleChange (event)  {
              const name = event.target.name;
              const value= event.target.value;
            setFilters({ ...filters, [name]: value });
          };

        const filteredJobs = jobs.filter(jobs => {
        const filterExp= jobs.experience >= filters.experience || filters.experience==="";
        const filtercompany = jobs.company===filters.company||filters.company===""; 
        const filterLocation = jobs.location===filters.remote || filters.remote===""; 
        const filterRole=  jobs.role=== filters.role || filters.role===""; 
        const filterPay = jobs.minBasePay===filters.minSalary ||filters.minSalary==="";
        const filterEmpNo= jobs.EmpNO===filters.empNo || filters.empNo==="";

        return !(filterExp&&filtercompany&&filterLocation&&filterRole&&filterPay&&filterEmpNo);
          
          
            
          });



      return <div> 
       <div  className="flex gap-2 px-4 ml-5">
            <select  name="role" onChange={handleChange} className=" text-gray-400 w-70 py-3 px-4 bg-transparent font-semibold border border-gray-500 rounded">
            <option value="" disabled hidden selected> Role </option>
            <option value="Frontend Developer"> Frontend Developer</option>
            <option value="Backend Developer"> Backend Developer</option>
            <option value="IOS Developer"> IOS Developer</option>
            <option value="Data Engineer"> Flutter Developer </option>
            <option value="Android Developer">Android Developer</option>
            <option value="Dev-ops"> Dev-ops </option>
            <option value="React-Native">React-Native</option>
        </select>

        <select  name="numberOfEmployees" onChange={handleChange} className=" text-gray-400 w-70 py-3 px-4 bg-transparent font-semibold border border-gray-500 rounded">
            <option value="" disabled hidden selected> Number Of Employees </option>
            <option value="1-10">1-10</option>
            <option value="11-50"> 11-50</option>
            <option value="50-200"> 50-200</option>
            <option value="200-500"> 200-500</option>
            <option value="500+"> 500+</option>
        </select>

        <select   name="experience" onChange={handleChange}className=" text-gray-400 w-70 py-3 px-4 bg-transparent font-semibold border border-gray-500 rounded">
            <option value="" disabled hidden selected>Experience</option>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4 </option>
            <option value="5"> 5</option>
            <option value="6"> 6</option>
            <option value="7"> 7</option>
            <option value="8"> 8 </option>
            <option value="9"> 9</option>
            <option value="10"> 10 </option>
        </select>

        <select  name="remote" onChange={handleChange} className=" text-gray-400 w-70 py-3 px-4 bg-transparent font-semibold border border-gray-500 rounded">
            <option value="" disabled hidden selected> Remote</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>

        <select  name="minSalary" onChange={handleChange} className=" text-gray-400 w-70 py-3 px-4 bg-transparent font-semibold border border-gray-500 rounded">
            <option value="" disabled hidden selected> Minimum Base Pay salary </option>
            <option value="0L"> 0L</option>
            <option value="10L"> 10L</option>
            <option value="20L">20L</option>
            <option value="30L"> 30L</option>
            <option value="40L"> 40L</option>
            <option value="50L"> 50L</option>
            <option value="60L"> 60L</option>
            <option value="70L"> 70L </option>
        </select>

        <input   name="company" value={filters.company} onChange={handleChange}className="text-gray-400 w-70 py-3 px-4 bg-transparent font-semibold border border-gray-500 rounded" placeholder="Search Company"></input>
        </div>
       
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      
        

          
            </div>
      
      
     
}



export default SearchBar;