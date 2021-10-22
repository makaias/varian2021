import React, { ReactElement } from "react";
import useEndpoint from "../hooks/useEndpoint";
import {Line} from 'react-chartjs-2';



export default function AtiGrafikontTesztel({}) {
  const doctorId = 0;
  const patientId = 0;
  const usedEndpoint = useEndpoint({
    conf: {
        url: `/statistics/${doctorId}/${patientId}`
    },
    deps: [patientId, doctorId],
    })
    return (
      <>
        <div>
            <button onClick={() => usedEndpoint.reloadEndpoint()}>
                Refresh
            </button>

            {usedEndpoint.pending && (
                <p>Pending...</p>
            )}
            {usedEndpoint.failed && (
                <p>Failed</p>
            )}
            <div>
              <h2>Life statisfaction</h2>
              {usedEndpoint.succeeded && (
              <Line
              data={
                {
                  labels: [...Array(usedEndpoint.data.lifeStatisfaction).keys()],
                  dataset: [{
                    label: "Life statisfaction",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(75, 192, 192, 1)",
                    borderColor: "rgba(0, 0, 0, 1)",
                  borderWidth: 2,
                  data: usedEndpoint.data.lifeStatisfaction
                  }]
                }
              }
              options={{
                title:{
                  display:true,
                  text:"Life statisfaction",
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:"right"
                }
              }}
              />
              )}
            </div>
            <div>
              <h2>Eating behavior</h2>
              {usedEndpoint.succeeded && (
              <Line
              data={
                {
                  labels: [...Array(usedEndpoint.data.eatingBehavior).keys()],
                  dataset: [{
                    label: "Eating behavior",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(75, 192, 192, 1)",
                    borderColor: "rgba(0, 0, 0, 1)",
                  borderWidth: 2,
                  data: usedEndpoint.data.eatingBehavior
                  }]
                }
              }
              options={{
                title:{
                  display:true,
                  text:"Eating behavior",
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:"right"
                }
              }}
              />
              )}
            </div>
            <div>
              <h2>Sleeping</h2>
              {usedEndpoint.succeeded && (
              <Line
              data={
                {
                  labels: [...Array(usedEndpoint.data.sleeping).keys()],
                  dataset: [{
                    label: "Sleeping",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(75, 192, 192, 1)",
                    borderColor: "rgba(0, 0, 0, 1)",
                  borderWidth: 2,
                  data: usedEndpoint.data.sleeping
                  }]
                }
              }
              options={{
                title:{
                  display:true,
                  text:"Sleeping",
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:"right"
                }
              }}
              />
              )}
            </div>
            <div>
              <h2>Social interaction</h2>
              {usedEndpoint.succeeded && (
              <Line
              data={
                {
                  labels: [...Array(usedEndpoint.data.socialInteraction).keys()],
                  dataset: [{
                    label: "Social interaction",
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: "rgba(75, 192, 192, 1)",
                    borderColor: "rgba(0, 0, 0, 1)",
                  borderWidth: 2,
                  data: usedEndpoint.data.socialInteraction
                  }]
                }
              }
              options={{
                title:{
                  display:true,
                  text:"Social interaction",
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:"right"
                }
              }}
              />
              )}
            </div>
        </div>
      </>
    )

   
  
}
