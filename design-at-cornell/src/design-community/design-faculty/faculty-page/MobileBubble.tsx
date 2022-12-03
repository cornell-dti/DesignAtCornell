import React, { useState } from 'react';
import { Faculty } from '../../../../../server/src/types';
import { dashboardColors } from '../../../constants/colors';
import { BubbleContainer, ColContainer, RowContainer, Tag, Split } from './MobileBubbleStyles';
import downArrow from '../../../static/images/down-arrow.svg';
import upArrow from '../../../static/images/up-arrow.svg';
import Expanding from '../../../animated/Expanding';
import { modHashString } from '../../../constants/hasher';

const linkArrow = '↗';

const FacultyBubble = (faculty: Faculty) => {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const Courses = () => (
    <p>
      {faculty.courses.map((course, i) => (
        <span key={i}>
          {course}
          {i !== faculty.courses.length - 1 && ', '}
        </span>
      ))}
    </p>
  );

  const NoCourses = () => <p>N/A</p>;

  const Tags = () => {
    return (
      <RowContainer className="tags">
        {faculty.tags.map((t, i) => {
          const idx = modHashString(t, dashboardColors.length);
          return (
            <Tag key={i} style={{ background: dashboardColors[idx] }}>
              {t}
            </Tag>
          );
        })}
      </RowContainer>
    );
  };

  return (
    <BubbleContainer>
      <ColContainer>
        <RowContainer>
          <img className={'profile-image'} src={faculty.image} alt={faculty.name}></img>
          <ColContainer>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={faculty.website}
              className="right-item faculty-name"
            >
              {faculty.name} {linkArrow}
            </a>
            <p className="right-item">{faculty.title}</p>
            <p className="right-item">{faculty.department}</p>
          </ColContainer>
        </RowContainer>
        {/* faculty.email */}
        {/* faculty.college */}

        <Expanding show={show}>
          <ColContainer>
            <p className="faculty-description">{faculty.description}</p>
            <h6 className="course-title">Courses</h6>
            {faculty.courses.length !== 0 ? <Courses /> : <NoCourses />}
          </ColContainer>
        </Expanding>
        <Split>
          <Tags />
          <button className={'show'} onClick={toggleShow}>
            <img src={show ? upArrow : downArrow} alt={'show'} />
          </button>
        </Split>
      </ColContainer>
    </BubbleContainer>
  );
};

export default FacultyBubble;
