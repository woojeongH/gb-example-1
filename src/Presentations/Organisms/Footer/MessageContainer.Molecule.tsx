import { OnlyChildrenProps } from "@/models";


const MessageContainer = ({children}: OnlyChildrenProps) => {
  return <ul>
    {children}
  </ul>
}

export default MessageContainer;