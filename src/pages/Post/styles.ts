import styled from 'styled-components'

export const PostBoard = styled.div`
  width: 100%;
  max-width: 864px;
  background: ${props => props.theme.baseProfile};
  margin: -80px auto 0;
  border-radius: 8px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  
  gap: 0.5rem;
`

export const BoardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  a {
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  
`
export const PostTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 1rem;
  color: ${props => props.theme.baseTitle};
`

export const PostDetails = styled.div`
  display: flex;
  gap: 1.5rem;
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

export const PostContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto 4.5rem;
  padding: 2.5rem 2rem;
`
