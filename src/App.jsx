import React, { useState } from 'react';
import './BaseUI.css';
import './App.css';
function App() {
  var initial = { name: "", email: "", password: "", address: "", mobile: "", gender: "", hobbies: [], pic: [], dob: "" }
  const [fdata, setdata] = useState(initial)
let arr = [],flag=false,flag2=false;
const handleChange = (event) => {
 let t=0;
    var passw= /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
    let mob=/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    if(event.target.name === "password"){
      if(!event.target.value.match(passw))
      {
        event.target.style.color="red"
        flag=false
      }
      else    
      { event.target.style.color="black"
       flag=true
      }
    }
    if(event.target.name === "mobile"){
      if(!event.target.value.match(mob))
      {
        event.target.style.color="red";flag2=false
      }
      else
      {
        event.target.style.color="black"
        flag2=true
      }
    }
  if (event.target.name === "hobbies") {
            if (arr.indexOf(String(event.target.value)) === -1) {
              arr.push(String(event.target.value))
            }
            else {
              arr.splice(arr.indexOf(event.target.value), 1)
            }
    }
    else {
            initial = { ...initial, [event.target.name]: event.target.value };
            initial.hobbies = arr
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     (flag&&flag2) ? alert("Wrong submission found"): alert("Correct Submission")
     setdata(initial)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
        <header className="App-header">
          <table style={{ border: "2px solid black", width: "500px", height: "550px", backgroundColor: "white", color: 'black' }}>
            <tbody>
              <tr><td colSpan="2"><p style={{ fontSize: "16px", color: "blue", margin: "5px" }}>Your data saved</p></td></tr>
              <tr>
                <td>Enter Your Name</td>
                <td><input name="name" minLength="3" maxLength="20" onChange={handleChange} type="text" required/></td>
              </tr>
              <tr>
                <td>Enter Your Email</td>
                <td><input name="email" minLength="3" maxLength="20" onChange={handleChange} type="email" required/></td>
              </tr>
              <tr>
                <td>Enter Your Password <p style={{fontSize:"10px",color:"red"}}>must contain one digit,lowercase,uppercase, one special character, no space, & must be 8-16 characters long.</p></td>
                <td><input type="password" minLength="7" maxLength="15" onChange={handleChange} name="password" required/></td>
              </tr>
              <tr>
                <td>Enter Your Address</td>
                <td><textarea cols="30" rows="3" minLength="5" maxLength="50" onChange={handleChange} name="address" required></textarea></td>
              </tr>
              <tr>
                <td>Enter Your Mobile No.</td>
                <td><input type="text" name="mobile" minLength="10" maxLength="10" onChange={handleChange} required/></td>
              </tr>
              <tr>
                <td>Select Your Gender</td>
                <td>
                  <div className="row flexAIC">
                    <label>Male</label>
                    <input type="radio" onChange={handleChange} name="gender" value="male" required/>
                    <label>Female</label>
                    <input type="radio" onChange={handleChange} name="gender" value="female" required/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Choose Your Hobbies</td>
                <td>
                  <div className="row flexAIC">
                    <label htmlFor="">Cricket</label>
                    <input onChange={handleChange} value="cricket" name="hobbies" type="checkbox" />
                    <label htmlFor="">Singing</label>
                    <input onChange={handleChange} value="singing" name="hobbies" type="checkbox" />
                    <label htmlFor="">Dancing</label>
                    <input onChange={handleChange} value="dancing" name="hobbies" type="checkbox" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Choose Your Profile Pic</td>
                <td><input type="file" name="pic" onChange={handleChange} required/></td>
              </tr>

              <tr>
                <td>Select Your DOB</td>
                <td><input type="date" onChange={handleChange} name="dob" required/></td>
              </tr>

              <tr>
                <td colSpan="2"><button className='btn-warning ' type="submit">Register me</button>
                  <button className="btn-warning" type="reset">Reset</button></td>
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    </form>
  );
}
export default App;
