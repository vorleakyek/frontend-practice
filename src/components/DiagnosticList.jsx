import { useContext } from "react";
import { AppContext } from "./AppContext";

const DiagnosticList = () => {

  const { viewPatient } = useContext(AppContext);
  const currentPatientDiagnosticList = viewPatient.diagnostic_list;

  return(
    <section className="Diagnostic-list-container">
      <h2 className="section-title">Diagnostic List</h2>
      <div className="table-container">
        <table>
          <thead className="table-header">
            <tr className="border-bottom">
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPatientDiagnosticList.map(item => <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>)}
          </tbody>
        </table>

      </div>

    </section>
  )
}

export default DiagnosticList;
