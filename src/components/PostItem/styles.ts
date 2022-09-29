import styled from 'styled-components'

export const PostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-radius: 10px;
  background: ${props => props.theme.basePost};
  padding: 2rem;

  p {
    color: ${props => props.theme.baseText};
    line-height: 160%;
  }
`

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;

  

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.baseTitle};
  }

  span {
    color: ${props => props.theme.baseSpan};
    font-size: 0.875rem;
    flex-basis: 30%;
    text-align: right;
  }
`