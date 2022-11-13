import React from 'react';
import {
  AreaOfStudyButton,
  AreaOfStudyTag,
  ModalContentQuestion,
  ModalContentResponse,
} from '../AreasOfStudyStyles';
import { Filters } from '../../constants/filter-criteria';
import { Major } from '../../../../server/src/types';
import { Modal } from 'semantic-ui-react';
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  Title,
  Subtitle,
  Exit,
} from '../../components/ModalStyles';
import { TagsContainer, Tag } from '../../components/DashboardElementStyles';
import { colors } from '../../constants/colors';
import { HorizontalFlex } from '../../components/ContainerStyles';

const AreaOfStudyModal = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const areaOfStudyButton = (
    <AreaOfStudyButton key={props.study.content.title}>
      <h1>{props.study.content.title}</h1>
      <AreaOfStudyTag>{props.study.content.school + '. '}</AreaOfStudyTag>
      {props.study.content.designAreas.map((area) =>
        area === '' ? null : <AreaOfStudyTag>{area + '. '}</AreaOfStudyTag>
      )}
    </AreaOfStudyButton>
  );

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={areaOfStudyButton}
      style={{ width: '699px', height: '523px', borderRadius: '10px' }}
    >
      <ModalContainer>
        <ModalHeader color={colors.green}>
          <HorizontalFlex>
            <Title>{props.study.title}</Title>
            <Exit onClick={() => setOpen(false)} />
          </HorizontalFlex>
          <Subtitle>
            <p style={{ color: 'white' }}>{props.study.content.type}</p>
          </Subtitle>
          <TagsContainer>
            {props.study.content.designAreas.map((area) =>
              area === '' ? null : <Tag>{area}</Tag>
            )}
            <Tag>{props.study.content.school}</Tag>
          </TagsContainer>
        </ModalHeader>
        <ModalContent>
          <ModalContentQuestion>
            <span>why did you choose&nbsp;</span>
            <span style={{ color: colors.green }}>{props.study.title}</span>
            <span>?</span>
          </ModalContentQuestion>
          <ModalContentResponse>
            {props.study.content.reasons.map((reason) =>
              reason.response === undefined ? null : (
                <div key={reason.firstName + reason.gradYear}>{reason.response}</div>
              )
            )}
          </ModalContentResponse>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

type Props = {
  study: Major;
  designAreaTags: Filters;
  schoolTags: Filters;
};

export default AreaOfStudyModal;
