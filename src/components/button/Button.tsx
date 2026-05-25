import styled from 'styled-components';
import type { PropsWithChildren, ButtonHTMLAttributes } from 'react';

const StyleButton = styled.button`
  background: #0070f3;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyleButton {...props}>{children}</StyleButton>;
};
