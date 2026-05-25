import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

type Typography = typeof theme.typography;
type TypographyGroup = keyof Typography;
type TypographyScale<G extends TypographyGroup> = keyof Typography[G];

export type TypographyVariant = {
  [G in TypographyGroup]: `${G & string}.${TypographyScale<G> & string}`;
}[TypographyGroup];

function getTypographyFromTheme(
  theme: { typography: Typography },
  variant: TypographyVariant
) {
  const [group, scale] = variant.split('.') as [TypographyGroup, string];

  const groupObj = theme.typography[group];
  return groupObj?.[scale as keyof typeof groupObj] ?? null;
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
