import styled from 'styled-components';

interface LabelProps {
  id: string;
  description: string;
}

const Label = ({ id, description }: LabelProps) => {
  return <StyledLabel htmlFor={id}>{description}</StyledLabel>;
};

const StyledLabel = styled.label`
  font-size: 2rem;
  font-weight: 600;
`;

export default Label;
