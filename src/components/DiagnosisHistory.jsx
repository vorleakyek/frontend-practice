// REFERENCE NOTE for the graph section: https://github.com/CodeCompleteYT/react-chartjs/blob/main/src/App.jsx


import { useContext } from "react";
import { AppContext } from "./AppContext";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import {Line} from "react-chartjs-2";
import Card from "./Card";


const DiagnosisHistory = () => {
  const { viewPatient } = useContext(AppContext);

  const currentPatient = viewPatient;
  const currentPatientDiagnosisHistory = currentPatient.diagnosis_history[0];
  const lastResRate = currentPatientDiagnosisHistory.respiratory_rate;
  const lastTemp = currentPatientDiagnosisHistory.temperature;
  const lastHeartRate = currentPatientDiagnosisHistory.heart_rate;
  const lastSystolic = currentPatientDiagnosisHistory.blood_pressure.systolic;
  const lastDiastolic = currentPatientDiagnosisHistory.blood_pressure.diastolic;

  const pastSixMonths = currentPatient.diagnosis_history.slice(0,6).reverse();
  const diastolic = pastSixMonths.map((data) => data.blood_pressure.diastolic.value);
  const systolic = pastSixMonths.map((data) => data.blood_pressure.systolic.value);

  return(
    <div className="diagnosis-history-container">
      <h2 className="section-title">Diagnosis History </h2>

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

            <p className="size-22 bold m-0">{lastSystolic.value}</p>
            <div className="flex-start">
              {lastSystolic.levels.toLowerCase() === "Lower than Average".toLowerCase() && <img className="mr-1" src="/assets/ArrowDown.svg" alt="down arrow icon" />}
              {lastSystolic.levels.toLowerCase() === "Higher than Average".toLowerCase() && <img className="mr-1" src="/assets/ArrowUp.svg" alt="uparrow icon" />}
              <p>{lastSystolic.levels}</p>
            </div>
          </div>

          <hr></hr>

          <div className="flex-start">
            <div className="dot violet"></div>
            <p className="bold">Diastolic</p>
          </div>

          <p className="size-22 bold m-0">{lastDiastolic.value}</p>
          <div className="flex-start">
            {lastDiastolic.levels.toLowerCase() === "Lower than Average".toLowerCase() && <img className="mr-1" src="/assets/ArrowDown.svg" alt="down arrow icon" />}
            {lastDiastolic.levels.toLowerCase() === "Higher than Average".toLowerCase() && <img className="mr-1" src="/assets/ArrowUp.svg" alt="uparrow icon" />}
            <p>{lastDiastolic.levels}</p>
          </div>
        </div>
      </div>

      <div className="info-cards-container">
        <Card className="resp-rate-card" src="/assets/respiratory_rate.svg" tileName="Respiratory Rate" value={lastResRate.value} unit="bpm" levels={lastResRate.levels} />
        <Card className="tempurature-card" src="/assets/temperature.svg" tileName="Temperature" value={lastTemp.value} unit="°F" levels={lastTemp.levels}/>
        <Card className="heart-rate-card" src="/assets/HeartBPM.svg" tileName="Heart Rate" value={lastHeartRate.value} unit="bpm" levels={lastHeartRate.levels}/>
      </div>
    </div>
  )
}

export default DiagnosisHistory;
