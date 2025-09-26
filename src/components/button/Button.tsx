import styled from 'styled-components';

const StyleButton = styled.button`
  background: #0070f3;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <StyleButton>{children}</StyleButton>;
};
