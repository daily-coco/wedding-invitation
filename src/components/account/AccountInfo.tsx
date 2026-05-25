import React from 'react';
import { ACCOUNT_GROUPS } from '../../types/account-info';
import AccountModal from '../modal/AccountModal';
import {
  AccountInfoButton,
  AccountInfoNotice,
  AccountInfoTitle,
  AccountInfoWrap,
} from './AccountInfo.styled';

const AccountInfo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AccountInfoWrap style={{ padding: '28px 16px' }}>
      <AccountInfoTitle>마음 전하는 곳</AccountInfoTitle>
      <AccountInfoNotice>
        참석이 어려우신 분들을 위해 계좌번호를 안내드립니다.
      </AccountInfoNotice>
      <AccountInfoButton onClick={() => setOpen(true)}>
        계좌번호 확인하기
      </AccountInfoButton>
      <AccountModal
        open={open}
        onClose={() => setOpen(false)}
        groups={ACCOUNT_GROUPS}
      />
    </AccountInfoWrap>
  );
};

export default AccountInfo;
