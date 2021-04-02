import React from 'react';
import { FilterButton } from '../ExploreCoursesStyles';
import downArrow from '../../static/images/down-arrow.png';
import { FilterCategoryButtonProps } from '../data-structures/PropertyTypes';

const FilterCategoryButton = ({ label, open, onClick }: FilterCategoryButtonProps) => (
    <FilterButton onClick={onClick}>
        <p>{label}</p>
        <img
            src={downArrow}
            alt={"expand"}
            style={open ? { transform: 'rotate(180deg)' } : undefined}
        />
    </FilterButton>
);

export default FilterCategoryButton;
