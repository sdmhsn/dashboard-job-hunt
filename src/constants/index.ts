import { EnumValues } from 'zod';

export const JOBTYPES: EnumValues = [
  'Full-Time',
  'Part-Time',
  'Remote',
  'Internship',
];

export const JOB_LISTINGS_COLUMN: string[] = [
  'Roles',
  'Status',
  'Date Posted',
  'Due Date',
  'Job Type',
  'Applicants',
  'Needs',
];

export const JOB_LISTINGS_DATA = [
  {
    roles: 'Software Engineer',
    status: 'Live',
    datePosted: '12 Aug 2023',
    dueDate: '12 Sep 2023',
    jobType: 'Full-Time',
    applicants: 1,
    needs: 10,
  },
];

export const JOB_APPLICANTS_COLUMN: string[] = ['Roles', 'Applied Date'];

export const JOB_APPLICANTS_DATA = [
  { name: 'Saddam', appliedDate: '15 Aug 2023' },
];
