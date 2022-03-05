import React from 'react';
import {
  ElementContainer,
  Subtitle,
  TagsContainer,
  Tag,
  Title,
} from '../../components/DashboardElementStyles';
import { dashboardColors } from '../../constants/colors';
import exit from '../../static/images/exit.svg';
import { Course } from '../../../../server/types';
import { Modal } from 'semantic-ui-react';
import { ModalContainer, ModalHeader } from '../../components/ModalStyles';
import { HorizontalFlex } from '../../components/ContainerStyles';
import { colors } from '../../constants/colors';

const CourseBubble = (course: Course) => {
  const [open, setOpen] = React.useState(false);

  const courseCard = (
    <ElementContainer
      style={{ borderColor: dashboardColors[Math.floor(Math.random() * dashboardColors.length)] }}
    >
      <Subtitle>
        <p>{course.id + ' ' + course.code}</p>
      </Subtitle>
      <Title>{course.content.title}</Title>
      <TagsContainer>
        <Tag
          style={{
            background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
          }}
        >
          {course.content.credits + ' Credits'}
        </Tag>
        <Tag
          style={{
            background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
          }}
        >
          {course.content.semester.join(', ')}
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
      style={{ width: '699px', height: '523px', borderRadius: '10px' }}
    >
      <ModalContainer>
        <ModalHeader color={colors.lightBlue}>
          <Subtitle>
            <p style={{ color: 'white' }}>{course.id + ' ' + course.code}</p>
            <img onClick={() => setOpen(false)} src={exit} alt="close modal" />
          </Subtitle>
          <Title>{course.content.title}</Title>
          <HorizontalFlex>
            <TagsContainer>
              <Tag>{course.content.major}</Tag>
              <Tag>{course.content.semester.join(', ')}</Tag>
              {course.content.designAreas.filter((x) => x !== '').length === 0 ? null : (
                <Tag>{course.content.designAreas.join(', ')}</Tag>
              )}
              <Tag>{course.content.credits + ' Credits'}</Tag>
            </TagsContainer>
          </HorizontalFlex>
        </ModalHeader>
      </ModalContainer>
    </Modal>
  );
};

export default CourseBubble;
