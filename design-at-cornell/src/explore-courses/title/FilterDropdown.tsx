import React, { useState } from "react";
import { FilterDropdownProps } from "../types/PropertyTypes";
import {
    ClearCategoryFilters,
    FilterDropdownContainer,
    FilterDropdownScrollContainer,
    SearchBar
} from "../ExploreCoursesStyles";
import FilterCheckbox from "./FilterCheckbox";
import FilterSelectionBubble from "./FilterSelectionBubble";

const FilterDropdown = ({ checkboxLabels, checkboxData, expand, scroll, onCheck, onClear }: FilterDropdownProps) => {
    const [query, setQuery] = useState('');
    const checkboxes = checkboxLabels
        .filter(label => label.toLowerCase().includes(query))
        .map(label =>
            <FilterCheckbox
                key={label}
                label={label}
                checked={checkboxData.has(label)}
                onClick={() => onCheck(label)}
            />
        );
    console.log(Array.from(checkboxData));
    const clearFilters = (
        <ClearCategoryFilters onClick={onClear}>
            Clear All Filters
        </ClearCategoryFilters>
    );
    const selectionBubbles = checkboxLabels
        .filter(label => checkboxData.has(label))
        .map(label =>
            <FilterSelectionBubble
                key={label}
                label={label}
                color='rgba(175, 174, 230, 0.53)'
                onClick={() => onCheck(label)}
            />
        );
    if (scroll) return (
        <FilterDropdownContainer expand={expand}>
            <SearchBar
                width='292px'
                background='#EAEAEA'
                onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
            />
            <FilterDropdownScrollContainer>
                {checkboxes}
            </FilterDropdownScrollContainer>
            {selectionBubbles}
            {checkboxData.size > 0 && clearFilters}
        </FilterDropdownContainer>
    );
    return (
        <FilterDropdownContainer expand={expand}>
            {checkboxes}
            {selectionBubbles}
            {checkboxData.size > 0 && clearFilters}
        </FilterDropdownContainer>
    );
};

export default FilterDropdown;
