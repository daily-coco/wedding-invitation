import { HostWrap } from './Invitation.styles';
import Names from './Names';

export interface NamesIntroProps {
  father?: string;
  mother?: string;
  principal?: string;
  principalSon?: string;
  principalType?: string;
}

const Hosts = ({ data }: { data: NamesIntroProps[] }) => {
  return (
    <HostWrap>
      {data.map((host, idx) => (
        <Names
          key={idx}
          father={host?.father}
          mother={host?.mother}
          principalSon={host?.principalSon}
          principalType={host?.principalType}
          principal={host?.principal}
        />
      ))}
    </HostWrap>
  );
};

export default Hosts;
