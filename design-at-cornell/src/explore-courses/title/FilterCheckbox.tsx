import React from "react";
import { FilterCheckboxProps } from "../data-structures/PropertyTypes";
import { Checkbox, FilterCheckboxContainer } from "../ExploreCoursesStyles";
import check from '../../static/images/check.svg'

const FilterCheckbox = ({ label, checked, onClick }: FilterCheckboxProps) => (
    <FilterCheckboxContainer>
        <Checkbox onClick={onClick} checked={checked}>
            {checked && <img src={check} alt='check' />}
        </Checkbox>
        <p>{label}</p>
    </FilterCheckboxContainer>
);

export default FilterCheckbox;
