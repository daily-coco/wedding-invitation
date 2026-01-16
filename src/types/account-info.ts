export type Side = 'groom' | 'bride';
export type Role = 'father' | 'mother' | 'self';

export type AccountItem = {
  id: string; // key용 (유니크)
  role: Role; // father | mother | self
  holder: string; // 예금주
  bank: string; // 은행명
  number: string; // 계좌번호(표시/복사)
  note?: string; // 선택: "혼주" 등 추가 문구
  transferUrl?: string; // 선택: 토스/카카오 송금 링크 있으면
};

export type AccountGroup = {
  side: Side;
  label: string; // "신랑측" / "신부측"
  items: AccountItem[];
};

export const ACCOUNT_GROUPS: AccountGroup[] = [
  {
    side: 'groom',
    label: '신랑측',
    items: [
      {
        id: 'g_f',
        role: 'father',
        holder: '홍길동',
        bank: '국민',
        number: '123-45-678901',
      },
      {
        id: 'g_m',
        role: 'mother',
        holder: '김영희',
        bank: '신한',
        number: '110-123-456789',
      },
      {
        id: 'g_s',
        role: 'self',
        holder: '홍신랑',
        bank: '우리',
        number: '1002-123-456789',
      },
    ],
  },
  {
    side: 'bride',
    label: '신부측',
    items: [
      {
        id: 'b_f',
        role: 'father',
        holder: '이몽룡',
        bank: '하나',
        number: '222-33-444444',
      },
      {
        id: 'b_m',
        role: 'mother',
        holder: '성춘향',
        bank: '농협',
        number: '301-12-123456',
      },
      {
        id: 'b_s',
        role: 'self',
        holder: '이신부',
        bank: '카카오뱅크',
        number: '3333-12-1234567',
      },
    ],
  },
];
