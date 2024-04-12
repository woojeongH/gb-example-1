import styled from "@emotion/styled"

import { OnlyChildrenProps } from "@/models";

const Container = styled.div`
    display: flex;
    gap: 50px;
    flex-direction: row;
`;

const CardContainer = ({children}: OnlyChildrenProps) => {
  return <Container> 
    {children}
  </Container>
}

export default CardContainer;