import { useContext } from "react";
import { AppContext } from "./AppContext";

const PatientRow = ({ patient}) =>{
  const { name, gender, age, profile_picture } = patient;
  return(
    <div className="patient-row">
      <div className="flex">
        <div className="mr-1">
          <img className="size-1" src={profile_picture} alt="profile-image" />
        </div>
        <div>
          <p className="m-0">{name}</p>
          <p className="m-0">{gender}, {age}</p>
        </div>
      </div>
      <div>
        <img src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="search-icon" />
      </div>
    </div>
  )
}


const Patients = () => {
  const { patients } = useContext(AppContext);
  return(
    <>
      <section className="patient-section">
        <div className="patient-row ">
          <h2>Patients</h2>
          <div>
            <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="search-icon" />
          </div>
        </div>
        <div className="scrollable-section">
          {patients?.map((patient) => <PatientRow patient={patient} key={Math.random()} />)}
        </div>
      </section>
    </>

  );
}

export default Patients;
