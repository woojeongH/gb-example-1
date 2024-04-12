interface ExButtonProps{
  children: React.ReactNode;
  onClick():void;
}
const ExButton = ({children, onClick}: ExButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}


export default ExButton;