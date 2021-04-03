import React from "react";
import { FilterCheckboxProps } from "../data-structures/PropertyTypes";
import { CheckedBox, FilterCheckboxContainer, UncheckedBox } from "../ExploreCoursesStyles";

const FilterCheckbox = ({ label, checked, onClick }: FilterCheckboxProps) => (
    <FilterCheckboxContainer>
        <UncheckedBox onClick={onClick}>
            {checked && <CheckedBox />}
        </UncheckedBox>
        <p>{label}</p>
    </FilterCheckboxContainer>
);

export default FilterCheckbox;