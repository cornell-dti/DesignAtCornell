import React from "react";
import { FilterDropdownProps } from "../data-structures/PropertyTypes";
import { FilterDropdownContainer } from "../ExploreCoursesStyles";
import FilterLabeledCheckbox from "./FilterLabeledCheckbox";

const FilterDropDown = ({ checkboxLabels, checkboxData, onChange }: FilterDropdownProps) => (
    <FilterDropdownContainer>
        {checkboxLabels.map(label =>
            <FilterLabeledCheckbox
                key={label}
                label={label}
                checked={checkboxData.has(label)}
                onChange={() => onChange(label)}
            />
        )}
    </FilterDropdownContainer>
);

export default FilterDropDown;
