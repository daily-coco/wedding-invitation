import styled from 'styled-components';
import VisualImage from './components/visual/VisualImage';
import Invitation from './components/Invitation/Invitation';
import Hosts from './components/Invitation/Hosts';
import Calendar from './components/calendar/Calendar';

import { WEDDING_INFO, HOSTS_DATA } from './constants/wedding';
import { formatDotYMD } from './utils/date';
import Gallery from './components/gallery/Gallery';
import Map from './components/map/Map';

// images
import weddingCover from './assets/images/wedding/250925_wedding_1.png';

function App() {
  const weddingDate = new Date(WEDDING_INFO.dateTime);

  return (
    <>
      <Wrapper>
        <VisualImage
          imageUrl={weddingCover}
          title={WEDDING_INFO.title}
          date={formatDotYMD(weddingDate)}
          place={WEDDING_INFO.place}
        />
        <Invitation
          introTitle='초대합니다'
          contents={`소중한 분들을 저희의 특별한 날에 초대합니다.
        두 사람이 걸어온 길, 이제 하나로 이어집니다.
        따뜻한 마음으로 축복해 주신다면, 저희의 시작이 더욱 빛날 것입니다.`}
        />
        <Hosts data={HOSTS_DATA} />
        <Calendar dateTime={WEDDING_INFO.dateTime} />
        <Gallery title={''} />
        <Map title={'오시는 길'} />
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
