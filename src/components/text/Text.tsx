import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

type Typography = typeof theme.typography;

type TypographyToken = Readonly<{
  fontSize: string;
  fontWeight: number;
  lineHeight: string | number;
}>;

// 현재 Text 컴포넌트는 "text.md", "title.lg", "caption.md" 같은 형식을 사용하므로
// 중첩 구조를 가진 그룹만 variant 대상으로 제한합니다.
type TypographyGroup = 'title' | 'text' | 'caption';
type TypographyScale<G extends TypographyGroup> = keyof Typography[G];

export type TypographyVariant = {
  [G in TypographyGroup]: `${G & string}.${TypographyScale<G> & string}`;
}[TypographyGroup];

function getTypographyFromTheme(
  appTheme: { typography: Typography },
  variant: TypographyVariant
): TypographyToken | null {
  const [group, scale] = variant.split('.') as [TypographyGroup, string];

  const groupObj = appTheme.typography[group] as Readonly<Record<string, TypographyToken>>;

  return groupObj[scale] ?? null;
}

export const Text = styled.span<{ variant?: TypographyVariant }>`
  ${({ variant = 'text.md', theme }) => {
    const typo = getTypographyFromTheme(theme, variant);

    if (!typo) return '';

    return css`
      font-size: ${typo.fontSize};
      font-weight: ${typo.fontWeight};
      line-height: ${typo.lineHeight};
    `;
  }}
`;
