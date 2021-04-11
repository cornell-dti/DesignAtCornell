import React from 'react';
import FilterCategoryButton from './FilterCategoryButton';
import { FilterCategoryProps } from '../types/PropertyTypes';
import { FilterCategoryContainer } from '../ExploreCoursesStyles';
import FilterDropdown from './FilterDropdown';

const FilterCategory = (props: FilterCategoryProps) => {
    const open = props.open;
    const category = props.category;
    return (
        <FilterCategoryContainer>
            <FilterCategoryButton
                label={category}
                open={open}
                applied={props.checkboxData.size}
                onClick={props.onToggle}
            />
            {open && <FilterDropdown {...props} />}
        </FilterCategoryContainer>
    );
};

export default FilterCategory;
