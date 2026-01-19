import styled, { css } from 'styled-components';
import VisualImage from './components/visual/VisualImage';
import Invitation from './components/Invitation/Invitation';
import Hosts from './components/Invitation/Hosts';
import Calendar from './components/calendar/Calendar';

import { WEDDING_INFO, HOSTS_DATA } from './constants/wedding';
import { formatDotYMD } from './utils/date';
import Gallery from './components/gallery/Gallery';
import Map from './components/map/Map';

// effect
import FadeInSection from './components/inview/FadeInSection';
import './styles/fade.css';

// images
import weddingCover from './assets/images/wedding/250925_wedding_1.png';
import AccountInfo from './components/account/AccountInfo';

function App() {
  const weddingDate = new Date(WEDDING_INFO.dateTime);

  return (
    <>
      <Wrapper>
        <FadeInSection>
          <VisualImage
            imageUrl={weddingCover}
            title={WEDDING_INFO.title}
            date={formatDotYMD(weddingDate)}
            place={WEDDING_INFO.place}
          />
        </FadeInSection>
        <FadeInSection>
          <Invitation
            introTitle='초대합니다'
            contents={`소중한 분들을 저희의 특별한 날에 초대합니다.
        두 사람이 걸어온 길, 이제 하나로 이어집니다.
        따뜻한 마음으로 축복해 주신다면, 저희의 시작이 더욱 빛날 것입니다.`}
          />
        </FadeInSection>
        <FadeInSection>
          <Hosts data={HOSTS_DATA} />
        </FadeInSection>
        <FadeInSection>
          <Calendar dateTime={WEDDING_INFO.dateTime} />
        </FadeInSection>
        <FadeInSection>
          <Gallery title={''} />
        </FadeInSection>
        <FadeInSection>
          <Map title={'오시는 길'} />
        </FadeInSection>
        <FadeInSection>
          <AccountInfo />
        </FadeInSection>
      </Wrapper>
    </>
  );
}
export default App;

const Wrapper = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  padding-left: ${({ theme }) => theme.layout.pagePaddingX};
  padding-right: ${({ theme }) => theme.layout.pagePaddingX};
  /* FadeInSection 래퍼 안의 실제 section에 공통 세로 패딩 */
  [data-fade-section] > section {
    padding-top: ${({ theme }) => theme.space[10]};
    padding-bottom: ${({ theme }) => theme.space[10]};
  }
`;
