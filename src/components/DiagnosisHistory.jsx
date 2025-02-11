// REFERENCE NOTE for the graph section: https://github.com/CodeCompleteYT/react-chartjs/blob/main/src/App.jsx


import { useContext } from "react";
import { AppContext } from "./AppContext";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import {Line} from "react-chartjs-2";

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
// defaults.plugins.title.color = "black";

const DiagnosisHistory = () => {
  const { patients } = useContext(AppContext);

  if (!patients || patients.length <=3) {
    return <div>Loading ... </div>
  }

  const currentPatient = patients[3];
  const pastSixMonths = currentPatient.diagnosis_history.slice(0,6).reverse();
  console.log(pastSixMonths)

  return(
    <div className="diagnosis-history-container">
      <h2>Diagnosis History </h2>

      <div>
        <Line
          data={{
            labels: pastSixMonths.map((date) => `${date.month.substring(0,3)}, ${date.year}`),
            datasets: [
              {
                label: "Diastolic",
                data: pastSixMonths.map((data) => data.blood_pressure.diastolic.value),
                backgroundColor: "#8C6FE6",
                borderColor: "#8C6FE6",
              },
              {
                label: "Systolic",
                data: pastSixMonths.map((data) => data.blood_pressure.systolic.value),
                backgroundColor: "#E66FD2",
                borderColor: "#E66FD2",
              }

            ]
          }}

          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Blood Pressure",
                align: "start",
              },
              legend: {
                position: 'right',
              },
            },

          }}
        />


      </div>

    </div>
  )
}

export default DiagnosisHistory;
