import { OnlyChildrenProps } from "@/models";


const Message = ({children}: OnlyChildrenProps) => {
  return <ul>
    {children}
  </ul>
}

export default Message;