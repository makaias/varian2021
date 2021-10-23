import {Box, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement, useMemo} from 'react';
import {Line} from 'react-chartjs-2';

interface Props {
  title: string;
  data: number[];
  labels: string[];
}

export default function LineDiagram({labels, title, data}: Props): ReactElement {
  console.log(title, labels, data);
  const config = useMemo(
    () => ({
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            fill: false,
            lineTension: 0.25,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: data,
          },
        ],
      },
      options: {
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
      },
    }),
    [title, data, labels]
  );

  return (
    <VStack>
      <Text fontSize="2xl">{title}</Text>
      <Box width="100%">
        <Line {...config} />
      </Box>
    </VStack>
  );
}
