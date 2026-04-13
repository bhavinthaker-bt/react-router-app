import React,{Component} from "react";
import { v4 as uuidv4 } from 'uuid';

const url = 'http://localhost:8000/students';

class AddStudent extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor()
  {
    super();
    this.state={
      id: uuidv4(),
      firstName:'',
      lastName:'',
      addressline1:'',
      addressline2:'',
      postcode:'',
      city:'',
      contactNumber:''
    }
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setAddressLineOne = this.setAddressLineOne.bind(this);
    this.setAddressLineTwo = this.setAddressLineTwo.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setPostcode = this.setPostcode.bind(this);
    this.setContactNumber = this.setContactNumber.bind(this);
    this.createNew = this.createNew.bind(this);
  }
  setFirstName(event){
    this.setState({firstName:event.target.value});
  }
  setLastName(event){
    this.setState({lastName:event.target.value});
  }
  setAddressLineOne(event){
    this.setState({addressline1: event.target.value});
  }
  setAddressLineTwo(event){
    this.setState({addressline2: event.target.value});
  }
  setCity(event){
    this.setState({city: event.target.value});
  }
  setPostcode(event){
    this.setState({postcode: event.target.value});
  }
  setContactNumber(event){
    this.setState({contactNumber: event.target.value});
  }
  createNew(){
    const data={
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addressline1: this.state.addressline1,
      addressline2: this.state.addressline2,
      city: this.state.city,
      postcode: this.state.postcode,
      contactNumber: this.state.contactNumber
    }
    fetch(url,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(data)
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })
  }
  render(){
    return(
      <>
      <div class="container col-sm-8">
        <h2>Enter Student details</h2>
        <div class="mb-3 mt-3">
          <label for="id">Id:</label>
          <input type="text" class="form-control" id="id" name="id" value={this.state.id} disabled/>
        </div>
        <div class="mb-3">
          <label for="firstName">First Name:</label>
          <input type="text" class="form-control" id="firstName" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.setFirstName}/>
        </div>
        <div class="mb-3">
          <label for="lastName">Last Name:</label>
          <input type="text" class="form-control" id="lastName" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.setLastName}/>
        </div>
        <div class="mb-3">
          <label for="addressline1">Address:</label>
          <input type="text" class="form-control" id="addressline1" placeholder="Address Line 1" name="addressline1" value={this.state.addressline1} onChange={this.setAddressLineOne}/>
          <input type="text" class="form-control" id="addressline2" placeholder="Address Line 2" name="addressline2" value={this.state.addressline2} onChange={this.setAddressLineTwo}/>
          <input type="text" class="form-control" id="city" placeholder="City" name="city" value={this.state.city} onChange={this.setCity}/>
          <input type="text" class="form-control" id="postcode" placeholder="Postcode" name="postcode" value={this.state.postcode} onChange={this.setPostcode}/>
        </div>
        <div class="mb-3">
          <label for="contactNumber">Contact Number:</label>
          <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" name="contactNumber" value={this.state.contactNumber} onChange={this.setContactNumber}/>
        </div>
        <button type="button" class="btn btn-primary" onClick={this.createNew}>Submit</button>
        <button type="button" class="btn btn-light">Cancel</button>
    </div>
      </>
    )
  }
}

export default AddStudent;