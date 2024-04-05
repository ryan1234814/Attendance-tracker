import React, { useState } from 'react';
import './App.css';
function App(){
  const[students,setStudent]=useState([
    {id:1,name:'Ryan',attendance:true,points:10},
    {id:2,name:'George',attendance:false,points:10},
    {id:3,name:'James',attendance:true,points:10},
  ]);
  const Attendance = (id) =>{
    setStudent(
      students.map((student)=>
        student.id === id
        ?{...student,attendance: !student.attendance,points:calculatePoints(!student.attendance,student.points)}
        : student

      )
    );
  };
  const calculatePoints = (attendance,currentPoints)=>{
    return attendance ? currentPoints-5: currentPoints+10;
  };

  return(
    <div className='App'>
      <h1>Attendance Register Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Attendance</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student)=>(
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <button onClick={() =>Attendance(student.id) }>
                  {student.attendance ? 'Present': 'Absent'}
                </button>
              </td>
              <td>{student.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
}
export default App;
