import React from 'react';
import {
  CourseContainer,
  Subtitle,
  TagsContainer,
  Tag,
  Title,
} from '../../components/DashboardElementStyles';
import { dashboardColors } from '../../constants/colors';
import openlink_icon from '../../static/images/openlink-icon.svg';
import exit from '../../static/images/exit.svg';
import { Course } from '../../../../server/src/types';
import { Modal } from 'semantic-ui-react';
import { ModalContainer, ModalHeader, ModalContent } from '../../components/ModalStyles';
import { CourseRosterButton } from '../../components/ButtonStyles';
import { HorizontalFlex } from '../../components/ContainerStyles';
import { colors } from '../../constants/colors';
import { modHashString } from '../../constants/hasher';

const CourseBubble = (course: Course) => {
  const [open, setOpen] = React.useState(false);

  const tags = [`${course.content.credits} Credits`, ...course.content.semester];

  const courseCard = (
    <CourseContainer>
      <Subtitle>
        <p>{course.id + ' ' + course.code}</p>
      </Subtitle>
      <Title>{course.content.title}</Title>
      <TagsContainer>
        {tags.map((t, i) => {
          const idx = modHashString(t, dashboardColors.length);
          return (
            <Tag key={i} style={{ background: dashboardColors[idx] }}>
              {t}
            </Tag>
          );
        })}
      </TagsContainer>
    </CourseContainer>
  );

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={courseCard}
      style={{ width: '699px', borderRadius: '10px' }}
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
              <Tag>{course.content.semester.join(', ')}</Tag>
              {course.content.designAreas.filter((x) => x !== '').length === 0 ? null : (
                <Tag>{course.content.designAreas.join(', ')}</Tag>
              )}
              <Tag>{course.content.credits + ' Credits'}</Tag>
            </TagsContainer>
          </HorizontalFlex>
        </ModalHeader>

        <ModalContent>
          <Subtitle>{course.content.description}</Subtitle>
          <CourseRosterButton onClick={() => window.open(course.content.courseRoster)}>
            <p>
              <img
                src={openlink_icon}
                style={{ marginRight: '5px' }}
                alt={'Go to Course Roster'}
              ></img>
              Course Roster
            </p>
          </CourseRosterButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default CourseBubble;
