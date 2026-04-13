import React,{Component} from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function withRouter(Component) {
  return (props) => {
    return (
      <Component
        {...props}
        params={useParams()}
        location={useLocation()}
        navigate={useNavigate()}
      />
    );
  };
}

const url='http://localhost:8000/students/'

class StudentDetails extends Component{
  constructor()
  {
    super();
    this.state={
      studentFullDetail:''
    }
  }
  componentDidMount(){
    fetch(`${url}${this.props.params.id}`,{method:"GET"})
    .then((response)=> response.json())
    .then((data)=>{this.setState({studentFullDetail:data})})
  }
  render()
{
  const { id } = this.props.params;
  console.log(`Value of the ID is: ${id}`);
  return(<>
     <div className="panel panel-primary">
      <div className="panel-heading">Student details</div>
        <div class="row">
          <div class="col-sm-12" key={this.state.studentFullDetail.id}>
              <div className="card">
                <div className="card-body">
                  <h2>ID: {this.state.studentFullDetail.id}</h2>
                  <h2>First Name: {this.state.studentFullDetail.firstName}</h2>
                  <h2>Last Name: {this.state.studentFullDetail.lastName}</h2>
                </div>
              </div>
          </div>
        </div>
      </div>  
  </>)
}}

export default withRouter(StudentDetails);