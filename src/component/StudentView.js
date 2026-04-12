import React from "react";
import { Link } from "react-router-dom";

function StudentView(props){
  const studentList = ({studentList})=>{
    if(studentList){
      const width = {width:"500px",margin:"5%"};
      const colClasses={ float: "left",
        width: "50%"}
      return studentList.map((item)=>{
        return(
          <div class="col-sm-6" key={item.id}>
           <div className="card" style={width}>
            <div className="card-body">
                <div style={colClasses}>
                  <span><b>ID Number</b></span>
                </div>
                <div style={colClasses}>
                  <span>{item.id}</span>
                </div>
                <div style={colClasses}>
                  <span><b>First Name</b></span>
                </div>
                <div style={colClasses}>
                  <span>{item.firstName}</span>
                </div>
                <div style={colClasses}>
                  <span><b>Last Name</b></span>
                </div>
                <div style={colClasses}>
                  <span>{item.lastName}</span>
                </div>
                <div style={colClasses}>
                  <span><b>Currnet Sets</b></span>
                </div>
                <div style={colClasses}>
                  <span>{item.sets}</span>
                </div>
              </div>
              <Link class="btn btn-primary" to={{pathname: `/student/${item.id}`, state: { id: `${item.id}`}}}>See Profile</Link>
            </div>
          </div>
        )
      })
    }
  };   
  return(
    <>
     {studentList(props)}
    </>
  )
}

export default StudentView;