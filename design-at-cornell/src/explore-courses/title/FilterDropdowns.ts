import Category from "../types/Category";
import { FilterDropdownInfo } from "../types/PropertyTypes";

const FilterDropdowns: ReadonlyMap<Category, FilterDropdownInfo> = new Map([
    [Category['Design Areas'],
        {
            checkboxLabels: [
                'Art + Design',
                'Digital Design',
                'Industrial Design',
                'Policy Design',
                'Spatial Design'
            ],
            expand: true,
            scroll: false
        }
    ],
    [Category['Majors/Minors'],
        {
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
        }
    ],
    [Category['Semester'],
        {
            checkboxLabels: [
                'Fall',
                'Spring',
                'Winter',
                'Summer'
            ],
            expand: false,
            scroll: false
        }
    ],
    [Category['Level'],
        {
            checkboxLabels: [
                '1000',
                '2000',
                '3000',
                '4000',
                '5000'
            ],
            expand: false,
            scroll: false
        }
    ],
    [Category['Credits'],
        {
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
    ]
]);

export default FilterDropdowns;
