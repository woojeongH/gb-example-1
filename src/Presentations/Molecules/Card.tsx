import styled from "@emotion/styled"
import CardHeader from "@views/Atoms/CardHeader";
import CardBody from "@views/Atoms/CardBody";
import CardFooter from "@views/Atoms/CardFooter";

export interface CardProps {
  title: string;
  children: React.ReactNode;
  color: string;
}

const Container = styled.div`
    min-width: 300px;
    min-height: 300px;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow:  -20px 20px 60px #bebebe, 20px -20px 60px #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Card = ({title, color, children}:CardProps) => {
  return <Container> 
    <CardHeader color={color}>{title}</CardHeader>
    <CardBody>{children}</CardBody>
    <CardFooter>푸터</CardFooter>
  </Container>
}

export default Card;