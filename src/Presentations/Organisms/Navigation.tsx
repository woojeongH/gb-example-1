import NavButtonContainer from "@views/Molecules/NavButtonContainer"
import NavButton from "@views/Atoms/NavButton";
import { navigations } from "@/constants/ui";

const Navigation = () => {
  return <nav>
    <NavButtonContainer>
      {navigations.map(row => <NavButton to={row.to}>{row.name}</NavButton>)}
      
    </NavButtonContainer>
    
  </nav>
}

export default Navigation;