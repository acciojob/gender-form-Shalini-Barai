
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  
  const [selectedGender, setSelectedGender] = useState('');
  const [what,setWhat]=useState('');
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleGenderChange(event) {
    setSelectedGender(event.target.value);
    setWhat(event.target.value);
  }

  return (
    <div>
      <h1>Select your gender</h1>
      <input type="radio" id="male" name="gender" value="male" checked={selectedGender === 'male'} onChange={handleGenderChange} />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" checked={selectedGender === 'female'} onChange={handleGenderChange} />
      <label htmlFor="female">Female</label><br/><br/>
      {what==="male"?(<div><h1>Select your shirt size</h1><br/><br/>
         <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Size</option>
        <option value="2">Small</option>
        <option value="3">Medium</option>
        <option value="4">Large</option>
      </select>
      </div>):(<div><h1>Select your dress size</h1><br/><br/>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Size</option>
        <option value="2">2</option>
        <option value="3">4</option>
        <option value="4">6</option>
      </select>

      </div>)}
    </div>
    
  )
}


export default App
