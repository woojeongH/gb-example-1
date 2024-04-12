import styled from "@emotion/styled"

import { OnlyChildrenProps } from "@/models";
import RenderCount from "./RenderCount";

const Container = styled.div`
  padding: 20px 20px;
`;

const CardFooter = ({children}:OnlyChildrenProps) => {
  
  return <Container>{children}<RenderCount></RenderCount></Container>
}

export default CardFooter;