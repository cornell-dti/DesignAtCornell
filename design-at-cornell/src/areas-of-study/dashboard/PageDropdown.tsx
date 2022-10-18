import React, { useState } from 'react';
import {
  MobileFilterButton,
  MobileFilterDropdownContainer,
  MobileSelectFormContainer,
} from '../../components/FilterBarStyles';
import downArrow from '../../static/images/down-arrow.png';
import exit from '../../static/images/exit.svg';

const PageDropdown = (props: Props) => {
  const pageNames = [
    { value: 'Majors', label: 'Undergraduate Majors' },
    { value: 'Minors', label: 'Undergraduate Minors' },
    { value: 'Graduate', label: 'Graduate Studies' },
  ];

  const [expand, setExpand] = useState<boolean>(false);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let currIndex = props.pages.findIndex((page) => page === event.currentTarget.value);
    props.setPages([
      props.pages[currIndex],
      props.pages[(currIndex + 1) % 3],
      props.pages[(currIndex + 2) % 3],
    ]);
    setExpand(false);
  };

  const filterForm = (
    pages: String[],
    setPages: React.Dispatch<React.SetStateAction<String[]>>
  ) => (
    <div>
      <button value={pageNames[0].value} onClick={buttonHandler}>
        {pageNames[0].label}
      </button>
      <button value={pageNames[1].value} onClick={buttonHandler}>
        {pageNames[1].label}
      </button>
      <button value={pageNames[2].value} onClick={buttonHandler}>
        {pageNames[2].label}
      </button>
    </div>
  );

  return (
    <MobileFilterDropdownContainer>
      <MobileFilterButton onClick={() => setExpand(!expand)} expand={expand}>
        <p>{pageNames.find((page) => page.value === props.pages[0])?.label}</p>
        <img src={downArrow} alt={'expand'} />
      </MobileFilterButton>
      <MobileSelectFormContainer expand={expand}>
        <img onClick={() => setExpand(false)} src={exit} alt="close" />
        <h4>Academic Level</h4>
        {filterForm(props.pages, props.setPages)}
      </MobileSelectFormContainer>
    </MobileFilterDropdownContainer>
  );
};

type Props = {
  pages: String[];
  setPages: React.Dispatch<React.SetStateAction<String[]>>;
};

export default PageDropdown;
