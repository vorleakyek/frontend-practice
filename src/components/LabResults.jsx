import { useContext } from "react";
import { AppContext } from "./AppContext";

const LabResults = () => {
  const {patients} = useContext(AppContext);
  const currentPatient = patients[3];
  const labResults = currentPatient["lab_results"];

  return (
    <div className="lab-results-container">
      <h2 className="fs-24 pl-2 m-0">Lab Results</h2>
      <div className="scrollable-lab-resuls">
        <ul className="p-0">
          {labResults.map(item => <li className="flex-between py-1 lab-item-row" key={item}>
            <p className="m-0">{item}</p>
            <img src="/assets/download_FILL0_wght300_GRAD0_opsz24.svg" alt="download-icon" />
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default LabResults;
