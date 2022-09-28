import styled from 'styled-components'

export const BoardContent = styled.div`
  width: 100%;
  max-width: 864px;
  background: ${props => props.theme.baseProfile};
  margin: -60px auto 0;
  border-radius: 8px;
  padding: 2rem 2.5rem;
  display: flex;
  
  gap: 2rem;

  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    max-width: 9.25rem;
    object-fit: cover;
    max-width: 9.25rem;
  }
`

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    color: ${props => props.theme.baseText};
    line-height: 160%;
  }

`
export const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.baseTitle};
  }

  a {
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  color: ${props => props.theme.baseLabel};

  span {
    color: ${props => props.theme.baseSubtitle};
  }
`

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`