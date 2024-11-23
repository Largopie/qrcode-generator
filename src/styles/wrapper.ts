import type { CSSProperties } from 'styled-components';
import styled, { css } from 'styled-components';

export const FlexRowWrapper = styled.div<{ $gap: CSSProperties['gap'] }>`
  display: flex;
  gap: ${({ $gap }) => $gap};
`;

export const FlexColumnWrapper = styled.div<{ $gap: CSSProperties['gap'] }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  white-space: nowrap;
  border: 0;
`;
