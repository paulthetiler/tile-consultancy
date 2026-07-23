/**
 * The four things we do, in the client's own plain words (NARRATIVE.md),
 * each mapping to the underlying capabilities. This is the customer-facing
 * summary; individual service pages come in Milestone 2.
 */
export type Service = {
  no: string;
  verb: string;
  summary: string;
  covers: string[];
  href: string;
};

export const services: Service[] = [
  {
    no: '01',
    verb: 'Investigate',
    summary: 'Find out why a tiling installation failed.',
    covers: ['Defect investigations', 'Expert witness'],
    href: '/services/defect-investigations',
  },
  {
    no: '02',
    verb: 'Inspect',
    summary: 'Check whether an installation is right.',
    covers: ['Inspections', 'Condition surveys', 'Progress & QA'],
    href: '/services/inspections',
  },
  {
    no: '03',
    verb: 'Report',
    summary: 'Produce authoritative technical reports, backed by evidence.',
    covers: ['Technical reporting'],
    href: '/services/technical-reporting',
  },
  {
    no: '04',
    verb: 'Recommend',
    summary: 'Set out exactly what to put right, and how.',
    covers: ['Remedial specifications'],
    href: '/services/remedial-specifications',
  },
];

/** The report family — shown on the homepage and the Reports destination. */
export const reportTypes: string[] = [
  'Inspection note',
  'Condition survey',
  'Progress / QA',
  'Defect investigation',
  'Expert report · CPR 35',
  'Second opinion',
  'Remedial specification',
];
