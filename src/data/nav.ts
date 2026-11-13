export interface NavLink {
  id: string;
  label: string;
}

/** Order here must match the section order in App.tsx. */
export const NAV_LINKS: NavLink[] = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'how-i-work', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
];
