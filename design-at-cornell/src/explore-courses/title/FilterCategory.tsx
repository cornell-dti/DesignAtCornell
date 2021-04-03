import { useState } from 'react';
import React from 'react';
import FilterCategoryButton from './FilterCategoryButton';
import { FilterCategoryProps } from '../data-structures/PropertyTypes';
import { FilterCategoryContainer } from '../ExploreCoursesStyles';
import FilterDropDown from './FilterDropdown';

const FilterCategory = ({ category, checkboxLabels, checkboxData, onChange }: FilterCategoryProps) => {
    const [open, setOpen] = useState(false);
    return (
        <FilterCategoryContainer>
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
