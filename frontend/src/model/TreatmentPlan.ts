export interface SurgicalProcedure {}

export interface ClinicVisit {
  provider: string;
  when: Date;
}

export interface SurvillenceTest {
  provider: string;
  howOften: string;
  test: string;
}

export interface TreatmentPlan {
  patientName: string;
  phone: string;
  patientDOB: string;
  email: string;
  primaryCareProvider: string;
  surgeon: string;
  radiantOncologist: string;
  medicalOncologist: string;
  otherProviders: string[];
  cancerType: string;
  diagnosysDate: string;
  stage: string;
  surgery: boolean;
  surgeryDate: Date;
  surgicalProcedure: SurgicalProcedure;
  radiation: boolean;
  bodyAreaTreated: string;
  endYear: number;
  systemicTherapy: boolean;
  agentsUsed: string[];
  sympthomsSideEffects: boolean;
  symptomsSideEffectsDescription: string;
  needOngoingTreatment: boolean;
  additionalTreatment: string[];
  clinicVisits: ClinicVisit[];
  survillenceTests: SurvillenceTest[];
  otherComments: string;
  preparedBy: string;
  deliveredOn: Date;
}
