import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Patients from './components/Patients';
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import Profile from "./components/Profile";
import LabResults from "./components/LabResults";

import { AppContext } from "./components/AppContext";
import { getAllPatients } from '../../api';
import './App.css';

const App = () => {

  const [isLoading, setIsLoading] = useState(null);
  const [patients, setPatients] = useState([]);
  const contextValue = { patients }

  useEffect((()=>{
    async function load() {
      setIsLoading(true);
      try{
        const allPatients = await getAllPatients();
        setPatients(allPatients);
        console.log(allPatients)
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if(isLoading === null) load();
  }),[isLoading])

  if (isLoading || patients.length <= 3) {
    return <div>Loading ... </div>
  }

  return (
    <AppContext.Provider value={contextValue}>
      <main className="main-container">
        <Navbar />
        <div className="content-container">
          <div className="flex-1">
            <Patients />
          </div>
          <div className="col-flex-1">
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
          <div className="flex-1">
            <Profile />
            <LabResults />
          </div>
        </div>
      </main>
    </AppContext.Provider>

  )
};

export default App;
