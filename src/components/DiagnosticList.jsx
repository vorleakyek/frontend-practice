import { useContext } from "react";
import { AppContext } from "./AppContext";

const DiagnosticList = () => {

  const { patients } = useContext(AppContext);
  const currentPatientDiagnosticList = patients[3].diagnostic_list;
  console.log(currentPatientDiagnosticList)


  return(
    <section className="Diagnostic-list-container">
      <h2>Diagnostic List</h2>
      <div>
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
