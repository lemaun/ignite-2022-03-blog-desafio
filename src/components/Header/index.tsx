import { HeaderContainer, HeaderContent } from './styles'

import logo from '../../assets/logo.svg'
import bg1 from '../../assets/bg-1.svg'
import bg2 from '../../assets/bg-2.svg'


export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        
        <img src={logo} alt="" />
        
      </HeaderContent>
    </HeaderContainer>
  )
}
