import styled from 'styled-components'
import bg from '../../assets/bg.png'

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.baseProfile};
  padding: 4rem 0 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  height:232px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`