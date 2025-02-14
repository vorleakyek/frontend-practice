// REFERENCE NOTE for the graph section: https://github.com/CodeCompleteYT/react-chartjs/blob/main/src/App.jsx


import { useContext } from "react";
import { AppContext } from "./AppContext";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import {Line} from "react-chartjs-2";

const DiagnosisHistory = () => {
  const { patients } = useContext(AppContext);

  const currentPatient = patients[3];
  const pastSixMonths = currentPatient.diagnosis_history.slice(0,6).reverse();
  const diastolic = pastSixMonths.map((data) => data.blood_pressure.diastolic.value);
  const systolic = pastSixMonths.map((data) => data.blood_pressure.systolic.value);
  console.log(pastSixMonths)

  return(
    <div className="diagnosis-history-container">
      <h2 className="m-0 fs-24">Diagnosis History </h2>

      <div className="blood-pressure-container">
        <div className="graph-container">
          <div className="graph-header">
            <h3 className="m-0">Blood Pressure</h3>
            <div className="flex gap-16">
              <p>Last 6 months</p>
              <div>
                <img src="/assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg" alt="expand-icon" />
              </div>
            </div>
          </div>

          <Line
            data={{
              labels: pastSixMonths.map((date) => `${date.month.substring(0, 3)}, ${date.year}`),
              datasets: [
                {
                  label: "Diastolic",
                  data: diastolic,
                  backgroundColor: "#8C6FE6",
                  borderColor: "#8C6FE6",
                  pointRadius: 4,
                },
                {
                  label: "Systolic",
                  data: systolic,
                  backgroundColor: "#E66FD2",
                  borderColor: "#E66FD2",
                  pointRadius: 4,
                }

              ]
            }}

            options={{
              responsive: true,
              maintainAspectRatio: true,
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              scales: {
                x:{
                  grid: {
                    display: false,
                  }
                },
                y: {
                  ticks: {
                    stepSize: 20,
                  }
                }
              },
              plugins: {
                title: {
                  text: "Blood Pressure",
                  align: "start",
                },
                legend: {
                  display: false
                },
              },
            }}
          />
        </div>

        <div className="graph-legend">
          <div>
            <div className="flex-start">
              <div className="dot pink"></div>
              <p className="bold">Systolic</p>
            </div>

            <p className="size-22 bold m-0">{Math.max(...systolic)}</p>
            <div className="flex-start">
              <img className="mr-1" src="/assets/ArrowUp.svg" alt="uparrow-icon" />
              <p>Higher than Average</p>
            </div>
          </div>

          <hr></hr>

          <div className="flex-start">
            <div className="dot violet"></div>
            <p className="bold">Diastolic</p>
          </div>

          <p className="size-22 bold m-0">{Math.min(...diastolic)}</p>
          <div className="flex-start">
            <img className="mr-1" src="/assets/ArrowDown.svg" alt="uparrow-icon" />
            <p>Lower than Average</p>
          </div>
        </div>

      </div>

      <div className="info-cards-container">
        <div className="resp-rate-card">
          <div>
            <img src="/assets/respiratory_rate.svg"/>
          </div>
          <p className="fw-md fs-16">Respiratory Rate</p>
          <p className="bold fs-30">20 bpm</p>
          <p>Nomal</p>
        </div>

        <div className="tempurature-card">
          <div>
            <img src="/assets/temperature.svg" />
          </div>
          <p className="fw-md fs-16">Temperature</p>
          <p className="bold fs-30">98.6°F</p>
          <p>Nomal</p>
        </div>

        <div className="heart-rate-card">
          <div>
            <img src="/assets/HeartBPM.svg" />
          </div>
          <p className="fw-md fs-16">Heart Rate</p>
          <p className="bold fs-30"> 78 bpm</p>
          <p>Lower than Average</p>
        </div>

      </div>

    </div>
  )
}

export default DiagnosisHistory;
