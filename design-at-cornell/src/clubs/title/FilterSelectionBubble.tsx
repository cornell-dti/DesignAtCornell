import React from 'react';
import { FilterSelectionBubbleContainer } from '../ClubsStyles';
import { FilterSelectionBubbleProps } from '../types/PropertyTypes';
import removeSelection from '../../static/images/remove-selection.svg';

const FilterSelectionBubble = ({ label, color, onClick }: FilterSelectionBubbleProps) => (
  <FilterSelectionBubbleContainer color={color}>
    <p>{label}</p>
    <img src={removeSelection} alt="Remove Selection" onClick={onClick} />
  </FilterSelectionBubbleContainer>
);

export default FilterSelectionBubble;
