export type TransportType = 'car' | 'bus' | 'metro' | 'shuttle';

export type TransportContentItem = {
  title: string;
  contents: string;
};

export type TransportData = {
  contentList?: TransportContentItem[];
  contents?: string;
};
//   | {
//       // 리스트형 (car, metro 등)
//       contentList: TransportContentItem[];
//       contents?: never;
//     }
//   | {
//       // 단문형 (bus 등)
//       contents: string;
//       contentList?: never;
//     };
// ✅ 핵심: 객체 형태
export const WEDDING_VENUE_NAV: Partial<Record<TransportType, TransportData>> =
  {
    car: {
      contentList: [
        {
          title: '광화문에서 오시는 경우',
          contents:
            '광화문에서 안국동 방향으로 오다가 첫번째 교차로에서 좌회전 → 삼청동 골목 (갤러리 많은 건물 혹은 경복궁 동문쪽)- 양갈래 길에서 우회전 → 총리공관방향으로 계속 직진하면 "삼청터널" 이정표 보임 → 이정표 따라 계속 직진하여 산길 따라 올라오면 삼청 터널 지나서 바로 왼편 (비보호 좌회전)',
        },
        {
          title: '한성대 입구에서 오시는 경우',
          contents:
            '성신여대 방향에서 한성대 입구까지 와서 성북동 올라가는 골목으로 우회전 → 계속 직진하다보면 삼청터널 이정표 보임 → 가파른 골목 끝에 삼거리에서 좌회전 → 삼청터널 직진 직전 오른쪽(우회전)',
        },
        {
          title: '혜화동에서 오시는 경우',
          contents:
            '혜화동 로터리에서 SK주유소 골목으로 진입하여 성북동 방향으로 올라옴 → 계속 직진하다보면 삼청터널 이정표 보임 → 가파른 골목 끝에 삼거리에서 좌회전 → 삼청터널 직전 우회전',
        },
        {
          title: '북악 스카이 웨이에서 오시는 경우',
          contents:
            '북악스카이웨이(팔각정)에서 직진 → 북악 골프연습장 가기 전 첫번째 갈래길에서 우회전(삼청터널, 삼청각 방향) → 삼거리에서 2시방향 (직진+우측) → 직진 후 성북동길 1시방향으로 계속 직진 → 삼청터널 직전 우회전',
        },
      ],
    },

    bus: {
      contents:
        '해당 웨딩홀은 버스로 오시기 어렵습니다. 자가용 및 셔틀버스 이용을 추천드립니다.',
    },

    metro: {
      contentList: [
        {
          title: '3호선',
          contents: '3호선 안국역 5번 출구 앞 삼청각 셔틀버스 이용',
        },
        {
          title: '4호선',
          contents: '한성대입구역 6번 5번 출구 앞 삼청각 셔틀버스 이용',
        },
      ],
    },

    // shuttle: 없음 → 정의 안 하면 자동 skip
  };
