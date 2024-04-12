import { useAtomValue } from 'jotai'
import styled from "@emotion/styled"

import MessageContainer from "./MessageContainer.Molecule";
import Message from "./Message.Atom";

import { formAtom } from '@/states/store';

const Container = styled.footer`
  padding: 50px;
`;

const Footer = () => {

  const {a, b} = useAtomValue(formAtom);

  return <Container>
    <div>푸터----------</div>
    <div>푸터는 한 번만 쓰일 것이 확실한 것으로 보고 atomic 디자인 패턴이 아니게 Footer 폴더 안에 모두 담은 상태.</div>
    <div>(atomic 디자인 패턴이라도 재사용 가능성 없는 것들은 함께 있을 수 있음)</div>
    <MessageContainer>
      <Message>{a}</Message>
      <Message>{b}</Message>
    </MessageContainer>
    <div>전혀 다른 위치인 이 곳에서 폼의 값이 공유 됨</div>
  </Container>
}

export default Footer;