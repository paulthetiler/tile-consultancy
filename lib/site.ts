/**
 * Site-wide configuration.
 *
 * NOTE ON THE NAME: `brand.name` is a PLACEHOLDER working wordmark. The final
 * name should be a coined, trademark-cleared mark (see docs/DISCOVERY-02 §1.3).
 * Everything reads from here, so the real name drops in with a one-line change.
 */
export const brand = {
  name: 'Meridian', // PLACEHOLDER — pending naming + trademark clearance
  isWorkingName: true,
  descriptor: 'Commercial tiling consultants',
  proposition: 'We investigate, inspect and report on commercial tiling.',
} as const;

export const contact = {
  email: 'enquiries@example.com', // placeholder
  phone: '+44 (0)20 0000 0000', // placeholder
  location: 'London',
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
  { label: 'Reports', href: '/reports' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Library', href: '/library' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Services',
    items: [
      { label: 'Defect investigations', href: '/services/defect-investigations' },
      { label: 'Commercial inspections', href: '/services/inspections' },
      { label: 'Condition surveys', href: '/services/condition-surveys' },
      { label: 'Expert witness', href: '/services/expert-witness' },
      { label: 'Technical reporting', href: '/services/technical-reporting' },
      { label: 'Remedial specifications', href: '/services/remedial-specifications' },
    ],
  },
  {
    heading: 'Practice',
    items: [
      { label: 'Approach', href: '/approach' },
      { label: 'Expertise', href: '/expertise' },
      { label: 'Reports', href: '/reports' },
      { label: 'Technical library', href: '/library' },
      { label: 'Sectors', href: '/sectors' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Expert witness terms', href: '/expert-witness-terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];
