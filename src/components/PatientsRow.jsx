const PatientRow = ({ patient }) => {
  const { name, gender, age, profile_picture } = patient;
  return (
    <div className="patient-row">
      <div className="flex">
        <div className="mr-1">
          <img className="size-1" src={profile_picture} alt="profile-image" />
        </div>
        <div>
          <p className="m-0 bold">{name}</p>
          <p className="m-0 gray">{gender}, {age}</p>
        </div>
      </div>
      <div>
        <img src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="search-icon" />
      </div>
    </div>
  )
}


export default PatientRow;
