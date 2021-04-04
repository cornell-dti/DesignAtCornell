import React from "react";
import { FilterDropdownProps } from "../data-structures/PropertyTypes";
import { FilterDropdownContainer } from "../ExploreCoursesStyles";
import FilterCheckbox from "./FilterCheckbox";

const FilterDropDown = ({ checkboxLabels, checkboxData, expand, onChange }: FilterDropdownProps) => (
    <FilterDropdownContainer expand={expand}>
        {checkboxLabels.map(label =>
            <FilterCheckbox
                key={label}
                label={label}
                checked={checkboxData.has(label)}
                onClick={() => onChange(label)}
            />
        )}
    </FilterDropdownContainer>
);

export default FilterDropDown;
