import React from "react";
import { FilterLabeledCheckboxProps } from "../data-structures/PropertyTypes";

const FilterLabeledCheckbox = ({ label, checked, onChange }: FilterLabeledCheckboxProps) => (
    <div>
        {label}
    </div>
);

export default FilterLabeledCheckbox;
