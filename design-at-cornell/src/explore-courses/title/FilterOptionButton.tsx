import React from 'react';
import { FilterButton } from '../ExploreCoursesStyles';
import downArrow from '../../static/images/down-arrow.png';

type FilterOptionButtonProps = {
    readonly label: string
    readonly open: boolean,
    readonly onClick: () => void
};

const FilterOptionButton = ({ label, open, onClick }: FilterOptionButtonProps) => (
    <FilterButton onClick={onClick}>
        <p>{label}</p>
        <img
            src={downArrow}
            alt={"expand"}
            style={open ? { transform: 'rotate(180deg)' } : undefined}
        />
    </FilterButton>
);

export default FilterOptionButton;
