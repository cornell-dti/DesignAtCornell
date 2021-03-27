import { useState } from 'react';
import React from 'react';
import FilterOptionButton from './FilterOptionButton';

type FilterOptionProps = {
    readonly label: string
};

const FilterOption = ({ label }: FilterOptionProps) => {
    const [open, setOpen] = useState(false);
    return (
        <FilterOptionButton
            label={label}
            open={open}
            onClick={() => setOpen(!open)}
        />
    );
};

export default FilterOption;
