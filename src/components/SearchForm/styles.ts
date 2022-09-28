import styled from 'styled-components'

export const FormContent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.baseInput};
    color: ${(props) => props.theme.baseText};
    /* padding-left: 1rem; */
    border: 1px solid ${(props) => props.theme.baseBorder};
    padding: 13px 1rem;
    &:placeholder {
      color: ${(props) => props.theme.baseLabel};
    }
  }

`
export const FormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${props => props.theme.baseTitle};
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme.baseSpan};
  }
`
