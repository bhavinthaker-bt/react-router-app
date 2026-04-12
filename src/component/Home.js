import React,{Component} from "react";
import StudentView from "./StudentView";

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
    // const data=[this.state.studentList];
    
    return(<>
      <div className="panel panel-primary">
        <div className="panel-heading">Student details</div>
        <div class="row">
          {/* <h2>{this.state.studentList}</h2> */}
          <StudentView studentList={this.state.studentList}/>
        </div>
      </div>
    </>)
  }
}

export default Home;