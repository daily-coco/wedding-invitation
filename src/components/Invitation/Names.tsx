import type { NamesIntroProps } from './Hosts';
import { Child, FamilyInfo, Parents } from './Invitation.styles';

const Names = ({ ...props }: NamesIntroProps) => {
  return (
    <FamilyInfo>
      <Parents>
        {props?.father}
        {props?.father && props?.mother ? '·' : ''}
        {props?.mother}
      </Parents>
      의 {props?.principalSon}
      <Child>{props.principal}</Child>
    </FamilyInfo>
  );
};

export default Names;
