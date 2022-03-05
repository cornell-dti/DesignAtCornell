import React from 'react';
import {
  ElementContainer,
  Subtitle,
  TagsContainer,
  Tag,
  Title,
} from '../../components/DashboardElementStyles';
import { dashboardColors } from '../../constants/colors';
import bookmark from '../../static/images/bookmark.svg';
import reviews_icon from '../../static/images/reviews_icon.svg';
import courseroster_icon from '../../static/images/courseroster_icon.svg';
import syllabus_icon from '../../static/images/syllabus_icon.svg';
import coursesite_icon from '../../static/images/coursesite_icon.svg';
import exit from '../../static/images/exit.svg';
import { Course } from '../../../../server/types';
import { Modal } from 'semantic-ui-react';
import { ModalContainer, ModalHeader, ModalContent } from '../../components/ModalStyles';
import {
  RectangularButton,
  CUReviewsButton,
  CourseRosterButton,
  SyllabusButton,
  CourseSiteButton,
} from '../../components/ButtonStyles';
import { HorizontalFlex, ButtonHorizontalFlex } from '../../components/ContainerStyles';
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
              <Tag>{course.content.major}</Tag>
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
          <ButtonHorizontalFlex>
            <SyllabusButton>
              <img src={syllabus_icon} alt={'Syllabus'} />
              <p>Syllabus</p>
            </SyllabusButton>
            <CourseRosterButton onClick={() => window.open(course.content.courseRoster)}>
              <img src={courseroster_icon} alt={'Course Roster'} />
              <p>Course Roster</p>
            </CourseRosterButton>
            <CourseSiteButton>
              <img src={coursesite_icon} alt={'Course Site'} />
              <p> Course Site </p>
            </CourseSiteButton>
            <CUReviewsButton>
              <img src={reviews_icon} alt={'CU Reviews'} />
              <p>CU Reviews</p>
            </CUReviewsButton>
          </ButtonHorizontalFlex>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default CourseBubble;
