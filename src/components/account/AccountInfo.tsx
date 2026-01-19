import React from 'react';
import { ACCOUNT_GROUPS } from '../../types/account-info';
import AccountModal from '../modal/AccountModal';

const AccountInfo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <section style={{ padding: '28px 16px' }}>
      <h2 style={{ fontSize: 18, fontWeight: 800 }}>마음 전하는 곳</h2>
      <p style={{ marginTop: 6, fontSize: 13, opacity: 0.75, lineHeight: 1.5 }}>
        참석이 어려우신 분들을 위해 계좌번호를 안내드립니다.
      </p>
      <button
        onClick={() => setOpen(true)}
        style={{
          marginTop: 12,
          width: '100%',
          padding: '14px 12px',
          borderRadius: 14,
          border: '1px solid #111',
          background: '#111',
          color: '#fff',
          fontWeight: 800,
        }}
      >
        계좌번호 확인하기
      </button>
      <AccountModal
        open={open}
        onClose={() => setOpen(false)}
        groups={ACCOUNT_GROUPS}
      />
    </section>
  );
};

export default AccountInfo;
