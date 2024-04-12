import styled from "@emotion/styled"

interface CardHeaderProps {
  children: React.ReactNode,
  color: string;
}

const Container = styled.div<any>`
  padding: 20px 20px;
  color: ${({color}) => color};
`;

const CardHeader = ({children, color}:CardHeaderProps) => {
  return <Container color={color}>
    <h3>{children}</h3>
  </Container>
}

export default CardHeader;