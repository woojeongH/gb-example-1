import styled from "@emotion/styled"
export interface NavigationProps{
  children: React.ReactNode;
}

const Container = styled.ul`
  padding: 50px;
  & li {
    padding: 10px;
  }
`;

const Navigation = ({children}: NavigationProps) => {
  return <Container>
    {children}
  </Container>
}

export default Navigation;