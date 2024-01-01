import {useState,useEffect} from "react"
import axios from "axios";

import './App.css'

function App() {
  
  const [Companyname,setCompanyName]=useState("");
  const [Role,setRole]=useState([]);
  const [Experience,setExperience]=useState([]);
  const [Location,setLocation]=useState([]);
  const [ApplyLink,setApplyLink]=useState([]);
  const [Salary,setSalary]=useState([]);
  const [Skills,setSkills]=useState([]);
  const [JobDescription,setJobDescription]=useState([]);
  const [Image,setImage]=useState([]);
  const [list,setList]=useState([]);
  
const postData=async()=>{
  const result =await axios.post("http://localhost:8000/createjob",{
 Companyname:Companyname, Role:Role,
Experience:Experience,Location:Location, Image:Image,
Salary:Salary, Skills:Skills, JobDescription:JobDescription,
ApplyLink:ApplyLink});
    console.log(result.data);
    setList([...list,{_id:result.data._id,Companyname:Companyname,Role:Role,Experience:Experience,Location:Location,
      Image:Image, Salary:Salary, Skills:Skills, JobDescription:JobDescription,
      ApplyLink:ApplyLink}])
}

useEffect(()=>{
  const getData=async()=>{
    const result=await axios.get("http://localhost:8000/getjob");
    console.log(result.data);
    setList(result.data);
  }
  getData();
})
  return (
    <>
    <div>
      <div className="bg-blue-900 p-3 h-35[vh]  flex flex-col ">
        <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter CompanyName"
          onChange={(e)=>{
            setCompanyName(e.target.value);
          }}
        />
        <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter Role"  onChange={(e)=>{
            setRole(e.target.value);
          }}/>
            <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter Experience"  onChange={(e)=>{
            setExperience(e.target.value);
          }}/>
            <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter Location"  onChange={(e)=>{
            setLocation(e.target.value);
          }}/>
           <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter Image"  onChange={(e)=>{
            setImage(e.target.value);
          }}/>
          <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter Salary"  onChange={(e)=>{
            setSalary(e.target.value);
          }}/>
           <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter Skills"  onChange={(e)=>{
            setSkills(e.target.value);
          }}/>
           <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter JobDescription"  onChange={(e)=>{
            setJobDescription(e.target.value);
          }}/>
          
            <input type="text" className="m-2 w-[12rem] ml-[21rem]" placeholder="Enter Apply Link"  onChange={(e)=>{
            setApplyLink(e.target.value);
          }}/>
          
        <button type="submit" className="bg-black rounded-md font-bold w-[8rem] ml-[21rem] text-white"
        onClick={postData}>Submit</button>

</div>
  <table className="table-auto border-separate border border-slate-400">
  <thead>
    <tr>
      <th>CompanyName</th>
      <th>Role</th>
      <th>Experience</th>
      <th>Location</th>
      <th>Image</th>
      <th>Salary</th>
      <th>Skills</th>
      <th>JobDescription</th>
      <th>ApplyLink</th>

      
      
    </tr>
  </thead>
  <tbody>
  { list.map((val,id)=>(
    <tr  key={id}>
      <td>{val.Companyname}</td>
      <td>{val.CompanyRole}</td>
      <td>{val.Experience}</td>
      <td>{val.Location}</td>
      <td>{val.Salary}</td>
      <td>{val.Skills}</td>
      <td>{val.JobDescription}</td>
      <td>{val.ApplyLink}</td>

      <td><button className="bg-blue-500 ml-5 w-[8rem] text-white font-extrabold rounded-md"> <a href={val.ApplyLink}>Apply Link</a></button></td>
      <div className="flex flex-row space-x-5">
      <button className="bg-blue-500 ml-5 w-[8rem] text-white font-extrabold rounded-md">Edit</button>
      <button className="bg-green-500 ml-6 w-[8rem] text-white font-extrabold rounded-md">Update</button>
      </div>
    </tr>
  ))
  }
    </tbody>
    </table>
    </div>
  </>
  )
}

export default App
