import { FilterDataMap } from './PropertyTypes';

enum Category {
    'Design Areas' = 'Design Areas',
    'Majors/Minors' = 'Majors/Minors',
    'Semester' = 'Semester',
    'Level' = 'Level',
    'Credits' = 'Credits'
}

export const getSelections = (data: FilterDataMap, category: Category) => (
    data.get(category) || new Set()
);

export default Category;
