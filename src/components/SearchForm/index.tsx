import { FormContent, FormTitle } from "./styles";

export function SearchForm() {
  return (
    <FormContent>
      <FormTitle>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </FormTitle>
      <input type="text" placeholder="Buscar conteúdo" />
    </FormContent>
  )
}