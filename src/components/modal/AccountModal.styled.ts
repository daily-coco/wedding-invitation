import styled from 'styled-components';

export const ModalWrap = styled.div`
  z-index: ${({ theme }) => theme.zIndex.modal};
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.modal.backgroundColor};
`;

export const ModalInner = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 420px;
  border-radius: 1rem;
  background: #fff;
`;
export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12;
`;
export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ModalClose = styled.button``;
export const ModalTabBtnWrap = styled.div`
  display: flex;
  gap: 8;
  margin-top: 1rem;
`;
export const ModalTabButton = styled.button`
  flex: 1;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
`;

export const ModalTabContent = styled.div`
  display: grid;
  gap: 10;
  margin-top: 12px;
`;

export const ModalFooter = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: #666;
  line-height: 1.4;
`;
