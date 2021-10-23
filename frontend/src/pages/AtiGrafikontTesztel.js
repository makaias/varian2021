import React from 'react';
import LineDiagram from '../components/diagrams/LineDiagram';
import UniformGrid from '../components/UniformGrid';
import useEndpoint from '../hooks/useEndpoint';

export default function AtiGrafikontTesztel({}) {
  const patientId = 2;
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
          <LineDiagram
            data={usedEndpoint.data.lifeStatisfaction.map((i) => i.value)}
            labels={[...usedEndpoint.data.lifeStatisfaction.keys()]}
            title="Life statisfaction"
          />
          {/*<DiagramCreator data={usedEndpoint.data.eatingBehavior} title="Eating behavior" />
          <DiagramCreator data={usedEndpoint.data.sleeping} title="Sleeping" />
      <DiagramCreator data={usedEndpoint.data.socialInteraction} title="Social interaction" />*/}
        </UniformGrid>
      )}
    </>
  );
}
