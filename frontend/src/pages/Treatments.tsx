import {Button} from '@chakra-ui/button';
import {Box, Flex, Grid, HStack, Text, VStack} from '@chakra-ui/layout';
import React, {ReactElement, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useLayoutConfig} from '../app/layout';
import FailureParagraph from '../components/FailureParagraph';
import Spinner from '../components/Spinner';
import UniformGrid from '../components/UniformGrid';
import {useAuthBackend} from '../context/AuthBackend';
import useEndpoint from '../hooks/useEndpoint';
import {TreatmentPlan} from '../model/TreatmentPlan';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import {isValidTzFormattedDateTime} from '../util/CommonValidators';
import CalendarPopup from '../components/CalendarPopup';

interface Props {}

interface CalendarEvent {
  treatmentId;
  patientName;
  datetime;
}

export default function Treatments({}: Props): ReactElement {
  useLayoutConfig({
    bg: 'plain',
    title: 'Treatments',
  });
  const authBackend = useAuthBackend();

  const [meetingDatetimes, setMeetingDatetimes] = useState<CalendarEvent[]>([]);
  const [calendarEventToShowInPopup, setCalendarEventToShowInPopup] = useState<CalendarEvent>(null);

  const usedEndpoint = useEndpoint<TreatmentPlan[]>({
    conf: {
      url: `/treatment-plans?doctor=${authBackend.user?.id}`,
    },
    deps: [authBackend.user?.id],
    onSuccess: (resp) => {
      const plans = resp.data;
      const datetimes = plans
        .map((plan) => {
          return {
            visits: plan.clinicVisits,
            patientName: plan.patientName,
            treatmentId: plan.id,
          };
        })
        .filter((item) => item.visits !== null)
        .map((item) => {
          item.visits = item.visits.map((visit) => {
            return {
              ...visit,
              patientName: item.patientName,
              treatmentId: item.treatmentId,
            };
          });
          return item;
        })
        .map((item) => item.visits)
        .flatMap((visit) => visit)
        .map((visit) => {
          return {
            treatmentId: visit['treatmentId'],
            patientName: visit['patientName'],
            datetime: visit['howOften'],
          };
        })
        .filter((event) => {
          return !isNaN(new Date(event.datetime) as any);
        });
      console.log(datetimes);
      setMeetingDatetimes(datetimes as unknown as CalendarEvent[]);
    },
  });

  if (!authBackend.isDoctor) {
    return null;
  }

  return (
    <>
      <VStack paddingTop="1rem" align="stretch">
        <NavLink to="/create-treatment-plan">
          <Button colorScheme="primary">Create new Treatment</Button>
        </NavLink>
        <Grid templateColumns="1fr 3fr" columnGap={6}>
          <>
            {usedEndpoint.pending && <Spinner />}
            {usedEndpoint.failed && <FailureParagraph onRetry={usedEndpoint.reloadEndpoint} />}

            {usedEndpoint.succeeded && (
              <VStack align="stretch" pt={16}>
                {usedEndpoint.data.map((treatmentPlant) => (
                  <TreatmentItem key={treatmentPlant.id} treatmentPlan={treatmentPlant} />
                ))}
              </VStack>
            )}
          </>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridWeek"
            eventClick={(arg) => {
              const calendarEvent = arg.event._def?.extendedProps?.calendarEvent;
              if (calendarEvent) {
                setCalendarEventToShowInPopup(calendarEvent);
              }
            }}
            events={meetingDatetimes.map((event, i) => {
              return {
                title: event.patientName,
                interactive: true,
                allDay: false,
                start: event.datetime,
                display: 'block',
                calendarEvent: event,
              };
            })}
          />
        </Grid>
      </VStack>
      <CalendarPopup
        isOpen={!!calendarEventToShowInPopup}
        onClose={() => setCalendarEventToShowInPopup(null)}
        treatmentId={calendarEventToShowInPopup?.treatmentId}
        patientName={calendarEventToShowInPopup?.patientName}
      />
    </>
  );
}

function TreatmentItem({treatmentPlan}: {treatmentPlan: TreatmentPlan}) {
  return (
    <NavLink to={`/treatment-plan/${treatmentPlan.id}`}>
      <Box p={3} bg="white" borderTop="1px" borderColor="primary.500" cursor="pointer">
        <VStack justify="space-between" align="center" height="fit-content" w="100%">
          <Text color="primary.500" fontWeight="bold" fontSize="lg">
            {treatmentPlan.patientName}
          </Text>
          <Text fontSize="sm">{treatmentPlan.created_at}</Text>
        </VStack>
      </Box>
    </NavLink>
  );
}
