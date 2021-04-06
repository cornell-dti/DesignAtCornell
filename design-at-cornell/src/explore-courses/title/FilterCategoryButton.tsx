import React from 'react';
import { FilterButton } from '../ExploreCoursesStyles';
import downArrow from '../../static/images/down-arrow.png';
import { FilterCategoryButtonProps } from '../types/PropertyTypes';

const FilterCategoryButton = ({ label, open, onClick }: FilterCategoryButtonProps) => (
    <FilterButton onClick={onClick} open={open}>
        <p>{label}</p>
        <img
            src={downArrow}
            alt={"expand"}
        />
    </FilterButton>
);

export default FilterCategoryButton;
