type mapInfoData = {
  title?: string;
};

import { WEDDING_MAP, WEDDING_VENUE_INFO } from '../../constants/wedding';
import { Transport } from './Transport';
import { Text } from '../text/Text';
import {
  MapImg,
  MapImgWrap,
  MapTitle,
  MapWrapper,
  VenueAddress,
  VenueTel,
} from './map.styled';

function Map({ title }: mapInfoData) {
  return (
    <MapWrapper>
      {title && <MapTitle>{title}</MapTitle>}
      <MapImgWrap>
        <MapImg
          src={WEDDING_MAP.mapImg}
          alt={`${WEDDING_VENUE_INFO.name} 오시는 길 약도`}
        />
      </MapImgWrap>
      <VenueAddress>{WEDDING_VENUE_INFO?.address}</VenueAddress>
      <VenueTel>
        문의전화 :
        <a href={`tel:${WEDDING_VENUE_INFO.tel}`} title='웨딩홀로 전화걸기'>
          {WEDDING_VENUE_INFO.tel}
        </a>
      </VenueTel>
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
      <Text as='p' variant='text.sm'>
        ※ 주차 공간이 협소합니다.
      </Text>
    </MapWrapper>
  );
}

export default Map;
