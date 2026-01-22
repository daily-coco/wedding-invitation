import {
  InvitationContent,
  InvitationTitle,
  InvitationWrapper,
} from './Invitation.styles.ts';

interface InvitationProps {
  introTitle?: string;
  contents?: string;
}

const Invitation = ({ ...props }: InvitationProps) => {
  return (
    <InvitationWrapper>
      {props.introTitle && (
        <InvitationTitle>{props.introTitle}</InvitationTitle>
      )}
      {props.contents && (
        <InvitationContent>{props.contents}</InvitationContent>
      )}
    </InvitationWrapper>
  );
};

export default Invitation;
