import styled from 'styled-components';
import VisualImage from './components/visual/VisualImage';
import Invitation from './components/Invitation/Invitation';
import Hosts from './components/Invitation/Hosts';

const hostsData = [
  {
    father: '홍길동',
    mother: '이효자',
    principal: '홍규석',
    principalSon: '장남',
  },
  {
    father: '고길동',
    mother: '김윤자',
    principal: '고지윤',
    principalSon: '차녀',
  },
];
function App() {
  return (
    <>
      <Wrapper>
        <VisualImage
          imageUrl={'/images/250925_wedding_ai1.png'}
          title={'저희 결혼합니다.'}
          date={'2027.4.13'}
          place={'한옥마을 야외 예식홀'}
        />
        <Invitation
          introTitle='초대합니다'
          contents={`소중한 분들을 저희의 특별한 날에 초대합니다.
        두 사람이 걸어온 길, 이제 하나로 이어집니다.
        따뜻한 마음으로 축복해 주신다면, 저희의 시작이 더욱 빛날 것입니다.`}
        />
        <Hosts data={hostsData} />
      </Wrapper>
    </>
  );
}
export default App;

const Wrapper = styled.main`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;
