import React, { useEffect } from 'react';
import type { AccountGroup, Side } from '../../types/account-info';
import {
  ModalClose,
  ModalFooter,
  ModalHead,
  ModalInner,
  ModalTabBtnWrap,
  ModalTabButton,
  ModalTabContent,
  ModalTitle,
  ModalWrap,
} from './AccountModal.styled';
import { Text } from '../text/Text';
import {
  AccountBackNum,
  AccountBank,
  AccountBankNum,
  AccountCopyWrap,
  AccountHolder,
  AccountPay,
  ModalRow,
  ModalRowItem,
} from '../account/AccountInfo.styled';

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

  if (!open) return null;

  const current = groups.find((g) => g.side === side) ?? groups[0];

  return (
    <ModalWrap
      role='dialog'
      aria-modal='true'
      aria-label='마음 전하는 곳'
      onMouseDown={(e) => {
        // 딤 클릭 시 닫기
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <ModalInner>
        <ModalHead>
          <ModalTitle>
            <Text variant='title.sm'>마음 전하는 곳</Text>
            <Text variant='text.sm'>축하의 마음을 전해주셔서 감사합니다.</Text>
          </ModalTitle>
          <ModalClose onClick={onClose} aria-label='닫기'>
            ✕
          </ModalClose>
        </ModalHead>
        <ModalTabBtnWrap style={{}}>
          {groups.map((g) => (
            <ModalTabButton
              key={g.side}
              onClick={() => setSide(g.side)}
              aria-pressed={side === g.side}
              style={{
                background: side === g.side ? '#111' : '#fff',
                color: side === g.side ? '#fff' : '#111',
              }}
            >
              {g.label}
            </ModalTabButton>
          ))}
        </ModalTabBtnWrap>

        {/* 리스트 */}
        <ModalTabContent>
          {current?.items.map((item) => (
            <AccountRow
              key={item.id}
              holder={item.holder}
              bank={item.bank}
              number={item.number}
              transferUrl={item.transferUrl}
            />
          ))}
        </ModalTabContent>
        <ModalFooter>
          계좌번호를 누르거나 '복사' 버튼을 이용해 복사할 수 있어요.
        </ModalFooter>
      </ModalInner>
    </ModalWrap>
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
    <ModalRow>
      <ModalRowItem>
        <AccountHolder>{holder}</AccountHolder>
        <AccountBank>{bank}</AccountBank>
      </ModalRowItem>

      <AccountBackNum onClick={copy} aria-label={`${holder} 계좌번호 복사`}>
        {number}
      </AccountBackNum>

      <AccountCopyWrap>
        <AccountBankNum onClick={copy}>복사</AccountBankNum>

        {transferUrl ? (
          <AccountPay
            href={transferUrl}
            target='_blank'
            rel='noreferrer'
            style={{}}
          >
            송금하기
          </AccountPay>
        ) : null}
      </AccountCopyWrap>
    </ModalRow>
  );
}

export default AccountModal;
