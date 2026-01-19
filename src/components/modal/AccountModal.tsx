import React, { useEffect } from 'react';
import type { AccountGroup, Side } from '../../types/account-info';

type Props = {
  open: boolean;
  onClose: () => void;
  groups: AccountGroup[];
};

const AccountModal = ({ open, onClose, groups }: Props) => {
  const [side, setSide] = React.useState<Side>('groom'); // 이건 뭐지

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null; // 이건 뭐지?

  const current = groups.find((g) => g.side === side) ?? groups[0];

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='마음 전하는 곳'
      onMouseDown={(e) => {
        // 딤 클릭 시 닫기
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        zIndex: 9999,
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          background: '#fff',
          borderRadius: 16,
          padding: 16,
        }}
      >
        <div
          style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>마음 전하는 곳</div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              축하의 마음을 전해주셔서 감사합니다.
            </div>
          </div>
          <button onClick={onClose} aria-label='닫기'>
            ✕
          </button>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          {groups.map((g) => (
            <button
              key={g.side}
              onClick={() => setSide(g.side)}
              aria-pressed={side === g.side}
              style={{
                flex: 1,
                padding: '10px 12px',
                borderRadius: 12,
                border: '1px solid #ddd',
                fontWeight: 600,
                background: side === g.side ? '#111' : '#fff',
                color: side === g.side ? '#fff' : '#111',
              }}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* 리스트 */}
        <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
          {current?.items.map((item) => (
            <AccountRow
              key={item.id}
              holder={item.holder}
              bank={item.bank}
              number={item.number}
              transferUrl={item.transferUrl}
            />
          ))}
        </div>

        {/* 하단 안내 */}
        <div
          style={{ marginTop: 12, fontSize: 12, opacity: 0.7, lineHeight: 1.4 }}
        >
          계좌번호를 누르거나 “복사” 버튼을 이용해 복사할 수 있어요.
        </div>
      </div>
    </div>
  );
};

function AccountRow(props: {
  holder: string;
  bank: string;
  number: string;
  transferUrl?: string;
}) {
  const { holder, bank, number, transferUrl } = props;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      alert('계좌번호가 복사됐습니다.');
    } catch {
      // 일부 브라우저/환경 대응(fallback)
      const ta = document.createElement('textarea');
      ta.value = number;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      alert('계좌번호가 복사됐어요.');
    }
  };
  return (
    <div
      style={{
        border: '1px solid #eee',
        borderRadius: 14,
        padding: 12,
        display: 'grid',
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ fontWeight: 700 }}>{holder}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{bank}</div>
      </div>

      <button
        onClick={copy}
        style={{
          textAlign: 'left',
          padding: 0,
          background: 'transparent',
          border: 'none',
          fontSize: 14,
          cursor: 'pointer',
        }}
        aria-label={`${holder} 계좌번호 복사`}
      >
        {number}
      </button>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={copy}
          style={{
            flex: 1,
            padding: '10px 12px',
            borderRadius: 12,
            border: '1px solid #ddd',
            background: '#fff',
            fontWeight: 600,
          }}
        >
          복사
        </button>

        {transferUrl ? (
          <a
            href={transferUrl}
            target='_blank'
            rel='noreferrer'
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '10px 12px',
              borderRadius: 12,
              border: '1px solid #111',
              background: '#111',
              color: '#fff',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            송금하기
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default AccountModal;
