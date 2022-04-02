import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="main-container">
  <div className="profileDetails">
    <img src={employee.profileImg}/>
    <p id="empName">{employee.name}</p>
    <h3>Location</h3>
    <p class="moreDetails">{employee.location}</p>
    <h3>BloodGroup</h3>
    <p class="moreDetails">{employee.bloodGroup}</p>
    <h3>Age</h3>
    <p class="moreDetails">{employee.age}</p>
    
</div>
</div>
)
}



export default App;
