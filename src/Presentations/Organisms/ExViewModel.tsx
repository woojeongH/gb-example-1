import styled from "@emotion/styled"
import {useAtomValue, useSetAtom } from 'jotai'

import CardContainer from "@views/Molecules/CardContainer";
import Card from "@views/Molecules/Card";
import ExButton from "@views/Atoms/ExButton";
import {aAtom, bAtom} from "@/states/store"
import RenderCount from "@views/Atoms/RenderCount";


const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Acase = () => {
  const setA = useSetAtom(aAtom);
  const handleClick = () => {
    console.log("A");
    setA(v => v + 1)
  }
  return <>
    <ExButton onClick={handleClick}>A 버튼</ExButton>
  </>
};

const Bcase = () => {
  const setB = useSetAtom(bAtom);
  const handleClick = () => {
    console.log("B");
    setB(v => v + 1)
  }
  return <>
    <ExButton onClick={handleClick}>B 버튼</ExButton>
  </>
};

const ChildA = () => {
  const a = useAtomValue(aAtom)
  return <>
    <div>a : {a}</div>
    <div><RenderCount></RenderCount></div>
  </>
};

const ChildB = () => {
  const b = useAtomValue(bAtom)
  return <>
  <div>b : {b}</div>
  <div><RenderCount></RenderCount></div>
  </>
};

const ChildAB = () => {
  const a = useAtomValue(aAtom)
  const b = useAtomValue(bAtom)
  return <>
  <div>a : {a}, b : {b}</div>
  <div><RenderCount></RenderCount></div>
  </>
};


const ExViewModel = () => {

  const row1:any = [
    {
      title: "A Case title",
      color: "blue",
      children: <Acase />
    },
    {
      title: "B Case title",
      color: "red",
      children: <Bcase />
    }
  ];
  const row2:any = [
    {
      title: "A",
      color: "blue",
      children: <ChildA />
    },
    {
      title: "A",
      color: "blue",
      children: <ChildA />
    },
    {
      title: "A + B",
      color: "purple",
      children: <ChildAB />
    },
    {
      title: "B",
      color: "red",
      children: <ChildB />
    },
    {
      title: "B",
      color: "red",
      children: <ChildB />
    }
  ];

  return <Container>
    <CardContainer>
      {row1.map((data:any, index:number) => <Card key={index} color={data.color} title={data.title} >{data.children}</Card>)}
    </CardContainer>
    <CardContainer>
      {row2.map((data:any, index:number) => <Card key={index} color={data.color} title={data.title} >{data.children}</Card>)}
    </CardContainer>
  </Container>
  
  
};


export default ExViewModel;