import React from 'react';
import {
  ElementContainer,
  Subtitle,
  TagsContainer,
  Tag,
  Title,
  LargeTitle,
} from '../../components/DashboardElementStyles';
import { dashboardColors } from '../../constants/colors';
import openlink from '../../static/images/openlink-icon.svg';
import exit from '../../static/images/exit.svg';
import { Club } from '../../../../server/src/types';
import { Modal } from 'semantic-ui-react';
import { HorizontalFlex } from '../../components/ContainerStyles';
import {
  ModalContainer,
  VerticalModalHeader,
  VerticalModalBody,
} from '../../components/ModalStyles';
import { ButtonContainer, LargeRectangularButton } from '../../components/ButtonStyles';

const ClubBubble = (club: Club) => {
  const [open, setOpen] = React.useState(false);

  const clubCard = (
    <ElementContainer
      style={{ borderColor: dashboardColors[Math.floor(Math.random() * dashboardColors.length)] }}
    >
      <Subtitle>
        <p>{club.content.orgType}</p>
      </Subtitle>
      <Title>{club.title}</Title>
      <TagsContainer>
        {club.content.size === '' ? null : (
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            {club.content.size}
          </Tag>
        )}
        {club.content.designAreas.filter((area) => area !== '').length === 0 ? null : (
          <Tag
            style={{
              background: dashboardColors[Math.floor(Math.random() * dashboardColors.length)],
            }}
          >
            {club.content.designAreas.join(', ')}
          </Tag>
        )}
      </TagsContainer>
    </ElementContainer>
  );

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={clubCard}
      style={{ width: '790px', height: '527px', borderRadius: '10px' }}
    >
      <ModalContainer>
        <HorizontalFlex>
          <VerticalModalHeader>
            <LargeTitle>{club.title}</LargeTitle>
            <Subtitle>
              <p style={{ color: 'white' }}>{'Apply by '}</p>
            </Subtitle>
            <TagsContainer>
              {club.content.orgType === '' ? null : <Tag>{club.content.orgType}</Tag>}
              {club.content.size === '' ? null : <Tag>{club.content.size}</Tag>}
              {club.content.designAreas.filter((x) => x !== '').length === 0 ? null : (
                <Tag>{club.content.designAreas.join(', ')}</Tag>
              )}
              {club.content.credits === null ? null : (
                <Tag>{club.content.credits + ' Credits'}</Tag>
              )}
            </TagsContainer>
            <ButtonContainer>
              <LargeRectangularButton onClick={() => window.open(club.content.website)}>
                <img src={openlink} alt={'website'} />
                <p>Website</p>
              </LargeRectangularButton>
              <LargeRectangularButton onClick={() => window.open(club.content.website)}>
                <img src={openlink} alt={'application'} />
                <p>Application</p>
              </LargeRectangularButton>
            </ButtonContainer>
          </VerticalModalHeader>
          <VerticalModalBody>
            <Subtitle>
              <p>{}</p>
              <img onClick={() => setOpen(false)} src={exit} alt="close modal" />
            </Subtitle>
          </VerticalModalBody>
        </HorizontalFlex>
      </ModalContainer>
    </Modal>
  );
};

export default ClubBubble;
