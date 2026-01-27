import MainLayout from './components/layout/MainLayout/MainLayout';
import VisualImage from './components/visual/VisualImage';
import Invitation from './components/Invitation/Invitation';
import Hosts from './components/Invitation/Hosts';
import Calendar from './components/calendar/Calendar';
import Gallery from './components/gallery/Gallery';
import Map from './components/map/Map';
import AccountInfo from './components/account/AccountInfo';
import { Footer } from './components/layout/Footer';
import Notice from './components/notice/Notice';

// effect
import FadeInSection from './components/inview/FadeInSection';
import './styles/fade.css';

import { formatDotYMD } from './utils/date';

// custom data
import {
  WEDDING_INFO,
  HOSTS_DATA,
  WEDDING_INTRO,
  WEDDING_GALLERY,
  WEDDING_MAP,
  WEDDING_VISUAL_IMAGE,
} from './constants/wedding';
function App() {
  const weddingDate = new Date(WEDDING_INFO.dateTime);

  return (
    <>
      <MainLayout>
        <FadeInSection>
          <VisualImage
            imageUrl={WEDDING_VISUAL_IMAGE.topCover}
            title={WEDDING_INFO.title}
            date={formatDotYMD(weddingDate)}
            place={WEDDING_INFO.place}
          />
        </FadeInSection>
        <FadeInSection>
          <Invitation
            introTitle={WEDDING_INTRO.title}
            contents={WEDDING_INTRO.content}
          />
        </FadeInSection>
        <FadeInSection>
          <Hosts data={HOSTS_DATA} />
        </FadeInSection>
        <FadeInSection>
          <Calendar dateTime={WEDDING_INFO.dateTime} />
        </FadeInSection>
        <FadeInSection>
          <Gallery title={WEDDING_GALLERY.title} />
        </FadeInSection>
        <FadeInSection>
          <Map title={WEDDING_MAP.title} />
        </FadeInSection>
        <FadeInSection>
          <AccountInfo />
        </FadeInSection>
        <FadeInSection>
          <Notice />
        </FadeInSection>
        <Footer />
      </MainLayout>
    </>
  );
}
export default App;
