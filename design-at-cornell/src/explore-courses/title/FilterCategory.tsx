import { useState } from 'react';
import React from 'react';
import FilterCategoryButton from './FilterCategoryButton';
import { FilterCategoryProps } from '../data-structures/PropertyTypes';
import { FilterCategoryContainer } from '../ExploreCoursesStyles';
import FilterDropDown from './FilterDropdown';

const FilterCategory = ({ category, checkboxLabels, checkboxData, width, onChange }: FilterCategoryProps) => {
    const [open, setOpen] = useState(false);
    return (
        <FilterCategoryContainer style={{width: width}}>
            <FilterCategoryButton
                label={category}
                open={open}
                onClick={() => setOpen(!open)}
            />
            {open &&
                <FilterDropDown
                    checkboxLabels={checkboxLabels}
                    checkboxData={checkboxData}
                    onChange={onChange}
                />
            }
        </FilterCategoryContainer>
    );
};

export default FilterCategory;
