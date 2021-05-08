import React, { useState } from 'react';
import {
  Divider,
  FilterButton,
  MonthSelected,
  Arrow, 
  FilterWindow,
  MonthButton
} from '../EventsStyles';
import arrowImg from '../../static/images/down-arrow.png';

type Props = {
  month: string;
  year: number;
  leftClickHandler: () => void;
  rightClickHandler: () => void;
  monthClickHandler: (m: string) => void;
}

const Filter = ({month, year, leftClickHandler, rightClickHandler, monthClickHandler} : Props) => {
  const [open, setOpen] = useState(false);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const window = (
    <FilterWindow open={open}>
      {months.map(m => 
        <MonthButton key={m} selected={month === m} onClick={() => {monthClickHandler(m); setOpen(false)}}>
          {m.slice(0, 3)}
        </MonthButton>
      )}
    </FilterWindow>
  )

  return (
    <Divider>
      <FilterButton open={open}>
        <Arrow src={arrowImg} alt='previous year' direction='left' show={open} onClick={() => leftClickHandler()} />
        <MonthSelected onClick={() => setOpen(!open)}>{month + ' ' + year}</MonthSelected>
        <Arrow src={arrowImg} alt='next year' direction='right' show={open} onClick={() => rightClickHandler()} />
        <Arrow src={arrowImg} alt='expand filter' direction='down' show={!open} onClick={() => setOpen(!open)} />
      </FilterButton>
      {window}
    </Divider>
  )
  
}

export default Filter;
