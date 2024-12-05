import styled from 'styled-components';
import { visuallyHidden } from '../../../../styles/wrapper';
import { colorPalette } from '../../../../styles/colorPalette';

interface ToggleProps {
  isToggle: boolean;
  handleToggle: () => void;
}

export default function Toggle({ isToggle, handleToggle }: ToggleProps) {
  return (
    <label>
      <ToggleContainer $isToggle={isToggle} onClick={handleToggle}>
        <ToggleButton $isToggle={isToggle} />
      </ToggleContainer>
      <ToggleInput type='checkbox' checked={isToggle} />
    </label>
  );
}

const ToggleInput = styled.input`
  ${visuallyHidden}
`;

const ToggleContainer = styled.div<{ $isToggle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 6rem;
  height: 3.2rem;
  padding: 4px;
  cursor: pointer;
  background-color: ${colorPalette.beige};
  border: 2px solid ${({ $isToggle }) => ($isToggle ? `${colorPalette.purple}` : `${colorPalette.darkblue}`)};
  border-radius: 20px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
`;

const ToggleButton = styled.div<{ $isToggle: boolean }>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ $isToggle }) => ($isToggle ? `${colorPalette.purple}` : `${colorPalette.darkblue}`)};
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isToggle }) => ($isToggle ? 'translateX(2.8rem)' : 'translateX(0)')};
`;
