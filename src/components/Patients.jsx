import { useContext } from "react";
import { AppContext } from "./AppContext";
import PatientRow from "./PatientsRow";

const Patients = () => {
  const { patients } = useContext(AppContext);
  return(
    <>
      <section className="patient-section">
        <div className="patient-row">
          <h2 className="m-0 fs-24">Patients</h2>
          <div>
            <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="search-icon" />
          </div>
        </div>
        <div className="scrollable-patients-section">
          {patients?.map((patient) => <PatientRow patient={patient} key={Math.random()} />)}
        </div>
      </section>
    </>

  );
}

export default Patients;
