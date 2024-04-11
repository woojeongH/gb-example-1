
export interface NavigationProps{
  children: React.ReactNode;
}

const Navigation = ({children}: NavigationProps) => {
  return <ul>
    {children}
  </ul>
}

export default Navigation;