import React from "react";
import { FilterDropdownProps } from "../types/PropertyTypes";
import {
    FilterDropdownContainer,
    FilterDropdownScrollContainer,
    SearchBar
} from "../ExploreCoursesStyles";
import FilterCheckbox from "./FilterCheckbox";

const FilterDropdown = ({ checkboxLabels, checkboxData, expand, scroll, onChange }: FilterDropdownProps) => {
    const checkboxes = checkboxLabels.map(label =>
        <FilterCheckbox
            key={label}
            label={label}
            checked={checkboxData.has(label)}
            onClick={() => onChange(label)}
        />
    );
    if (scroll) return (
        <FilterDropdownContainer expand={expand}>
            <SearchBar
                width='292px'
                background='#EAEAEA'
            />
            <FilterDropdownScrollContainer>
                {checkboxes}
            </FilterDropdownScrollContainer>
        </FilterDropdownContainer>
    );
    return (
        <FilterDropdownContainer expand={expand}>
            {checkboxes}
        </FilterDropdownContainer>
    );
};

export default FilterDropdown;
