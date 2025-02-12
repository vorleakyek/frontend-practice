import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Patients from './components/Patients';
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";

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

  if (isLoading || patients.length === 0) {
    return <div>Loading ... </div>
  }

  return (
    <AppContext.Provider value={contextValue}>
      <main>
        <Navbar />
        <div className="flex">
          <Patients />
          <div>
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
        </div>
      </main>
    </AppContext.Provider>

  )
};

export default App;
