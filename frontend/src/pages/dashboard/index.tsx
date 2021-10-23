import {Text, VStack} from '@chakra-ui/layout';
import {HStack, Image} from '@chakra-ui/react';
import React from 'react';
import LineDiagram from '../../components/diagrams/LineDiagram';
import UniformGrid from '../../components/UniformGrid';
import useEndpoint from '../../hooks/useEndpoint';

import startLogo from './started.svg';
import endLogo from './finished.svg';
import firstMonthLogo from './firstmonth.svg';
import secondMonthLogo from './secondmonth.svg';
import thirdMonthLogo from './thirdmonth.svg';
import {Interface} from 'readline';
import {Statistic} from '../../model/Statistic';
import {useLayoutConfig} from '../../app/layout';

interface Props {}

export default function Dashboard({}: Props) {
  useLayoutConfig({
    bg: 'plain',
    title: 'Dashboard',
  });
  const patientId = 8;
  const usedEndpoint = useEndpoint<Statistic>({
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
        <VStack align="stretch">
          <>
            <VStack spacing="1" margin="5">
              <Text textAlign="center" fontSize="2xl" color="primary.500" fontWeight="bold">
                Your achievements
              </Text>
              <Text textAlign="center">Congratulations, keep it up!</Text>
            </VStack>
            <HStack align="flex-start" justify="center">
              {usedEndpoint.data.badges.map((badge) => {
                switch (badge.type) {
                  case 'STARTED':
                    return <Image w="5rem" key={badge.id} src={startLogo} />;
                  case 'FINISHED':
                    return <Image w="5rem" key={badge.id} src={endLogo} />;
                  case 'ONE_MONTH':
                    return <Image w="5rem" key={badge.id} src={firstMonthLogo} />;
                  case 'TWO_MONTH':
                    return <Image w="5rem" key={badge.id} src={secondMonthLogo} />;
                  case 'THREE_MONTH':
                    return <Image w="5rem" key={badge.id} src={thirdMonthLogo} />;
                  default:
                }
              })}
            </HStack>
            <Text textAlign="center" fontSize="2xl" color="primary.500" fontWeight="bold" borderTop="1px" borderTopColor="primary.500" paddingTop="1rem">
              Your progression
            </Text>
          </>
          <UniformGrid columns={[1, 1, 2]} gap={4}>
            <LineDiagram
              data={usedEndpoint.data.lifeStatisfaction.map((i) => i.value)}
              labels={Array(usedEndpoint.data.lifeStatisfaction.length)
                .fill(0)
                .map((_, i) => i.toString())}
              title="Life-satisfaction"
            />
            <LineDiagram
              data={usedEndpoint.data.eatingBehavior.map((i) => i.value)}
              labels={Array(usedEndpoint.data.eatingBehavior.length)
                .fill(0)
                .map((_, i) => i.toString())}
              title="Eating behavior"
            />
            <LineDiagram
              data={usedEndpoint.data.sleeping.map((i) => i.value)}
              labels={Array(usedEndpoint.data.sleeping.length)
                .fill(0)
                .map((_, i) => i.toString())}
              title="Sleeping"
            />
            <LineDiagram
              data={usedEndpoint.data.socialInteraction.map((i) => i.value)}
              labels={Array(usedEndpoint.data.socialInteraction.length)
                .fill(0)
                .map((_, i) => i.toString())}
              title="Social interaction"
            />
            <LineDiagram
              data={usedEndpoint.data.physicalActivity.map((i) => i.value)}
              labels={Array(usedEndpoint.data.physicalActivity.length)
                .fill(0)
                .map((_, i) => i.toString())}
              title="Physical activity"
            />
          </UniformGrid>
        </VStack>
      )}
    </>
  );
}
