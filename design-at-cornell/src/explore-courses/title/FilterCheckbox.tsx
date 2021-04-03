import React from "react";
import { FilterCheckboxProps } from "../data-structures/PropertyTypes";
import { Checkbox, FilterCheckboxContainer } from "../ExploreCoursesStyles";

const FilterCheckbox = ({ label, checked, onClick }: FilterCheckboxProps) => (
    <FilterCheckboxContainer>
        <Checkbox onClick={onClick} checked={checked} />
        <p>{label}</p>
    </FilterCheckboxContainer>
);

export default FilterCheckbox;