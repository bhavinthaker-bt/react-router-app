import React,{Component} from "react";
import StudentView from "./StudentView";
import { Link } from "react-router-dom";

const url = 'http://localhost:8000/students';

class Home extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    this.state={
      studentList:null
    }
    this.width = {width:"400px",margin:"5%"};
  }
  componentDidMount(){
    fetch(url, {method:"GET"})
    .then((response)=> response.json())
    .then((data)=> {console.log(JSON.stringify(data, null, 2));
      this.setState({studentList:data});
    })
  }
  
  render(){
    return(<>
       <div className="row container">
        <div className="col-sm-6">
         <Link className="btn btn-primary" to="/student/add">New</Link>
         </div>
       </div>
      <div className="panel panel-primary">
        <div className="panel-heading">Student details</div>
        <div class="row">
          <StudentView studentList={this.state.studentList}/>
        </div>
      </div>
    </>)
  }
}

export default Home;