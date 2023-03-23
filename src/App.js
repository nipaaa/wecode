import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';

import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import EmployeeLogin from './components/EmployeeLogin';

function App() {
  return (
    <div>
      <Banner/>

      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route exact path="/employeeLogin" element={<EmployeeLogin />}></Route>
      
        </Routes>
    </div>
  );
}

export default App;
