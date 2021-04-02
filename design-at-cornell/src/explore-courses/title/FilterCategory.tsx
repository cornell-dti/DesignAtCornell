import { useState } from 'react';
import React from 'react';
import FilterCategoryButton from './FilterCategoryButton';
import { FilterCategoryProps } from '../data-structures/PropertyTypes';

const FilterCategory = ({ category, checkboxData, onChange }: FilterCategoryProps) => {
    const [open, setOpen] = useState(false);
    return (
        <FilterCategoryButton
            label={category}
            open={open}
            onClick={() => setOpen(!open)}
        />
    );
};

export default FilterCategory;
