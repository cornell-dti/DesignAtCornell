import ClubsCategory from '../types/ClubsCategory';
import { FilterDropdownInfo } from '../types/PropertyTypes';

const FilterDropdowns: ReadonlyMap<ClubsCategory, FilterDropdownInfo> = new Map([
  [
    ClubsCategory['Design Areas'],
    {
      checkboxLabels: [
        'Architecture',
        'Interior Design',
        'Fashion',
        'Industrial Design',
        'UI/UX',
        'Fine Arts',
      ],
      expand: true,
      scroll: true,
    },
  ],
  [
    ClubsCategory['Organization Type'],
    {
      checkboxLabels: [
        'Club',
        'Project Team',
        'Community Service',
        'Student-led',
        'Mentorship',
        'Career Prep',
      ],
      expand: true,
      scroll: true,
    },
  ],
  [
    ClubsCategory['Size'],
    {
      checkboxLabels: ['Small', 'Medium', 'Large'],
      expand: true,
      scroll: false,
    },
  ],
  [
    ClubsCategory['Credit'],
    {
      checkboxLabels: ['For Credit', 'Not for Creditå'],
      expand: true,
      scroll: false,
    },
  ],
]);

export default FilterDropdowns;
