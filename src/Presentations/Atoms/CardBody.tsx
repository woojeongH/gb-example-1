import styled from "@emotion/styled"

import { OnlyChildrenProps } from "@/models";

const Container = styled.div`
  flex: 1;
`;

const CardBody = ({children}:OnlyChildrenProps) => {
  

  return <Container>
    {children}
  </Container>
}

export default CardBody;