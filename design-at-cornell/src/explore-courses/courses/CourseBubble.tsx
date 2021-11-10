import React from 'react';
import {
  ElementContainer,
  Subtitle,
  TagsContainer,
  Tag,
} from '../../components/DashboardElementStyles';
import { courseColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg';
import { Course } from '../../../../server/types';
import { Modal } from 'semantic-ui-react';
import { ModalContainer } from '../../components/ModalStyles';

const CourseBubble = (course: Course) => {
  const [open, setOpen] = React.useState(false);

  const courseCard = (
    <ElementContainer
      style={{ borderColor: courseColors[Math.floor(Math.random() * courseColors.length)] }}
    >
      <Subtitle>
        <p>{course.id + ' ' + course.code}</p>
        <img src={bookmark} alt="save course" />
      </Subtitle>
      <p>{course.content.title}</p>
      <TagsContainer>
        <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
          <p>{course.content.credits + ' Credits'}</p>
        </Tag>
        <Tag style={{ background: courseColors[Math.floor(Math.random() * courseColors.length)] }}>
          <p>{course.content.semester.join(', ')}</p>
        </Tag>
      </TagsContainer>
    </ElementContainer>
  );

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={courseCard}
    >
      <ModalContainer></ModalContainer>
    </Modal>
  );
};

export default CourseBubble;
