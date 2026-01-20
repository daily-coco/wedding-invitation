type mapInfoData = {
  title?: string;
};
import mapNavImg from '/src/assets/images/map/map-inner.jpg';
import { WEDDING_VENUE_INFO } from '../../constants/wedding';
import { Transport } from './Transport';
import { Text } from '../text/Text';

function Map({ title }: mapInfoData) {
  return (
    <section>
      <h1>{title}</h1>
      <div className='map_nav'>
        <img
          src={mapNavImg}
          alt={`${WEDDING_VENUE_INFO.name} 오시는 길 약도`}
        />
      </div>
      <address>{WEDDING_VENUE_INFO.address}</address>
      문의전화 :{' '}
      <a href={`tel:${WEDDING_VENUE_INFO.tel}`}>{WEDDING_VENUE_INFO.tel}</a>
      <a
        href={`${WEDDING_VENUE_INFO.naverMapLink}`}
        target='_blank'
        title='새창열림'
      >
        네이버 지도로 빠른 길찾기
      </a>
      <Transport transportType='car' />
      <Transport transportType='bus' />
      <Transport transportType='metro' />
      <Transport transportType='shuttle' />
      <Text as='p' variant='caption'>
        ※ 주차 공간이 협소합니다.
      </Text>
    </section>
  );
}

export default Map;
