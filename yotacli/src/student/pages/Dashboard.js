import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchstudent } from '../../redux/studentDashboard/listStudentSlice';
// import { fetchstudent, studenttestlink } from "";
export const Dashboard = () => {
 const dispatch = useDispatch();
 const studenttest= useSelector((state)=>state.studenttestlink.students);//store +slice.js>createSlice>initialState>students
  useEffect(()=>{
    console.log(studenttest)
    dispatch(fetchstudent());//action 
  },[]);
    return (
    
      <div className="dashboard">   
      <h1>DASHBOARD</h1>
      <div className="card">
       <div className="container">
        {
         studenttest.map((studenttestlink,key) =>(
          <>
          
          <tr key={key}>Test Links :-<a href="#">{studenttestlink.testLink}</a></tr>
         <td> Number of Test Assigned to You:- {studenttestlink.testId}</td>

          </>

         )
        )}
        
         <button className="btn btn-success">View All</button>
       </div>
     </div>
 </div>
    )
};

export default Dashboard;
