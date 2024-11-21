import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import * as S from './OptionContainer.style';
import ArrowDown from '../../../assets/icons/arrowDown.svg?react';
import type { CSSProperties } from 'styled-components';

interface OptionContainerProps {
  title: string;
  width: CSSProperties['width'];
  open?: boolean;
}

const OptionContainer = ({ open = false, title, width, children }: PropsWithChildren<OptionContainerProps>) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggledIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <S.Wrapper $width={width}>
      <S.HeaderButton onClick={toggledIsOpen}>
        {title}
        <S.ArrowContainer $isOpen={isOpen}>
          <ArrowDown width={24} height={24} />
        </S.ArrowContainer>
      </S.HeaderButton>
      <S.ContentWrapper $hidden={!isOpen}>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default OptionContainer;
