import { useContext } from "react";
import { AppContext } from "./AppContext";

const Profile = () => {
  const { viewPatient } = useContext(AppContext);
  const currentPatient = viewPatient;
  const birthday = new Date(currentPatient.date_of_birth);
  const format = {year: 'numeric', month: 'long', day: 'numeric'};
  const formatedBirthday = birthday.toLocaleDateString('en-US', format);

  return (
    <div className="profile-container">
      <div className="center">
        <img className="profile-img" src={currentPatient.profile_picture} alt="profile image" />
        <h2 className="fs-24">{currentPatient.name}</h2>
      </div>

      <div className="profile-row-info">
        <div className="icon-wrapper flex">
          <img src="/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" alt="calender-icon" />
        </div>
        <div >
          <p className="m-0">Date of Birth</p>
          <p className="m-0 bold">{formatedBirthday}</p>
        </div>
      </div>

      <div className="profile-row-info">
        <div className="icon-wrapper flex">
          <img src="/assets/FemaleIcon.svg" alt="female-icon" />
        </div>
        <div >
          <p className="m-0">Gender</p>
          <p className="m-0 bold">{currentPatient.gender}</p>
        </div>
      </div>

      <div className="profile-row-info">
        <div className="icon-wrapper flex">
          <img src="/assets/PhoneIcon.svg" alt="phone-icon" />
        </div>
        <div >
          <p className="m-0">Contact Info.</p>
          <p className="m-0 bold">{currentPatient.phone_number}</p>
        </div>
      </div>

      <div className="profile-row-info">
        <div className="icon-wrapper flex">
          <img src="/assets/PhoneIcon.svg" alt="phone-icon" />
        </div>
        <div >
          <p className="m-0">Emergency Contacts</p>
          <p className="m-0 bold">{currentPatient.emergency_contact}</p>
        </div>
      </div>

      <div className="profile-row-info">
        <div className="icon-wrapper flex">
          <img src="/assets/InsuranceIcon.svg" alt="phone-icon" />
        </div>
        <div >
          <p className="m-0">Insurance Provider</p>
          <p className="m-0 bold">{currentPatient.insurance_type}</p>
        </div>
      </div>

      <div className="center mt-2">
        <button className="btn-1"><p className="bold">Show All Information</p></button>
      </div>

    </div>
  )
}

export default Profile;
