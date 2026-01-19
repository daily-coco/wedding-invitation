import styled from 'styled-components';
interface InvitationProps {
  introTitle?: string;
  contents?: string;
}

const Invitation = ({ ...props }: InvitationProps) => {
  return (
    <InvitationWrapper>
      <Intro>{props.introTitle}</Intro>
      <Content>{props.contents}</Content>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.section``;
const Intro = styled.h2``;
const Content = styled.h2``;
