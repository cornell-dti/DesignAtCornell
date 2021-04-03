import React from 'react';
import { FilterButton, FilterButtonOpen } from '../ExploreCoursesStyles';
import downArrow from '../../static/images/down-arrow.png';
import { FilterCategoryButtonProps } from '../data-structures/PropertyTypes';

const FilterCategoryButton = ({ label, open, onClick }: FilterCategoryButtonProps) => {
    const ButtonDiv = open ? FilterButtonOpen : FilterButton;
    return (
        <ButtonDiv onClick={onClick}>
            <p>{label}</p>
            <img
                src={downArrow}
                alt={"expand"}
                style={open ? { transform: 'rotate(180deg)' } : undefined}
            />
        </ButtonDiv>
    );
};

export default FilterCategoryButton;
