// components/Transport.tsx
import type { TransportType } from '../../constants/transport';
import { WEDDING_VENUE_NAV } from '../../constants/transport';

type Props = {
  transportType: TransportType;
};
const LABEL: Record<TransportType, string> = {
  car: '자가용',
  bus: '버스',
  metro: '지하철',
  shuttle: '셔틀버스',
};

export function Transport({ transportType }: Props) {
  const data = WEDDING_VENUE_NAV[transportType];

  // ✅ 데이터 없으면 렌더 자체를 안 함 (이미지 약도로만 오시는 길을 대체하고자 하는 경우 고려)
  if (!data) return null;

  return (
    <section aria-label={`${LABEL[transportType]} 안내`}>
      <h3>{LABEL[transportType]}</h3>

      {/* 단문형 */}
      {/* {'content' in data && <p>{data.contents}</p>} */}
      {data.contents && <p>{data.contents}</p>}

      {/* 리스트형 */}
      {/* {'contentList' in data && ( */}
      {data.contentList && (
        <ul>
          {data.contentList.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.contents}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
