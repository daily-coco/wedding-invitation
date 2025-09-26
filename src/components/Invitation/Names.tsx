import styled from 'styled-components';
import type { NamesIntroProps } from './Hosts';

const Names = ({ ...props }: NamesIntroProps) => {
  return (
    <FamilyInfo>
      <Parents>
        {props.father}·{props.mother}
      </Parents>
      의 {props?.principalSon}
      <Child>{props.principal}</Child>
    </FamilyInfo>
  );
};

export default Names;
const FamilyInfo = styled.div``;
const Parents = styled.strong``;
const Child = styled.strong`
  display: inline-block;
  margin-left: 4px;
`;
