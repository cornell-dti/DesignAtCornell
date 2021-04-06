import Dictionary from "../data-structures/Dictionary";
import { FilterDropdownInfo } from "../data-structures/PropertyTypes";

const FilterDropdowns: Dictionary<FilterDropdownInfo> = {
    'Design Areas': {
        checkboxLabels: [
            'Art + Design',
            'Digital Design',
            'Industrial Design',
            'Policy Design',
            'Spatial Design'
        ],
        expand: true,
        scroll: false
    },
    'Majors/Minors': {
        checkboxLabels: [
            'AEM',
            'Architecture',
            'Design and Environmental Analysis',
            'Fiber Science and Apparel Design',
            'Fine Arts',
            'History of Architecture'
        ],
        expand: true,
        scroll: true
    },
    'Semester': {
        checkboxLabels: [
            'Fall',
            'Spring',
            'Winter',
            'Summer'
        ],
        expand: false,
        scroll: false
    },
    'Level': {
        checkboxLabels: [
            '1000',
            '2000',
            '3000',
            '4000',
            '5000'
        ],
        expand: false,
        scroll: false
    },
    'Credits': {
        checkboxLabels: [
            '1',
            '2',
            '3',
            '4',
            '5+'
        ],
        expand: false,
        scroll: false
    }
} as const;

export default FilterDropdowns;
