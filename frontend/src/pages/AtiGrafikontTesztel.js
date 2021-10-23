import React, {ReactElement} from 'react';
import useEndpoint from '../hooks/useEndpoint';
import {Line} from 'react-chartjs-2';
import UniformGrid from '../components/UniformGrid';

function DiagramCreator({data, title}) {
  const state = {
    labels: [...data.keys()],
    datasets: [
      {
        label: title,
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: data.map((item) => item.value),
      },
    ],
  };
  return (
    <Line
      data={state}
      options={{
        responsive: true,
        title: {
          display: true,
          text: title,
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'right',
        },
      }}
    />
  );
}

export default function AtiGrafikontTesztel({}) {
  const patientId = 7;
  const usedEndpoint = useEndpoint({
    conf: {
      url: `/statistics/${patientId}`,
    },
    deps: [patientId],
  });

  return (
    <>
      {usedEndpoint.pending && <p>Pending...</p>}
      {usedEndpoint.failed && <p>Failed</p>}
      {usedEndpoint.succeeded && (
        <UniformGrid columns={[1, 1, 2]} gap={4}>
          <DiagramCreator data={usedEndpoint.data.lifeStatisfaction} title="Life statisfaction" />
          <DiagramCreator data={usedEndpoint.data.eatingBehavior} title="Eating behavior" />
          <DiagramCreator data={usedEndpoint.data.sleeping} title="Sleeping" />
          <DiagramCreator data={usedEndpoint.data.socialInteraction} title="Social interaction" />
        </UniformGrid>
      )}
    </>
  );
}
